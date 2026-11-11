/*
 * review.js – de pagina's van Review.
 *
 *   #/review                             de keuze: welke colleges en welke soorten vragen
 *   #/review/c1+c2/lastig+bladwijzer     de review zelf, met die keuze
 *
 * Bij Review oefen je lastige vragen en vragen met een bladwijzer nog een keer,
 * los van je oefenronde. Een antwoord telt mee voor '× onjuist gehad', maar verandert
 * je score bij Oefenen niet. Een onjuiste vraag komt een paar vragen later nog een keer.
 */

'use strict';

/**
 * De soorten vragen waaruit je kunt kiezen. De naam (lastig, bladwijzer) staat ook
 * in het adres. 'pick' is de functie die bepaalt of een vraag bij de soort hoort.
 */
const REVIEW_TYPES = {
  lastig: {
    label: 'Lastige vragen',
    explanation: `Vragen die je in totaal ${HARD_WRONG} keer of vaker onjuist had.`,
    pick: isHard,
  },
  bladwijzer: {
    label: 'Bladwijzers',
    explanation: 'Vragen die je zelf hebt gemarkeerd met ⚑.',
    pick: flagged,
  },
};

/** Namen van soorten uit oudere versies van de site, zodat oude links blijven werken. */
const OLD_REVIEW_TYPES = {
  lastig: 'lastig',
  bladwijzer: 'bladwijzer',
  beide: 'lastig+bladwijzer',
  onjuist: 'lastig+bladwijzer',
};

/*
 * De review die nu loopt. Deze gegevens worden niet bewaard: verlaat je de review,
 * dan begint hij de volgende keer opnieuw.
 */
let reviewQueue = null; // de codes van de vragen die nog moeten komen; null = er loopt geen review
let reviewKey = ''; // bij welke keuze deze rij hoort, bijvoorbeeld 'c1+c2/lastig'
let reviewTotal = 0; // met hoeveel vragen de review begon

/** Stopt de lopende review. De volgende keer wordt de rij opnieuw gemaakt. */
function stopReview() {
  reviewQueue = null;
}

/**
 * Maakt van de twee delen van het adres een keuze: { cols, types, key }.
 * cols = de ids van de colleges, types = de soorten, key = beide als één tekst.
 * Geeft null als er geen geldige keuze in het adres staat.
 */
function parseSelection(collegePart, typePart) {
  if (!collegePart) {
    return null;
  }
  // Oude links hadden alleen een soort: #/review/<soort>
  if (OLD_REVIEW_TYPES[collegePart]) {
    typePart = OLD_REVIEW_TYPES[collegePart];
    collegePart = 'alle';
  }

  let cols;
  if (collegePart === 'alle') {
    cols = COLLEGES.map((college) => college.id);
  } else {
    cols = collegePart.split('+').filter((id) => colById[id]);
  }
  const types = (typePart || 'lastig+bladwijzer').split('+').filter((type) => REVIEW_TYPES[type]);

  if (!cols.length || !types.length) {
    return null;
  }
  return { cols, types, key: cols.join('+') + '/' + types.join('+') };
}

/** Geeft alle vragen die bij een keuze horen. */
function selectedItems(selection) {
  const items = selection.cols.flatMap((id) => colById[id].items);
  return items.filter((item) => selection.types.some((type) => REVIEW_TYPES[type].pick(item)));
}

/* ---------- de keuzepagina ---------- */

/** Tekent de pagina waar je kiest welke colleges en soorten vragen je wilt reviewen. */
function renderReviewSetup(page) {
  // Begin met je vorige keuze. Is die er niet, dan staat alles aangevinkt.
  const saved = state.revSel || {
    cols: COLLEGES.map((college) => college.id),
    types: ['lastig', 'bladwijzer'],
  };
  const chosenColleges = new Set(saved.cols.filter((id) => colById[id]));
  const chosenTypes = new Set(saved.types.filter((type) => REVIEW_TYPES[type]));

  /** De keuze zoals die nu is aangevinkt, in de vaste volgorde van colleges en soorten. */
  function currentSelection() {
    return {
      cols: COLLEGES.map((college) => college.id).filter((id) => chosenColleges.has(id)),
      types: Object.keys(REVIEW_TYPES).filter((type) => chosenTypes.has(type)),
    };
  }

  const info = h('p', { class: 'muted' });
  const startButton = button(
    'Review starten',
    () => {
      const selection = currentSelection();
      state.revSel = selection;
      save();
      stopReview();
      go(`#/review/${selection.cols.join('+')}/${selection.types.join('+')}`);
    },
    'primary',
  );

  // Achter elk vinkje staat een aantal. Per vinkje onthouden we: [het element, de functie die telt].
  const counters = [];

  /** Werkt de knop, de melding en de aantallen bij na elke verandering van de keuze. */
  function update() {
    const selection = currentSelection();
    const isComplete = selection.cols.length && selection.types.length;
    const count = isComplete ? selectedItems(selection).length : 0;

    startButton.disabled = !count;
    if (count) {
      startButton.textContent = `Review starten (${count} ${count === 1 ? 'vraag' : 'vragen'})`;
    } else {
      startButton.textContent = 'Review starten';
    }

    if (!selection.cols.length) {
      info.textContent = 'Kies minstens één college.';
    } else if (!selection.types.length) {
      info.textContent = 'Kies minstens één soort vragen.';
    } else if (!count) {
      info.textContent = 'Met deze keuze staan er geen vragen klaar.';
    } else {
      info.textContent = '';
    }

    for (const [element, countFn] of counters) {
      element.textContent = `(${countFn()})`;
    }
  }

  /**
   * Maakt één vinkje.
   * chosen = de verzameling waar de waarde in of uit gaat; countFn = telt de vragen bij dit vinkje.
   */
  function checkbox(chosen, value, label, explanation, countFn) {
    const counter = h('span', { class: 'cnt' });
    counters.push([counter, countFn]);
    return h(
      'label',
      { class: 'opt' },
      h('input', {
        type: 'checkbox',
        checked: chosen.has(value) ? 'checked' : false,
        onchange: (event) => {
          if (event.target.checked) {
            chosen.add(value);
          } else {
            chosen.delete(value);
          }
          update();
        },
      }),
      h(
        'span',
        {},
        h('b', {}, label, ' ', counter),
        explanation ? h('span', { class: 'small muted' }, explanation) : null,
      ),
    );
  }

  // Bij een college tellen we de vragen van de gekozen soorten;
  // bij een soort de vragen van de gekozen colleges.
  const collegeBoxes = COLLEGES.map((college) =>
    checkbox(chosenColleges, college.id, college.title, college.sub, () => {
      const matching = college.items.filter((item) =>
        [...chosenTypes].some((type) => REVIEW_TYPES[type].pick(item)),
      );
      return matching.length;
    }),
  );
  const typeBoxes = Object.entries(REVIEW_TYPES).map(([type, details]) =>
    checkbox(chosenTypes, type, details.label, details.explanation, () => {
      const items = [...chosenColleges].flatMap((id) => colById[id].items);
      return items.filter(details.pick).length;
    }),
  );

  add(
    page,
    h(
      'div',
      { class: 'card' },
      h('h2', {}, 'Review'),
      h(
        'p',
        {},
        'Bij Review oefen je een selectie van vragen nog een keer, los van je oefenronde. Wat je hier antwoordt, telt mee voor "× onjuist gehad", maar verandert je score bij Oefenen niet. Heb je een vraag onjuist, dan komt hij een paar vragen later nog een keer.',
      ),
      h('div', { class: 'optgroup' }, h('h3', {}, 'Welke colleges?'), collegeBoxes),
      h('div', { class: 'optgroup' }, h('h3', {}, 'Welke vragen?'), typeBoxes),
      info,
      h('div', { class: 'btns' }, startButton),
    ),
  );
  update();
}

/* ---------- de review zelf ---------- */

/** Na een onjuist antwoord komt de vraag zoveel vragen later nog een keer. */
const REVIEW_REPEAT_AFTER = 3;

/** Tekent de review: steeds de eerste vraag uit de rij. */
function renderReview(page, selection) {
  const items = selectedItems(selection);

  // Een nieuwe review (of een andere keuze): maak de rij, met de vaakst onjuiste vragen eerst.
  if (!reviewQueue || reviewKey !== selection.key) {
    reviewQueue = items
      .slice()
      .sort((a, b) => wrongTimes(b) - wrongTimes(a))
      .map((item) => item.code);
    reviewKey = selection.key;
    reviewTotal = reviewQueue.length;
  }

  // De regel bovenaan: wat je aan het reviewen bent, en een link om iets anders te kiezen.
  const typeNames = selection.types
    .map((type) => REVIEW_TYPES[type].label.toLowerCase())
    .join(' + ');
  const allColleges = selection.cols.length === COLLEGES.length && COLLEGES.length > 1;
  const collegeNames = allColleges
    ? 'alle colleges'
    : selection.cols.map((id) => colById[id].title).join(', ');
  add(
    page,
    h(
      'div',
      { class: 'revhead small muted' },
      h('span', {}, `Review: ${typeNames} · ${collegeNames}`),
      h('a', { href: '#/review' }, 'Andere keuze'),
    ),
  );

  // De rij is leeg: klaar, of er stond van het begin af aan niets klaar.
  if (!reviewQueue.length) {
    const hadQuestions = reviewTotal > 0;
    let againButton = null;
    if (items.length) {
      againButton = button(
        `Nog een keer (${items.length})`,
        () => {
          stopReview();
          render();
        },
        'primary',
      );
    }
    add(
      page,
      h(
        'div',
        { class: 'card' },
        h('h2', {}, hadQuestions ? 'Klaar met deze review 🎉' : 'Hier staat niets klaar'),
        h(
          'p',
          {},
          hadQuestions
            ? 'Je hebt alle vragen in deze review goed beantwoord.'
            : 'Met deze keuze staan er geen vragen klaar.',
        ),
        h(
          'div',
          { class: 'btns' },
          button('Andere keuze', () => go('#/review')),
          againButton,
        ),
      ),
    );
    return;
  }

  // De eerste vraag uit de rij.
  const code = reviewQueue[0];
  const item = byCode[code];
  let correct = null; // null = nog niet beantwoord, daarna true of false

  const nextButton = button(
    'Volgende →',
    () => {
      reviewQueue.shift();
      if (correct === false) {
        // Onjuist: zet de vraag een paar plekken verderop terug in de rij.
        const place = Math.min(REVIEW_REPEAT_AFTER, reviewQueue.length);
        reviewQueue.splice(place, 0, code);
      }
      render();
    },
    'primary',
    { disabled: true, 'data-next': 1 },
  );

  // De regel boven de vraag: college (als je er meer dan één reviewt), nummer, titel en de telling.
  const collegePrefix = selection.cols.length > 1 ? colById[item.college].title + ' · ' : '';
  const timesWrong = wrongTimes(item);
  const wrongSuffix = timesWrong ? ` · ${timesWrong}× onjuist gehad` : '';
  const left = `${collegePrefix}${item.num}. ${item.title}${wrongSuffix}`;

  add(
    page,
    crumb(item, left, `nog ${reviewQueue.length} te gaan`),
    renderQuestion(item, {
      onAnswer: (score, max) => {
        if (correct !== null) {
          return;
        }
        correct = score === max;
        recordAgain(item, correct);
        nextButton.disabled = false;
        focusLater(nextButton);
      },
      onOverride: () => {
        correct = true;
        override(item, false);
      },
    }),
    h('div', { class: 'btns end' }, nextButton),
  );
}
