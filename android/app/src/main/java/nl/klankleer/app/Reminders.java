/*
 * Reminders.java – wanneer de app een herinnering stuurt, en het onthouden van gedane sessies.
 *
 * Elke dag tot het tentamen (28 januari 2027) zijn er drie momenten:
 *
 *   moment    herinnering   controle
 *   ochtend   09:30         10:30
 *   middag    13:00         14:00
 *   avond     20:00         21:00
 *
 * Op het tijdstip van de herinnering komt er een melding, behalve als je die sessie al gedaan hebt.
 * Een uur later kijkt de app (de controle) of de sessie gedaan is. Zo niet, dan komt er nog één
 * melding. Op de ochtend van het tentamen komt er alleen een 'succes'-melding.
 *
 * Er staat steeds precies één wekker (alarm) klaar: de eerstvolgende. Gaat die af, dan zet
 * ReminderReceiver de volgende klaar. De tijden volgen de tijdzone van de telefoon.
 *
 * Welke sessies gedaan zijn, meldt de site via MainActivity (sessionDone). Dat wordt hier
 * bewaard in SharedPreferences (een klein opslagbestand van de app), als '2026-11-13/ochtend'.
 * De moment-namen en hun begintijden zijn dezelfde als in js/schedule.js van de site.
 */

package nl.klankleer.app;

import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Build;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.ZoneId;

final class Reminders {

    /** De dag van het tentamen: tot de dag ervoor zijn er sessies. */
    static final LocalDate EXAM = LocalDate.of(2027, 1, 28);

    /** De namen van de drie momenten, zoals de site ze ook gebruikt. */
    static final String[] SLOTS = {"ochtend", "middag", "avond"};

    /** Het tijdstip van de herinnering per moment. */
    static final LocalTime[] TIMES = {LocalTime.of(9, 30), LocalTime.of(13, 0), LocalTime.of(20, 0)};

    /** Hoe lang na de herinnering de controle komt, in minuten. */
    static final int CHECK_AFTER_MINUTES = 60;

    /** Het tijdstip van de succes-melding op de dag van het tentamen. */
    static final LocalTime EXAM_GREETING = LocalTime.of(8, 0);

    /** De soorten wekkers. */
    static final String KIND_REMIND = "remind";
    static final String KIND_CHECK = "check";
    static final String KIND_EXAM = "exam";

    private static final String PREFS = "habit";

    private Reminders() {}

    /** Onthoudt dat de sessie van deze dag en dit moment gedaan is. */
    static void markDone(Context context, String day, String slot) {
        prefs(context).edit().putBoolean(day + "/" + slot, true).apply();
    }

    /** Is de sessie van deze dag en dit moment gedaan? */
    static boolean isDone(Context context, String day, String slot) {
        return prefs(context).getBoolean(day + "/" + slot, false);
    }

    private static SharedPreferences prefs(Context context) {
        return context.getSharedPreferences(PREFS, Context.MODE_PRIVATE);
    }

    /** Eén wekker: wanneer, welke soort en bij welk moment. */
    static final class Alarm {
        final LocalDateTime at;
        final String kind;
        final int slot; // index in SLOTS (niet gebruikt bij KIND_EXAM)

        Alarm(LocalDateTime at, String kind, int slot) {
            this.at = at;
            this.kind = kind;
            this.slot = slot;
        }
    }

    /** Zoekt de eerstvolgende wekker na dit moment. Geeft null als het tentamen voorbij is. */
    static Alarm next(LocalDateTime now) {
        for (LocalDate day = now.toLocalDate(); !day.isAfter(EXAM); day = day.plusDays(1)) {
            if (day.equals(EXAM)) {
                LocalDateTime at = day.atTime(EXAM_GREETING);
                return at.isAfter(now) ? new Alarm(at, KIND_EXAM, 0) : null;
            }
            for (int i = 0; i < SLOTS.length; i++) {
                LocalDateTime remind = day.atTime(TIMES[i]);
                if (remind.isAfter(now)) {
                    return new Alarm(remind, KIND_REMIND, i);
                }
                LocalDateTime check = remind.plusMinutes(CHECK_AFTER_MINUTES);
                if (check.isAfter(now)) {
                    return new Alarm(check, KIND_CHECK, i);
                }
            }
        }
        return null;
    }

    /** Zet de eerstvolgende wekker klaar (een eerdere wekker van de app wordt daarbij vervangen). */
    static void scheduleNext(Context context) {
        AlarmManager alarms = context.getSystemService(AlarmManager.class);
        Intent intent = new Intent(context, ReminderReceiver.class).setAction(ReminderReceiver.ACTION_ALARM);
        Alarm alarm = next(LocalDateTime.now());
        if (alarm == null) {
            PendingIntent old = PendingIntent.getBroadcast(context, 0, intent,
                    PendingIntent.FLAG_IMMUTABLE | PendingIntent.FLAG_NO_CREATE);
            if (old != null) {
                alarms.cancel(old);
            }
            return;
        }
        intent.putExtra("kind", alarm.kind);
        intent.putExtra("slot", alarm.slot);
        intent.putExtra("day", alarm.at.toLocalDate().toString());
        PendingIntent pending = PendingIntent.getBroadcast(context, 0, intent,
                PendingIntent.FLAG_IMMUTABLE | PendingIntent.FLAG_UPDATE_CURRENT);
        long millis = alarm.at.atZone(ZoneId.systemDefault()).toInstant().toEpochMilli();

        // Precies op tijd als dat mag; anders zo dicht mogelijk erbij (Android kan dan een paar minuten schuiven).
        if (Build.VERSION.SDK_INT < 31 || alarms.canScheduleExactAlarms()) {
            alarms.setExactAndAllowWhileIdle(AlarmManager.RTC_WAKEUP, millis, pending);
        } else {
            alarms.setAndAllowWhileIdle(AlarmManager.RTC_WAKEUP, millis, pending);
        }
    }
}
