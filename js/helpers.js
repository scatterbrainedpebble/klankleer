/*
 * helpers.js – kleine hulpfuncties die overal in de site gebruikt worden.
 *
 * De site bouwt alle pagina's op met JavaScript. De functie h() is daarbij het
 * belangrijkste gereedschap: die maakt één HTML-element.
 */

'use strict';

/** Zoekt het eerste element dat bij een CSS-selector past, bijvoorbeeld $('#page'). */
function $(selector, root = document) {
  return root.querySelector(selector);
}

/**
 * Maakt een HTML-element.
 *
 *   h('p', { class: 'muted' }, 'Hallo')   geeft   <p class="muted">Hallo</p>
 *
 * tag       de naam van het element: 'div', 'button', ...
 * attrs     de eigenschappen van het element. Drie namen zijn bijzonder:
 *             class    de CSS-klassen
 *             html     de inhoud als HTML-tekst (alleen gebruikt voor tekst uit data.js)
 *             on...    een functie die bij een gebeurtenis hoort, bijvoorbeeld onclick
 *           Een eigenschap met de waarde false of null wordt overgeslagen.
 * children  wat er in het element komt: elementen, tekst, of een lijst daarvan.
 *           null wordt overgeslagen; zo kun je een onderdeel makkelijk weglaten.
 */
function h(tag, attrs = {}, ...children) {
  const element = document.createElement(tag);
  for (const [name, value] of Object.entries(attrs)) {
    if (name === 'class') {
      element.className = value;
    } else if (name === 'html') {
      element.innerHTML = value;
    } else if (name.startsWith('on')) {
      element.addEventListener(name.slice(2), value);
    } else if (value !== false && value != null) {
      element.setAttribute(name, value);
    }
  }
  return add(element, ...children);
}

/** Zet onderdelen (elementen, tekst of lijsten daarvan) in een element en geeft dat element terug. */
function add(element, ...children) {
  const nodes = children.flat().filter((child) => child != null);
  element.append(...nodes);
  return element;
}

/** Zet een lijst in willekeurige volgorde. De lijst zelf wordt aangepast en ook teruggegeven. */
function shuffle(list) {
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

/** Maakt een percentage van een deel en een totaal: pct(1, 4) geeft '25%'. Zonder totaal: een streepje. */
function pct(part, total) {
  if (!total) {
    return '–';
  }
  return Math.round((part / total) * 100) + '%';
}
