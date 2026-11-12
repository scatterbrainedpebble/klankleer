/*
 * drag.js – vraagsoort 'slepen'.
 *
 * Op een plaatje staan vakken. Je sleept kaartjes (woorden) naar het juiste vak.
 * Het kan op drie manieren:
 *   - slepen met de muis of je vinger;
 *   - tikken: eerst een kaartje, dan een vak;
 *   - toetsenbord: Tab naar een kaartje en Enter, dan Tab naar een vak en Enter (Esc annuleert).
 *
 * Op een smal scherm (telefoon) past een breed plaatje niet. Dan werkt de vraag 'compact':
 * het plaatje wordt zo smal als het scherm, de vakken krijgen alleen een nummer, en onder
 * het plaatje staat een lijst met die nummers. De kaartjes staan daaronder; je tikt eerst
 * een kaartje aan en dan een regel van de lijst (of het vak op het plaatje).
 *
 * Velden in data.js:
 *   question  de vraag
 *   bg        het plaatje op de achtergrond
 *   size      de maat van het veld in eigen eenheden: { width, height }
 *   zones     de vakken: plek (x, y) in procenten, maat (w, h) in em,
 *             single = er past maar één kaartje in, correct = nummers van de kaartjes die erin horen
 *   els       de kaartjes: text, startplek (x, y) in procenten en maat (w, h) in em
 *   hint      een eigen aanwijzing onder de vraag (mag ontbreken)
 *
 * Over de maten: het veld is item.size.width eenheden breed en 1 em is 16 van die eenheden.
 * De lettergrootte van het veld wordt steeds aangepast aan de breedte op het scherm (zie fit()).
 * Omdat kaartjes en vakken in em zijn gemaakt, schalen ze dan vanzelf mee.
 */

'use strict';

/** Vult de kaart met een sleepvraag. Wat er in 'parts' zit, staat in question.js. */
function drawDrag({ item, view, given, card, feedback, finish, remember }) {
  const UNITS_PER_EM = 16;
  const DRAG_THRESHOLD = 6; // pas na zoveel pixels bewegen telt het als slepen in plaats van tikken
  const fieldWidth = item.size.width;
  const fieldHeight = item.size.height;

  /* ---------- het veld, de vakken en de kaartjes maken ---------- */

  // Brede velden worden niet smaller dan 640px. Is het scherm daarvoor te smal (telefoon),
  // dan gebruiken we de compacte vorm met een genummerde lijst (zie boven).
  const minWidth = fieldWidth >= 900 ? 640 : 0;
  const compact = minWidth > 0 && document.documentElement.clientWidth < minWidth + 80;
  const field = h(
    'div',
    {
      class: 'dq' + (compact ? ' compact' : ''),
      style: `aspect-ratio:${fieldWidth}/${fieldHeight};min-width:${compact ? 0 : minWidth}px`,
    },
    h('img', { class: 'bg', src: item.bg, alt: '' }),
  );

  // Nummers voor de vakken in leesvolgorde: van boven naar beneden, dan van links naar rechts.
  const readingOrder = item.zones
    .map((zone, zoneIndex) => zoneIndex)
    .sort((a, b) => item.zones[a].y - item.zones[b].y || item.zones[a].x - item.zones[b].x);
  const zoneNumber = [];
  readingOrder.forEach((zoneIndex, rank) => {
    zoneNumber[zoneIndex] = rank + 1;
  });

  const zones = item.zones.map((zone, zoneIndex) => {
    const widthPercent = ((zone.w * UNITS_PER_EM) / fieldWidth) * 100;
    const heightPercent = ((zone.h * UNITS_PER_EM) / fieldHeight) * 100;
    return h('div', {
      class: 'zone',
      'data-z': zoneIndex,
      role: 'button',
      'aria-label': 'vak ' + zoneNumber[zoneIndex],
      tabindex: -1,
      style: `left:${zone.x}%;top:${zone.y}%;width:${widthPercent}%;height:${heightPercent}%`,
      html: compact ? `<span class="znum">${zoneNumber[zoneIndex]}</span>` : '',
    });
  });

  // Alleen in de compacte vorm: de lijst met nummers en de voorraad kaartjes.
  const slots = item.zones.map((zone, zoneIndex) =>
    h('div', {
      class: 'dqslot',
      role: 'button',
      tabindex: -1,
      'aria-label': 'regel ' + zoneNumber[zoneIndex],
      'data-z': zoneIndex,
    }),
  );
  const list = h(
    'ol',
    { class: 'dqlist' },
    readingOrder.map((zoneIndex) =>
      h('li', {}, h('span', { class: 'dqnum' }, String(zoneNumber[zoneIndex])), slots[zoneIndex]),
    ),
  );
  const pool = h('div', { class: 'dqpool' });

  /** Waar de kaartjes van een vak in komen: het vak zelf, of in de compacte vorm de regel van de lijst. */
  function holderOf(zoneIndex) {
    return compact ? slots[zoneIndex] : zones[zoneIndex];
  }

  // De startplekken husselen, zodat de volgorde niets verraadt. Kaartjes wisselen alleen
  // met kaartjes van dezelfde grootte, en nooit blijft alles op zijn oorspronkelijke plek.
  const spots = item.els.map((el) => ({ x: el.x, y: el.y }));
  const indexesBySize = {};
  item.els.forEach((el, chipIndex) => {
    const size = el.w + 'x' + el.h;
    if (!indexesBySize[size]) {
      indexesBySize[size] = [];
    }
    indexesBySize[size].push(chipIndex);
  });
  for (const indexes of Object.values(indexesBySize)) {
    if (indexes.length < 2) {
      continue;
    }
    let shuffled;
    do {
      shuffled = shuffle(indexes.slice());
    } while (shuffled.every((chipIndex, k) => chipIndex === indexes[k]));
    const originalSpots = indexes.map((chipIndex) => ({
      x: item.els[chipIndex].x,
      y: item.els[chipIndex].y,
    }));
    shuffled.forEach((chipIndex, k) => {
      spots[chipIndex] = originalSpots[k];
    });
  }

  const chips = item.els.map((el, chipIndex) => {
    const spot = spots[chipIndex];
    return h('div', {
      class: 'chip',
      tabindex: 0,
      role: 'button',
      html: el.text,
      'data-e': chipIndex,
      style: compact ? '' : `left:${spot.x}%;top:${spot.y}%;width:${el.w}em;height:${el.h}em`,
    });
  });

  // De stijl van elk kaartje op zijn startplek, om het later terug te kunnen leggen.
  const homeStyles = chips.map((chip) => chip.getAttribute('style'));

  if (compact) {
    // In de voorraad staan de kaartjes in de gehusselde volgorde van hun startplekken.
    const poolOrder = chips
      .map((chip, chipIndex) => chipIndex)
      .sort((a, b) => spots[a].y - spots[b].y || spots[a].x - spots[b].x);
    add(field, zones);
    add(
      pool,
      poolOrder.map((chipIndex) => chips[chipIndex]),
    );
  } else {
    add(field, zones, chips);
  }

  /** Past de lettergrootte aan de breedte van het veld aan: 1 em = 16 eenheden van het veld. */
  function fit() {
    field.style.fontSize = (field.clientWidth / fieldWidth) * UNITS_PER_EM + 'px';
  }
  new ResizeObserver(fit).observe(field);
  requestAnimationFrame(fit);

  /* ---------- bijhouden waar de kaartjes liggen ---------- */

  let locked = false; // op slot na het nakijken, of als je de vraag alleen bekijkt
  let selected = null; // het kaartje dat gekozen is door tikken of met het toetsenbord
  const zoneOfChip = new Map(); // nummer van het kaartje -> nummer van het vak waar het in ligt

  function chipIndexOf(chip) {
    return Number(chip.dataset.e);
  }

  /** Legt een kaartje terug op zijn startplek. */
  function sendHome(chip) {
    const chipIndex = chipIndexOf(chip);
    (compact ? pool : field).append(chip);
    chip.setAttribute('style', homeStyles[chipIndex]);
    zoneOfChip.delete(chipIndex);
  }

  /** Legt een kaartje in een vak. Past er maar één kaartje in, dan gaat het vorige terug. */
  function place(chip, zoneIndex) {
    const chipIndex = chipIndexOf(chip);
    if (item.zones[zoneIndex].single) {
      for (const other of [...holderOf(zoneIndex).querySelectorAll('.chip')]) {
        if (other !== chip) {
          sendHome(other);
        }
      }
    }
    holderOf(zoneIndex).append(chip);
    const el = item.els[chipIndex];
    chip.setAttribute('style', compact ? '' : `width:${el.w}em;height:${el.h}em`);
    zoneOfChip.set(chipIndex, zoneIndex);
  }

  /** Geeft het nummer van het vak op een plek op het scherm, of -1 als daar geen vak is. */
  function zoneAt(x, y) {
    return zones.findIndex((zone) => {
      const rect = zone.getBoundingClientRect();
      return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
    });
  }

  /**
   * Kiest een kaartje (of met null: niets gekozen).
   * Zolang er een kaartje gekozen is, kom je met Tab bij de vakken en niet bij
   * kaartjes die al in een vak liggen.
   */
  function select(chip) {
    selected = chip;
    for (const other of chips) {
      other.classList.toggle('sel', other === chip);
      other.tabIndex = chip && zoneOfChip.has(chipIndexOf(other)) ? -1 : 0;
    }
    for (const zone of zones) {
      zone.classList.toggle('target', Boolean(chip));
      zone.tabIndex = chip && !compact ? 0 : -1;
    }
    for (const slot of slots) {
      slot.classList.toggle('target', Boolean(chip));
      slot.tabIndex = chip && compact ? 0 : -1;
    }
  }

  /** Is dit een toets waarmee je iets 'indrukt' (Enter of spatie)? */
  function isActivateKey(event) {
    return event.key === 'Enter' || event.key === ' ';
  }

  /* ---------- kaartjes: slepen, tikken en toetsenbord ---------- */

  function makeMovable(chip) {
    let start = null; // waar de muis of vinger neerkwam; null = er wordt niet gesleept
    let moved = false; // is er ver genoeg bewogen om het slepen te noemen?
    let grip = null; // op welke plek binnen het kaartje je het vasthebt

    function onMove(event) {
      if (!start || locked || compact) {
        return; // in de compacte vorm wordt er niet gesleept, alleen getikt
      }
      const distance = Math.hypot(event.clientX - start.x, event.clientY - start.y);
      if (!moved && distance < DRAG_THRESHOLD) {
        return;
      }
      if (!moved) {
        // Het slepen begint: maak het kaartje los en zet het op dezelfde plek in het veld.
        moved = true;
        select(null);
        const rect = chip.getBoundingClientRect();
        field.append(chip);
        chip.style.position = 'absolute';
        chip.style.width = rect.width + 'px';
        chip.style.height = rect.height + 'px';
        grip = { x: start.x - rect.left, y: start.y - rect.top };
        chip.classList.add('drag');
      }
      event.preventDefault();
      const fieldRect = field.getBoundingClientRect();
      chip.style.left = event.clientX - fieldRect.left - grip.x + 'px';
      chip.style.top = event.clientY - fieldRect.top - grip.y + 'px';
      // Laat zien boven welk vak het kaartje hangt.
      const hoveredZone = zoneAt(event.clientX, event.clientY);
      zones.forEach((zone, zoneIndex) => zone.classList.toggle('hover', zoneIndex === hoveredZone));
    }

    function onUp(event) {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onUp);
      if (!start) {
        return;
      }
      const wasDragged = moved;
      start = null;
      for (const zone of zones) {
        zone.classList.remove('hover');
      }
      if (!wasDragged) {
        // Een tik zonder slepen: het kaartje kiezen, of de keuze weer opheffen.
        if (!locked) {
          select(selected === chip ? null : chip);
        }
        return;
      }
      chip.classList.remove('drag');
      const cancelled = event.type === 'pointercancel';
      const zoneIndex = cancelled ? -1 : zoneAt(event.clientX, event.clientY);
      if (zoneIndex >= 0) {
        place(chip, zoneIndex);
      } else {
        sendHome(chip);
      }
    }

    chip.addEventListener('pointerdown', (event) => {
      if (locked || event.button > 0) {
        return; // alleen de linkermuisknop, een vinger of een pen
      }
      event.preventDefault();
      start = { x: event.clientX, y: event.clientY };
      moved = false;
      window.addEventListener('pointermove', onMove, { passive: false });
      window.addEventListener('pointerup', onUp);
      window.addEventListener('pointercancel', onUp);
    });

    chip.addEventListener('keydown', (event) => {
      if (isActivateKey(event) && !locked) {
        event.preventDefault();
        select(selected === chip ? null : chip);
        if (selected) {
          holderOf(readingOrder[0]).focus();
        }
      }
      if (event.key === 'Escape') {
        select(null);
      }
    });
  }
  chips.forEach((chip) => makeMovable(chip));

  /* ---------- vakken: een gekozen kaartje erin leggen ---------- */

  [...zones, ...slots].forEach((zone) => {
    const zoneIndex = Number(zone.dataset.z);
    zone.addEventListener('click', (event) => {
      if (selected && !locked && !event.target.closest('.chip')) {
        place(selected, zoneIndex);
        select(null);
      }
    });

    zone.addEventListener('keydown', (event) => {
      if (isActivateKey(event) && selected && !locked) {
        event.preventDefault();
        const chip = selected;
        place(chip, zoneIndex);
        select(null);
        chip.focus();
      }
      if (event.key === 'Escape' && selected) {
        const chip = selected;
        select(null);
        chip.focus();
      }
    });
  });

  // Een klik naast de vakken: een gekozen kaartje dat al in een vak lag, gaat terug naar de voorraad.
  [field, pool].forEach((area) =>
    area.addEventListener('click', (event) => {
      const clickedBackground =
        event.target === field || event.target === pool || event.target.classList.contains('bg');
      if (!clickedBackground) {
        return;
      }
      if (selected && zoneOfChip.has(chipIndexOf(selected))) {
        sendHome(selected);
      }
      select(null);
    }),
  );

  /* ---------- nakijken en de oplossing tonen ---------- */

  const checkButton = h('button', { class: 'btn primary', onclick: check }, 'Nakijken');
  const solveButton = h(
    'button',
    { class: 'btn', hidden: true, onclick: showSolution },
    'Toon oplossing',
  );

  function check() {
    locked = true;
    select(null);
    let score = 0;
    chips.forEach((chip, chipIndex) => {
      const zoneIndex = zoneOfChip.get(chipIndex);
      const correct = zoneIndex != null && item.zones[zoneIndex].correct.includes(chipIndex);
      if (correct) {
        score++;
      }
      chip.classList.add(correct ? 'good' : 'bad');
    });
    const allCorrect = score === chips.length;
    checkButton.hidden = true;
    // Onthoud per kaartje in welk vak het lag: { nummer kaartje: nummer vak }.
    remember(Object.fromEntries(zoneOfChip));
    solveButton.hidden = allCorrect;
    const headline = allCorrect ? 'Alles goed!' : `${score} van ${chips.length} goed`;
    finish(score, chips.length, headline);
  }

  /** Legt elk kaartje in het vak waar het hoort (of terug op zijn startplek als het nergens hoort). */
  function showSolution() {
    chips.forEach((chip, chipIndex) => {
      const zoneIndex = item.zones.findIndex((zone) => zone.correct.includes(chipIndex));
      chip.classList.remove('bad');
      chip.classList.add('good');
      if (zoneIndex >= 0) {
        place(chip, zoneIndex);
      } else {
        sendHome(chip);
      }
    });
    solveButton.hidden = true;
  }

  const compactHint =
    'Op een telefoon tik je in plaats van te slepen: eerst een woord, dan een nummer in de lijst onder het plaatje.';
  add(card, h('h2', { html: item.question }));
  if (compact && !view) {
    // Op de telefoon staat de uitleg meteen onder de vraag, nog boven het plaatje.
    add(card, h('p', { class: 'hint' }, compactHint));
  }
  add(card, h('div', { class: 'dqwrap' }, field));
  if (compact) {
    add(card, list, pool);
  }

  if (view) {
    // Alleen bekijken: alles op slot, en bij 'solved' de oplossing erin.
    locked = true;
    if (view === 'solved') {
      showSolution();
    } else if (given) {
      // Je kaartjes van toen weer in hun vak, groen of rood.
      chips.forEach((chip, chipIndex) => {
        const zoneIndex = given[chipIndex];
        if (zoneIndex == null || !item.zones[zoneIndex]) {
          return;
        }
        place(chip, zoneIndex);
        const correct = item.zones[zoneIndex].correct.includes(chipIndex);
        chip.classList.add(correct ? 'good' : 'bad');
      });
    }
    return;
  }

  const defaultHint =
    'Sleep de woorden naar de vakken. Op een telefoon kun je ook eerst een woord en dan een vak aantikken. Met het toetsenbord: Tab naar een woord en Enter, daarna met Tab naar het juiste vak en Enter.';
  add(
    card,
    compact ? null : h('p', { class: 'hint' }, item.hint || defaultHint),
    h('div', { class: 'btns' }, checkButton, solveButton),
    feedback,
  );
}
