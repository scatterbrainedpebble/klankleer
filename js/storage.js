/*
 * storage.js – je voortgang bewaren in de browser.
 *
 * Alles wat de site over jou onthoudt, staat in één object: state.
 * Dat object wordt bewaard in localStorage (opslag van de browser, alleen op dit apparaat).
 *
 * Wat er in state staat:
 *   state.book[code]      je antwoord in de huidige oefenronde: { score, max, t, fixed }
 *                         t = het moment van antwoorden; fixed = eerst onjuist, later alsnog goed
 *   state.hist[code]      { n, wrong }: aantal pogingen en aantal keer onjuist,
 *                         over alle rondes en Review samen
 *   state.flags[code]     staat er als de vraag een bladwijzer heeft
 *   state.pos[college]    bij welke vraag je bent in Oefenen (0 = de eerste)
 *   state.rounds[college] de scores van vorige rondes
 *   state.retry[college]  herhalingen die nog moeten komen: [{ code, due }]
 *                         due = vanaf welke plek in de ronde de herhaling aan de beurt is
 *   state.rnow[college]   de code van de herhaling die nu open staat
 *   state.revSel          je laatste keuze op de pagina Review
 *   state.lastBackup      het moment van je laatste back-up
 *
 * 'code' is de code van een vraag (bijvoorbeeld KLC1D14V1), 'college' het id van een college (c1).
 *
 * LET OP: verander de naam van de opslag (STORAGE_KEY) en de codes van de vragen nooit zomaar,
 * want dan is alle bewaarde voortgang onvindbaar. Verandert de indeling van state,
 * vul oude opslag dan aan in completeState().
 */

'use strict';

/** De naam waaronder de voortgang in de browser staat. */
const STORAGE_KEY = 'klankleer-v1';

/** Geeft een lege voortgang: zo begint iemand die de site voor het eerst opent. */
function fresh() {
  return {
    book: {},
    hist: {},
    flags: {},
    pos: {},
    rounds: {},
    retry: {},
    rnow: {},
    lastBackup: 0,
  };
}

/** Leest de bewaarde voortgang uit de browser. Is er niets (of is het onleesbaar), dan begin je leeg. */
function loadState() {
  const loaded = fresh();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      Object.assign(loaded, JSON.parse(raw));
    } else {
      // De allereerste versie van de site had alleen college 1 en een andere naam voor de opslag.
      const old = localStorage.getItem('klankleer-c1-v1');
      if (old) {
        const parsed = JSON.parse(old);
        loaded.book = parsed.book || {};
        loaded.pos = { c1: parsed.page || 0 };
      }
    }
  } catch (error) {
    // De opslag is niet beschikbaar of beschadigd: ga verder met wat er tot nu toe gelezen is.
  }
  return loaded;
}

/** De voortgang waar de hele site mee werkt. */
let state = loadState();
completeState();

/**
 * Vult een oudere opslag (of een oude back-up) aan met onderdelen die later zijn bijgekomen.
 * De telling per vraag (hist) wordt afgeleid uit het antwoord als die nog ontbreekt.
 */
function completeState() {
  for (const [code, result] of Object.entries(state.book)) {
    if (!state.hist[code]) {
      const wasCorrect = result.score === result.max;
      state.hist[code] = { n: 1, wrong: wasCorrect ? 0 : 1 };
    }
  }
  state.retry = state.retry || {};
  state.rnow = state.rnow || {};
  state.rounds = state.rounds || {};
}

/** Bewaart de voortgang in de browser. Roep dit aan na elke verandering van state. */
function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    // Bewaren lukt niet (bijvoorbeeld in een privévenster): de site blijft gewoon werken.
  }
}

/**
 * Vervangt de hele voortgang en bewaart die.
 * Met gegevens uit een back-up: die voortgang terugzetten. Zonder gegevens: alles wissen.
 */
function replaceState(data = {}) {
  state = Object.assign(fresh(), data);
  completeState();
  save();
}
