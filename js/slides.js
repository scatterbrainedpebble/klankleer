/*
 * slides.js – de diavoorstelling (PDF) van een college koppelen en openen bij de juiste dia.
 *
 * Bij elke vraag staat een verwijzing, bijvoorbeeld 'Zie: week 1, college 2, dia 21'.
 * Heb je op Home de PDF van dat college toegevoegd (de knop 'Dia's toevoegen'), dan wordt het dianummer een link
 * die de PDF opent op die dia (in een nieuw tabblad).
 *
 * De PDF's staan niet op de site: ze worden alleen in deze browser bewaard,
 * in IndexedDB. Dat is een opslag van de browser die, anders dan localStorage,
 * ook grote bestanden aankan. Ze zitten niet in de back-up van je voortgang.
 *
 * Uitgangspunt: dia 1 is pagina 1 van de PDF, dia 2 is pagina 2, enzovoort.
 */

'use strict';

/** De naam van de opslag in IndexedDB, en van het 'laatje' daarin waar de PDF's liggen. */
const SLIDES_DB = 'klankleer-slides';
const SLIDES_STORE = 'pdf';

/**
 * De gekoppelde PDF's, klaar voor gebruik: slides['c1'] = { name, url }.
 * name = de bestandsnaam; url = een tijdelijk adres waarmee de browser de PDF kan openen.
 */
const slides = {};

/** Opent de opslag (en maakt hem aan als hij er nog niet is). Geeft een belofte (Promise) terug. */
function openSlidesDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(SLIDES_DB, 1);
    request.onupgradeneeded = () => request.result.createObjectStore(SLIDES_STORE);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Voert één opdracht uit op de opslag en geeft de uitkomst terug als belofte.
 * mode    'readonly' (alleen lezen) of 'readwrite' (ook veranderen)
 * action  een functie die van het laatje een opdracht maakt, bijvoorbeeld (store) => store.get('c1')
 */
function slidesRequest(mode, action) {
  return openSlidesDb().then(
    (db) =>
      new Promise((resolve, reject) => {
        const transaction = db.transaction(SLIDES_STORE, mode);
        const request = action(transaction.objectStore(SLIDES_STORE));
        transaction.oncomplete = () => resolve(request.result);
        transaction.onerror = () => reject(transaction.error);
        transaction.onabort = () => reject(transaction.error);
      }),
  );
}

/** Zet een PDF klaar voor gebruik (of haalt hem weg als er geen bestand is). */
function setSlides(collegeId, file) {
  if (slides[collegeId]) {
    URL.revokeObjectURL(slides[collegeId].url); // het oude tijdelijke adres opruimen
    delete slides[collegeId];
  }
  if (file) {
    slides[collegeId] = { name: file.name, url: URL.createObjectURL(file) };
  }
}

/**
 * Leest bij het openen van de site de bewaarde PDF's uit de opslag.
 * De belofte geeft true als er minstens één PDF gevonden is.
 */
function loadSlides() {
  const reads = COLLEGES.map((college) =>
    slidesRequest('readonly', (store) => store.get(college.id)).then((file) => {
      setSlides(college.id, file);
    }),
  );
  return Promise.all(reads).then(
    () => Object.keys(slides).length > 0,
    () => false, // de opslag is niet beschikbaar (bijvoorbeeld in een privévenster)
  );
}

/** Bewaart de gekozen PDF bij een college. De belofte mislukt als bewaren niet lukt. */
function saveSlides(collegeId, file) {
  return slidesRequest('readwrite', (store) => store.put(file, collegeId)).then(() => {
    setSlides(collegeId, file);
  });
}

/** Haalt de PDF van een college weer weg. */
function removeSlides(collegeId) {
  return slidesRequest('readwrite', (store) => store.delete(collegeId)).then(() => {
    setSlides(collegeId, null);
  });
}

/**
 * Maakt de regel met de verwijzing naar de dia's, bijvoorbeeld
 * 'Zie: week 1, college 1, dia 47 en 51'. Geeft null als de vraag geen verwijzing heeft.
 *
 * Elk dianummer wordt een link als de PDF van dat college gekoppeld is.
 * De tekst wordt daarvoor in stukjes geknipt: 'week 1' blijft tekst, 'college 2' vertelt
 * bij welk college de nummers erna horen, en elk los getal daarna is een dianummer.
 */
function refLine(item) {
  if (!item.ref) {
    return null;
  }
  const line = h('div', { class: 'ref' });
  let collegeId = item.college; // tot de tekst een ander college noemt
  let textStart = 0; // tot hier is de tekst al in de regel gezet

  for (const match of item.ref.matchAll(/week \d+|college (\d+)|(\d+)/g)) {
    const [, collegeNumber, slideNumber] = match;
    if (collegeNumber) {
      collegeId = 'c' + collegeNumber;
    }
    if (!slideNumber || !slides[collegeId]) {
      continue; // geen dianummer, of geen PDF: dit stukje blijft gewone tekst
    }
    const link = h(
      'a',
      {
        href: `${slides[collegeId].url}#page=${slideNumber}`,
        target: '_blank',
        rel: 'noopener',
        title: `Open dia ${slideNumber} in de diavoorstelling`,
      },
      slideNumber,
    );
    line.append(item.ref.slice(textStart, match.index), link);
    textStart = match.index + slideNumber.length;
  }
  line.append(item.ref.slice(textStart));
  return line;
}
