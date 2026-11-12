/*
 * backup.js – het blok Back-up onderaan de pagina Home.
 *
 * Je voortgang staat alleen in deze browser. Met een back-up sla je hem op als bestand
 * en kun je hem later (of op een ander apparaat) weer inladen.
 *
 * Het back-upbestand ziet er zo uit:
 *   { app: 'klankleer', version: 1, saved: <datum en tijd>, data: <de hele state> }
 */

'use strict';

/** Zoveel milliseconden zitten er in een dag. */
const DAY = 24 * 60 * 60 * 1000;

/** Na zoveel dagen zonder back-up komt er een herinnering. */
const BACKUP_REMINDER_DAYS = 7;

/** Maakt het blok Back-up. */
function backupCard() {
  const hasProgress = Object.keys(state.book).length > 0;

  // Hoeveel dagen geleden was de laatste back-up? null = nog nooit.
  let daysAgo = null;
  if (state.lastBackup) {
    daysAgo = Math.floor((Date.now() - state.lastBackup) / DAY);
  }

  /** Slaat de voortgang op als bestand in de map Downloads. */
  function download() {
    state.lastBackup = Date.now();
    save();
    const backup = {
      app: 'klankleer',
      version: 1,
      saved: new Date().toISOString(),
      data: state,
    };
    const text = JSON.stringify(backup, null, 1);
    const today = new Date().toISOString().slice(0, 10);
    const fileName = `klankleer-voortgang-${today}.json`;
    // In de Android-app kan de pagina zelf niets downloaden: daar slaat de app het bestand op.
    if (window.KlankleerApp && window.KlankleerApp.saveFile) {
      window.KlankleerApp.saveFile(fileName, text);
      render();
      return;
    }
    const blob = new Blob([text], { type: 'application/json' });
    // Een bestand downloaden gaat via een (onzichtbare) link waar we zelf op klikken.
    const link = h('a', {
      href: URL.createObjectURL(blob),
      download: fileName,
    });
    document.body.append(link);
    link.click();
    link.remove();
    render();
  }

  /** Leest een gekozen back-upbestand en zet die voortgang terug (na een bevestiging). */
  function restore(event) {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    file.text().then((text) => {
      let backup;
      try {
        backup = JSON.parse(text);
      } catch (error) {
        alert('Dit bestand kan ik niet lezen.');
        return;
      }
      if (!backup || backup.app !== 'klankleer' || !backup.data || !backup.data.book) {
        alert('Dit is geen back-up van deze oefensite.');
        return;
      }
      const savedAt = new Date(backup.saved).toLocaleString('nl-NL');
      const question = `Je huidige voortgang in deze browser wordt vervangen door de back-up van ${savedAt}. Doorgaan?`;
      if (!confirm(question)) {
        return;
      }
      replaceState(backup.data);
      stopReview();
      render();
    });
  }

  /** Wist alle voortgang (na een bevestiging). */
  function wipe() {
    const question =
      'Alle voortgang in deze browser wissen? Dit kan niet ongedaan worden (behalve met een back-up).';
    if (!confirm(question)) {
      return;
    }
    replaceState();
    stopReview();
    render();
  }

  // De bestandskiezer is onzichtbaar; de knop 'Back-up inladen' opent hem.
  const filePicker = h('input', {
    type: 'file',
    accept: '.json,application/json',
    hidden: true,
    onchange: restore,
  });

  // Een herinnering als er wel voortgang is, maar geen (recente) back-up.
  let reminder = null;
  if (hasProgress && (daysAgo == null || daysAgo >= BACKUP_REMINDER_DAYS)) {
    const text =
      daysAgo == null
        ? 'Je hebt nog geen back-up gemaakt.'
        : `Je laatste back-up is ${daysAgo} dagen oud.`;
    reminder = h('p', { class: 'warn' }, text);
  }

  return h(
    'div',
    { class: 'card' },
    h('h3', {}, 'Back-up'),
    h(
      'p',
      { class: 'muted' },
      'Je voortgang wordt alleen in deze browser bewaard. Wis je je browsergegevens of wissel je van computer, dan ben je hem kwijt. Sla daarom af en toe een back-up op en laad die later weer in.',
    ),
    reminder,
    h(
      'div',
      { class: 'btns' },
      button('Voortgang opslaan als bestand', download, 'primary', { disabled: !hasProgress }),
      button('Back-up inladen', () => filePicker.click()),
      filePicker,
      button('Alles wissen', wipe, 'bad'),
    ),
  );
}
