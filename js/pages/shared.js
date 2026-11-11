/*
 * shared.js – onderdelen die op meerdere pagina's terugkomen.
 *
 * In deze functies is 'tally' steeds een telling zoals counts() die geeft (zie results.js):
 * { good, bad, todo, n }.
 */

'use strict';

/**
 * Maakt een knop.
 * className = extra CSS-klassen, zoals 'primary'; attrs = extra eigenschappen, zoals { disabled: true }.
 */
function button(label, onClick, className = '', attrs = {}) {
  return h('button', { class: ('btn ' + className).trim(), onclick: onClick, ...attrs }, label);
}

/** De balk die laat zien welk deel goed (groen) en onjuist (rood) is. */
function progressBar(tally) {
  const goodPercent = (tally.good / tally.n) * 100;
  const badPercent = (tally.bad / tally.n) * 100;
  return h(
    'div',
    { class: 'sbar' },
    h('i', { class: 'g', style: `width:${goodPercent}%` }),
    h('i', { class: 'b', style: `width:${badPercent}%` }),
  );
}

/** De uitleg van de kleuren onder de balk. */
function legend() {
  return h(
    'div',
    { class: 'legend' },
    h('span', { style: '--c:var(--good)' }, 'goed'),
    h('span', { style: '--c:var(--bad)' }, 'onjuist'),
    h('span', { style: '--c:var(--line)' }, 'nog niet gedaan'),
  );
}

/** Drie grote cijfers naast elkaar: gedaan, goed en onjuist. */
function statBoxes(tally) {
  function box(value, label) {
    return h('div', {}, h('b', {}, value), label);
  }
  return h(
    'div',
    { class: 'stat' },
    box(pct(tally.good + tally.bad, tally.n), 'gedaan'),
    box(pct(tally.good, tally.n), 'goed'),
    box(pct(tally.bad, tally.n), 'onjuist'),
  );
}

/** Dezelfde cijfers als één regel tekst: 'gedaan 50% · goed 40% · onjuist 10%'. */
function numsText(tally) {
  const done = pct(tally.good + tally.bad, tally.n);
  const good = pct(tally.good, tally.n);
  const bad = pct(tally.bad, tally.n);
  return `gedaan ${done} · goed ${good} · onjuist ${bad}`;
}

/** De knop waarmee je een bladwijzer bij een vraag zet of weer weghaalt. */
function flagButton(item) {
  function labelText() {
    return flagged(item) ? 'Bladwijzer' : 'Bladwijzer toevoegen';
  }

  const label = h('span', { class: 'lbl' }, labelText());
  const toggle = h(
    'button',
    {
      class: flagged(item) ? 'flag on' : 'flag',
      title: 'Bladwijzer: deze vraag extra reviewen, ook als je hem goed hebt',
    },
    h('span', { class: 'ic' }, '⚑'),
    label,
  );

  toggle.addEventListener('click', () => {
    if (state.flags[item.code]) {
      delete state.flags[item.code];
    } else {
      state.flags[item.code] = Date.now();
    }
    save();
    toggle.classList.toggle('on', flagged(item));
    label.textContent = labelText();
  });

  return toggle;
}

/**
 * De regel boven een vraag: links wat je ziet (nummer en titel),
 * rechts de knop Bladwijzer en waar je bent ('3 / 146').
 */
function crumb(item, left, right) {
  return h(
    'div',
    { class: 'crumb' },
    h('span', {}, left),
    h('span', { class: 'cr' }, flagButton(item), right),
  );
}

/** Zet na het nakijken de focus op een knop (meestal Volgende), zodat Enter meteen doorgaat. */
function focusLater(target) {
  setTimeout(() => target.focus({ preventScroll: true }), 0);
}
