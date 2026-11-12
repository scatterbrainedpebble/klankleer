# Klankleer

Een website om klankleer te oefenen: vragen per college, met herhaling van wat je onjuist had, een overzicht van je voortgang en een review van lastige vragen.

De site staat op <https://scatterbrainedpebble.github.io/klankleer/>.

## Hoe de site in elkaar zit

De site is gewone HTML, CSS en JavaScript, zonder framework en zonder installatie. Er is één HTML-pagina (`index.html`). JavaScript tekent daarin steeds de pagina die bij het adres hoort, bijvoorbeeld `#/c1/oefenen`.

Je kunt de site op je eigen computer bekijken door `index.html` te openen in een browser. Een webserver is niet nodig.

## Mappen en bestanden

```
index.html          het skelet van de pagina; laadt de css en de scripts
css/
  style.css         alle vormgeving
js/
  data.js           alle vragen (automatisch gemaakt, niet met de hand aanpassen)
  helpers.js        kleine hulpfuncties, zoals h() om een HTML-element te maken
  colleges.js       de colleges en vragen klaarzetten om op te zoeken
  storage.js        je voortgang bewaren in de browser
  results.js        bijhouden wat je goed en onjuist had
  checking.js       getypte antwoorden nakijken (tikfouten, woordvormen, IPA)
  slides.js         de PDF met dia's van een college bewaren en openen bij de juiste dia
  schedule.js       het rooster, de tentamendatum en de drie momenten van de dagelijkse sessie
  app.js            het startpunt: kiest de pagina bij het adres
  questions/        één bestand per soort vraag
    question.js       het deel dat voor alle soorten gelijk is
    card.js           kaartje omdraaien
    cloze.js          rijtje met een ontbrekend vakje
    blanks.js         invullen
    mc.js             meerkeuze
    click.js          klikken op een lijn in een tekening
    ipa.js            een klank in IPA typen
    drag.js           slepen
  pages/            één bestand per pagina
    shared.js         onderdelen die op meerdere pagina's terugkomen
    home.js           Home
    slides-dialog.js  de pop-up 'Dia's toevoegen' van een college
    backup.js         het blok Back-up op Home
    overview.js       Overzicht per onderwerp
    progress.js       Voortgang van een college
    new-round.js      Nieuwe ronde
    practice.js       Oefenen
    review.js         Review
    single.js         één losse vraag via een link (#/vraag/KLC2D16V1)
    session.js        dagelijkse sessie van 5 vragen (#/sessie)
    habit.js          gewoontetracker tot het tentamen (#/gewoonte)
images/             de plaatjes bij de vragen
android/            de Android-app (zie android/README.md)
```

## De code lezen

Elk bestand begint met een stukje uitleg: wat het bestand doet en welke begrippen erin voorkomen. Boven elke functie staat in één of twee zinnen wat die functie doet.

Een handige volgorde om te lezen:

1. `index.html`: welke bestanden worden geladen, en in welke volgorde.
2. `js/app.js`: hoe het adres bepaalt welke pagina je ziet.
3. `js/pages/home.js`: een eenvoudige pagina, om te zien hoe een pagina wordt opgebouwd met `h()` (uitgelegd in `js/helpers.js`).
4. `js/pages/practice.js` en `js/questions/question.js`: hoe een vraag wordt getoond en wat er na het nakijken gebeurt.
5. `js/results.js` en `js/storage.js`: hoe je antwoorden worden geteld en bewaard.

Een paar dingen die helpen bij het lezen:

- De bestanden delen hun functies en variabelen met elkaar. Wat in het ene bestand is gemaakt, kan een later geladen bestand gebruiken. Daarom doet de volgorde in `index.html` ertoe.
- Elk bestand begint met `'use strict';`. De browser meldt dan slordigheden als fout, zoals een variabele die nergens is aangemaakt.
- Namen in de code zijn Engels, de uitleg is Nederlands.

## Je voortgang

Je voortgang staat alleen in je eigen browser (`localStorage`, onder de naam `klankleer-v1`). Hij wordt niet naar een server gestuurd. Met het blok Back-up op Home sla je hem op als bestand.

Twee dingen mogen daarom niet zomaar veranderen, want dan is bewaarde voortgang onvindbaar:

- de naam van de opslag (`STORAGE_KEY` in `js/storage.js`);
- de codes van de vragen (zoals `KLC1D14V1` in `js/data.js`).

## De vragen

`js/data.js` en de map `images/` worden automatisch gemaakt uit de vragenlijsten bij de colleges. Het script dat dat doet, staat niet in deze repo. Pas deze bestanden dus niet met de hand aan: bij de volgende keer bouwen worden ze overschreven.

Bovenaan `js/data.js` staat welke gegevens elke vraag heeft. De gegevens die bij één soort vraag horen, staan uitgelegd bovenaan het bestand van die soort in `js/questions/`.

## Opmaak van de code

De code is opgemaakt met [Prettier](https://prettier.io/), een programma dat code automatisch netjes zet (inspringen, aanhalingstekens, regellengte). De instellingen staan in `.prettierrc`. In `.prettierignore` staat dat `js/data.js` wordt overgeslagen.

Controleren of alles nog netjes staat, doe je in de terminal vanuit de map van de repo:

```
npx prettier@3.3.3 --check .
```

- `npx` haalt een programma tijdelijk op en voert het uit. Hiervoor moet Node.js geïnstalleerd zijn.
- `prettier@3.3.3` is het programma, met het versienummer erbij zodat de uitkomst altijd gelijk is.
- `--check` kijkt alleen en verandert niets. Met `--write` op die plek past Prettier de bestanden aan.
- `.` betekent: alle bestanden in deze map.
