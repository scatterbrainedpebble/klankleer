/*
 * blanks.js – vraagsoort 'invullen'.
 *
 * Een zin met één of meer invulvelden. Nakijken gaat met de knop of met Enter.
 * Een tikfout mag (zie checking.js).
 *
 * Velden in data.js:
 *   question  de vraag boven de zin
 *   segs      de stukjes van de zin, in volgorde. Een stukje is gewone tekst ({ text })
 *             of een invulveld ({ blank }) met de lijst antwoorden die goed zijn
 *   correct   het juiste antwoord als tekst, voor in de uitslag
 */

'use strict';

/** Vult de kaart met een invulvraag. Wat er in 'parts' zit, staat in question.js. */
function drawBlanks({ item, view, card, feedback, figure, finish }) {
  // Per invulveld de antwoorden die goed zijn. Het eerste is 'het' antwoord dat we laten zien.
  const answers = item.segs.filter((segment) => segment.blank).map((segment) => segment.blank);

  // De zin: tekst en invulvelden achter elkaar.
  const INPUT_HTML =
    '<input class="blank" autocomplete="off" autocapitalize="off" spellcheck="false">';
  const lineHtml = item.segs.map((segment) => (segment.blank ? INPUT_HTML : segment.text)).join('');
  const line = h('div', { class: 'blankline', html: lineHtml });
  const fields = [...line.querySelectorAll('input')];

  const checkButton = h('button', { class: 'btn primary', onclick: check }, 'Nakijken');

  function check() {
    if (checkButton.hidden) {
      return; // er is al nagekeken
    }
    let score = 0;
    fields.forEach((field, index) => {
      const correct = blankOK(field.value, answers[index]);
      if (correct) {
        score++;
      }
      field.disabled = true;
      field.classList.add(correct ? 'good' : 'bad');
      if (!correct) {
        // Zet het juiste antwoord achter het veld.
        field.after(h('span', { class: 'sol' }, answers[index][0]));
      }
    });
    checkButton.hidden = true;

    const allCorrect = score === fields.length;
    const headline = allCorrect ? 'Goed!' : `${score} van ${fields.length} goed`;
    const solution = item.correct ? h('div', {}, 'Juiste antwoord: ' + item.correct) : null;
    finish(score, fields.length, headline, solution);
  }

  fields.forEach((field) => onEnter(field, check));
  add(card, h('h2', { html: item.question }), figure, line);

  if (view) {
    // Alleen bekijken: velden op slot, en bij 'solved' het antwoord erin.
    fields.forEach((field, index) => {
      field.disabled = true;
      if (view === 'solved') {
        field.value = answers[index][0];
        field.classList.add('good');
      }
    });
    return;
  }

  add(card, h('div', { class: 'btns' }, checkButton), feedback);

  // Zet de cursor alvast in het eerste veld (even wachten tot de kaart op de pagina staat).
  setTimeout(() => {
    if (fields[0]) {
      fields[0].focus({ preventScroll: true });
    }
  }, 0);
}
