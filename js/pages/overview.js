/*
 * overview.js – de pagina Overzicht (adres: #/overzicht).
 *
 * Alle onderwerpen van alle colleges als gekleurde tegels. De kleur laat zien
 * hoe goed een onderwerp gaat. Een klik op een tegel opent dat onderwerp op
 * de pagina Voortgang van het college.
 */

'use strict';

/** Kiest de kleur van een tegel: 'todo' (nog niet begonnen), 'hi', 'mid' of 'lo'. */
function level(tally) {
  if (tally.good + tally.bad === 0) {
    return 'todo';
  }
  const shareGood = tally.good / tally.n;
  if (shareGood >= 0.8) {
    return 'hi';
  }
  if (shareGood >= 0.4) {
    return 'mid';
  }
  return 'lo';
}

/** Tekent de pagina Overzicht. */
function renderOverview(page) {
  add(
    page,
    h(
      'div',
      { class: 'card' },
      h('h2', {}, 'Overzicht per onderwerp'),
      h(
        'p',
        { class: 'muted' },
        'Elk vak is een onderwerp. Het percentage is hoeveel vragen je goed had (laatste poging). Klik op een vak om de vragen te zien.',
      ),
      h(
        'div',
        { class: 'legend' },
        h('span', { style: '--c:var(--hi)' }, '80% of meer'),
        h('span', { style: '--c:var(--mid)' }, '40–80%'),
        h('span', { style: '--c:var(--lo)' }, 'minder dan 40%'),
        h('span', { style: '--c:var(--line)' }, 'nog niet begonnen'),
      ),
    ),
  );

  for (const college of COLLEGES) {
    const tiles = h('div', { class: 'tiles' });
    for (const cat of catsOf(college.items)) {
      tiles.append(topicTile(college, cat));
    }
    add(page, h('div', { class: 'card' }, h('h3', {}, college.title + ' · ' + college.sub), tiles));
  }
}

/** De tegel van één onderwerp (cat) binnen een college. */
function topicTile(college, cat) {
  const tally = counts(college.items.filter((item) => item.cat === cat));

  function openTopic() {
    categoryToOpen = cat; // de pagina Voortgang klapt dit onderwerp meteen open (zie progress.js)
    go(`#/${college.id}/voortgang`);
  }

  return h(
    'button',
    { class: 'tile ' + level(tally), onclick: openTopic },
    h('b', {}, cat),
    h('span', { class: 'big' }, pct(tally.good, tally.n)),
    h('span', { class: 'small' }, `${tally.good + tally.bad}/${tally.n} gedaan`),
    h('span', { class: 'go', 'aria-hidden': 'true' }, '→'),
  );
}
