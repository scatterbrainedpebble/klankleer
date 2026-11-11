/*
 * colleges.js – de colleges en hun vragen, klaar om op te zoeken.
 *
 * De vragen zelf staan in data.js. Hier maken we er handige lijsten van,
 * zodat de rest van de site snel een college of een vraag kan vinden.
 */

'use strict';

/**
 * Alle colleges, in de volgorde van de cursus.
 * Een college heeft: id ('c1'), title, sub (ondertitel), week en items (de vragen).
 */
const COLLEGES = DATA.colleges;

/** Alle vragen van alle colleges achter elkaar. Elke vraag onthoudt hier ook bij welk college hij hoort. */
const ALL = COLLEGES.flatMap((college) =>
  college.items.map((item) => Object.assign(item, { college: college.id })),
);

/** Een vraag opzoeken met zijn code: byCode['KLC1D14V1']. */
const byCode = Object.fromEntries(ALL.map((item) => [item.code, item]));

/** Een college opzoeken met zijn id: colById['c1']. */
const colById = Object.fromEntries(COLLEGES.map((college) => [college.id, college]));

/**
 * De vaste volgorde van de onderwerpen op de pagina's Voortgang en Overzicht.
 * Een onderwerp dat hier niet in staat, komt achteraan.
 */
const CAT_ORDER = [
  'Fonetiek',
  'Systemen',
  'Spraakorganen',
  'Luchtstroom',
  'Stem',
  'Classificatie',
  'Plaats',
  'Wijze',
  'Articulatoren',
  'Vocalen',
  'Diftongen',
  'IPA',
  'Processen',
];

/** Geeft de onderwerpen (item.cat) die in een lijst vragen voorkomen, in de vaste volgorde. */
function catsOf(items) {
  const seen = [...new Set(items.map((item) => item.cat))];

  function rank(cat) {
    if (CAT_ORDER.includes(cat)) {
      return CAT_ORDER.indexOf(cat);
    }
    return 99 + seen.indexOf(cat);
  }

  return seen.sort((a, b) => rank(a) - rank(b));
}
