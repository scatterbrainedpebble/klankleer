/*
 * habit.js – de gewoontetracker (adres: #/gewoonte).
 *
 * Een kalender van deze week tot het tentamen. Elke dag heeft drie bolletjes:
 * ochtend, middag en avond. Een gevuld bolletje = die sessie heb je gedaan.
 * Dagen met iets uit het rooster (college, deadline, tentamen) zijn gemarkeerd.
 *
 * De gegevens staan in state.habit: { 'jjjj-mm-dd': ['ochtend', 'avond'] }.
 */

'use strict';

/** Hoeveel dagen op rij heb je alle drie de sessies gedaan (tot en met gisteren, plus vandaag als die al vol is)? */
function fullDayStreak() {
  const day = new Date();
  day.setHours(12, 0, 0, 0);
  if (slotsDone(dateKey(day)).length < SLOTS.length) {
    day.setDate(day.getDate() - 1); // vandaag is nog niet af: begin bij gisteren
  }
  let streak = 0;
  while (slotsDone(dateKey(day)).length >= SLOTS.length) {
    streak++;
    day.setDate(day.getDate() - 1);
  }
  return streak;
}

/** Tekent de pagina Gewoontetracker. */
function renderHabit(page) {
  const today = dateKey();
  const exam = parseDateKey(EXAM_DATE);
  const daysLeft = Math.round((exam - parseDateKey(today)) / 86400000);
  const sessionsDone = Object.values(state.habit || {}).reduce((sum, list) => sum + list.length, 0);
  const todayDone = slotsDone(today);

  // Bovenaan: de cijfers en de knop om een sessie te starten.
  add(
    page,
    h(
      'div',
      { class: 'card' },
      h('h2', {}, 'Gewoontetracker'),
      h(
        'div',
        { class: 'stat' },
        statTile(daysLeft > 0 ? daysLeft : 0, 'dagen tot het tentamen'),
        statTile(`${todayDone.length}/${SLOTS.length}`, 'sessies vandaag'),
        statTile(fullDayStreak(), 'volle dagen op rij'),
        statTile(sessionsDone, 'sessies in totaal'),
      ),
      h(
        'p',
        { class: 'small muted' },
        `Elke dag drie sessies van ${SESSION_SIZE} vragen: ` +
          SLOTS.map((slot) => `${slot.label.toLowerCase()} (${slot.time})`).join(', ') +
          '. Tentamen: donderdag 28 januari 2027.',
      ),
      h(
        'div',
        { class: 'btns' },
        button('Start een sessie', () => go('#/sessie'), 'primary'),
      ),
    ),
  );

  // De kalender: van de maandag van deze week tot en met de tentamendag.
  const start = parseDateKey(today);
  start.setDate(start.getDate() - ((start.getDay() + 6) % 7)); // terug naar maandag
  const grid = h('div', { class: 'habit-grid' });
  for (const name of ['ma', 'di', 'wo', 'do', 'vr', 'za', 'zo']) {
    grid.append(h('div', { class: 'habit-head' }, name));
  }
  for (const day = new Date(start); day <= exam; day.setDate(day.getDate() + 1)) {
    grid.append(habitDay(dateKey(day), today));
  }

  // Het rooster vanaf vandaag, als lijst onder de kalender.
  const upcoming = SCHEDULE.filter((entry) => entry.date >= today);
  const scheduleList = h(
    'ul',
    { class: 'habit-schedule' },
    upcoming.map((entry) =>
      h(
        'li',
        {},
        h('b', {}, parseDateKey(entry.date).toLocaleDateString('nl-NL', dayFormat)),
        ' ',
        entry.label,
      ),
    ),
  );

  add(
    page,
    h(
      'div',
      { class: 'card' },
      h('h3', {}, 'Kalender tot het tentamen'),
      h(
        'p',
        { class: 'small muted' },
        'Drie bolletjes per dag: ochtend, middag, avond. Een dag met een rand staat in het rooster.',
      ),
      grid,
      h('h3', {}, 'Rooster'),
      scheduleList,
    ),
  );
}

/** Hoe een datum in de roosterlijst staat: 'di 17 nov.'. */
const dayFormat = { weekday: 'short', day: 'numeric', month: 'short' };

/** Eén tegel met een groot getal en een korte uitleg (dezelfde tegels als bij Je voortgang op Home). */
function statTile(value, label) {
  return h('div', {}, h('b', {}, String(value)), label);
}

/** Eén dag in de kalender: de datum en drie bolletjes. */
function habitDay(key, today) {
  const done = slotsDone(key);
  const events = scheduleOn(key);
  const classes = ['habit-day'];
  if (key === today) {
    classes.push('today');
  }
  if (key > today) {
    classes.push('future');
  }
  if (events.length) {
    classes.push('event');
  }
  if (done.length === SLOTS.length) {
    classes.push('full');
  }
  const dots = SLOTS.map((slot) =>
    h('span', {
      class: done.includes(slot.id) ? 'dot on' : 'dot',
      title: `${slot.label}${done.includes(slot.id) ? ': gedaan' : ''}`,
    }),
  );
  const date = parseDateKey(key);
  const tooltip = [date.toLocaleDateString('nl-NL', dayFormat), ...events].join('\n');
  return h(
    'div',
    { class: classes.join(' '), title: tooltip },
    h('span', { class: 'habit-date' }, String(date.getDate())),
    h('span', { class: 'dots' }, dots),
  );
}
