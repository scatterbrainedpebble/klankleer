/*
 * ipa.js – vraagsoort 'een klank in IPA typen'.
 *
 * Onder het invulveld staat een toetsenbordje met IPA-tekens. Nakijken gaat met de knop
 * of met Enter. Het antwoord wordt precies nagekeken (zie ipaNorm in checking.js).
 *
 * Velden in data.js:
 *   question  de vraag
 *   answers   de antwoorden die goed zijn; het eerste wordt getoond als je de vraag later bekijkt
 *   show      het juiste antwoord zoals het in de uitslag staat
 */

'use strict';

/**
 * De toetsen van het toetsenbordje: [teken, opschrift, uitleg].
 * Het zijn alle tekens van dia 21, ook de gewone letters: anders zou je aan de toetsen
 * kunnen zien welke tekens in het antwoord zitten.
 */
const IPA_KEYS = [
  ...[...'aeiouyɑɛəɪɔʏøœ'].map((char) => [char, char, char]),
  ['ː', 'ː', 'lengteteken'],
  // Het boogje onder een letter (U+032F) plakt aan het teken ervoor.
  // Op de toets staat het daarom onder een stippelrondje (U+25CC).
  ['̯', '◌̯', 'boogje eronder'],
];

/** Vult de kaart met een IPA-vraag. Wat er in 'parts' zit, staat in question.js. */
function drawIpa({ item, view, card, feedback, finish }) {
  const input = h('input', {
    class: 'blank ipain',
    autocomplete: 'off',
    autocapitalize: 'off',
    autocorrect: 'off',
    spellcheck: 'false',
    'aria-label': 'Antwoord in IPA',
  });

  /** Voegt een teken in op de plek van de cursor (of vervangt de geselecteerde tekst). */
  function insert(char) {
    if (input.disabled) {
      return;
    }
    const start = input.selectionStart ?? input.value.length;
    const end = input.selectionEnd ?? start;
    input.value = input.value.slice(0, start) + char + input.value.slice(end);
    input.focus();
    const cursor = start + char.length;
    input.setSelectionRange(cursor, cursor);
  }

  const keys = h(
    'div',
    { class: 'ipakeys' },
    IPA_KEYS.map(([char, label, title]) =>
      h(
        'button',
        { class: 'btn ipakey', type: 'button', title, onclick: () => insert(char) },
        label,
      ),
    ),
  );

  const checkButton = h('button', { class: 'btn primary', onclick: check }, 'Nakijken');

  function check() {
    if (checkButton.hidden) {
      return; // er is al nagekeken
    }
    const typed = ipaNorm(input.value);
    if (!typed) {
      input.focus(); // nog niets ingevuld
      return;
    }
    const correct = item.answers.map(ipaNorm).includes(typed);
    input.disabled = true;
    input.classList.add(correct ? 'good' : 'bad');
    for (const key of keys.querySelectorAll('button')) {
      key.disabled = true;
    }
    checkButton.hidden = true;

    const solution = h('div', {}, 'Juiste antwoord: ', h('span', { class: 'ipa' }, item.show));
    finish(correct ? 1 : 0, 1, verdict(correct), solution);
  }

  onEnter(input, check);
  add(
    card,
    h('h2', { class: 'ipaq', html: item.question }),
    h('div', { class: 'blankline' }, input),
  );

  if (view) {
    // Alleen bekijken: veld op slot, en bij 'solved' het antwoord erin.
    input.disabled = true;
    if (view === 'solved') {
      input.value = item.answers[0];
      input.classList.add('good');
    }
    return;
  }

  add(card, keys, h('div', { class: 'btns' }, checkButton), feedback);

  // Zet de cursor alvast in het veld (even wachten tot de kaart op de pagina staat).
  setTimeout(() => input.focus({ preventScroll: true }), 0);
}
