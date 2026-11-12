# Klankleer-app (Android)

Een kleine Android-app rond de oefensite. De app:

- laat de site zien (https://scatterbrainedpebble.github.io/klankleer/), dus een bijgewerkte site staat meteen ook in de app;
- stuurt elke dag een herinnering om **09:30**, **13:00** en **20:00** voor een sessie van 5 vragen (pagina `#/sessie`);
- kijkt een uur later (10:30, 14:00, 21:00) of die sessie gedaan is, en herinnert je anders nog één keer;
- houdt in de **gewoontetracker** (`#/gewoonte`) bij welke sessies je gedaan hebt, tot het tentamen op 28 januari 2027. Daarna stoppen de herinneringen.

## Bestanden

```
android/
  settings.gradle, build.gradle   instellingen voor het bouwen
  app/build.gradle                hoe de app gebouwd en ondertekend wordt
  app/klankleer.keystore          de sleutel waarmee de app ondertekend wordt (zie hieronder)
  app/src/main/
    AndroidManifest.xml           wat de app is en welke rechten hij heeft
    java/nl/klankleer/app/
      MainActivity.java           het scherm: de site in een WebView
      Reminders.java              de tijden van de herinneringen; onthouden welke sessies gedaan zijn
      ReminderReceiver.java       wat er gebeurt als een herinnering afgaat
    res/                          het icoon en de naam van de app
```

De site zelf weet niets van Android. Alleen als `window.KlankleerApp` bestaat (dus in de app),
meldt `js/pages/session.js` een afgeronde sessie aan de app, en slaat `js/pages/backup.js` een back-up op via de app.

## Bouwen

Dat gebeurt vanzelf op GitHub (`.github/workflows/android.yml`) bij elke wijziging in deze map.
Na een merge naar `main` staat de nieuwste APK hier:

https://github.com/scatterbrainedpebble/klankleer/releases/download/app/klankleer.apk

## De sleutel

Android installeert een update alleen over de oude app heen als beide met dezelfde sleutel zijn ondertekend.
Daarom staat de sleutel in de repo, met een eenvoudig wachtwoord. Voor een app die je alleen zelf
installeert (sideloaden) is dat prima; voor een app in de Play Store zou dat niet kunnen.

## Bekende beperkingen

- De voortgang in de app staat los van die in je browser. Overzetten: in de browser **Voortgang opslaan als bestand**, het bestand naar je telefoon zetten, en in de app **Back-up inladen**.
- Een dia-PDF openen (de link bij 'Zie: … dia 14') werkt in de app niet: een WebView kan geen PDF tonen.
- Een sessie die je in de browser doet in plaats van in de app, telt niet mee voor de herinneringen in de app.
