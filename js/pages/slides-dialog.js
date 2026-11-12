/*
 * slides-dialog.js – de pop-up 'Dia's toevoegen' van een college.
 *
 * Op Home heeft elk college de knop 'Dia's toevoegen'. Die opent deze pop-up, waarin je
 * de PDF van de diavoorstelling kiest. Daarna opent de verwijzing bij een vraag
 * ('Zie: ... dia 21') die PDF op de juiste dia.
 * Het bewaren en openen zelf staat in js/slides.js.
 *
 * De pop-up is een <dialog>: een element van de browser dat zelf over de pagina heen komt,
 * de rest van de pagina tijdelijk uitschakelt en sluit met Escape.
 */

'use strict';

/** De knop op de kaart van een college. Is er al een PDF toegevoegd, dan staat er een vinkje achter. */
function slidesButton(college) {
  const linked = slides[college.id];
  return button(
    linked ? "Dia's toevoegen ✓" : "Dia's toevoegen",
    () => openSlidesDialog(college),
    '',
    {
      title: linked ? `Toegevoegd: ${linked.name}` : 'De diavoorstelling van dit college toevoegen',
    },
  );
}

/** Opent de pop-up voor één college. */
function openSlidesDialog(college) {
  const linked = slides[college.id];
  const dialog = h('dialog', { class: 'dialog', 'aria-labelledby': 'slides-title' });

  /** Sluit de pop-up en tekent de pagina opnieuw (zo klopt het vinkje op de knop). */
  function closeAndRender() {
    dialog.close();
    render();
  }

  /** Bewaart het gekozen bestand. Is het geen PDF of lukt bewaren niet, dan komt er een melding. */
  function use(file) {
    if (!file) {
      return;
    }
    const isPdf = file.type === 'application/pdf' || /\.pdf$/i.test(file.name);
    if (!isPdf) {
      message.textContent = 'Dit is geen PDF-bestand. Kies de diavoorstelling als PDF.';
      message.hidden = false;
      return;
    }
    saveSlides(college.id, file).then(closeAndRender, () => {
      message.textContent =
        'De PDF kan niet bewaard worden in deze browser (bijvoorbeeld in een privévenster).';
      message.hidden = false;
    });
  }

  /** Haalt de PDF van dit college weg. */
  function remove() {
    removeSlides(college.id).then(closeAndRender, closeAndRender);
  }

  // De bestandskiezer is onzichtbaar; een klik op het vak opent hem.
  const filePicker = h('input', {
    type: 'file',
    accept: '.pdf,application/pdf',
    hidden: true,
    onchange: (event) => use(event.target.files[0]),
  });

  // Het vak waar je de PDF in sleept, of waar je op klikt om een bestand te kiezen.
  const dropZone = h(
    'button',
    { class: 'dropzone', type: 'button', onclick: () => filePicker.click() },
    h('b', {}, linked ? 'Sleep een nieuwe PDF hierheen' : 'Sleep de PDF hierheen'),
    h('span', { class: 'muted small' }, 'of klik om een bestand te kiezen'),
  );
  dropZone.addEventListener('dragover', (event) => {
    event.preventDefault(); // zonder dit staat de browser loslaten niet toe
    dropZone.classList.add('over');
  });
  dropZone.addEventListener('dragleave', () => dropZone.classList.remove('over'));
  dropZone.addEventListener('drop', (event) => {
    event.preventDefault(); // anders opent de browser de PDF zelf
    dropZone.classList.remove('over');
    use(event.dataTransfer.files[0]);
  });

  // Staat er al een bestand? Dan zegt de pop-up dat, en vraagt of je een nieuw bestand wilt.
  let current = null;
  if (linked) {
    current = h(
      'p',
      { class: 'note' },
      'Er is al een bestand toegevoegd: ',
      h('b', {}, linked.name),
      '. Wil je een ander bestand gebruiken? Kies dan hieronder een nieuwe PDF; die vervangt het oude bestand.',
    );
  }

  // Een melding als er iets misgaat (eerst onzichtbaar).
  const message = h('p', { class: 'warn', hidden: true, role: 'alert' });

  add(
    dialog,
    h('h3', { id: 'slides-title' }, `Dia's toevoegen · ${college.title}`),
    h(
      'p',
      {},
      "Bij elke vraag staat na het antwoorden een verwijzing naar een dia, bijvoorbeeld 'Zie: week 1, college 1, dia 14'. Voeg je hier de dia's van dit college toe (als PDF), dan kun je op het dianummer klikken en opent de diavoorstelling meteen op die dia.",
    ),
    h(
      'p',
      { class: 'muted' },
      'De PDF wordt alleen in deze browser bewaard: hij komt niet op internet en zit niet in je back-up. Op een ander apparaat voeg je hem opnieuw toe.',
    ),
    current,
    dropZone,
    filePicker,
    message,
    h(
      'div',
      { class: 'btns between' },
      linked ? button('Bestand weghalen', remove, 'bad') : h('span'),
      button('Sluiten', () => dialog.close()),
    ),
  );

  // Na het sluiten (ook met Escape) is de pop-up niet meer nodig: haal hem uit de pagina.
  dialog.addEventListener('close', () => dialog.remove());
  document.body.append(dialog);
  dialog.showModal();
}
