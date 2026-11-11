/*
 * cloze.js – vraagsoort 'rijtje met een ontbrekend vakje'.
 *
 * Je ziet een rij vakjes waarvan er één een vraagteken is. Na 'Draai om' wordt dat
 * vakje ingevuld en geef je zelf aan of je het goed had.
 *
 * In data.js is dit een vraag van de soort 'card' met een extra veld clz:
 *   clz.q      de vraag boven het rijtje
 *   clz.label  het opschrift van het rijtje
 *   clz.parts  de woorden in de vakjes
 *   clz.hide   het nummer van het vakje dat verborgen is (0 = het eerste)
 *   clz.opt    nummers van vakjes die op de dia tussen haakjes staan (mag ontbreken)
 */

'use strict';

/** Vult de kaart met een rijtje. Wat er in 'parts' zit, staat in question.js. */
function drawCloze({ item, view, card, makeRef, onAnswer }) {
  const cloze = item.clz;

  function isOptional(index) {
    return (cloze.opt || []).includes(index);
  }

  /** Het woord van een vakje; een optioneel woord krijgt haakjes, net als op de dia. */
  function wordAt(index) {
    return isOptional(index) ? `(${cloze.parts[index]})` : cloze.parts[index];
  }

  const boxes = cloze.parts.map((_, index) => {
    const isGap = index === cloze.hide;
    return h(
      'div',
      {
        class: isGap ? 'cz gap' : 'cz',
        title: isOptional(index) ? 'tussen haakjes op de dia' : null,
      },
      isGap ? '?' : wordAt(index),
    );
  });

  // De rij: de vakjes met steeds een streepje ertussen.
  const rowParts = [];
  boxes.forEach((box, index) => {
    if (index > 0) {
      rowParts.push(h('span', { class: 'czsep', 'aria-hidden': 'true' }, '–'));
    }
    rowParts.push(box);
  });
  const row = h('div', { class: 'czrow' }, rowParts);

  // De verwijzing naar de dia hoort bij het antwoord en is dus eerst verborgen.
  const ref = makeRef();
  if (ref) {
    ref.hidden = true;
  }

  function reveal() {
    const gap = boxes[cloze.hide];
    gap.textContent = wordAt(cloze.hide);
    gap.classList.add('shown');
    if (ref) {
      ref.hidden = false;
    }
  }

  add(
    card,
    h('h2', {}, cloze.q),
    h('div', { class: 'czbox' }, h('div', { class: 'czlabel' }, cloze.label), row),
    ref,
  );

  if (view === 'solved') {
    reveal();
  }
  if (!view) {
    add(card, selfGradeButtons(reveal, onAnswer));
  }
}
