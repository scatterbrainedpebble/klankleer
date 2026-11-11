/*
 * mc.js – vraagsoort 'meerkeuze' (mc = multiple choice).
 *
 * De antwoorden staan elke keer in een andere volgorde.
 *
 * Velden in data.js:
 *   question  de vraag
 *   answers   de antwoorden: [{ text, correct }]
 *   note      een extra regel uitleg in de uitslag (mag ontbreken)
 */

'use strict';

/** Vult de kaart met een meerkeuzevraag. Wat er in 'parts' zit, staat in question.js. */
function drawMc({ item, view, card, feedback, finish }) {
  const box = h('div', { class: 'mc' });

  // De nummers van de antwoorden in willekeurige volgorde: [2, 0, 1, ...]
  const order = shuffle(item.answers.map((_, index) => index));
  for (const index of order) {
    box.append(
      h(
        'label',
        {},
        h('input', { type: 'radio', name: 'mc', value: index }),
        h('span', { html: item.answers[index].text }),
      ),
    );
  }
  const radios = [...box.querySelectorAll('input')];

  /** Hoort dit keuzerondje bij een goed antwoord? */
  function isRight(radio) {
    return item.answers[Number(radio.value)].correct;
  }

  const checkButton = h('button', { class: 'btn primary', onclick: check }, 'Nakijken');

  function check() {
    const chosen = radios.find((radio) => radio.checked);
    if (!chosen) {
      return; // nog niets gekozen
    }
    // Kleur het goede antwoord groen en een onjuiste keuze rood.
    for (const radio of radios) {
      radio.disabled = true;
      if (isRight(radio)) {
        radio.parentNode.classList.add('good');
      } else if (radio.checked) {
        radio.parentNode.classList.add('bad');
      }
    }
    checkButton.hidden = true;

    const correct = isRight(chosen);
    const note = item.note ? h('div', { html: item.note }) : null;
    finish(correct ? 1 : 0, 1, verdict(correct), note);
  }

  add(card, h('h2', { html: item.question }), box);

  if (view) {
    // Alleen bekijken: keuzes op slot, en bij 'solved' het goede antwoord aangevinkt.
    for (const radio of radios) {
      radio.disabled = true;
      if (view === 'solved' && isRight(radio)) {
        radio.parentNode.classList.add('good');
        radio.checked = true;
      }
    }
    return;
  }

  add(card, h('div', { class: 'btns' }, checkButton), feedback);
}
