/*
 * card.js – vraagsoort 'kaartje'.
 *
 * Je ziet de voorkant. Na 'Draai om' zie je ook de achterkant en geef je zelf aan
 * of je het goed had.
 *
 * Velden in data.js: front (voorkant), back (achterkant), eventueel image en alt (plaatje).
 */

'use strict';

/** Vult de kaart met een kaartje. Wat er in 'parts' zit, staat in question.js. */
function drawCard({ item, view, card, makeRef, figure, onAnswer }) {
  const front = h('div', { class: 'front', html: item.front });
  const back = h('div', { class: 'back', hidden: true, html: item.back });

  // De verwijzing naar de dia hoort bij het antwoord en is dus eerst verborgen.
  const ref = makeRef();
  if (ref) {
    ref.hidden = true;
  }

  function reveal() {
    back.hidden = false;
    if (ref) {
      ref.hidden = false;
    }
  }

  add(card, figure, h('div', { class: 'flip' }, front, back, ref));

  if (view === 'solved') {
    reveal();
  }
  if (!view) {
    add(card, selfGradeButtons(reveal, onAnswer));
  }
}
