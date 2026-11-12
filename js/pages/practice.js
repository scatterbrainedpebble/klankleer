/*
 * practice.js – de pagina Oefenen van één college (adres: #/c1/oefenen).
 *
 * Je krijgt één vraag per keer, in een vaste volgorde. Je eerste poging telt als je
 * antwoord in deze ronde. Een onjuiste vraag komt een paar vragen later terug als
 * 'Herhaling', en blijft terugkomen tot je hem goed hebt. Aan het eind van de ronde
 * komen alle vragen die nog onjuist staan achter elkaar.
 */

'use strict';

/** Tekent de pagina Oefenen van een college. */
function renderPractice(page, college) {
  const items = college.items;
  // index = de plek van de huidige vraag in de ronde (0 = de eerste vraag)
  const index = Math.min(state.pos[college.id] || 0, items.length - 1);
  const isLast = index === items.length - 1;
  const position = `${index + 1} / ${items.length}`;
  const bar = h(
    'div',
    { class: 'prog' },
    h('i', { style: `width:${((index + 1) / items.length) * 100}%` }),
  );

  /** Zet een vraag in de rij met herhalingen: hij komt REPEAT_AFTER vragen later terug. */
  function queueAgain(code) {
    if (!state.retry[college.id]) {
      state.retry[college.id] = [];
    }
    state.retry[college.id].push({ code, due: index + REPEAT_AFTER });
  }

  /**
   * De knop Volgende: eerst een herhaling die aan de beurt is (aan het eind van de ronde: alle),
   * anders de volgende vraag. Is alles gedaan, dan ga je naar Voortgang.
   */
  function advance() {
    // Alleen vragen die nog steeds onjuist staan, blijven in de rij.
    const retries = (state.retry[college.id] || []).filter(
      // byCode[...] ontbreekt als een vraag later van de site is gehaald; zo'n herhaling vervalt.
      (retry) =>
        byCode[retry.code] && state.book[retry.code] && status(byCode[retry.code]) === 'bad',
    );
    state.retry[college.id] = retries;

    if (isLast) {
      // Aan het eind komen ook onjuiste vragen die nog niet in de rij stonden
      // (bijvoorbeeld uit een oudere versie van de site).
      for (const other of items) {
        const isOpenNow = other.code === state.rnow[college.id];
        const isQueued = retries.some((retry) => retry.code === other.code);
        if (status(other) === 'bad' && !isOpenNow && !isQueued) {
          retries.push({ code: other.code, due: 0 });
        }
      }
    }

    const dueIndex = retries.findIndex((retry) => isLast || retry.due <= index);
    if (dueIndex >= 0) {
      // Er is een herhaling aan de beurt: haal hem uit de rij en zet hem open.
      const dueRetry = retries.splice(dueIndex, 1)[0];
      state.rnow[college.id] = dueRetry.code;
      save();
      render();
      return;
    }
    if (isLast) {
      save();
      go(`#/${college.id}/voortgang`);
      return;
    }
    state.pos[college.id] = index + 1;
    save();
    render();
  }

  /** Toont een herhaling: een vraag die je eerder in deze ronde onjuist had. */
  function showRetry(item) {
    let correct = null; // null = nog niet beantwoord, daarna true of false

    const nextButton = button(
      'Volgende →',
      () => {
        delete state.rnow[college.id];
        if (correct === false) {
          queueAgain(item.code); // weer onjuist: hij komt later nog een keer
        }
        advance();
      },
      '',
      { disabled: true, 'data-next': 1 },
    );

    const question = renderQuestion(item, {
      onAnswer: (score, max) => {
        if (correct !== null) {
          return;
        }
        correct = score === max;
        recordAgain(item, correct);
        nextButton.disabled = false;
        nextButton.classList.add('primary');
        focusLater(nextButton);
      },
      onOverride: () => {
        correct = true;
        override(item, false);
      },
    });

    add(
      page,
      bar,
      crumb(
        item,
        [h('b', { class: 'again' }, 'Herhaling'), ` · ${item.num}. ${item.title}`],
        position,
      ),
      question,
      h(
        'p',
        { class: 'muted small' },
        'Deze vraag had je eerder in deze ronde onjuist. Hij komt terug tot je hem goed hebt.',
      ),
      h('div', { class: 'btns end' }, nextButton),
    );
  }

  /** Toont de gewone vraag op de huidige plek in de ronde. */
  function showCurrent(item) {
    const queuedRetries = (state.retry[college.id] || []).length;
    const wrongItems = items.filter((other) => status(other) === 'bad').length;
    const nothingPending = queuedRetries + wrongItems === 0;

    const prevButton = button(
      '← Vorige',
      () => {
        state.pos[college.id] = index - 1;
        save();
        render();
      },
      '',
      { disabled: index === 0 },
    );
    const nextLabel = isLast && nothingPending ? 'Naar voortgang →' : 'Volgende →';
    const nextButton = button(nextLabel, advance, '', { 'data-next': 1 });

    let question;
    if (state.book[item.code]) {
      // Al beantwoord in deze ronde: alleen bekijken.
      question = answeredCard(item);
    } else {
      question = renderQuestion(item, {
        onAnswer: (score, max) => {
          recordFirst(item, score, max);
          if (score < max) {
            queueAgain(item.code);
            save();
          }
          nextButton.classList.add('primary');
          focusLater(nextButton);
        },
        onOverride: () => override(item, true),
      });
    }

    add(
      page,
      bar,
      crumb(item, `${item.num}. ${item.title}`, position),
      question,
      h('div', { class: 'btns between' }, prevButton, nextButton),
    );
  }

  // Staat er een herhaling open, dan komt die eerst. Anders de vraag op de huidige plek.
  const retryCode = state.rnow[college.id];
  if (retryCode && byCode[retryCode] && state.book[retryCode]) {
    showRetry(byCode[retryCode]);
    return;
  }
  if (retryCode) {
    // De herhaling wijst naar een vraag die niet (meer) bestaat of niet beantwoord is: vergeet hem.
    delete state.rnow[college.id];
  }
  showCurrent(items[index]);
}

/**
 * Een vraag die je in deze ronde al beantwoord hebt, blijft zichtbaar maar staat op slot.
 * Had je hem goed, dan zie je de oplossing. Had je hem onjuist, dan niet: hij komt nog terug.
 */
function answeredCard(item) {
  const correct = status(item) === 'good';
  const fixedLater = correct && Boolean(state.book[item.code].fixed);
  const comesBackSoon = !correct && inRetry(item);

  let headline;
  if (fixedLater) {
    headline = 'Deze vraag had je eerst onjuist; later had je hem goed.';
  } else if (correct) {
    headline = 'Deze vraag heb je al goed beantwoord.';
  } else {
    headline = 'Deze vraag had je onjuist.';
  }

  let explanation;
  if (correct) {
    explanation =
      'Bij Oefenen telt één poging per vraag; onjuiste vragen komen terug tot je ze goed hebt.';
  } else if (comesBackSoon) {
    explanation = 'Hij komt verderop in deze ronde nog een keer terug.';
  } else {
    explanation = 'Hij komt terug als je verder oefent.';
  }

  const card = renderQuestion(item, { view: correct ? 'solved' : 'locked' });
  return add(
    card,
    h(
      'div',
      { class: 'feedback show ' + (correct ? 'good' : 'bad') },
      h('div', { class: 'score' }, headline),
      h('div', {}, explanation),
      refLine(item),
    ),
  );
}
