/*
 * progress.js – de pagina Voortgang van één college (adres: #/c1/voortgang).
 *
 * Bovenaan de cijfers van het college, daaronder per onderwerp een uitklapbare lijst
 * met de vragen: onjuist, goed en nog niet gedaan. Een klik op een vraag opent
 * die vraag bij Oefenen.
 */

'use strict';

/**
 * Het onderwerp dat meteen open moet staan als de pagina getekend wordt.
 * De pagina Overzicht vult dit in bij een klik op een tegel (zie overview.js).
 */
let categoryToOpen = null;

/** Tekent de pagina Voortgang van een college. */
function renderProgress(page, college) {
  const tally = counts(college.items);
  const rounds = roundsOf(college);
  const done = roundIsDone(college);
  const hardCount = college.items.filter(isHard).length;
  const flagCount = college.items.filter(flagged).length;

  function startNewRound() {
    go(`#/${college.id}/nieuwe-ronde`);
  }

  /* ---------- het bovenste deel van de kaart ---------- */

  const title =
    'Voortgang · ' + college.title + (rounds.length ? ` · ronde ${rounds.length + 1}` : '');

  // Alleen als de ronde af is: een groen vak met de knop Nieuwe ronde.
  let roundDoneBox = null;
  if (done) {
    roundDoneBox = h(
      'div',
      { class: 'feedback show good' },
      h('div', { class: 'score' }, 'Je hebt deze ronde afgerond 🎉'),
      h(
        'div',
        {},
        `${pct(tally.good, tally.n)} goed. Wil je alles nog een keer oefenen? Start dan een nieuwe ronde.`,
      ),
      h('div', { class: 'btns' }, button('Nieuwe ronde', startNewRound, 'primary')),
    );
  }

  // Alleen als er vorige rondes zijn: een regel met de score van elke ronde.
  let earlierRounds = null;
  if (rounds.length) {
    const lines = rounds.map((round, index) => {
      const date = new Date(round.t).toLocaleDateString('nl-NL', {
        day: 'numeric',
        month: 'short',
      });
      return `ronde ${index + 1}: ${pct(round.good, round.n)} goed (${date})`;
    });
    earlierRounds = h(
      'div',
      { class: 'rounds small muted' },
      'Vorige rondes: ' + lines.join(' · '),
    );
  }

  const explanation = h(
    'p',
    { class: 'muted' },
    `Klik op een hoofdstuk om te zien welke vragen je goed had, onjuist had of nog niet gedaan hebt. Achter een vraag staat hoe vaak je hem onjuist had, ook als hij inmiddels goed is. Met ⚑ Bladwijzer (bovenaan elke vraag) markeer je een vraag die je extra wilt reviewen. Een vraag die je ${HARD_WRONG} keer of vaker onjuist had, komt bij Lastige vragen.`,
  );

  // Het blokje met de knoppen 'Review dit college' en 'Nieuwe ronde'.
  const collegeName = college.title.toLowerCase();
  const hardWord = hardCount === 1 ? 'vraag' : 'vragen';
  const reviewBox = h(
    'div',
    { class: 'revbox' },
    h(
      'div',
      { class: 'small muted' },
      `Review ${collegeName}: ${hardCount} lastige ${hardWord} · ${flagCount} met een bladwijzer`,
    ),
    h(
      'div',
      { class: 'btns' },
      button('Review dit college', () => go(`#/review/${college.id}/lastig+bladwijzer`), '', {
        disabled: !(hardCount + flagCount),
      }),
      done ? null : button('Nieuwe ronde', startNewRound, '', { disabled: !started(college) }),
    ),
  );

  const card = h(
    'div',
    { class: 'card' },
    h('h2', {}, title),
    statBoxes(tally),
    progressBar(tally),
    legend(),
    roundDoneBox,
    earlierRounds,
    explanation,
    reviewBox,
  );

  /* ---------- de lijst per onderwerp ---------- */

  /** Een klik op een vraag in de lijst: ga naar die vraag bij Oefenen. */
  function openQuestion(item) {
    state.pos[college.id] = college.items.indexOf(item);
    // Stond er nog een herhaling open, dan komt die als eerste aan de beurt bij Volgende.
    const openRetry = state.rnow[college.id];
    if (openRetry) {
      if (!state.retry[college.id]) {
        state.retry[college.id] = [];
      }
      state.retry[college.id].unshift({ code: openRetry, due: 0 });
      delete state.rnow[college.id];
    }
    save();
    go(`#/${college.id}/oefenen`);
  }

  /** Eén regel in de lijst: de vraag, een vlaggetje, hoe vaak onjuist, en een korte weergave. */
  function questionRow(item) {
    const timesWrong = wrongTimes(item);
    return h(
      'li',
      {},
      h('button', { onclick: () => openQuestion(item) }, `${item.num}. ${item.title}`),
      flagged(item) ? h('span', { class: 'fl', title: 'bladwijzer' }, ' ⚑') : null,
      timesWrong ? h('span', { class: 'times' }, ` ${timesWrong}× onjuist gehad`) : null,
      h('div', { class: 'qprev' }, questionPreview(item)),
    );
  }

  /** Het uitklapbare blok van één onderwerp (cat), met de vragen in drie groepjes. */
  function topicBlock(cat) {
    const items = college.items.filter((item) => item.cat === cat);
    const catTally = counts(items);

    /** Een groepje binnen het onderwerp, bijvoorbeeld alle vragen die 'goed' staan. */
    function group(label, wantedStatus) {
      const list = items.filter((item) => status(item) === wantedStatus);
      if (!list.length) {
        return null;
      }
      return h(
        'div',
        {},
        h('h4', {}, `${label} (${list.length})`),
        h('ul', {}, list.map(questionRow)),
      );
    }

    return h(
      'details',
      { class: 'cat' },
      h(
        'summary',
        {},
        h(
          'div',
          { class: 'catrow' },
          h('b', {}, h('span', { class: 'chev', 'aria-hidden': 'true' }), cat),
          h('span', { class: 'nums' }, numsText(catTally)),
        ),
        progressBar(catTally),
      ),
      h(
        'div',
        { class: 'grp' },
        group('Onjuist (komt terug bij Oefenen)', 'bad'),
        group('Goed', 'good'),
        group('Nog niet gedaan', 'todo'),
      ),
    );
  }

  for (const cat of catsOf(college.items)) {
    const details = topicBlock(cat);
    if (cat === categoryToOpen) {
      // Je kwam via een tegel op Overzicht: klap dit onderwerp open en schuif ernaartoe.
      details.open = true;
      setTimeout(() => details.scrollIntoView({ block: 'start' }), 0);
    }
    add(card, details);
  }

  categoryToOpen = null;
  add(page, card);
}

/**
 * Een korte weergave van een vraag, voor de lijst bij Voortgang.
 * Het juiste antwoord staat er alleen bij als je de vraag al beantwoord hebt.
 */
function questionPreview(item) {
  /** Haalt de HTML-opmaak uit een tekst en maakt van alle witruimte één spatie. */
  function plainText(html) {
    const scratch = document.createElement('div');
    scratch.innerHTML = html || '';
    return scratch.textContent.replace(/\s+/g, ' ').trim();
  }

  /** Kort een tekst in tot hooguit maxLength tekens, op een woordgrens. */
  function shorten(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength - 3).replace(/\s+\S*$/, '') + ' …';
  }

  let question = plainText(item.type === 'card' ? item.front : item.question);

  if (item.type === 'blanks') {
    // Bij een invulvraag hoort de zin met het gat ('…') bij de vraag.
    const sentence = plainText(
      item.segs.map((segment) => (segment.text != null ? segment.text : ' … ')).join(''),
    );
    const questionIsEmpty = !question || /^vul in\.?$/i.test(question);
    const sentenceFitsBehind = /…/.test(sentence) && sentence.length < 90 && !/\?$/.test(question);
    if (questionIsEmpty) {
      question = sentence;
    } else if (sentenceFitsBehind) {
      question = question + ' ' + sentence;
    }
  }

  let answer = '';
  if (state.book[item.code]) {
    if (item.type === 'blanks') {
      answer = item.correct || '';
    } else if (item.type === 'mc') {
      const rightAnswer = item.answers.find((option) => option.correct) || {};
      answer = plainText(rightAnswer.text);
    } else if (item.type === 'card') {
      answer = plainText(item.back);
    }
  }

  return [
    shorten(question, 140),
    answer ? h('span', { class: 'ans' }, ' → ' + shorten(answer, 90)) : null,
  ];
}
