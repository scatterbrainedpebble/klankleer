/*
 * schedule.js – het rooster van Klankleer 1 en de vaste momenten van de dagelijkse sessies.
 *
 * Het rooster komt uit college 1, dia 6. Het tentamen is op 28 januari 2027;
 * tot die dag loopt de gewoontetracker (zie js/pages/habit.js).
 *
 * Elke dag zijn er drie sessies van vijf vragen: 's ochtends, 's middags en 's avonds.
 * De Android-app stuurt op die tijden een herinnering (zie de map android/).
 */

'use strict';

/** De dag van het tentamen. Tot en met de dag ervoor zijn er sessies. */
const EXAM_DATE = '2027-01-28';

/** Het rooster uit college 1, dia 6: datum (jjjj-mm-dd) en wat er die dag is. */
const SCHEDULE = [
  { date: '2026-11-03', label: 'Hoorcollege 1: Introductie in de fonetiek en fonologie' },
  { date: '2026-11-04', label: 'Hoorcollege 2: Spraakprocessen en IPA-transcriptie' },
  { date: '2026-11-06', label: 'Deadline opdracht 1, 17:00' },
  { date: '2026-11-10', label: 'Werkcollege 1.1: Transcriptiepracticum (groep 1)' },
  { date: '2026-11-11', label: 'Werkcollege 1.2: Transcriptiepracticum (groep 2)' },
  { date: '2026-11-13', label: 'Deadline opdracht 2, 17:00' },
  { date: '2026-11-17', label: 'Hoorcollege 3: Geluid en de akoestiek van spraak' },
  { date: '2026-11-18', label: 'Hoorcollege 4: Stemvorming en prosodie' },
  { date: '2026-11-24', label: 'Hoorcollege 5: Fonologie' },
  { date: '2026-11-25', label: 'Hoorcollege 6: Features en syllabes' },
  { date: '2026-11-27', label: 'Deadline opdracht 3, 17:00' },
  { date: '2026-12-01', label: 'Werkcollege 2.1: Fonologische regels (groep 1)' },
  { date: '2026-12-02', label: 'Werkcollege 2.2: Fonologische regels (groep 2)' },
  { date: '2026-12-04', label: 'Deadline opdracht 4, 17:00' },
  { date: '2026-12-08', label: 'Hoorcollege 7: Morfologie' },
  { date: '2026-12-09', label: 'Oefententamen' },
  { date: '2026-12-15', label: 'Bespreken oefententamen en Q&A' },
  { date: '2026-12-16', label: 'Buffer' },
  { date: EXAM_DATE, label: 'Tentamen (Aletta Jacobshal)' },
];

/**
 * De drie sessies van een dag. from = vanaf welk uur een sessie bij dit moment hoort.
 * Een sessie die je vóór 13:00 doet, telt dus als ochtendsessie, enzovoort.
 */
const SLOTS = [
  { id: 'ochtend', label: 'Ochtend', time: '09:30', from: 0 },
  { id: 'middag', label: 'Middag', time: '13:00', from: 13 },
  { id: 'avond', label: 'Avond', time: '20:00', from: 20 },
];

/** Het aantal vragen in één sessie. */
const SESSION_SIZE = 5;

/** Maakt van een datum de tekst 'jjjj-mm-dd' (in de tijdzone van het apparaat). */
function dateKey(date = new Date()) {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
}

/** Maakt van 'jjjj-mm-dd' weer een datum (om 12:00, zodat zomertijd niets verschuift). */
function parseDateKey(key) {
  const [year, month, day] = key.split('-').map(Number);
  return new Date(year, month - 1, day, 12);
}

/** Bij welk moment van de dag hoort dit tijdstip? Geeft een van de SLOTS. */
function slotAt(date = new Date()) {
  let found = SLOTS[0];
  for (const slot of SLOTS) {
    if (date.getHours() >= slot.from) {
      found = slot;
    }
  }
  return found;
}

/** Welke momenten heb je op deze dag gedaan? Geeft een lijst met slot-id's. */
function slotsDone(key) {
  return (state.habit && state.habit[key]) || [];
}

/** Wat staat er volgens het rooster op deze dag? Geeft een lijst met teksten (vaak leeg). */
function scheduleOn(key) {
  return SCHEDULE.filter((entry) => entry.date === key).map((entry) => entry.label);
}
