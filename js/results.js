/*
 * results.js – bijhouden wat je goed en onjuist had.
 *
 * Deze functies lezen en veranderen state (zie storage.js). De pagina's gebruiken ze
 * om te tellen, en om een antwoord vast te leggen nadat een vraag is nagekeken.
 *
 * Begrippen:
 *   - Bij Oefenen telt je eerste poging als je antwoord in deze ronde.
 *   - Een onjuiste vraag komt een paar vragen later terug als 'Herhaling', tot hij goed is.
 *   - Een vraag is 'lastig' als je hem in totaal vaak onjuist had (zie HARD_WRONG).
 */

'use strict';

/** Na zoveel keer onjuist (Oefenen, herhalingen en Review samen) heet een vraag 'lastig'. */
const HARD_WRONG = 4;

/** Een onjuiste vraag komt zoveel vragen later terug in dezelfde ronde. */
const REPEAT_AFTER = 5;

/* ---------- tellen ---------- */

/** Hoe staat een vraag ervoor in deze ronde? Geeft 'todo' (nog niet gedaan), 'good' of 'bad'. */
function status(item) {
  const result = state.book[item.code];
  if (!result) {
    return 'todo';
  }
  if (result.score === result.max || result.fixed) {
    return 'good';
  }
  return 'bad';
}

/** Telt een lijst vragen: { good, bad, todo, n } met n = het totaal. */
function counts(items) {
  const tally = { good: 0, bad: 0, todo: 0, n: items.length };
  for (const item of items) {
    tally[status(item)]++;
  }
  return tally;
}

/** Is er in dit college al minstens één vraag beantwoord in deze ronde? */
function started(college) {
  return college.items.some((item) => state.book[item.code]);
}

/** Hoe vaak had je deze vraag in totaal onjuist? */
function wrongTimes(item) {
  const history = state.hist[item.code];
  return history ? history.wrong || 0 : 0;
}

/** Is dit een lastige vraag? */
function isHard(item) {
  return wrongTimes(item) >= HARD_WRONG;
}

/** Heeft deze vraag een bladwijzer? */
function flagged(item) {
  return Boolean(state.flags[item.code]);
}

/* ---------- herhalingen binnen een ronde ---------- */

/** Haalt een vraag uit alle rijen met herhalingen die nog moeten komen. */
function dropRetry(code) {
  for (const collegeId in state.retry) {
    state.retry[collegeId] = state.retry[collegeId].filter((retry) => retry.code !== code);
  }
}

/** Staat deze vraag nog klaar als herhaling (in een rij, of nu open)? */
function inRetry(item) {
  const isQueued = Object.values(state.retry).some((queue) =>
    queue.some((retry) => retry.code === item.code),
  );
  const isOpenNow = Object.values(state.rnow).includes(item.code);
  return isQueued || isOpenNow;
}

/* ---------- een antwoord vastleggen ---------- */

/** Telt één poging bij de telling van een vraag. */
function countAttempt(item, correct) {
  if (!state.hist[item.code]) {
    state.hist[item.code] = { n: 0, wrong: 0 };
  }
  const history = state.hist[item.code];
  history.n++;
  if (!correct) {
    history.wrong++;
  }
}

/**
 * Een vraag die in deze ronde onjuist stond, is alsnog goed:
 * onthoud dat en laat hem niet meer terugkomen.
 */
function markFixed(item) {
  const result = state.book[item.code];
  if (result && result.score < result.max) {
    result.fixed = Date.now();
  }
  dropRetry(item.code);
}

/** Eerste poging bij Oefenen: dit is je antwoord in deze ronde. */
function recordFirst(item, score, max) {
  state.book[item.code] = { score, max, t: Date.now() };
  countAttempt(item, score === max);
  save();
}

/**
 * Een herhaling bij Oefenen of een vraag bij Review.
 * De poging telt mee in de telling; is hij goed, dan is de vraag alsnog goed.
 */
function recordAgain(item, correct) {
  countAttempt(item, correct);
  if (correct) {
    markFixed(item);
  }
  save();
}

/**
 * De knop 'Ik had deze wel goed': de onjuiste poging telt niet mee.
 * first = true als het om je eerste poging in deze ronde ging; dan telt de vraag gewoon als goed.
 */
function override(item, first) {
  const history = state.hist[item.code];
  if (history && history.wrong > 0) {
    history.wrong--;
  }
  const result = state.book[item.code];
  if (first && result) {
    result.score = result.max;
  } else {
    markFixed(item);
  }
  dropRetry(item.code);
  save();
}

/* ---------- rondes ---------- */

/** De scores van de vorige rondes van een college: [{ good, bad, n, t }]. */
function roundsOf(college) {
  return (state.rounds && state.rounds[college.id]) || [];
}

/** Is de ronde af? Dat is zo als alles gedaan is en er geen onjuiste vragen of herhalingen meer openstaan. */
function roundIsDone(college) {
  const nothingTodo = counts(college.items).todo === 0;
  const noRetriesQueued = (state.retry[college.id] || []).length === 0;
  const noRetryOpen = !state.rnow[college.id];
  const nothingWrong = !college.items.some((item) => status(item) === 'bad');
  return nothingTodo && noRetriesQueued && noRetryOpen && nothingWrong;
}
