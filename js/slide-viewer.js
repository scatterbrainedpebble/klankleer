/*
 * slide-viewer.js – laat één dia uit de PDF van een college zien (de pagina dia.html).
 *
 * Waarom een eigen pagina? Eerst opende de link bij een vraag de PDF zelf. Een browser op een
 * computer laat die dan zien, maar een browser op een telefoon of tablet (zoals Vanadium of
 * Chrome op Android) heeft geen ingebouwde PDF-lezer. Die vraagt dan 'in welke app wil je
 * dit bestand openen?', en de app opent de PDF op pagina 1. In de Android-app gebeurde er niets.
 *
 * Daarom tekent deze pagina de dia zelf, met pdf.js (een PDF-lezer in JavaScript, van Mozilla).
 * Dat werkt overal hetzelfde, en altijd op de goede dia.
 *
 * Het adres zegt welke dia: dia.html?college=c1&dia=21.
 * De PDF komt uit de opslag van deze browser (zie js/slides.js).
 */

'use strict';

/** pdf.js doet het zware werk in een 'worker' (een tweede programma op de achtergrond). */
pdfjsLib.GlobalWorkerOptions.workerSrc = 'js/vendor/pdfjs/pdf.worker.min.js';

/** Wat er nu getoond wordt. */
const viewer = {
  collegeId: null, // 'c1'
  number: 1, // het dianummer (= paginanummer in de PDF)
  pdf: null, // de geopende PDF
  renderTask: null, // het tekenen dat nu bezig is (om het te kunnen afbreken)
};

/** Zet een melding boven de dia (of haalt hem weg met een lege tekst). */
function showMessage(text) {
  const message = document.getElementById('message');
  message.textContent = text;
  message.hidden = !text;
}

/** Leest college en dianummer uit het adres. */
function readAddress() {
  const params = new URLSearchParams(location.search);
  const collegeId = params.get('college') || '';
  const number = parseInt(params.get('dia'), 10);
  return {
    collegeId: /^c\d+$/.test(collegeId) ? collegeId : null,
    number: number > 0 ? number : 1,
  };
}

/** Haalt de PDF van het college uit de opslag van de browser en opent hem met pdf.js. */
async function openPdf(collegeId) {
  const file = await slidesRequest('readonly', (store) => store.get(collegeId));
  if (!file) {
    return null;
  }
  const data = await file.arrayBuffer();
  return pdfjsLib.getDocument({ data }).promise;
}

/**
 * Tekent de dia op het canvas, zo groot als past: even breed als het scherm,
 * en niet hoger dan het scherm, zodat je de hele dia ziet zonder te scrollen.
 */
async function drawSlide() {
  const page = await viewer.pdf.getPage(viewer.number);
  const canvas = document.getElementById('slide');
  const frame = canvas.parentElement;

  // Hoeveel ruimte is er? De knoppen onder de dia moeten ook nog in beeld passen.
  const natural = page.getViewport({ scale: 1 });
  const roomWidth = frame.clientWidth;
  const roomHeight = window.innerHeight - frame.getBoundingClientRect().top - 72;
  const scale = Math.min(roomWidth / natural.width, Math.max(roomHeight, 200) / natural.height);

  // Scherp op schermen met veel pixels (zoals een tablet): teken op ware grootte van het scherm.
  const sharpness = Math.min(window.devicePixelRatio || 1, 3);
  const viewport = page.getViewport({ scale: scale * sharpness });
  canvas.width = Math.floor(viewport.width);
  canvas.height = Math.floor(viewport.height);
  canvas.style.width = Math.floor(viewport.width / sharpness) + 'px';
  canvas.style.height = Math.floor(viewport.height / sharpness) + 'px';

  // Ben je snel aan het bladeren? Breek het vorige tekenen dan af.
  if (viewer.renderTask) {
    viewer.renderTask.cancel();
  }
  viewer.renderTask = page.render({ canvasContext: canvas.getContext('2d'), viewport });
  try {
    await viewer.renderTask.promise;
  } catch (error) {
    if (error && error.name === 'RenderingCancelledException') {
      return; // afgebroken omdat er al een andere dia getekend wordt: niets aan de hand
    }
    throw error;
  }
  canvas.hidden = false;
}

/** Laat dia 'number' zien en zet het nummer ook in de titel, de teller en het adres. */
function goToSlide(number) {
  const total = viewer.pdf.numPages;
  viewer.number = Math.min(Math.max(number, 1), total);

  const collegeNumber = viewer.collegeId.slice(1);
  const title = `College ${collegeNumber} · dia ${viewer.number}`;
  document.getElementById('title').textContent = title;
  document.title = `Klankleer 1 – ${title}`;
  document.getElementById('counter').textContent = `dia ${viewer.number} van ${total}`;
  document.getElementById('prev').disabled = viewer.number <= 1;
  document.getElementById('next').disabled = viewer.number >= total;

  // Het adres bijwerken (zonder nieuwe stap in de geschiedenis), zodat herladen op dezelfde dia blijft.
  history.replaceState(null, '', `?college=${viewer.collegeId}&dia=${viewer.number}`);

  drawSlide().catch(() => showMessage('Deze dia kon niet getekend worden.'));
}

/**
 * De knop Sluiten. In een nieuw tabblad sluit hij het tabblad.
 * In de Android-app is de dia geen nieuw tabblad maar een volgende pagina: dan gaat hij terug.
 */
function closeViewer() {
  if (history.length > 1) {
    history.back();
  } else {
    window.close();
  }
}

/** Het begin: lees het adres, open de PDF en laat de dia zien. */
async function startViewer() {
  document.getElementById('close').addEventListener('click', closeViewer);
  document.getElementById('prev').addEventListener('click', () => goToSlide(viewer.number - 1));
  document.getElementById('next').addEventListener('click', () => goToSlide(viewer.number + 1));

  // Bladeren met de pijltjestoetsen.
  document.addEventListener('keydown', (event) => {
    if (!viewer.pdf) {
      return;
    }
    if (event.key === 'ArrowLeft') {
      goToSlide(viewer.number - 1);
    } else if (event.key === 'ArrowRight') {
      goToSlide(viewer.number + 1);
    }
  });

  // Draai je de tablet, dan verandert de ruimte: teken de dia opnieuw (even wachten tot het draaien klaar is).
  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (viewer.pdf) {
        drawSlide().catch(() => {});
      }
    }, 200);
  });

  const address = readAddress();
  if (!address.collegeId) {
    showMessage('Dit adres noemt geen college.');
    return;
  }
  viewer.collegeId = address.collegeId;

  try {
    viewer.pdf = await openPdf(viewer.collegeId);
  } catch (error) {
    showMessage(
      'De dia’s konden niet geopend worden. Voeg de PDF opnieuw toe via Home → Dia’s toevoegen.',
    );
    return;
  }
  if (!viewer.pdf) {
    showMessage(
      'De dia’s van dit college staan niet in deze browser. Voeg ze toe via Home → Dia’s toevoegen.',
    );
    return;
  }

  showMessage('');
  document.getElementById('nav').hidden = false;
  goToSlide(address.number);
}

startViewer();
