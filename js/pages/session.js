/*
 * session.js – de dagelijkse sessie van vijf vragen (adres: #/sessie).
 *
 *   #/sessie            een sessie voor het moment van nu (ochtend, middag of avond)
 *
 * De vijf vragen komen uit alle colleges op de site. Eerst vragen die je onjuist had,
 * dan vragen die je nog nooit hebt gedaan, dan de rest (de vaakst onjuiste eerst).
 * Twee vragen bij dezelfde dia komen nooit in dezelfde sessie.
 *
 * Een antwoord telt mee zoals bij Review: in de telling '× onjuist gehad', en een goed
 * antwoord maakt een onjuiste vraag in Oefenen alsnog goed. Je ronde in Oefenen
 * verandert verder niet.
 *
 * Is de sessie klaar, dan komt het moment in state.habit (de gewoontetracker) en
 * krijgt de Android-app een seintje, zodat die geen extra herinnering meer stuurt.
 */

'use strict';

/** Kiest de vijf vragen voor een nieuwe sessie. Geeft een lijst met codes. */
function pickSessionCodes() {
  const missed = state.sessionMissed || {};

  /** In welke groep valt een vraag? Lager = eerder aan de beurt. */
  function group(item) {
    if (status(item) === 'bad' || inRetry(item) || missed[item.code]) {
      return 0; // onjuist en nog niet hersteld
    }
    if (!state.hist[item.code]) {
      return 1; // nog nooit gedaan
    }
    return 2;
  }

  /** Hoe vaak onjuist, gedeeld door het aantal pogingen: hoe hoger, hoe eerder aan de beurt. */
  function wrongShare(item) {
    const history = state.hist[item.code];
    return history && history.n ? (history.wrong || 0) / history.n : 0;
  }

  // Eerst husselen, daarna sorteren: zo is de volgorde binnen een gelijke groep willekeurig.
  const pool = shuffle(ALL.slice()).sort(
    (a, b) => group(a) - group(b) || wrongShare(b) - wrongShare(a),
  );

  const chosen = [];
  const usedSlides = new Set();
  for (const item of pool) {
    const slide = item.code.replace(/V\d+$/, ''); // KLC1D14V2 -> KLC1D14
    if (!usedSlides.has(slide)) {
      chosen.push(item.code);
      usedSlides.add(slide);
    }
    if (chosen.length === SESSION_SIZE) {
      break;
    }
  }
  return chosen;
}

/** Zet een afgeronde sessie in de gewoontetracker en geeft de Android-app een seintje. */
function finishSession(session) {
  state.habit = state.habit || {};
  const done = state.habit[session.day] || [];
  if (!done.includes(session.slot)) {
    state.habit[session.day] = done.concat(session.slot);
  }
  save();
  if (window.KlankleerApp && window.KlankleerApp.sessionDone) {
    window.KlankleerApp.sessionDone(session.day, session.slot); // zie android/…/MainActivity.java
  }
}

/** Tekent de pagina van de sessie. */
function renderSession(page) {
  const now = new Date();
  const day = dateKey(now);
  const slot = slotAt(now);

  // Een sessie die al loopt (van vandaag, voor dit moment) gaat gewoon verder.
  let session = state.session;
  const isCurrent = session && session.day === day && session.slot === slot.id;
  if (!isCurrent || session.finished) {
    session = null;
  }

  const alreadyDone = slotsDone(day).includes(slot.id);

  if (!session) {
    const startButton = button(
      alreadyDone ? 'Extra sessie' : 'Start de sessie',
      () => {
        state.session = { day, slot: slot.id, codes: pickSessionCodes(), index: 0, right: 0 };
        save();
        render();
      },
      'primary',
    );
    add(
      page,
      h(
        'div',
        { class: 'card' },
        h('h2', {}, `${slot.label}sessie · ${SESSION_SIZE} vragen`),
        h(
          'p',
          {},
          alreadyDone
            ? `Je ${slot.label.toLowerCase()}sessie van vandaag heb je al gedaan. Je kunt nog een extra sessie doen; die telt niet extra in de tracker.`
            : `Vijf vragen uit alle colleges, met de vragen die je onjuist had voorop.`,
        ),
        h(
          'div',
          { class: 'btns' },
          startButton,
          button('Gewoontetracker', () => go('#/gewoonte')),
        ),
      ),
    );
    return;
  }

  // Alle vragen gedaan: de uitslag.
  if (session.index >= session.codes.length) {
    if (!session.finished) {
      session.finished = true;
      finishSession(session);
    }
    add(
      page,
      h(
        'div',
        { class: 'card' },
        h('h2', {}, 'Sessie klaar ✓'),
        h('p', {}, `${session.right} van de ${session.codes.length} goed.`),
        h(
          'div',
          { class: 'btns' },
          button('Gewoontetracker', () => go('#/gewoonte'), 'primary'),
          button('Naar Home', () => go('#/')),
        ),
      ),
    );
    return;
  }

  // De vraag die nu aan de beurt is.
  const item = byCode[session.codes[session.index]];
  let correct = null; // null = nog niet beantwoord

  const nextButton = button(
    session.index + 1 === session.codes.length ? 'Afronden →' : 'Volgende →',
    () => {
      session.index++;
      save();
      render();
    },
    'primary',
    { disabled: true, 'data-next': 1 },
  );

  /** Houdt bij of de vraag in een sessie onjuist was, zodat hij in een volgende sessie terugkomt. */
  function rememberMiss(isCorrect) {
    state.sessionMissed = state.sessionMissed || {};
    if (isCorrect) {
      delete state.sessionMissed[item.code];
    } else {
      state.sessionMissed[item.code] = 1;
    }
  }

  const college = colById[item.college];
  add(
    page,
    crumb(
      item,
      `${college.title} · ${item.num}. ${item.title}`,
      `${session.index + 1} van ${session.codes.length}`,
    ),
    renderQuestion(item, {
      onAnswer: (score, max) => {
        if (correct !== null) {
          return;
        }
        correct = score === max;
        if (correct) {
          session.right++;
        }
        rememberMiss(correct);
        recordAgain(item, correct); // bewaart ook de sessie (save)
        nextButton.disabled = false;
        focusLater(nextButton);
      },
      onOverride: () => {
        correct = true;
        session.right++;
        rememberMiss(true);
        override(item, false);
      },
    }),
    h('div', { class: 'btns end' }, nextButton),
  );
}
