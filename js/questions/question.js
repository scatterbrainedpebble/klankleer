/*
 * question.js – één vraag tekenen: het deel dat voor alle vraagsoorten gelijk is.
 *
 * Elke vraagsoort heeft een eigen bestand met een eigen tekenfunctie:
 *
 *   soort in data.js        bestand      wat je doet
 *   card                    card.js      kaartje omdraaien en zelf beoordelen
 *   card met 'clz' erin     cloze.js     rijtje met een ontbrekend vakje, zelf beoordelen
 *   blanks                  blanks.js    woorden invullen in een zin
 *   mc                      mc.js        meerkeuze
 *   click                   click.js     op de juiste lijn in een tekening klikken
 *   ipa                     ipa.js       een klank in IPA typen
 *   drag                    drag.js      kaartjes naar vakken slepen
 *
 * De pagina's (Oefenen en Review) roepen alleen renderQuestion() aan.
 */

'use strict';

/**
 * Maakt de kaart met één vraag en geeft die terug.
 *
 * item     de vraag (uit data.js)
 * options  onAnswer(score, max)  wordt aangeroepen zodra de vraag is nagekeken of zelf beoordeeld
 *          onOverride()          als deze functie er is, komt bij een onjuist antwoord de knop
 *                                'Ik had deze wel goed'; de functie wordt aangeroepen bij een klik
 *          view                  alleen bekijken, niet beantwoorden:
 *                                'solved' = met de oplossing erbij, 'locked' = zonder oplossing
 */
function renderQuestion(item, { onAnswer = () => {}, onOverride = null, view = null } = {}) {
  const card = h('div', { class: view ? 'card viewonly' : 'card' });
  const feedback = h('div', { class: 'feedback' });

  /**
   * Maakt de regel 'Zie: week 1, college 1, dia 14' (of niets, als de vraag geen verwijzing heeft).
   * Is de PDF van het college gekoppeld, dan is het dianummer een link naar die dia.
   */
  function makeRef() {
    return refLine(item); // zie js/slides.js
  }

  /** Het plaatje bij de vraag, als dat er is. */
  let figure = null;
  if (item.image) {
    figure = h('div', { class: 'figure' }, h('img', { src: item.image, alt: item.alt || '' }));
  }

  /**
   * Na het nakijken: laat de uitslag zien en geef de score door.
   * headline = de kop ('Goed!'); extraLines = regels eronder, zoals het juiste antwoord.
   */
  function finish(score, max, headline, ...extraLines) {
    const correct = score === max;
    const scoreLine = h('div', { class: 'score' }, headline);
    feedback.className = 'feedback show ' + (correct ? 'good' : 'bad');
    feedback.innerHTML = '';
    add(feedback, scoreLine, extraLines, makeRef());
    onAnswer(score, max);

    if (correct || !onOverride) {
      return;
    }
    // Onjuist: bied de knop 'Ik had deze wel goed' aan.
    const overrideButton = h('button', { class: 'btn small override' }, 'Ik had deze wel goed');
    const row = h(
      'div',
      { class: 'ovrow' },
      overrideButton,
      h(
        'span',
        { class: 'muted small' },
        'Bijvoorbeeld bij een tikfout of een probleem met de vraag.',
      ),
    );
    overrideButton.addEventListener('click', () => {
      onOverride();
      row.remove();
      feedback.className = 'feedback show good';
      scoreLine.textContent = 'Goed gerekend: je gaf aan dat je deze wel goed had.';
    });
    feedback.append(row);
  }

  // Alles wat een tekenfunctie nodig heeft, in één pakketje.
  const parts = { item, view, card, feedback, makeRef, figure, onAnswer, finish };
  drawQuestion(parts);
  return card;
}

/** Kiest de tekenfunctie die bij de soort vraag hoort en laat die de kaart vullen. */
function drawQuestion(parts) {
  const item = parts.item;
  if (item.type === 'card' && item.clz) {
    drawCloze(parts);
  } else if (item.type === 'card') {
    drawCard(parts);
  } else if (item.type === 'blanks') {
    drawBlanks(parts);
  } else if (item.type === 'mc') {
    drawMc(parts);
  } else if (item.type === 'click') {
    drawClick(parts);
  } else if (item.type === 'ipa') {
    drawIpa(parts);
  } else if (item.type === 'drag') {
    drawDrag(parts);
  } else {
    throw new Error('Onbekende vraagsoort: ' + item.type);
  }
}

/* ---------- gedeeld door meerdere vraagsoorten ---------- */

/** De kop van de uitslag bij een vraag die helemaal goed of helemaal onjuist is. */
function verdict(correct) {
  return correct ? 'Goed!' : 'Helaas, dat is onjuist.';
}

/**
 * Zorgt dat Enter in een invulveld hetzelfde doet als de knop Nakijken.
 *
 * Enter doet niets als het veld nog leeg is, of als de toets nog ingedrukt is van daarnet
 * (event.repeat). Anders kan één Enter te veel bij de vorige vraag (op Volgende) de nieuwe
 * vraag meteen leeg laten nakijken, en dan staat hij als onjuist. Een leeg antwoord
 * inleveren kan nog steeds met de knop Nakijken.
 */
function onEnter(input, action) {
  input.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter') {
      return;
    }
    event.preventDefault();
    const isEmpty = input.value.trim() === '';
    if (event.repeat || isEmpty) {
      return;
    }
    action();
  });
}

/**
 * De knoppen onder een kaartje of rijtje: eerst 'Draai om', daarna geef je zelf aan
 * of je het goed had.
 *
 * reveal()            laat het antwoord zien
 * onAnswer(score, 1)  krijgt 1 bij 'Had ik goed' en 0 bij 'Had ik fout'
 */
function selfGradeButtons(reveal, onAnswer) {
  const turnButton = h('button', { class: 'btn primary' }, 'Draai om');
  const wrongButton = h('button', { class: 'btn bad', hidden: true }, '✗ Had ik fout');
  const rightButton = h('button', { class: 'btn good', hidden: true }, '✓ Had ik goed');

  turnButton.addEventListener('click', () => {
    reveal();
    turnButton.hidden = true;
    wrongButton.hidden = false;
    rightButton.hidden = false;
  });

  function grade(score) {
    // Beide knoppen gaan uit; de knop die je koos houdt zijn kleur (zie .chosen in style.css).
    const chosenButton = score ? rightButton : wrongButton;
    wrongButton.disabled = true;
    rightButton.disabled = true;
    chosenButton.classList.add('chosen');
    chosenButton.setAttribute('aria-pressed', 'true');
    onAnswer(score, 1);
  }
  wrongButton.addEventListener('click', () => grade(0));
  rightButton.addEventListener('click', () => grade(1));

  return h('div', { class: 'btns center' }, wrongButton, turnButton, rightButton);
}
