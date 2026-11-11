/*
 * checking.js – getypte antwoorden nakijken.
 *
 * Bij invulvragen mag je een tikfout maken, en een andere vorm van hetzelfde woord
 * telt ook goed (glottale = glottaal). Maar een ándere vakterm is geen tikfout:
 * 'farynx' is niet goed als het antwoord 'larynx' is, ook al scheelt het maar één letter.
 *
 * IPA-antwoorden worden wel precies nagekeken (zie ipaNorm onderaan).
 */

'use strict';

/* ---------- invulvragen ---------- */

/**
 * Maakt tekst vergelijkbaar: kleine letters, alle soorten streepjes gelijk,
 * geen leestekens aan het eind en geen dubbele spaties.
 */
function norm(text) {
  return text
    .toLowerCase()
    .normalize('NFC')
    .replace(/[‐-—]/g, '-')
    .replace(/[.,;:!?]+$/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Telt hoeveel tikfouten er tussen twee woorden zitten (de Levenshtein-afstand):
 * het kleinste aantal letters dat je moet weghalen, toevoegen of vervangen
 * om van het ene woord het andere te maken.
 */
function editDistance(a, b) {
  // table[i][j] = de afstand tussen de eerste i letters van a en de eerste j letters van b
  const table = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 1; j <= b.length; j++) {
    table[0][j] = j;
  }
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const sameLetter = a[i - 1] === b[j - 1];
      table[i][j] = Math.min(
        table[i - 1][j] + 1, // een letter weghalen
        table[i][j - 1] + 1, // een letter toevoegen
        table[i - 1][j - 1] + (sameLetter ? 0 : 1), // een letter vervangen
      );
    }
  }
  return table[a.length][b.length];
}

/** Vaktermen die op elkaar lijken. Deze tellen nooit als tikfout van een andere vakterm. */
const EXTRA_TERMS = [
  'larynx',
  'farynx',
  'laryngaal',
  'faryngaal',
  'glottis',
  'epiglottis',
  'glottaal',
  'glottalisch',
  'velum',
  'velaar',
  'velair',
  'uvula',
  'uvulair',
  'palatum',
  'palataal',
  'alveolair',
  'postalveolair',
  'dentaal',
  'labiaal',
  'labiodentaal',
  'bilabiaal',
  'retroflex',
  'stemhebbend',
  'stemloos',
  'ingressief',
  'egressief',
  'pulmonisch',
  'lingual',
];

/** Alle vaktermen. Wordt gevuld door termSet() zodra het voor het eerst nodig is. */
let allTerms = null;

/** Geeft alle vaktermen: de lijst hierboven plus alle antwoorden van invul- en sleepvragen. */
function termSet() {
  if (!allTerms) {
    allTerms = new Set(EXTRA_TERMS.map(norm));
    for (const item of ALL) {
      if (item.type === 'blanks') {
        for (const segment of item.segs) {
          for (const answer of segment.blank || []) {
            allTerms.add(norm(answer));
          }
        }
      }
      if (item.type === 'drag') {
        for (const chip of item.els) {
          const textWithoutTags = chip.text.replace(/<[^>]+>/g, '');
          allTerms.add(norm(textWithoutTags));
        }
      }
    }
  }
  return allTerms;
}

/**
 * Geeft de stam van een woord, om woordvormen te kunnen vergelijken:
 * -heid, -e en -en gaan eraf en een dubbele klinker wordt enkel.
 * Zo worden 'glottaal' en 'glottale' allebei 'glottal', en 'stemhebbendheid' wordt 'stemhebbend'.
 */
function stem(word) {
  return word
    .replace(/heid$/, '')
    .replace(/en?$/, '')
    .replace(/([aeou])\1/g, '$1');
}

/** Hoeveel tikfouten mogen er in een antwoord zitten? Hoe langer het woord, hoe meer. */
function allowedTypos(word) {
  if (word.length > 9) {
    return 2;
  }
  if (word.length > 3) {
    return 1;
  }
  return 0;
}

/**
 * Kijkt één invulveld na.
 * given = wat er getypt is; accepted = de lijst met antwoorden die goed zijn.
 */
function blankOK(given, accepted) {
  const typed = norm(given);
  if (!typed) {
    return false;
  }
  const answers = accepted.map(norm);
  if (answers.includes(typed)) {
    return true;
  }
  // Een andere woordvorm met dezelfde betekenis is goed (glottale = glottaal).
  if (answers.some((answer) => stem(answer) === stem(typed))) {
    return true;
  }
  // Een bestaande andere vakterm is geen tikfout.
  if (termSet().has(typed)) {
    return false;
  }
  return answers.some((answer) => editDistance(typed, answer) <= allowedTypos(answer));
}

/* ---------- IPA ---------- */

/**
 * Maakt een IPA-antwoord vergelijkbaar. IPA wordt precies nagekeken, op drie dingen na:
 *   - spaties en de haken [ ] en / / tellen niet mee;
 *   - een gewone dubbele punt telt als het lengteteken ː;
 *   - een boogje boven een letter (U+0311) telt als een boogje eronder (U+032F).
 */
function ipaNorm(text) {
  return text
    .normalize('NFD')
    .replace(/[\s\[\]\/]/g, '')
    .replace(/:/g, 'ː')
    .replace(/̑/g, '̯');
}
