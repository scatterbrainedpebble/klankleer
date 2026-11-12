/*
 * home.js – de pagina Home (adres: #/).
 *
 * Bovenaan je totale voortgang, daaronder één kaart per college, en onderaan
 * het blok Back-up (zie backup.js). Elke collegekaart heeft ook de knop
 * 'Dia's toevoegen' (zie slides-dialog.js).
 */

'use strict';

/** Tekent de pagina Home. */
function renderHome(page) {
  const total = counts(ALL);

  add(
    page,
    h(
      'div',
      { class: 'card' },
      h('h2', {}, 'Je voortgang'),
      statBoxes(total),
      progressBar(total),
      legend(),
      h(
        'div',
        { class: 'btns' },
        button('Review', () => go('#/review'), 'primary'),
        button('Overzicht per onderwerp', () => go('#/overzicht')),
      ),
    ),
  );

  const grid = h('div', { class: 'grid' });
  for (const college of COLLEGES) {
    grid.append(collegeCard(college));
  }
  add(page, grid, backupCard());
}

/** De kaart van één college: titel, voortgang en de knoppen om te oefenen. */
function collegeCard(college) {
  const tally = counts(college.items);
  const done = roundIsDone(college);
  const hasStarted = started(college);
  const earlierRounds = roundsOf(college).length;

  function startNewRound() {
    go(`#/${college.id}/nieuwe-ronde`);
  }

  // Bovenaan: de week, en vanaf de tweede ronde ook het nummer van de ronde.
  const weekLine = college.week + (earlierRounds ? ` · ronde ${earlierRounds + 1}` : '');

  // De blauwe knop: verder oefenen, of een nieuwe ronde als deze ronde af is.
  let mainButton;
  if (done) {
    mainButton = button('Nieuwe ronde', startNewRound, 'primary');
  } else {
    const label = hasStarted ? 'Verder oefenen' : 'Oefenen';
    mainButton = button(label, () => go(`#/${college.id}/oefenen`), 'primary');
  }

  // Zolang de ronde niet af is, staat 'Nieuwe ronde' er als gewone knop bij.
  let newRoundButton = null;
  if (!done) {
    newRoundButton = button('Nieuwe ronde', startNewRound, '', {
      disabled: !hasStarted,
      title: 'Oefenen van dit college opnieuw beginnen',
    });
  }

  return h(
    'div',
    { class: 'card col' },
    h('div', { class: 'muted small' }, weekLine),
    h('h3', {}, college.title),
    h('p', { class: 'muted' }, college.sub),
    progressBar(tally),
    h('div', { class: 'nums' }, `${numsText(tally)} · ${tally.n} vragen`),
    done ? h('div', { class: 'small done' }, '✓ Ronde afgerond') : null,
    h(
      'div',
      { class: 'btns' },
      mainButton,
      button('Voortgang', () => go(`#/${college.id}/voortgang`)),
      newRoundButton,
      slidesButton(college),
    ),
  );
}
