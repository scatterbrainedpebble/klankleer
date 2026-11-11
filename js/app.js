/*
 * app.js – het startpunt van de site.
 *
 * De site is één HTML-pagina. Welke 'pagina' je ziet, hangt af van het stukje
 * achter het # in de adresbalk:
 *
 *   #/                                  Home
 *   #/overzicht                         Overzicht per onderwerp
 *   #/review                            Review: kiezen wat je wilt reviewen
 *   #/review/c1+c2/lastig+bladwijzer    Review: de vragen bij die keuze
 *   #/c1/oefenen                        Oefenen van college 1
 *   #/c1/voortgang                      Voortgang van college 1
 *   #/c1/nieuwe-ronde                   Nieuwe ronde van college 1
 *
 * render() leest het adres, maakt de pagina leeg en laat de juiste functie
 * uit de map pages/ de nieuwe pagina tekenen. Dat gebeurt bij het openen
 * van de site en elke keer dat het adres verandert.
 */

'use strict';

/** Gaat naar een ander adres. Sta je daar al, dan wordt de pagina opnieuw getekend. */
function go(hash) {
  if (location.hash === hash) {
    render();
  } else {
    location.hash = hash; // de browser meldt de verandering; daarna volgt render() vanzelf
  }
}

/** Tekent de pagina die bij het adres hoort. */
function render() {
  // Het adres in stukjes: '#/c1/oefenen' wordt ['c1', 'oefenen'].
  const [first, second, third] = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  const college = colById[first]; // het college uit het adres, als het eerste stukje er een is

  // Adressen uit oudere versies van de site doorsturen naar het adres van nu.
  if (first === 'nieuwe-ronde') {
    go(colById[second] ? `#/${second}/nieuwe-ronde` : '#/');
    return;
  }
  if (college && second === 'review') {
    go(`#/review/${college.id}/${OLD_REVIEW_TYPES[third] || 'lastig+bladwijzer'}`);
    return;
  }
  // Een onbekend adres gaat naar Home.
  if (first && !college && first !== 'overzicht' && first !== 'review') {
    go('#/');
    return;
  }

  const page = $('#page');
  const nav = $('#nav');
  page.innerHTML = '';
  nav.innerHTML = '';

  if (first !== 'review') {
    stopReview(); // een review begint opnieuw als je hem verlaten hebt
  }
  $('#brand').textContent = college ? 'Klankleer 1 · ' + college.title : 'Klankleer 1';

  /** Maakt één tabblad in de balk bovenaan. active = dit is de pagina waar je nu bent. */
  function tab(label, hash, active) {
    return h('a', { href: hash, class: active ? 'on' : '' }, label);
  }

  if (college) {
    // Binnen een college: terug naar Home, Oefenen en Voortgang.
    const sub = second || 'oefenen';
    nav.append(
      h('a', { href: '#/', class: 'back' }, '← Home'),
      tab('Oefenen', `#/${college.id}/oefenen`, sub === 'oefenen'),
      tab('Voortgang', `#/${college.id}/voortgang`, sub === 'voortgang' || sub === 'nieuwe-ronde'),
    );
    if (sub === 'voortgang') {
      renderProgress(page, college);
    } else if (sub === 'nieuwe-ronde') {
      renderNewRound(page, college);
    } else {
      renderPractice(page, college);
    }
  } else {
    // Buiten de colleges: Home, Review en Overzicht.
    nav.append(
      tab('Home', '#/', !first),
      tab('Review', '#/review', first === 'review'),
      tab('Overzicht', '#/overzicht', first === 'overzicht'),
    );
    const selection = first === 'review' ? parseSelection(second, third) : null;
    if (!first) {
      renderHome(page);
    } else if (first === 'overzicht') {
      renderOverview(page);
    } else if (selection) {
      renderReview(page, selection);
    } else {
      renderReviewSetup(page);
    }
  }

  window.scrollTo({ top: 0 });
}

/*
 * Toetsenbord: Enter = Volgende.
 * Dit geldt alleen als de focus nergens op staat dat Enter zelf afhandelt (een knop,
 * een invulveld) en er niets meer na te kijken of om te draaien is. Zo kun je na
 * 'Ik had deze wel goed' gewoon met Enter verder.
 */
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Enter' || event.defaultPrevented || event.repeat) {
    return;
  }
  const target = event.target;
  const handlesEnterItself =
    target && !target.disabled && /^(INPUT|TEXTAREA|SELECT|BUTTON|A)$/.test(target.tagName);
  if (handlesEnterItself) {
    return;
  }
  // Staat er nog een blauwe knop in de vraag (Nakijken of Draai om), dan moet dat eerst.
  if ($('.card .btn.primary:not([hidden]):not([disabled])')) {
    return;
  }
  const nextButton = $('[data-next]:not([disabled])');
  if (nextButton) {
    event.preventDefault();
    nextButton.click();
  }
});

/* ---------- starten ---------- */

window.addEventListener('hashchange', render);
render();
