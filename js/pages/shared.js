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
  const total = tally.n || 1; // 0 vragen (alles genegeerd): lege balk
  const goodPercent = (tally.good / total) * 100;
  const badPercent = (tally.bad / total) * 100;
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

/*
 * Kleine pictogrammen (SVG, getekend met lijnen in de tekstkleur).
 * ICONS.bookmark = een bladwijzer (lintje), ICONS.ignore = een rondje met een streep erdoor.
 */
const ICONS = {
  bookmark:
    '<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M6 3h12v18l-6-4.5L6 21z"/></svg>',
  ignore:
    '<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M5.6 5.6l12.8 12.8"/></svg>',
};

/** Een pictogram uit ICONS als element, bijvoorbeeld icon('bookmark'). */
function icon(name) {
  return h('span', { class: 'ic', html: ICONS[name] });
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
    icon('bookmark'),
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
 * De knop Negeer: de vraag doet daarna niet meer mee bij Oefenen, Review en de percentages.
 * Je vindt hem terug in het lijstje 'Genegeerd' bij Voortgang.
 */
function ignoreButton(item) {
  return h(
    'button',
    {
      class: 'ignore',
      title: 'Negeer deze vraag: hij komt niet meer terug (terughalen kan bij Voortgang)',
      onclick: () => {
        ignoreItem(item);
        render();
      },
    },
    icon('ignore'),
    h('span', { class: 'lbl' }, 'Negeer'),
  );
}

/**
 * De regel boven een vraag: links wat je ziet (nummer en titel),
 * rechts de knoppen Negeer en Bladwijzer en waar je bent ('3 / 146').
 * withIgnore = false: zonder de knop Negeer.
 */
function crumb(item, left, right, withIgnore = true) {
  return h(
    'div',
    { class: 'crumb' },
    h('span', {}, left),
    h('span', { class: 'cr' }, withIgnore ? ignoreButton(item) : null, flagButton(item), right),
  );
}

/**
 * De melding na Negeer, bovenaan de volgende pagina: welke vraag je negeert,
 * met een knop om dat meteen ongedaan te maken. Geeft null als er niets genegeerd is.
 */
function ignoredNotice() {
  if (!justIgnored) {
    return null;
  }
  const { code, pos } = justIgnored;
  const item = byCode[code];
  justIgnored = null;
  return h(
    'div',
    { class: 'notice small' },
    h(
      'span',
      {},
      `Je negeert nu vraag ${item.num}. ${item.title}. Je vindt hem terug bij Voortgang. `,
    ),
    h(
      'button',
      {
        class: 'linkbtn',
        onclick: () => {
          restoreItem(item);
          state.pos = pos; // terug naar waar je was
          if (reviewQueue && !reviewQueue.includes(code)) {
            reviewQueue.unshift(code); // in een lopende review komt hij weer vooraan
          }
          save();
          render();
        },
      },
      'Ongedaan maken',
    ),
  );
}

/** Zet na het nakijken de focus op een knop (meestal Volgende), zodat Enter meteen doorgaat. */
function focusLater(target) {
  setTimeout(() => target.focus({ preventScroll: true }), 0);
}
