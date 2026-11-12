/*
 * single.js – één losse vraag, via een link.
 *
 *   #/vraag/KLC2D16V1     de vraag met deze code
 *
 * Zo kun je iemand een link sturen naar één bepaalde vraag, bijvoorbeeld als voorbeeld.
 * Wat je hier antwoordt, wordt nergens bewaard: het telt niet mee voor Oefenen,
 * Review of '× onjuist gehad'.
 */

'use strict';

/** Tekent de pagina met één losse vraag. Bestaat de code niet, dan zeggen we dat. */
function renderSingle(page, code) {
  const item = byCode[code];

  if (!item) {
    add(
      page,
      h(
        'div',
        { class: 'card' },
        h('h2', {}, 'Deze vraag bestaat niet'),
        h('p', {}, 'Controleer de link, of ga naar Home om te oefenen.'),
        h(
          'div',
          { class: 'btns' },
          button('Naar Home', () => go('#/'), 'primary'),
        ),
      ),
    );
    return;
  }

  const college = colById[item.college];
  const againButton = button('Nog een keer', () => render());
  const practiceButton = button(
    `Oefenen met ${college.title}`,
    () => go(`#/${college.id}/oefenen`),
    'primary',
  );

  add(
    page,
    h(
      'p',
      { class: 'small muted' },
      `Losse vraag uit ${college.title}. Wat je hier antwoordt, telt niet mee voor je voortgang.`,
    ),
    h('div', { class: 'crumb' }, h('span', {}, `${item.num}. ${item.title}`)),
    renderQuestion(item),
    h('div', { class: 'btns' }, againButton, practiceButton),
  );
}
