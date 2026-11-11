/*
 * new-round.js – de pagina Nieuwe ronde van één college (adres: #/c1/nieuwe-ronde).
 *
 * Een nieuwe ronde zet Oefenen van dat college terug naar vraag 1. De score van
 * de ronde die je afsluit, wordt bewaard. Je kiest zelf of de telling
 * '× onjuist gehad' blijft staan of terug naar 0 gaat.
 */

'use strict';

/** Tekent de pagina Nieuwe ronde van een college. */
function renderNewRound(page, college) {
  const tally = counts(college.items);
  const hardCount = college.items.filter(isHard).length;
  const collegeName = college.title.toLowerCase();

  // Wat er met de telling moet gebeuren: 'keep' = laten staan, 'reset' = op 0 zetten.
  let mode = 'keep';

  /** Maakt één keuzerondje met een titel en een regel uitleg. */
  function radio(value, label, explanation) {
    return h(
      'label',
      { class: 'opt' },
      h('input', {
        type: 'radio',
        name: 'mode',
        value,
        checked: value === mode ? 'checked' : false,
        onchange: () => {
          mode = value;
        },
      }),
      h('span', {}, h('b', {}, label), h('span', { class: 'small muted' }, explanation)),
    );
  }

  /** Begint de nieuwe ronde (na een bevestiging als er nog vragen open staan). */
  function start() {
    if (tally.todo) {
      const question = `Je hebt nog ${tally.todo} vragen niet gedaan. Toch een nieuwe ronde beginnen?`;
      if (!confirm(question)) {
        return;
      }
    }
    if (mode === 'reset') {
      for (const item of college.items) {
        const history = state.hist[item.code];
        if (history) {
          history.wrong = 0;
        }
      }
    }
    // De score van de ronde die je afsluit bewaren (alleen als er iets gedaan is).
    if (tally.good + tally.bad) {
      if (!state.rounds[college.id]) {
        state.rounds[college.id] = [];
      }
      state.rounds[college.id].push({
        good: tally.good,
        bad: tally.bad,
        n: tally.n,
        t: Date.now(),
      });
    }
    // Alle antwoorden van dit college weg, en terug naar vraag 1.
    for (const item of college.items) {
      delete state.book[item.code];
    }
    state.pos[college.id] = 0;
    delete state.retry[college.id];
    delete state.rnow[college.id];
    stopReview();
    save();
    go(`#/${college.id}/oefenen`);
  }

  add(
    page,
    h(
      'div',
      { class: 'card' },
      h('h2', {}, 'Nieuwe ronde · ' + college.title),
      h(
        'p',
        {},
        `Een nieuwe ronde zet Oefenen van ${collegeName} terug: alle vragen staan weer open en je begint bij vraag 1. Je score van deze ronde (${pct(tally.good, tally.n)} goed, ${tally.good + tally.bad} van de ${tally.n} vragen gedaan) wordt bewaard bij Voortgang. Je bladwijzers en andere colleges blijven zoals ze zijn.`,
      ),
      h(
        'div',
        { class: 'optgroup' },
        h('h3', {}, 'Lastige vragen'),
        radio(
          'keep',
          'Laten staan',
          `Vragen die je ${HARD_WRONG} keer of vaker onjuist had (nu ${hardCount}), blijven bij Review › Lastige vragen.`,
        ),
        radio(
          'reset',
          'Telling op 0 zetten',
          'De telling "× onjuist gehad" van dit college gaat terug naar 0, dus er staan geen lastige vragen meer van dit college.',
        ),
      ),
      h(
        'div',
        { class: 'btns' },
        button('Annuleren', () => go(`#/${college.id}/voortgang`)),
        button(`Nieuwe ronde ${collegeName} starten`, start, 'primary'),
      ),
    ),
  );
}
