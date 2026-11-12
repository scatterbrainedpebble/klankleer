/*
 * MainActivity.java – het scherm van de app: de oefensite in een WebView.
 *
 * Een WebView is een browser zonder adresbalk, ingebouwd in de app. Hij laat de site zien
 * die ook op GitHub Pages staat (SITE_URL). Wordt de site bijgewerkt, dan heeft de app
 * die nieuwe versie dus vanzelf. Zonder internet laat hij de laatst bewaarde versie zien.
 *
 * Let op: de voortgang in de app staat los van de voortgang in je browser.
 * Overzetten gaat met Back-up (opslaan in de browser, inladen in de app).
 *
 * De site kan de app aanroepen via window.KlankleerApp (zie de klasse Bridge hieronder):
 *   sessionDone(dag, moment)   een sessie van 5 vragen is af (zie js/pages/session.js)
 *   saveFile(naam, tekst)      een back-up opslaan in de map Downloads (zie js/pages/backup.js)
 */

package nl.klankleer.app;

import android.Manifest;
import android.app.Activity;
import android.content.ContentValues;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.ConnectivityManager;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.provider.MediaStore;
import android.webkit.JavascriptInterface;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;

public class MainActivity extends Activity {

    /** Het adres van de oefensite. */
    static final String SITE_URL = "https://scatterbrainedpebble.github.io/klankleer/";

    /** Een melding kan de app openen op een bepaalde pagina, bijvoorbeeld '#/sessie'. */
    static final String EXTRA_HASH = "hash";

    private static final int REQUEST_FILE = 1;

    private WebView web;
    private ValueCallback<Uri[]> fileCallback;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        web = new WebView(this);
        setContentView(web);

        WebSettings settings = web.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true); // localStorage: hierin bewaart de site je voortgang
        settings.setCacheMode(isOnline() ? WebSettings.LOAD_DEFAULT : WebSettings.LOAD_CACHE_ELSE_NETWORK);

        web.addJavascriptInterface(new Bridge(), "KlankleerApp");
        web.setWebViewClient(new WebViewClient());
        web.setWebChromeClient(new WebChromeClient() {
            // 'Back-up inladen' en 'Dia's toevoegen' vragen om een bestand: open de bestandskiezer van Android.
            @Override
            public boolean onShowFileChooser(WebView view, ValueCallback<Uri[]> callback, FileChooserParams params) {
                if (fileCallback != null) {
                    fileCallback.onReceiveValue(null);
                }
                fileCallback = callback;
                try {
                    startActivityForResult(params.createIntent(), REQUEST_FILE);
                } catch (Exception error) {
                    fileCallback = null;
                    return false;
                }
                return true;
            }
        });

        web.loadUrl(SITE_URL + hashFrom(getIntent()));

        // Android 13 en nieuwer: vraag of de app meldingen mag sturen.
        if (Build.VERSION.SDK_INT >= 33
                && checkSelfPermission(Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED) {
            requestPermissions(new String[] {Manifest.permission.POST_NOTIFICATIONS}, 0);
        }
        Reminders.scheduleNext(this);
    }

    /** De app was al open en je tikt op een melding: ga naar de pagina van die melding. */
    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        String hash = hashFrom(intent);
        if (!hash.isEmpty()) {
            web.loadUrl(SITE_URL + hash);
        }
    }

    /** Het adres-stukje (#/sessie) uit een melding, of een lege tekst. */
    private static String hashFrom(Intent intent) {
        String hash = intent == null ? null : intent.getStringExtra(EXTRA_HASH);
        return hash == null ? "" : hash;
    }

    /** De terugknop van Android gaat eerst terug in de site, en sluit pas daarna de app. */
    @Override
    public void onBackPressed() {
        if (web.canGoBack()) {
            web.goBack();
        } else {
            super.onBackPressed();
        }
    }

    /** Het gekozen bestand uit de bestandskiezer doorgeven aan de site. */
    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == REQUEST_FILE && fileCallback != null) {
            fileCallback.onReceiveValue(WebChromeClient.FileChooserParams.parseResult(resultCode, data));
            fileCallback = null;
        }
    }

    /** Is er nu internet? */
    private boolean isOnline() {
        ConnectivityManager connectivity = getSystemService(ConnectivityManager.class);
        return connectivity != null && connectivity.getActiveNetwork() != null;
    }

    /** Wat de site in de app kan aanroepen, als window.KlankleerApp. */
    private class Bridge {

        /** Een sessie is af: onthoud dat, zodat de controle een uur later geen melding meer geeft. */
        @JavascriptInterface
        public void sessionDone(String day, String slot) {
            Reminders.markDone(MainActivity.this, day, slot);
            ReminderReceiver.clear(MainActivity.this);
        }

        /** Slaat een back-up op in de map Downloads van de telefoon. */
        @JavascriptInterface
        public void saveFile(String name, String text) {
            ContentValues values = new ContentValues();
            values.put(MediaStore.Downloads.DISPLAY_NAME, name);
            values.put(MediaStore.Downloads.MIME_TYPE, "application/json");
            String message;
            try {
                Uri uri = getContentResolver().insert(MediaStore.Downloads.EXTERNAL_CONTENT_URI, values);
                try (OutputStream out = getContentResolver().openOutputStream(uri)) {
                    out.write(text.getBytes(StandardCharsets.UTF_8));
                }
                message = "Opgeslagen in Downloads: " + name;
            } catch (Exception error) {
                message = "Opslaan lukte niet";
            }
            String toast = message;
            runOnUiThread(() -> Toast.makeText(MainActivity.this, toast, Toast.LENGTH_LONG).show());
        }
    }
}
