/*
 * click.js – vraagsoort 'klikken op een lijn'.
 *
 * Je ziet een tekening van lijnen (de vocalendriehoek) en klikt op de lijn die bedoeld wordt.
 * Je klik wordt een stip; die mag je verzetten tot je op Nakijken klikt.
 *
 * Velden in data.js:
 *   question  de vraag
 *   lines     de lijnen van de tekening: [[x1, y1, x2, y2], ...]
 *   target    het nummer van de juiste lijn (0 = de eerste)
 */

'use strict';

/** Vult de kaart met een klikvraag. Wat er in 'parts' zit, staat in question.js. */
function drawClick({ item, view, card, feedback, finish }) {
  const SVG_NS = 'http://www.w3.org/2000/svg';
  const PADDING = 20; // witruimte rond de tekening
  const TOLERANCE = 12; // zo ver mag je naast de lijn klikken (in eenheden van de tekening)

  // De tekening is zo groot als de lijnen samen, plus wat witruimte eromheen.
  const xs = item.lines.flatMap((line) => [line[0], line[2]]);
  const ys = item.lines.flatMap((line) => [line[1], line[3]]);
  const minX = Math.min(...xs) - PADDING;
  const minY = Math.min(...ys) - PADDING;
  const width = Math.max(...xs) - minX + PADDING;
  const height = Math.max(...ys) - minY + PADDING;

  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('viewBox', `${minX} ${minY} ${width} ${height}`);
  svg.setAttribute('class', 'clicksvg');

  /** Maakt een vorm (lijn, cirkel, ...) en zet die in de tekening. */
  function addShape(tag, attrs) {
    const shape = document.createElementNS(SVG_NS, tag);
    for (const name in attrs) {
      shape.setAttribute(name, attrs[name]);
    }
    svg.append(shape);
    return shape;
  }

  // Een doorzichtig vlak over de hele tekening, zodat een klik overal aankomt.
  addShape('rect', { x: minX, y: minY, width, height, fill: 'transparent' });
  const segments = item.lines.map(([x1, y1, x2, y2]) =>
    addShape('line', { x1, y1, x2, y2, class: 'seg' }),
  );
  const dot = addShape('circle', { r: 4.5, class: 'dot', visibility: 'hidden' });

  /** De afstand van het punt (x, y) tot een lijnstuk. */
  function distanceToLine(x, y, [x1, y1, x2, y2]) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    // along = hoe ver langs het lijnstuk het dichtstbijzijnde punt ligt (0 = begin, 1 = eind)
    const along = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);
    const t = Math.max(0, Math.min(1, along));
    return Math.hypot(x - x1 - t * dx, y - y1 - t * dy);
  }

  let point = null; // waar je geklikt hebt, in eenheden van de tekening
  let locked = Boolean(view); // op slot na het nakijken, of als je de vraag alleen bekijkt

  svg.addEventListener('click', (event) => {
    if (locked) {
      return;
    }
    // Reken de plek op het scherm om naar een plek in de tekening.
    const screenPoint = new DOMPoint(event.clientX, event.clientY);
    const drawingPoint = screenPoint.matrixTransform(svg.getScreenCTM().inverse());
    point = { x: drawingPoint.x, y: drawingPoint.y };
    dot.setAttribute('cx', point.x);
    dot.setAttribute('cy', point.y);
    dot.setAttribute('visibility', 'visible');
    checkButton.disabled = false;
  });

  function showTarget() {
    segments[item.target].classList.add('target');
  }

  const checkButton = h(
    'button',
    { class: 'btn primary', disabled: true, onclick: check },
    'Nakijken',
  );

  function check() {
    locked = true;
    const distances = item.lines.map((line) => distanceToLine(point.x, point.y, line));
    const toTarget = distances[item.target];
    // Goed = dicht genoeg bij de juiste lijn, en geen andere lijn is dichterbij.
    const correct = toTarget <= TOLERANCE && distances.every((distance) => distance >= toTarget);
    dot.classList.add(correct ? 'good' : 'bad');
    showTarget();
    checkButton.hidden = true;
    finish(correct ? 1 : 0, 1, verdict(correct), h('div', {}, 'De juiste lijn is groen gemaakt.'));
  }

  add(card, h('h2', { html: item.question }), h('div', { class: 'clickwrap' }, svg));

  if (view) {
    if (view === 'solved') {
      showTarget();
    }
    return;
  }

  add(
    card,
    h('p', { class: 'hint' }, 'Klik op een lijn in de tekening en kijk je antwoord daarna na.'),
    h('div', { class: 'btns' }, checkButton),
    feedback,
  );
}
