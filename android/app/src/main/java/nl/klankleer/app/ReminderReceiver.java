/*
 * ReminderReceiver.java – wat er gebeurt als een wekker afgaat (of de telefoon opnieuw opstart).
 *
 * Bij een wekker: kijk of de sessie al gedaan is; zo niet, toon een melding.
 * Daarna (en ook na opnieuw opstarten, een update van de app of een andere tijdzone)
 * wordt de volgende wekker klaargezet. Zie Reminders.java voor de tijden.
 */

package nl.klankleer.app;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

public class ReminderReceiver extends BroadcastReceiver {

    /** De actie van onze eigen wekkers (de andere acties komen van Android zelf). */
    static final String ACTION_ALARM = "nl.klankleer.app.ALARM";

    private static final String CHANNEL = "herinneringen";
    private static final int NOTIFICATION_ID = 1;

    @Override
    public void onReceive(Context context, Intent intent) {
        if (ACTION_ALARM.equals(intent.getAction())) {
            handleAlarm(context, intent);
        }
        Reminders.scheduleNext(context);
    }

    /** Toont de juiste melding bij een wekker, als de sessie nog niet gedaan is. */
    private void handleAlarm(Context context, Intent intent) {
        String kind = intent.getStringExtra("kind");
        String day = intent.getStringExtra("day");
        int slot = intent.getIntExtra("slot", 0);
        String slotName = Reminders.SLOTS[slot];

        if (Reminders.KIND_EXAM.equals(kind)) {
            notify(context, "Succes vandaag!", "Vandaag is het tentamen Klankleer 1. Je hebt goed geoefend.", "#/gewoonte");
            return;
        }
        if (day == null || Reminders.isDone(context, day, slotName)) {
            return; // al gedaan: geen melding
        }
        if (Reminders.KIND_CHECK.equals(kind)) {
            notify(context, "Je " + slotName + "sessie staat nog open",
                    "Nog even 5 vragen Klankleer? Tik om te beginnen.", "#/sessie");
        } else {
            notify(context, "Tijd voor je " + slotName + "sessie",
                    "5 vragen Klankleer. Tik om te beginnen.", "#/sessie");
        }
    }

    /** Toont een melding; een tik erop opent de app op het adres 'hash' (bijvoorbeeld #/sessie). */
    static void notify(Context context, String title, String text, String hash) {
        NotificationManager manager = context.getSystemService(NotificationManager.class);
        manager.createNotificationChannel(
                new NotificationChannel(CHANNEL, "Herinneringen", NotificationManager.IMPORTANCE_HIGH));

        Intent open = new Intent(context, MainActivity.class)
                .putExtra(MainActivity.EXTRA_HASH, hash)
                .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP);
        PendingIntent pending = PendingIntent.getActivity(context, 0, open,
                PendingIntent.FLAG_IMMUTABLE | PendingIntent.FLAG_UPDATE_CURRENT);

        Notification notification = new Notification.Builder(context, CHANNEL)
                .setSmallIcon(R.drawable.ic_notification)
                .setContentTitle(title)
                .setContentText(text)
                .setContentIntent(pending)
                .setAutoCancel(true)
                .build();
        manager.notify(NOTIFICATION_ID, notification);
    }

    /** Haalt de melding weg (als je de sessie hebt gedaan, is die niet meer nodig). */
    static void clear(Context context) {
        context.getSystemService(NotificationManager.class).cancel(NOTIFICATION_ID);
    }
}
