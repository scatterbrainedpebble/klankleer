/*
 * data.js – alle colleges en vragen van de site.
 *
 * LET OP: dit bestand wordt automatisch gemaakt door het bouwscript (export_site.py).
 * Pas het niet met de hand aan: bij de volgende keer bouwen wordt het overschreven.
 *
 * Elke vraag heeft in elk geval:
 *   code   de vaste code van de vraag (KLC<college>D<dia>V<vraag>); de voortgang hangt eraan,
 *          dus een code mag nooit veranderen
 *   num    het nummer in de oefenvolgorde
 *   title  de titel boven de vraag ("Categorie – onderwerp")
 *   cat    het onderwerp, voor de pagina's Voortgang en Overzicht
 *   type   de soort vraag: card, blanks, mc, click, ipa of drag
 *   ref    de verwijzing naar de dia ("Zie: week 1, college 1, dia 14")
 *   theory een stukje theorie (HTML) dat na het antwoorden boven de verwijzing verschijnt
 * De overige velden verschillen per soort; ze staan uitgelegd bovenaan het bestand
 * van die soort in de map js/questions/.
 */
const DATA = {
  "colleges": [
    {
      "id": "c1",
      "title": "College 1",
      "week": "Week 1 · hoorcollege 1",
      "sub": "Introductie in de fonetiek en fonologie",
      "items": [
        {
          "code": "KLC1D14V1",
          "num": 1,
          "title": "Fonetiek – deelgebieden",
          "cat": "Fonetiek",
          "type": "drag",
          "question": "Sleep elk deelgebied van de fonetiek naar wat het bestudeert.",
          "size": {
            "width": 600,
            "height": 360
          },
          "bg": "images/KLC1D14V1.webp",
          "els": [
            {
              "text": "<p>articulatorisch</p>",
              "x": 73.2,
              "y": 79.44444444444444,
              "w": 7.6,
              "h": 2
            },
            {
              "text": "<p>akoestisch</p>",
              "x": 6.533333333333334,
              "y": 79.44444444444444,
              "w": 7.6,
              "h": 2
            },
            {
              "text": "<p>perceptief</p>",
              "x": 39.86666666666667,
              "y": 79.44444444444444,
              "w": 7.6,
              "h": 2
            }
          ],
          "zones": [
            {
              "x": 5.833333333333333,
              "y": 50,
              "w": 8.125,
              "h": 2.5,
              "single": true,
              "correct": [
                0
              ],
              "label": "spraakproductie"
            },
            {
              "x": 39.166666666666664,
              "y": 50,
              "w": 8.125,
              "h": 2.5,
              "single": true,
              "correct": [
                1
              ],
              "label": "spraakgeluid"
            },
            {
              "x": 72.5,
              "y": 50,
              "w": 8.125,
              "h": 2.5,
              "single": true,
              "correct": [
                2
              ],
              "label": "spraakperceptie"
            }
          ],
          "ref": "Zie: week 1, college 1, dia 14",
          "theory": "<p>Dit zijn de deelgebieden van de spraakketen tussen spreker en luisteraar. Het vak Klankleer 1 richt zich met name op het articulatorische deel.</p>"
        },
        {
          "code": "KLC1D19V1",
          "num": 2,
          "title": "Fonetiek – fonetiek en fonologie",
          "cat": "Fonetiek",
          "type": "mc",
          "question": "<p>Welke van deze twee zinnen is waar?</p>",
          "answers": [
            {
              "text": "<div>Fonologie is een subdomein van fonetiek.</div>",
              "correct": false
            },
            {
              "text": "<div>Fonetiek is een subdomein van fonologie.</div>",
              "correct": true
            }
          ],
          "ref": "Zie: week 1, college 1, dia 19",
          "theory": "<p>Fonetiek is het instrument om de klanken van een taal te beschrijven, wat helpt met het begrijpen van het klanksysteem.</p>"
        },
        {
          "code": "KLC1D18V1",
          "num": 3,
          "title": "Fonetiek – fonologie",
          "cat": "Fonetiek",
          "type": "blanks",
          "question": "<p>Vul het ontbrekende woord in.</p>",
          "segs": [
            {
              "text": "<p>Fonologie is een deelgebied van taalkunde dat zich bezighoudt met "
            },
            {
              "blank": [
                "klanksystemen"
              ]
            },
            {
              "text": ".</p>"
            }
          ],
          "correct": "klanksystemen",
          "ref": "Zie: week 1, college 1, dia 18",
          "image": null,
          "alt": "",
          "theory": "<p>Fonologie vraagt: wat is het klanksysteem van een taal, welke functie heeft een klank, en met welke andere klanken kan hij voorkomen?</p>"
        },
        {
          "code": "KLC1D14V2",
          "num": 4,
          "title": "Fonetiek – deelgebieden",
          "cat": "Fonetiek",
          "type": "blanks",
          "question": "<p>Hoe heet het deelgebied van de fonetiek dat de productie van spraakklanken bestudeert?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "articulatorisch"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "articulatorisch",
          "ref": "Zie: week 1, college 1, dia 14",
          "image": null,
          "alt": "",
          "theory": "<p>Articulatorische fonetiek gaat over hoe je klanken maakt met je spraakorganen.</p>"
        },
        {
          "code": "KLC1D13V1",
          "num": 5,
          "title": "Fonetiek – wat bestudeert fonetiek",
          "cat": "Fonetiek",
          "type": "card",
          "front": "<p>Welke drie onderdelen van de fonetiek zijn op de dia weggehaald?</p>",
          "back": "<p>spraakproductie, spraakgeluid, spraakperceptie</p>",
          "ref": "Zie: week 1, college 1, dia 13",
          "image": "images/image-2bIuHTAJ.webp",
          "alt": "Schema spraakketen, dia 13, met de drie onderdelen van de fonetiek afgedekt",
          "theory": "<p>De fonetiek bestudeert de hele spraakketen tussen spreker en luisteraar: het maken van spraak, het geluid zelf en het waarnemen ervan.</p>"
        },
        {
          "code": "KLC1D31V1",
          "num": 6,
          "title": "Systemen – bron en filter",
          "cat": "Systemen",
          "type": "drag",
          "question": "Sleep elk onderdeel naar de juiste component.",
          "size": {
            "width": 600,
            "height": 450
          },
          "bg": "images/KLC1D31V1.webp",
          "els": [
            {
              "text": "<p>energiebron</p>",
              "x": 8.0,
              "y": 72,
              "w": 9,
              "h": 2
            },
            {
              "text": "<p>geluidsbron</p>",
              "x": 36.0,
              "y": 72,
              "w": 9,
              "h": 2
            },
            {
              "text": "<p>filter</p>",
              "x": 64.0,
              "y": 72,
              "w": 9,
              "h": 2
            }
          ],
          "zones": [
            {
              "x": 2.5,
              "y": 38.88888888888889,
              "w": 10.625,
              "h": 3.125,
              "single": true,
              "correct": [
                0
              ],
              "label": "subglottale component"
            },
            {
              "x": 35.833333333333336,
              "y": 38.88888888888889,
              "w": 10.625,
              "h": 3.125,
              "single": true,
              "correct": [
                1
              ],
              "label": "glottale component"
            },
            {
              "x": 69.16666666666667,
              "y": 38.88888888888889,
              "w": 10.625,
              "h": 3.125,
              "single": true,
              "correct": [
                2
              ],
              "label": "supraglottale component"
            }
          ],
          "ref": "Zie: week 1, college 1, dia 30–31",
          "theory": "<p>Voor spraak heb je een energiebron, een geluidsbron en een filter nodig. Met deze drie componenten kun je de articulatorische eigenschappen van klanken classificeren.</p>"
        },
        {
          "code": "KLC1D15V1",
          "num": 7,
          "title": "Fonetiek – taal en spraak",
          "cat": "Fonetiek",
          "type": "card",
          "front": "<p>Wat is het verschil tussen taal en spraak?</p>",
          "back": "<p>Spraak is de productie van individuele klanken.</p><p>Taal is het gebruik van spraak om te communiceren. </p>",
          "ref": "Zie: week 1, college 1, dia 15",
          "image": null,
          "alt": "",
          "theory": "<p>Bij spraak vraag je: hoe maken we klanken met onze longen en ons spraakkanaal?</p><p>Bij taal vraag je: hoe communiceren we daarmee, en wat betekent een woord?</p>"
        },
        {
          "code": "KLC1D20V1",
          "num": 8,
          "title": "Fonetiek – fonetisch of fonologisch",
          "cat": "Fonetiek",
          "type": "card",
          "front": "<p>rood ~ lood</p><p>Is dit een fonetisch of een fonologisch verschil, en waarom?</p>",
          "back": "<p>Beide. </p><p><strong>Fonetisch</strong>: de r en de l klinken anders.</p><p><strong>Fonologisch</strong>: het klankverschil zorgt ook voor verschil in betekenis.</p>",
          "ref": "Zie: week 1, college 1, dia 20",
          "image": null,
          "alt": "",
          "theory": "<p>Fonetiek gaat over de productie van klanken, fonologie over hun functie: welke klanken maken betekenisonderscheid. Rood en lood zijn twee verschillende woorden, dus r en l zijn ook fonologisch verschillend.</p>"
        },
        {
          "code": "KLC1D18V2",
          "num": 9,
          "title": "Fonetiek – vakgebieden",
          "cat": "Fonetiek",
          "type": "blanks",
          "question": "<p>Vul het ontbrekende woord in.</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "Fonologie"
              ]
            },
            {
              "text": " is een deelgebied van taalkunde dat zich bezighoudt met klanksystemen.</p>"
            }
          ],
          "correct": "fonologie",
          "ref": "Zie: week 1, college 1, dia 18",
          "image": null,
          "alt": "",
          "theory": "<p>Fonologie gaat over het systeem en de functie van klanken. Fonetiek gaat over de klanken zelf: productie, geluid en perceptie.</p>"
        },
        {
          "code": "KLC1D30V4",
          "num": 10,
          "title": "Systemen – effect",
          "cat": "Systemen",
          "type": "blanks",
          "question": "<p>Het subglottale systeem zorgt voor spierspanning en luchtaanvoer van de longen. Wat is het effect hiervan?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "volume"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "volume",
          "ref": "Zie: week 1, college 1, dia 30",
          "image": null,
          "alt": "",
          "theory": "<p>Energiebron geeft volume, geluidsbron geeft toonhoogte, filter geeft timbre. Meer lucht en spierspanning geeft een luidere klank.</p>"
        },
        {
          "code": "KLC1D24V1",
          "num": 11,
          "title": "Systemen",
          "cat": "Systemen",
          "type": "blanks",
          "question": "<p>Welk systeem van het spraakproductieapparaat zit op plek A?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "supraglottale systeem",
                "supraglottaal systeem",
                "supraglottaal",
                "supraglottale"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "supraglottale systeem",
          "ref": "Zie: week 1, college 1, dia 24",
          "image": "images/KLC1D24.webp",
          "alt": "Doorsnede van het hoofd met drie gemarkeerde gebieden A, B en C",
          "theory": "<p>Supra betekent boven: dit is alles boven de glottis, dus de mond-keelholte en de neusholte. Het werkt als filter van spraak.</p>"
        },
        {
          "code": "KLC1D24V4",
          "num": 12,
          "title": "Systemen – model van spraak",
          "cat": "Systemen",
          "type": "blanks",
          "question": "<p>Hoe heet het model van spraak dat bestaat uit het subglottale, glottale en supraglottale systeem?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "power-source-filter model",
                "power-source-filter",
                "power source filter model",
                "power-source-filtermodel"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "power-source-filter model",
          "ref": "Zie: week 1, college 1, dia 24",
          "image": null,
          "alt": "",
          "theory": "<p>Power is de energiebron (subglottaal), source de geluidsbron (glottaal) en filter het spraakkanaal (supraglottaal). Dia 30 noemt het ook de bron-filtertheorie.</p>"
        },
        {
          "code": "KLC1D30V1",
          "num": 13,
          "title": "Systemen – functie",
          "cat": "Systemen",
          "type": "card",
          "front": "<p>Wat doet het subglottale systeem?</p>",
          "back": "<p>Spierspanning, luchtaanvoer van de longen</p>",
          "ref": "Zie: week 1, college 1, dia 30",
          "image": null,
          "alt": "",
          "theory": "<p>Het subglottale systeem is de energiebron. Het effect dat je ervan hoort is volume.</p>"
        },
        {
          "code": "KLC1D25V1",
          "num": 14,
          "title": "Systemen – onderdelen",
          "cat": "Systemen",
          "type": "card",
          "front": "<p>Uit welke onderdelen bestaat het subglottale systeem?</p>",
          "back": "<p>Longen (en bijbehorende spieren), trachea (luchtpijp), luchtwegen onder de larynx</p>",
          "ref": "Zie: week 1, college 1, dia 25",
          "image": null,
          "alt": "",
          "theory": "<p>Het subglottale systeem is alles onder de glottis. Het levert de lucht en is daarmee de energiebron van spraak.</p>"
        },
        {
          "code": "KLC1D27V19",
          "num": 15,
          "title": "Spraakorganen",
          "cat": "Spraakorganen",
          "type": "drag",
          "question": "Sleep elke term naar het juiste vak.",
          "size": {
            "width": 900,
            "height": 948
          },
          "bg": "images/KLC1D27V19.webp",
          "els": [
            {
              "text": "<p>neusholte</p>",
              "x": 1.9821605550049552,
              "y": 73.09501411100658,
              "w": 7.972001982160554,
              "h": 4.013875123885034
            },
            {
              "text": "<p>mondholte</p>",
              "x": 18.13676907829534,
              "y": 73.09501411100658,
              "w": 7.972001982160554,
              "h": 4.013875123885034
            },
            {
              "text": "<p>hard gehemelte (palatum)</p>",
              "x": 34.29137760158573,
              "y": 73.09501411100658,
              "w": 7.972001982160554,
              "h": 4.013875123885034
            },
            {
              "text": "<p>tandkassen (alveolen)</p>",
              "x": 50.44598612487612,
              "y": 73.09501411100658,
              "w": 7.972001982160554,
              "h": 4.013875123885034
            },
            {
              "text": "<p>zacht gehemelte (velum)</p>",
              "x": 66.6005946481665,
              "y": 73.09501411100658,
              "w": 7.972001982160554,
              "h": 4.013875123885034
            },
            {
              "text": "<p>keelholte (pharynx)</p>",
              "x": 82.7552031714569,
              "y": 73.09501411100658,
              "w": 7.972001982160554,
              "h": 4.013875123885034
            },
            {
              "text": "<p>tong</p>",
              "x": 1.9821605550049552,
              "y": 81.74976481655692,
              "w": 7.972001982160554,
              "h": 4.013875123885034
            },
            {
              "text": "<p>strotklep (epiglottis)</p>",
              "x": 18.13676907829534,
              "y": 81.74976481655692,
              "w": 7.972001982160554,
              "h": 4.013875123885034
            },
            {
              "text": "<p>lippen</p>",
              "x": 34.29137760158573,
              "y": 81.74976481655692,
              "w": 7.972001982160554,
              "h": 4.013875123885034
            },
            {
              "text": "<p>strottenhoofd (larynx)</p>",
              "x": 50.44598612487612,
              "y": 81.74976481655692,
              "w": 7.972001982160554,
              "h": 4.013875123885034
            },
            {
              "text": "<p>stemspleet (glottis)</p>",
              "x": 66.6005946481665,
              "y": 81.74976481655692,
              "w": 7.972001982160554,
              "h": 4.013875123885034
            },
            {
              "text": "<p>luchtpijp (trachea)</p>",
              "x": 82.7552031714569,
              "y": 81.74976481655692,
              "w": 7.972001982160554,
              "h": 4.013875123885034
            },
            {
              "text": "<p>slokdarm (esophagus)</p>",
              "x": 1.9821605550049552,
              "y": 90.40451552210725,
              "w": 7.972001982160554,
              "h": 4.013875123885034
            }
          ],
          "zones": [
            {
              "x": 65.75817641228939,
              "y": 12.982126058325495,
              "w": 7.972001982160554,
              "h": 4.013875123885034,
              "single": true,
              "correct": [
                0
              ],
              "label": "neusholte"
            },
            {
              "x": 25.074331020812686,
              "y": 15.522107243650046,
              "w": 7.972001982160554,
              "h": 4.013875123885034,
              "single": true,
              "correct": [
                1
              ],
              "label": "mondholte"
            },
            {
              "x": 44.49950445986125,
              "y": 18.438381937911572,
              "w": 7.972001982160554,
              "h": 4.013875123885034,
              "single": true,
              "correct": [
                2
              ],
              "label": "hard gehemelte (palatum)"
            },
            {
              "x": 69.87115956392468,
              "y": 23.142050799623707,
              "w": 7.972001982160554,
              "h": 4.013875123885034,
              "single": true,
              "correct": [
                3
              ],
              "label": "tandkassen (alveolen)"
            },
            {
              "x": 20.614469772051535,
              "y": 24.082784571966133,
              "w": 7.972001982160554,
              "h": 4.013875123885034,
              "single": true,
              "correct": [
                4
              ],
              "label": "zacht gehemelte (velum)"
            },
            {
              "x": 25.074331020812686,
              "y": 31.796801505174038,
              "w": 7.972001982160554,
              "h": 4.013875123885034,
              "single": true,
              "correct": [
                5
              ],
              "label": "keelholte (pharynx)"
            },
            {
              "x": 51.238850346878095,
              "y": 37.723424270931325,
              "w": 7.972001982160554,
              "h": 4.013875123885034,
              "single": true,
              "correct": [
                6
              ],
              "label": "tong"
            },
            {
              "x": 20.614469772051535,
              "y": 40.35747883349012,
              "w": 7.972001982160554,
              "h": 4.013875123885034,
              "single": true,
              "correct": [
                7
              ],
              "label": "strotklep (epiglottis)"
            },
            {
              "x": 85.72844400396433,
              "y": 41.11006585136406,
              "w": 7.972001982160554,
              "h": 4.013875123885034,
              "single": true,
              "correct": [
                8
              ],
              "label": "lippen"
            },
            {
              "x": 2.8245787908820614,
              "y": 45.06114769520226,
              "w": 7.972001982160554,
              "h": 4.013875123885034,
              "single": true,
              "correct": [
                9
              ],
              "label": "strottenhoofd (larynx)"
            },
            {
              "x": 4.360753221010902,
              "y": 53.5277516462841,
              "w": 7.972001982160554,
              "h": 4.013875123885034,
              "single": true,
              "correct": [
                10
              ],
              "label": "stemspleet (glottis)"
            },
            {
              "x": 61.34786917740337,
              "y": 64.25211665098777,
              "w": 7.972001982160554,
              "h": 4.013875123885034,
              "single": true,
              "correct": [
                11
              ],
              "label": "luchtpijp (trachea)"
            },
            {
              "x": 18.434093161546087,
              "y": 64.39322671683914,
              "w": 7.972001982160554,
              "h": 4.013875123885034,
              "single": true,
              "correct": [
                12
              ],
              "label": "slokdarm (esophagus)"
            }
          ],
          "ref": "Zie: week 1, college 1, dia 27",
          "theory": "<p>Van boven naar beneden: neusholte, mondholte en keelholte (supraglottaal), dan strottenhoofd met de stemspleet (glottaal), dan de luchtpijp (subglottaal).</p>"
        },
        {
          "code": "KLC1D14V3",
          "num": 16,
          "title": "Fonetiek – deelgebieden",
          "cat": "Fonetiek",
          "type": "blanks",
          "question": "<p>Hoe heet het deelgebied van de fonetiek dat het overbrengen van spraakklanken bestudeert?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "akoestisch"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "akoestisch",
          "ref": "Zie: week 1, college 1, dia 14",
          "image": null,
          "alt": "",
          "theory": "<p>Akoestische fonetiek gaat over het spraakgeluid zelf: de geluidsgolven tussen spreker en luisteraar.</p>"
        },
        {
          "code": "KLC1D20V2",
          "num": 17,
          "title": "Fonetiek – fonetisch of fonologisch",
          "cat": "Fonetiek",
          "type": "card",
          "front": "<p>[ʀoːt] ~ [roːt]</p><p>Is dit een fonetisch of een fonologisch verschil, en waarom?</p>",
          "back": "<p>Alleen fonetisch. </p><p>De [ʀ] en de [r] klinken anders, maar het blijft hetzelfde woord (rood).</p><p>Het verschil maakt in het Nederlands geen betekenisonderscheid.</p>",
          "ref": "Zie: week 1, college 1, dia 20",
          "image": null,
          "alt": "",
          "theory": "<p>[ʀ] is de huig-r en [r] de tongpunt-r: twee manieren om dezelfde r te maken. Fonologie is taalspecifiek: in het Nederlands maakt geen ander woord.</p>"
        },
        {
          "code": "KLC1D27V20",
          "num": 18,
          "title": "Spraakorganen – de tong",
          "cat": "Spraakorganen",
          "type": "drag",
          "question": "Sleep elke term naar het juiste vak.",
          "size": {
            "width": 900,
            "height": 974
          },
          "bg": "images/KLC1D27V20.webp",
          "els": [
            {
              "text": "<p>tongrug</p>",
              "x": 2.600780234070221,
              "y": 73.5576923076923,
              "w": 10.533159947984394,
              "h": 6.217490247074122
            },
            {
              "text": "<p>tongblad</p>",
              "x": 23.927178153446032,
              "y": 73.5576923076923,
              "w": 10.533159947984394,
              "h": 6.217490247074122
            },
            {
              "text": "<p>tongpunt</p>",
              "x": 45.25357607282184,
              "y": 73.5576923076923,
              "w": 10.533159947984394,
              "h": 6.217490247074122
            },
            {
              "text": "<p>tongwortel</p>",
              "x": 66.57997399219767,
              "y": 73.5576923076923,
              "w": 10.533159947984394,
              "h": 6.217490247074122
            },
            {
              "text": "<p>tongbeen</p>",
              "x": 2.600780234070221,
              "y": 86.17788461538461,
              "w": 10.533159947984394,
              "h": 6.217490247074122
            }
          ],
          "zones": [
            {
              "x": 19.700910273081927,
              "y": 0.1201923076923077,
              "w": 10.533159947984394,
              "h": 6.217490247074122,
              "single": true,
              "correct": [
                0
              ],
              "label": "tongrug"
            },
            {
              "x": 59.687906371911566,
              "y": 3.8461538461538463,
              "w": 10.533159947984394,
              "h": 6.217490247074122,
              "single": true,
              "correct": [
                1
              ],
              "label": "tongblad"
            },
            {
              "x": 81.20936280884266,
              "y": 12.920673076923078,
              "w": 10.533159947984394,
              "h": 6.217490247074122,
              "single": true,
              "correct": [
                2
              ],
              "label": "tongpunt"
            },
            {
              "x": 0.13003901170351106,
              "y": 15.985576923076922,
              "w": 10.533159947984394,
              "h": 6.217490247074122,
              "single": true,
              "correct": [
                3
              ],
              "label": "tongwortel"
            },
            {
              "x": 54.0962288686606,
              "y": 60.87740384615385,
              "w": 10.533159947984394,
              "h": 6.217490247074122,
              "single": true,
              "correct": [
                4
              ],
              "label": "tongbeen"
            }
          ],
          "ref": "Zie: week 1, college 1, dia 27",
          "theory": "<p>Van voor naar achter: tongpunt, tongblad, tongrug, tongwortel. Het tongbeen zit eronder. Deze namen komen terug bij de plaatsen van articulatie.</p>"
        },
        {
          "code": "KLC1D30V5",
          "num": 19,
          "title": "Systemen – effect",
          "cat": "Systemen",
          "type": "blanks",
          "question": "<p>Het glottale systeem zorgt voor beweging van de stembanden. Wat is het effect hiervan?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "toonhoogte"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "toonhoogte",
          "ref": "Zie: week 1, college 1, dia 30",
          "image": null,
          "alt": "",
          "theory": "<p>Energiebron geeft volume, geluidsbron geeft toonhoogte, filter geeft timbre. Sneller trillende stembanden geven een hogere toon.</p>"
        },
        {
          "code": "KLC1D24V2",
          "num": 20,
          "title": "Systemen",
          "cat": "Systemen",
          "type": "blanks",
          "question": "<p>Welk systeem van het spraakproductieapparaat zit op plek B?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "glottale systeem",
                "glottaal systeem",
                "glottaal",
                "glottale"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "glottale systeem",
          "ref": "Zie: week 1, college 1, dia 24",
          "image": "images/KLC1D24.webp",
          "alt": "Doorsnede van het hoofd met drie gemarkeerde gebieden A, B en C",
          "theory": "<p>Dit is het gebied rond de glottis: het strottenhoofd met de stembanden. Het is de geluidsbron van spraak.</p>"
        },
        {
          "code": "KLC1D28V10",
          "num": 21,
          "title": "Spraakorganen – spraakkanaal",
          "cat": "Spraakorganen",
          "type": "drag",
          "question": "Sleep elke term naar het juiste vak.",
          "size": {
            "width": 900,
            "height": 913
          },
          "bg": "images/KLC1D28V10.webp",
          "els": [
            {
              "text": "<p>zacht gehemelte (velum)</p>",
              "x": 2.1052631578947367,
              "y": 77.17842323651453,
              "w": 8.526315789473683,
              "h": 5.032894736842105
            },
            {
              "text": "<p>tongrug</p>",
              "x": 19.36842105263158,
              "y": 77.17842323651453,
              "w": 8.526315789473683,
              "h": 5.032894736842105
            },
            {
              "text": "<p>lippen</p>",
              "x": 36.63157894736842,
              "y": 77.17842323651453,
              "w": 8.526315789473683,
              "h": 5.032894736842105
            },
            {
              "text": "<p>tongwortel</p>",
              "x": 53.89473684210526,
              "y": 77.17842323651453,
              "w": 8.526315789473683,
              "h": 5.032894736842105
            },
            {
              "text": "<p>tongpunt</p>",
              "x": 71.15789473684211,
              "y": 77.17842323651453,
              "w": 8.526315789473683,
              "h": 5.032894736842105
            },
            {
              "text": "<p>faryngale wand</p>",
              "x": 2.1052631578947367,
              "y": 88.07053941908714,
              "w": 8.526315789473683,
              "h": 5.032894736842105
            },
            {
              "text": "<p>strotklep (epiglottis)</p>",
              "x": 19.36842105263158,
              "y": 88.07053941908714,
              "w": 8.526315789473683,
              "h": 5.032894736842105
            },
            {
              "text": "<p>strottenhoofd (larynx)</p>",
              "x": 36.63157894736842,
              "y": 88.07053941908714,
              "w": 8.526315789473683,
              "h": 5.032894736842105
            },
            {
              "text": "<p>stemplooien</p>",
              "x": 53.89473684210526,
              "y": 88.07053941908714,
              "w": 8.526315789473683,
              "h": 5.032894736842105
            }
          ],
          "zones": [
            {
              "x": 13.210526315789473,
              "y": 6.690871369294606,
              "w": 8.526315789473683,
              "h": 5.032894736842105,
              "single": true,
              "correct": [
                0
              ],
              "label": "zacht gehemelte (velum)"
            },
            {
              "x": 51.89473684210526,
              "y": 11.825726141078837,
              "w": 8.526315789473683,
              "h": 5.032894736842105,
              "single": true,
              "correct": [
                1
              ],
              "label": "tongrug"
            },
            {
              "x": 84.73684210526315,
              "y": 15.819502074688796,
              "w": 8.526315789473683,
              "h": 5.032894736842105,
              "single": true,
              "correct": [
                2
              ],
              "label": "lippen"
            },
            {
              "x": 7.473684210526316,
              "y": 25.72614107883817,
              "w": 8.526315789473683,
              "h": 5.032894736842105,
              "single": true,
              "correct": [
                3
              ],
              "label": "tongwortel"
            },
            {
              "x": 76.84210526315789,
              "y": 29.66804979253112,
              "w": 8.526315789473683,
              "h": 5.032894736842105,
              "single": true,
              "correct": [
                4
              ],
              "label": "tongpunt"
            },
            {
              "x": 46.8421052631579,
              "y": 37.0850622406639,
              "w": 8.526315789473683,
              "h": 5.032894736842105,
              "single": true,
              "correct": [
                5
              ],
              "label": "faryngale wand"
            },
            {
              "x": 11.578947368421053,
              "y": 40.04149377593361,
              "w": 8.526315789473683,
              "h": 5.032894736842105,
              "single": true,
              "correct": [
                6
              ],
              "label": "strotklep (epiglottis)"
            },
            {
              "x": 11.578947368421053,
              "y": 50.20746887966805,
              "w": 8.526315789473683,
              "h": 5.032894736842105,
              "single": true,
              "correct": [
                7
              ],
              "label": "strottenhoofd (larynx)"
            },
            {
              "x": 11.578947368421053,
              "y": 60.37344398340249,
              "w": 8.526315789473683,
              "h": 5.032894736842105,
              "single": true,
              "correct": [
                8
              ],
              "label": "stemplooien"
            }
          ],
          "ref": "Zie: week 1, college 1, dia 28",
          "theory": "<p>Het spraakkanaal loopt van de stemplooien tot de lippen. Het is het filter van spraak: hier krijgt het geluid zijn klankkleur (dia 30).</p>"
        },
        {
          "code": "KLC1D30V2",
          "num": 22,
          "title": "Systemen – functie",
          "cat": "Systemen",
          "type": "card",
          "front": "<p>Wat doet het glottale systeem?</p>",
          "back": "<p>Beweging van de stembanden (vocal fold vibration)</p>",
          "ref": "Zie: week 1, college 1, dia 30",
          "image": null,
          "alt": "",
          "theory": "<p>Het glottale systeem is de geluidsbron. Het effect dat je ervan hoort is toonhoogte.</p>"
        },
        {
          "code": "KLC1D29V2",
          "num": 23,
          "title": "Systemen – onderdelen",
          "cat": "Systemen",
          "type": "card",
          "front": "<p>Uit welke onderdelen bestaat het glottale systeem?</p>",
          "back": "<p>Strottenhoofd, glottis (= opening tussen de stembanden), stembanden</p>",
          "ref": "Zie: week 1, college 1, dia 29",
          "image": null,
          "alt": "",
          "theory": "<p>Het glottale systeem zit tussen de luchtpijp en de keelholte. Hier ontstaat het geluid: het is de geluidsbron van spraak.</p>"
        },
        {
          "code": "KLC1D14V4",
          "num": 24,
          "title": "Fonetiek – deelgebieden",
          "cat": "Fonetiek",
          "type": "blanks",
          "question": "<p>Hoe heet het deelgebied van de fonetiek dat de perceptie van spraakklanken bestudeert?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "perceptief"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "perceptief",
          "ref": "Zie: week 1, college 1, dia 14",
          "image": null,
          "alt": "",
          "theory": "<p>Perceptieve fonetiek gaat over hoe de luisteraar spraakklanken waarneemt.</p>"
        },
        {
          "code": "KLC1D30V6",
          "num": 25,
          "title": "Systemen – effect",
          "cat": "Systemen",
          "type": "blanks",
          "question": "<p>Het supraglottale systeem zorgt voor resonantie in de spraakbuis. Wat is het effect hiervan?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "timbre",
                "klankkleur",
                "timbre of klankkleur"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "timbre of klankkleur",
          "ref": "Zie: week 1, college 1, dia 30",
          "image": null,
          "alt": "",
          "theory": "<p>Energiebron geeft volume, geluidsbron geeft toonhoogte, filter geeft timbre. De vorm van mond-, keel- en neusholte bepaalt welke klank je hoort.</p>"
        },
        {
          "code": "KLC1D27V1",
          "num": 26,
          "title": "Spraakorganen",
          "cat": "Spraakorganen",
          "type": "blanks",
          "question": "<p>Wat staat op plek A?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "neusholte"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "neusholte",
          "ref": "Zie: week 1, college 1, dia 27",
          "image": "images/KLC1D27a.webp",
          "alt": "Doorsnede van het hoofd met de spraakorganen, labels vervangen door letters A tot en met M",
          "theory": "<p>De holte boven het gehemelte. Bij nasalen zoals [m] en [n] ontsnapt de lucht hierlangs. Hoort bij het supraglottale systeem.</p>"
        },
        {
          "code": "KLC1D27V14",
          "num": 27,
          "title": "Spraakorganen – de tong",
          "cat": "Spraakorganen",
          "type": "blanks",
          "question": "<p>Wat staat op plek A?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "tongrug"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "tongrug",
          "ref": "Zie: week 1, college 1, dia 27",
          "image": "images/KLC1D27b.webp",
          "alt": "Doorsnede van de tong, labels vervangen door letters A tot en met E",
          "theory": "<p>Het bovenste, achterste deel van de tong. Hiermee maak je onder andere velaire klanken: de tongrug tegen het zachte gehemelte.</p>"
        },
        {
          "code": "KLC1D28V6",
          "num": 28,
          "title": "Spraakorganen – spraakkanaal",
          "cat": "Spraakorganen",
          "type": "blanks",
          "question": "<p>Wat staat op plek F?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "faryngale wand"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "faryngale wand",
          "ref": "Zie: week 1, college 1, dia 28",
          "image": "images/KLC1D28.webp",
          "alt": "Doorsnede van het spraakkanaal, labels vervangen door letters A tot en met I",
          "theory": "<p>De achterwand van de keelholte (farynx). Faryngale klanken worden gemaakt door de tongwortel hier dichtbij te brengen.</p>"
        },
        {
          "code": "KLC1D27V22",
          "num": 29,
          "title": "Spraakorganen – ander woord",
          "cat": "Spraakorganen",
          "type": "blanks",
          "question": "<p>Geef een ander woord voor tandkassen.</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "alveolen",
                "alveoli"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "alveolen",
          "ref": "Zie: week 1, college 1, dia 27",
          "image": null,
          "alt": "",
          "theory": "<p>Van alveolen komt alveolair, de naam van de plaats van articulatie bij de tandkassen.</p>"
        },
        {
          "code": "KLC1D24V3",
          "num": 30,
          "title": "Systemen",
          "cat": "Systemen",
          "type": "blanks",
          "question": "<p>Welk systeem van het spraakproductieapparaat zit op plek C?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "subglottale systeem",
                "subglottaal systeem",
                "subglottaal",
                "subglottale"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "subglottale systeem",
          "ref": "Zie: week 1, college 1, dia 24",
          "image": "images/KLC1D24.webp",
          "alt": "Doorsnede van het hoofd met drie gemarkeerde gebieden A, B en C",
          "theory": "<p>Sub betekent onder: dit is alles onder de glottis, dus de longen en de luchtpijp. Het is de energiebron van spraak.</p>"
        },
        {
          "code": "KLC1D30V3",
          "num": 31,
          "title": "Systemen – functie",
          "cat": "Systemen",
          "type": "card",
          "front": "<p>Wat doet het supraglottale systeem?</p>",
          "back": "<p>Resonantie in de spraakbuis (het spraakkanaal)</p>",
          "ref": "Zie: week 1, college 1, dia 30",
          "image": null,
          "alt": "",
          "theory": "<p>Het supraglottale systeem is het filter. Het effect dat je ervan hoort is timbre of klankkleur.</p>"
        },
        {
          "code": "KLC1D26V1",
          "num": 32,
          "title": "Systemen – onderdelen",
          "cat": "Systemen",
          "type": "card",
          "front": "<p>Uit welke onderdelen bestaat het supraglottale systeem?</p>",
          "back": "<p>De mond-keelholte en de neusholte (ook wel: spraakkanaal of spraakbuis)</p>",
          "ref": "Zie: week 1, college 1, dia 26",
          "image": null,
          "alt": "",
          "theory": "<p>Het supraglottale systeem is alles boven de glottis. Het geluid van de stembanden krijgt hier zijn vorm: het is het filter van spraak.</p>"
        },
        {
          "code": "KLC1D27V2",
          "num": 33,
          "title": "Spraakorganen",
          "cat": "Spraakorganen",
          "type": "blanks",
          "question": "<p>Wat staat op plek B?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "mondholte"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "mondholte",
          "ref": "Zie: week 1, college 1, dia 27",
          "image": "images/KLC1D27a.webp",
          "alt": "Doorsnede van het hoofd met de spraakorganen, labels vervangen door letters A tot en met M",
          "theory": "<p>De ruimte tussen de lippen en de keelholte. Hier worden de meeste vernauwingen voor consonanten gemaakt. Hoort bij het supraglottale systeem.</p>"
        },
        {
          "code": "KLC1D27V15",
          "num": 34,
          "title": "Spraakorganen – de tong",
          "cat": "Spraakorganen",
          "type": "blanks",
          "question": "<p>Wat staat op plek B?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "tongblad"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "tongblad",
          "ref": "Zie: week 1, college 1, dia 27",
          "image": "images/KLC1D27b.webp",
          "alt": "Doorsnede van de tong, labels vervangen door letters A tot en met E",
          "theory": "<p>Het deel net achter de tongpunt. Hiermee maak je onder andere alveolaire en postalveolaire klanken.</p>"
        },
        {
          "code": "KLC1D28V9",
          "num": 35,
          "title": "Spraakorganen – spraakkanaal",
          "cat": "Spraakorganen",
          "type": "blanks",
          "question": "<p>Wat staat op plek I?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "stemplooien"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "stemplooien",
          "ref": "Zie: week 1, college 1, dia 28",
          "image": "images/KLC1D28.webp",
          "alt": "Doorsnede van het spraakkanaal, labels vervangen door letters A tot en met I",
          "theory": "<p>Stemplooien is een ander woord voor stembanden. Als ze trillen is een klank stemhebbend (dia 43). De opening ertussen is de glottis.</p>"
        },
        {
          "code": "KLC1D27V26",
          "num": 36,
          "title": "Spraakorganen – ander woord",
          "cat": "Spraakorganen",
          "type": "blanks",
          "question": "<p>Geef een ander woord voor strottenhoofd.</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "larynx"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "larynx",
          "ref": "Zie: week 1, college 1, dia 27",
          "image": null,
          "alt": "",
          "theory": "<p>Van larynx komen laryngaal en supralaryngaal (dia 66). In het strottenhoofd zitten de stembanden.</p>"
        },
        {
          "code": "KLC1D27V3",
          "num": 37,
          "title": "Spraakorganen",
          "cat": "Spraakorganen",
          "type": "blanks",
          "question": "<p>Wat staat op plek C?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "hard gehemelte",
                "palatum"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "hard gehemelte (palatum)",
          "ref": "Zie: week 1, college 1, dia 27",
          "image": "images/KLC1D27a.webp",
          "alt": "Doorsnede van het hoofd met de spraakorganen, labels vervangen door letters A tot en met M",
          "theory": "<p>Het harde, voorste deel van het gehemelte. Klanken die hier gemaakt worden heten palataal, zoals [j].</p>"
        },
        {
          "code": "KLC1D27V16",
          "num": 38,
          "title": "Spraakorganen – de tong",
          "cat": "Spraakorganen",
          "type": "blanks",
          "question": "<p>Wat staat op plek C?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "tongpunt"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "tongpunt",
          "ref": "Zie: week 1, college 1, dia 27",
          "image": "images/KLC1D27b.webp",
          "alt": "Doorsnede van de tong, labels vervangen door letters A tot en met E",
          "theory": "<p>Het uiterste puntje van de tong. Hiermee maak je onder andere dentale en alveolaire klanken, zoals de tongpunt-r [r].</p>"
        },
        {
          "code": "KLC1D27V23",
          "num": 39,
          "title": "Spraakorganen – ander woord",
          "cat": "Spraakorganen",
          "type": "blanks",
          "question": "<p>Geef een ander woord voor zacht gehemelte.</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "velum"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "velum",
          "ref": "Zie: week 1, college 1, dia 27",
          "image": null,
          "alt": "",
          "theory": "<p>Van velum komt velair, de naam van de plaats van articulatie bij het zachte gehemelte.</p>"
        },
        {
          "code": "KLC1D32V1",
          "num": 40,
          "title": "Luchtstroom – richting",
          "cat": "Luchtstroom",
          "type": "drag",
          "question": "Klankindeling op luchtstroommechanismen: sleep elke term naar de juiste omschrijving.",
          "size": {
            "width": 600,
            "height": 450
          },
          "bg": "images/KLC1D32V1.webp",
          "els": [
            {
              "text": "<p>egressief</p>",
              "x": 8.0,
              "y": 72,
              "w": 9,
              "h": 2
            },
            {
              "text": "<p>ingressief</p>",
              "x": 50.0,
              "y": 72,
              "w": 9,
              "h": 2
            }
          ],
          "zones": [
            {
              "x": 10.833333333333334,
              "y": 38.88888888888889,
              "w": 10.625,
              "h": 3.125,
              "single": true,
              "correct": [
                0
              ],
              "label": "luchtstroom naar buiten"
            },
            {
              "x": 60.83333333333333,
              "y": 38.88888888888889,
              "w": 10.625,
              "h": 3.125,
              "single": true,
              "correct": [
                1
              ],
              "label": "lucht van buiten naar binnen"
            }
          ],
          "ref": "Zie: week 1, college 1, dia 32",
          "theory": "<p>De meeste talen gebruiken alleen egressieve klanken. Ingressief zijn bijvoorbeeld Frans 'ouais' en Noors 'ja'. Ook het Nederlandse 'ja' kan ingressief gebruikt worden.</p>"
        },
        {
          "code": "KLC1D27V4",
          "num": 41,
          "title": "Spraakorganen",
          "cat": "Spraakorganen",
          "type": "blanks",
          "question": "<p>Wat staat op plek D?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "tandkassen",
                "alveolen"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "tandkassen (alveolen)",
          "ref": "Zie: week 1, college 1, dia 27",
          "image": "images/KLC1D27a.webp",
          "alt": "Doorsnede van het hoofd met de spraakorganen, labels vervangen door letters A tot en met M",
          "theory": "<p>De rand vlak achter de boventanden. Klanken die hier gemaakt worden heten alveolair, zoals [t], [d], [n] en [s].</p>"
        },
        {
          "code": "KLC1D27V17",
          "num": 42,
          "title": "Spraakorganen – de tong",
          "cat": "Spraakorganen",
          "type": "blanks",
          "question": "<p>Wat staat op plek D?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "tongwortel"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "tongwortel",
          "ref": "Zie: week 1, college 1, dia 27",
          "image": "images/KLC1D27b.webp",
          "alt": "Doorsnede van de tong, labels vervangen door letters A tot en met E",
          "theory": "<p>Het achterste deel van de tong, onder in de keelholte, tegenover de faryngale wand. Bij faryngale klanken gaat de tong naar achteren en omlaag.</p>"
        },
        {
          "code": "KLC1D35V1",
          "num": 43,
          "title": "Luchtstroom – energiebron",
          "cat": "Luchtstroom",
          "type": "drag",
          "question": "Klanken geclassificeerd door de energiebron: sleep elke term naar de juiste omschrijving.",
          "size": {
            "width": 600,
            "height": 450
          },
          "bg": "images/KLC1D35V1.webp",
          "els": [
            {
              "text": "<p>pulmonisch</p>",
              "x": 8.0,
              "y": 72,
              "w": 9,
              "h": 2
            },
            {
              "text": "<p>glottalisch</p>",
              "x": 36.0,
              "y": 72,
              "w": 9,
              "h": 2
            },
            {
              "text": "<p>lingual</p>",
              "x": 64.0,
              "y": 72,
              "w": 9,
              "h": 2
            }
          ],
          "zones": [
            {
              "x": 2.5,
              "y": 38.88888888888889,
              "w": 10.625,
              "h": 3.125,
              "single": true,
              "correct": [
                0
              ],
              "label": "longen"
            },
            {
              "x": 35.833333333333336,
              "y": 38.88888888888889,
              "w": 10.625,
              "h": 3.125,
              "single": true,
              "correct": [
                1
              ],
              "label": "larynx"
            },
            {
              "x": 69.16666666666667,
              "y": 38.88888888888889,
              "w": 10.625,
              "h": 3.125,
              "single": true,
              "correct": [
                2
              ],
              "label": "tong"
            }
          ],
          "ref": "Zie: week 1, college 1, dia 35",
          "theory": "<p>De meeste spraakklanken zijn pulmonisch: de lucht wordt gestuurd door de longen. Bij sommige klanken stuurt de larynx (glottis) of de tong de lucht.</p>"
        },
        {
          "code": "KLC1D27V28",
          "num": 44,
          "title": "Spraakorganen – ander woord",
          "cat": "Spraakorganen",
          "type": "blanks",
          "question": "<p>Geef een ander woord voor luchtpijp.</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "trachea"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "trachea",
          "ref": "Zie: week 1, college 1, dia 27",
          "image": null,
          "alt": "",
          "theory": "<p>De trachea hoort bij het subglottale systeem (dia 25).</p>"
        },
        {
          "code": "KLC1D27V5",
          "num": 45,
          "title": "Spraakorganen",
          "cat": "Spraakorganen",
          "type": "blanks",
          "question": "<p>Wat staat op plek E?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "zacht gehemelte",
                "velum"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "zacht gehemelte (velum)",
          "ref": "Zie: week 1, college 1, dia 27",
          "image": "images/KLC1D27a.webp",
          "alt": "Doorsnede van het hoofd met de spraakorganen, labels vervangen door letters A tot en met M",
          "theory": "<p>Het zachte, achterste deel van het gehemelte. Klanken die hier gemaakt worden heten velair, zoals [k] en [ŋ].</p>"
        },
        {
          "code": "KLC1D36V1",
          "num": 46,
          "title": "Luchtstroom – energiebron",
          "cat": "Luchtstroom",
          "type": "drag",
          "question": "Sleep elk soort klank naar de juiste energiebron.",
          "size": {
            "width": 600,
            "height": 450
          },
          "bg": "images/KLC1D36V1.webp",
          "els": [
            {
              "text": "<p>ejectives</p>",
              "x": 8.0,
              "y": 72,
              "w": 9,
              "h": 2
            },
            {
              "text": "<p>clicks</p>",
              "x": 50.0,
              "y": 72,
              "w": 9,
              "h": 2
            }
          ],
          "zones": [
            {
              "x": 10.833333333333334,
              "y": 38.88888888888889,
              "w": 10.625,
              "h": 3.125,
              "single": true,
              "correct": [
                0
              ],
              "label": "glottaal"
            },
            {
              "x": 60.83333333333333,
              "y": 38.88888888888889,
              "w": 10.625,
              "h": 3.125,
              "single": true,
              "correct": [
                1
              ],
              "label": "lingual"
            }
          ],
          "ref": "Zie: week 1, college 1, dia 36",
          "theory": "<p>Bij ejectives, zoals [pʼ], stuurt de larynx de lucht. Bij clicks, zoals [ʘ], doet de tong dat. Klikklanken komen voor in het Xhosa en zijn ingressief.</p>"
        },
        {
          "code": "KLC1D27V18",
          "num": 47,
          "title": "Spraakorganen – de tong",
          "cat": "Spraakorganen",
          "type": "blanks",
          "question": "<p>Wat staat op plek E?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "tongbeen"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "tongbeen",
          "ref": "Zie: week 1, college 1, dia 27",
          "image": "images/KLC1D27b.webp",
          "alt": "Doorsnede van de tong, labels vervangen door letters A tot en met E",
          "theory": "<p>Het botje onder de tongwortel waar de tong aan vastzit. Het is zelf geen articulator.</p>"
        },
        {
          "code": "KLC1D27V21",
          "num": 48,
          "title": "Spraakorganen – ander woord",
          "cat": "Spraakorganen",
          "type": "blanks",
          "question": "<p>Geef een ander woord voor hard gehemelte.</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "palatum"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "palatum",
          "ref": "Zie: week 1, college 1, dia 27",
          "image": null,
          "alt": "",
          "theory": "<p>Van palatum komt palataal, de naam van de plaats van articulatie bij het harde gehemelte.</p>"
        },
        {
          "code": "KLC1D43V4",
          "num": 49,
          "title": "Stem – stemhebbend of stemloos",
          "cat": "Stem",
          "type": "drag",
          "question": "Sleep elke klank naar stemhebbend of stemloos.",
          "size": {
            "width": 600,
            "height": 450
          },
          "bg": "images/KLC1D43V4.webp",
          "els": [
            {
              "text": "<p>[p]</p>",
              "x": 6.0,
              "y": 72,
              "w": 3.5,
              "h": 2
            },
            {
              "text": "<p>[z]</p>",
              "x": 17.5,
              "y": 72,
              "w": 3.5,
              "h": 2
            },
            {
              "text": "<p>[d]</p>",
              "x": 29.0,
              "y": 72,
              "w": 3.5,
              "h": 2
            },
            {
              "text": "<p>[k]</p>",
              "x": 40.5,
              "y": 72,
              "w": 3.5,
              "h": 2
            },
            {
              "text": "<p>[b]</p>",
              "x": 52.0,
              "y": 72,
              "w": 3.5,
              "h": 2
            },
            {
              "text": "<p>[s]</p>",
              "x": 63.5,
              "y": 72,
              "w": 3.5,
              "h": 2
            },
            {
              "text": "<p>[t]</p>",
              "x": 75.0,
              "y": 72,
              "w": 3.5,
              "h": 2
            },
            {
              "text": "<p>[g]</p>",
              "x": 86.5,
              "y": 72,
              "w": 3.5,
              "h": 2
            }
          ],
          "zones": [
            {
              "x": 3.3333333333333335,
              "y": 15.555555555555555,
              "w": 16.25,
              "h": 11.25,
              "single": false,
              "correct": [
                1,
                2,
                4,
                7
              ],
              "label": "stemhebbend"
            },
            {
              "x": 53.333333333333336,
              "y": 15.555555555555555,
              "w": 16.25,
              "h": 11.25,
              "single": false,
              "correct": [
                0,
                3,
                5,
                6
              ],
              "label": "stemloos"
            }
          ],
          "ref": "Zie: week 1, college 1, dia 43",
          "theory": "<p>De klanken vormen paren die alleen in stem verschillen: [p] en [b], [t] en [d], [k] en [g], [s] en [z].</p>"
        },
        {
          "code": "KLC1D27V6",
          "num": 50,
          "title": "Spraakorganen",
          "cat": "Spraakorganen",
          "type": "blanks",
          "question": "<p>Wat staat op plek F?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "keelholte",
                "pharynx",
                "farynx"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "keelholte (pharynx)",
          "ref": "Zie: week 1, college 1, dia 27",
          "image": "images/KLC1D27a.webp",
          "alt": "Doorsnede van het hoofd met de spraakorganen, labels vervangen door letters A tot en met M",
          "theory": "<p>De ruimte achter de mondholte, boven het strottenhoofd. Klanken die hier gemaakt worden heten faryngaal. Hoort bij het supraglottale systeem.</p>"
        },
        {
          "code": "KLC1D27V25",
          "num": 51,
          "title": "Spraakorganen – ander woord",
          "cat": "Spraakorganen",
          "type": "blanks",
          "question": "<p>Geef een ander woord voor strotklep.</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "epiglottis"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "epiglottis",
          "ref": "Zie: week 1, college 1, dia 27",
          "image": null,
          "alt": "",
          "theory": "<p>Epi betekent op of boven: de epiglottis is het klepje boven de glottis.</p>"
        },
        {
          "code": "KLC1D43V2",
          "num": 52,
          "title": "Stem",
          "cat": "Stem",
          "type": "blanks",
          "question": "<p>Hoe heet een klank waarbij je je stembanden gebruikt?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "stemhebbend",
                "stemhebbende",
                "stemhebbende klank"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "stemhebbend",
          "ref": "Zie: week 1, college 1, dia 43",
          "image": null,
          "alt": "",
          "theory": "<p>Bij een stemhebbende klank trillen de stembanden, zoals bij [b], [d] en [g]. Je voelt dat met je vingers op je keel.</p>"
        },
        {
          "code": "KLC1D45V1",
          "num": 53,
          "title": "Stem",
          "cat": "Stem",
          "type": "blanks",
          "question": "<p>Hoe heten klanken die gemaakt worden door middel van vernauwing in de spraakbuis, die ervoor zorgt dat de lucht deels of geheel wordt onderbroken?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "consonanten",
                "medeklinkers",
                "consonant",
                "medeklinker"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "consonanten (medeklinkers)",
          "ref": "Zie: week 1, college 1, dia 45",
          "image": null,
          "alt": "",
          "theory": "<p>Het verschil met vocalen zit in de vernauwing: bij consonanten wordt de luchtstroom deels of helemaal onderbroken, bij vocalen niet.</p>"
        },
        {
          "code": "KLC1D43V1",
          "num": 54,
          "title": "Stem",
          "cat": "Stem",
          "type": "card",
          "front": "<p>Wat is stemhebbendheid?</p>",
          "back": "<p>Klanken kunnen gemaakt worden met (stemhebbend) of zonder (stemloos) trilling van de stembanden.</p>",
          "ref": "Zie: week 1, college 1, dia 43",
          "image": null,
          "alt": "",
          "theory": "<p>De vraag is steeds: gebruik je je stembanden bij het maken van de klank? Voorbeelden van paren: [s] en [z], [p] en [b].</p>"
        },
        {
          "code": "KLC1D44V1",
          "num": 55,
          "title": "Stem – aspiratie en stemkwaliteit",
          "cat": "Stem",
          "type": "card",
          "front": "<p>Wat is aspiratie?</p>",
          "back": "<p>De trilling van de stembanden kan vertraagd zijn: er ontsnapt eerst wat lucht voor de volgende klank begint. Bijvoorbeeld thee ~ tea: [teː] ~ [tʰiː].</p>",
          "ref": "Zie: week 1, college 1, dia 44",
          "image": null,
          "alt": "",
          "theory": "<p>Vergelijk Nederlands thee [teː] met Engels tea [tʰiː]. De kleine ʰ is het teken voor aspiratie. Net als stemhebbendheid is dit een glottaal kenmerk.</p>"
        },
        {
          "code": "KLC1D51V1",
          "num": 56,
          "title": "Plaats – passieve articulatoren",
          "cat": "Plaats",
          "type": "drag",
          "question": "Passieve articulatoren: sleep elke term naar het juiste vak.",
          "size": {
            "width": 1000,
            "height": 763
          },
          "bg": "images/KLC1D51V1.webp",
          "els": [
            {
              "text": "<p>velar</p>",
              "x": 7.567,
              "y": 78.55,
              "w": 4.375,
              "h": 2.625
            },
            {
              "text": "<p>labio&shy;dental</p>",
              "x": 27.033,
              "y": 78.55,
              "w": 4.375,
              "h": 2.625
            },
            {
              "text": "<p>post&shy;alveolar</p>",
              "x": 46.5,
              "y": 78.55,
              "w": 4.375,
              "h": 2.625
            },
            {
              "text": "<p>bilabial</p>",
              "x": 65.967,
              "y": 78.55,
              "w": 4.375,
              "h": 2.625
            },
            {
              "text": "<p>glottal</p>",
              "x": 85.433,
              "y": 78.55,
              "w": 4.375,
              "h": 2.625
            },
            {
              "text": "<p>alveolar</p>",
              "x": 7.567,
              "y": 89.297,
              "w": 4.375,
              "h": 2.625
            },
            {
              "text": "<p>uvular</p>",
              "x": 27.033,
              "y": 89.297,
              "w": 4.375,
              "h": 2.625
            },
            {
              "text": "<p>palatal</p>",
              "x": 46.5,
              "y": 89.297,
              "w": 4.375,
              "h": 2.625
            },
            {
              "text": "<p>pharyn&shy;geal</p>",
              "x": 65.967,
              "y": 89.297,
              "w": 4.375,
              "h": 2.625
            },
            {
              "text": "<p>dental</p>",
              "x": 85.433,
              "y": 89.297,
              "w": 4.375,
              "h": 2.625
            }
          ],
          "zones": [
            {
              "x": 56.0,
              "y": 14.592,
              "w": 5.417,
              "h": 2.792,
              "single": true,
              "correct": [
                2
              ],
              "label": "postalveolar"
            },
            {
              "x": 44.867,
              "y": 16.689,
              "w": 5.458,
              "h": 2.792,
              "single": true,
              "correct": [
                7
              ],
              "label": "palatal"
            },
            {
              "x": 65.2,
              "y": 19.31,
              "w": 4.458,
              "h": 2.792,
              "single": true,
              "correct": [
                5
              ],
              "label": "alveolar"
            },
            {
              "x": 32.867,
              "y": 21.145,
              "w": 5.417,
              "h": 2.792,
              "single": true,
              "correct": [
                0
              ],
              "label": "velar"
            },
            {
              "x": 67.067,
              "y": 26.038,
              "w": 4.458,
              "h": 2.833,
              "single": true,
              "correct": [
                9
              ],
              "label": "dental"
            },
            {
              "x": 28.333,
              "y": 29.62,
              "w": 5.417,
              "h": 2.792,
              "single": true,
              "correct": [
                6
              ],
              "label": "uvular"
            },
            {
              "x": 69.0,
              "y": 33.814,
              "w": 4.458,
              "h": 2.792,
              "single": true,
              "correct": [
                3
              ],
              "label": "bilabial"
            },
            {
              "x": 28.333,
              "y": 40.542,
              "w": 5.417,
              "h": 2.833,
              "single": true,
              "correct": [
                8
              ],
              "label": "pharyngeal"
            },
            {
              "x": 66.6,
              "y": 41.503,
              "w": 5.083,
              "h": 2.833,
              "single": true,
              "correct": [
                1
              ],
              "label": "labiodental"
            },
            {
              "x": 25.933,
              "y": 52.337,
              "w": 5.375,
              "h": 2.833,
              "single": true,
              "correct": [
                4
              ],
              "label": "glottal"
            }
          ],
          "ref": "Zie: week 1, college 1, dia 51",
          "theory": "<p>De passieve articulator is de plek waar de actieve articulator naartoe beweegt (college 2, dia 3). De plaatsen lopen van de lippen (bilabiaal) tot de stembanden (glottaal).</p>"
        },
        {
          "code": "KLC1D45V3",
          "num": 57,
          "title": "Stem – ander woord",
          "cat": "Stem",
          "type": "blanks",
          "question": "<p>Geef een ander woord voor medeklinkers.</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "consonanten",
                "consonant"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "consonanten",
          "ref": "Zie: week 1, college 1, dia 45",
          "image": null,
          "alt": "",
          "theory": "<p>Consonant is de vakterm voor medeklinker: een klank met een vernauwing in de spraakbuis.</p>"
        },
        {
          "code": "KLC1D27V7",
          "num": 58,
          "title": "Spraakorganen",
          "cat": "Spraakorganen",
          "type": "blanks",
          "question": "<p>Wat staat op plek G?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "tong"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "tong",
          "ref": "Zie: week 1, college 1, dia 27",
          "image": "images/KLC1D27a.webp",
          "alt": "Doorsnede van het hoofd met de spraakorganen, labels vervangen door letters A tot en met M",
          "theory": "<p>De tong is de belangrijkste actieve articulator: het deel dat beweegt (college 2, dia 3). De delen van de tong hebben elk een eigen naam.</p>"
        },
        {
          "code": "KLC1D27V29",
          "num": 59,
          "title": "Spraakorganen – ander woord",
          "cat": "Spraakorganen",
          "type": "blanks",
          "question": "<p>Geef een ander woord voor slokdarm.</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "esophagus",
                "oesophagus"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "esophagus (ook: oesophagus)",
          "ref": "Zie: week 1, college 1, dia 27",
          "image": null,
          "alt": "",
          "theory": "<p>De slokdarm ligt achter de luchtpijp en speelt geen rol bij het maken van spraakklanken.</p>"
        },
        {
          "code": "KLC1D43V3",
          "num": 60,
          "title": "Stem",
          "cat": "Stem",
          "type": "blanks",
          "question": "<p>Hoe heet een klank waarbij je je stembanden niet gebruikt?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "stemloos",
                "stemloze",
                "stemloze klank"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "stemloos",
          "ref": "Zie: week 1, college 1, dia 43",
          "image": null,
          "alt": "",
          "theory": "<p>Bij een stemloze klank trillen de stembanden niet, zoals bij [p], [t] en [k].</p>"
        },
        {
          "code": "KLC1D45V2",
          "num": 61,
          "title": "Stem",
          "cat": "Stem",
          "type": "blanks",
          "question": "<p>Hoe heten klanken waarbij er (bijna) geen vernauwing in de spraakbuis is, zodat de luchtstroom niet wordt onderbroken en gelijkmatig blijft?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "vokalen",
                "klinkers",
                "vocalen",
                "vokaal",
                "klinker",
                "vocaal"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "vokalen (klinkers)",
          "ref": "Zie: week 1, college 1, dia 45",
          "image": null,
          "alt": "",
          "theory": "<p>Het verschil met consonanten zit in de vernauwing: bij vocalen stroomt de lucht vrij door, bij consonanten wordt hij deels of helemaal onderbroken.</p>"
        },
        {
          "code": "KLC1D44V2",
          "num": 62,
          "title": "Stem – aspiratie en stemkwaliteit",
          "cat": "Stem",
          "type": "card",
          "front": "<p>Wat is stemkwaliteit?</p>",
          "back": "<p>Het gebruik van de stembanden kan een stem <em>breathy</em> of <em>krakend</em> laten klinken.</p>",
          "ref": "Zie: week 1, college 1, dia 44",
          "image": null,
          "alt": "",
          "theory": "<p>In IPA schrijf je dat met een teken onder de klinker: [e̤] is breathy en [ḛ] is krakend. Ook dit is een glottaal kenmerk.</p>"
        },
        {
          "code": "KLC1D45V4",
          "num": 63,
          "title": "Stem – ander woord",
          "cat": "Stem",
          "type": "blanks",
          "question": "<p>Geef een ander woord voor klinkers.</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "vocalen",
                "vokalen",
                "vocaal",
                "vokaal"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "vocalen (ook: vokalen)",
          "ref": "Zie: week 1, college 1, dia 45",
          "image": null,
          "alt": "",
          "theory": "<p>Vocaal is de vakterm voor klinker: een klank waarbij de luchtstroom niet wordt onderbroken.</p>"
        },
        {
          "code": "KLC1D43V5",
          "num": 64,
          "title": "Stem",
          "cat": "Stem",
          "type": "blanks",
          "question": "<p>Bij welk systeem van het spraakproductieapparaat hoort stemhebbendheid: het subglottale, glottale of supraglottale systeem?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "glottaal",
                "glottale",
                "glottale systeem",
                "glottaal systeem",
                "het glottale systeem"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "het glottale systeem",
          "ref": "Zie: week 1, college 1, dia 42–43",
          "image": null,
          "alt": "",
          "theory": "<p>Stemhebbendheid gaat over de stembanden, en die zitten in het glottale systeem. Dia 43 noemt het daarom een glottaal kenmerk.</p>"
        },
        {
          "code": "KLC1D48V1",
          "num": 65,
          "title": "Classificatie – drie kenmerken",
          "cat": "Classificatie",
          "type": "card",
          "front": "<p>Welke drie kenmerken gebruik je bij de articulatorische classificatie van consonanten?</p>",
          "back": "<p>Plaats van articulatie, stemhebbendheid en wijze van articulatie</p>",
          "ref": "Zie: week 1, college 1, dia 48",
          "image": null,
          "alt": "",
          "theory": "<p>Plaats: waar is de constrictie? Stemhebbendheid: trillen de stembanden? Wijze: hoe sterk is de constrictie? Zo is [p] een stemloze bilabiale plosief.</p>"
        },
        {
          "code": "KLC1D51V2",
          "num": 66,
          "title": "Plaats – passieve articulatoren",
          "cat": "Plaats",
          "type": "blanks",
          "question": "<p>Welke plaats van articulatie (kolommen in de IPA-tabel) hoort bij plek A?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "postalveolar",
                "postalveolair",
                "postalveolaar"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "postalveolar (postalveolair)",
          "ref": "Zie: week 1, college 1, dia 51",
          "image": "images/KLC1D51.webp",
          "alt": "Doorsnede van het hoofd met de passieve articulatoren, labels vervangen door letters A tot en met J",
          "theory": "<p>Net achter de tandkassen, vóór het harde gehemelte.</p>"
        },
        {
          "code": "KLC1D47V4",
          "num": 67,
          "title": "Plaats – definities",
          "cat": "Plaats",
          "type": "blanks",
          "question": "<p>Benoem de plaats: de onderlip tegen de bovenlip?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "bilabial",
                "bilabiaal"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "bilabial (bilabiaal)",
          "ref": "Zie: week 1, college 1, dia 47 en 51",
          "image": null,
          "alt": "",
          "theory": "<p>Bi betekent twee, labiaal betekent van de lippen. Nederlandse bilabialen zijn [p], [b] en [m].</p>"
        },
        {
          "code": "KLC1D47V29",
          "num": 68,
          "title": "Plaats – IPA-tabel",
          "cat": "Plaats",
          "type": "blanks",
          "question": "<p>Welk woord hoort op de plek van het rode vraagteken in deze kolom?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "palatal",
                "palataal"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "Palatal (palataal)",
          "ref": "Zie: week 1, college 1, dia 47",
          "image": "images/KLC1D47V29.webp",
          "alt": "IPA-tabel van de pulmonische consonanten met één kop vervangen door een rood vraagteken",
          "theory": "<p>Het harde gehemelte. Hier staan [c], [ɟ], [ɲ] en [j].</p>"
        },
        {
          "code": "KLC1D27V8",
          "num": 69,
          "title": "Spraakorganen",
          "cat": "Spraakorganen",
          "type": "blanks",
          "question": "<p>Wat staat op plek H?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "strotklep",
                "epiglottis"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "strotklep (epiglottis)",
          "ref": "Zie: week 1, college 1, dia 27",
          "image": "images/KLC1D27a.webp",
          "alt": "Doorsnede van het hoofd met de spraakorganen, labels vervangen door letters A tot en met M",
          "theory": "<p>Het klepje boven het strottenhoofd. Bij het slikken sluit het de luchtpijp af.</p>"
        },
        {
          "code": "KLC1D27V24",
          "num": 70,
          "title": "Spraakorganen – ander woord",
          "cat": "Spraakorganen",
          "type": "blanks",
          "question": "<p>Geef een ander woord voor keelholte.</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "pharynx",
                "farynx"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "pharynx (ook: farynx)",
          "ref": "Zie: week 1, college 1, dia 27",
          "image": null,
          "alt": "",
          "theory": "<p>Van farynx komt faryngaal, de naam van de plaats van articulatie in de keelholte.</p>"
        },
        {
          "code": "KLC1D49V1",
          "num": 71,
          "title": "Plaats – definitie",
          "cat": "Plaats",
          "type": "card",
          "front": "<p>Wat is plaats van articulatie?</p>",
          "back": "<p>De plaats in het spraakkanaal waar de vernauwing plaatsvindt die turbulentie in de luchtstroom veroorzaakt; soms wordt ook het deel van de tong (actieve articulator) dat tegen de passieve articulator beweegt aangeduid.</p>",
          "ref": "Zie: week 1, college 1, dia 49",
          "image": null,
          "alt": "",
          "theory": "<p>Waar wordt de constrictie gemaakt? (dia 50).</p><p>Het is een van de drie kenmerken van consonanten, naast stemhebbendheid en wijze van articulatie.</p>"
        },
        {
          "code": "KLC1D51V3",
          "num": 72,
          "title": "Plaats – passieve articulatoren",
          "cat": "Plaats",
          "type": "blanks",
          "question": "<p>Welke plaats van articulatie (kolommen in de IPA-tabel) hoort bij plek B?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "palatal",
                "palataal"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "palatal (palataal)",
          "ref": "Zie: week 1, college 1, dia 51",
          "image": "images/KLC1D51.webp",
          "alt": "Doorsnede van het hoofd met de passieve articulatoren, labels vervangen door letters A tot en met J",
          "theory": "<p>Bij het harde gehemelte (palatum), tussen postalveolair en velair.</p>"
        },
        {
          "code": "KLC1D47V11",
          "num": 73,
          "title": "Plaats – definities",
          "cat": "Plaats",
          "type": "blanks",
          "question": "<p>Benoem de plaats: de tongrug tegen het zachte gehemelte?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "velar",
                "velair",
                "velaar"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "velar (velair)",
          "ref": "Zie: week 1, college 1, dia 47 en 51",
          "image": null,
          "alt": "",
          "theory": "<p>Genoemd naar het velum. Nederlandse velairen zijn [k], [x], [ɣ] en [ŋ].</p>"
        },
        {
          "code": "KLC1D47V25",
          "num": 74,
          "title": "Plaats – IPA-tabel",
          "cat": "Plaats",
          "type": "blanks",
          "question": "<p>Welk woord hoort op de plek van het rode vraagteken in deze kolom?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "dental",
                "dentaal"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "Dental (dentaal)",
          "ref": "Zie: week 1, college 1, dia 47",
          "image": "images/KLC1D47V25.webp",
          "alt": "IPA-tabel van de pulmonische consonanten met één kop vervangen door een rood vraagteken",
          "theory": "<p>Tanden. Dentaal, alveolair en postalveolair liggen vlak bij elkaar en delen in de tabel vaak een vak.</p>"
        },
        {
          "code": "KLC1D27V9",
          "num": 75,
          "title": "Spraakorganen",
          "cat": "Spraakorganen",
          "type": "blanks",
          "question": "<p>Wat staat op plek I?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "lippen"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "lippen",
          "ref": "Zie: week 1, college 1, dia 27",
          "image": "images/KLC1D27a.webp",
          "alt": "Doorsnede van het hoofd met de spraakorganen, labels vervangen door letters A tot en met M",
          "theory": "<p>Met de lippen maak je bilabiale klanken (twee lippen), zoals [p], [b] en [m]. De onderlip is de actieve articulator (college 2, dia 3). De lippen zijn het voorste eind van het spraakkanaal.</p>"
        },
        {
          "code": "KLC1D27V27",
          "num": 76,
          "title": "Spraakorganen – ander woord",
          "cat": "Spraakorganen",
          "type": "blanks",
          "question": "<p>Geef een ander woord voor stemspleet.</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "glottis"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "glottis",
          "ref": "Zie: week 1, college 1, dia 27",
          "image": null,
          "alt": "",
          "theory": "<p>Van glottis komen glottaal, subglottaal en supraglottaal. De glottis is de opening tussen de stembanden (dia 29).</p>"
        },
        {
          "code": "KLC1D51V4",
          "num": 77,
          "title": "Plaats – passieve articulatoren",
          "cat": "Plaats",
          "type": "blanks",
          "question": "<p>Welke plaats van articulatie (kolommen in de IPA-tabel) hoort bij plek C?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "alveolar",
                "alveolair",
                "alveolaar"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "alveolar (alveolair)",
          "ref": "Zie: week 1, college 1, dia 51",
          "image": "images/KLC1D51.webp",
          "alt": "Doorsnede van het hoofd met de passieve articulatoren, labels vervangen door letters A tot en met J",
          "theory": "<p>Bij de tandkassen (alveolen), de rand vlak achter de boventanden.</p>"
        },
        {
          "code": "KLC1D47V7",
          "num": 78,
          "title": "Plaats – definities",
          "cat": "Plaats",
          "type": "blanks",
          "question": "<p>Benoem de plaats: de tongpunt of het tongblad tegen de tandkassen?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "alveolar",
                "alveolair",
                "alveolaar"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "alveolar (alveolair)",
          "ref": "Zie: week 1, college 1, dia 47 en 51",
          "image": null,
          "alt": "",
          "theory": "<p>Genoemd naar de alveolen, de rand achter de boventanden. Nederlandse alveolairen zijn onder andere [t], [d], [n], [s], [z] en [l].</p>"
        },
        {
          "code": "KLC1D47V32",
          "num": 79,
          "title": "Plaats – IPA-tabel",
          "cat": "Plaats",
          "type": "blanks",
          "question": "<p>Welk woord hoort op de plek van het rode vraagteken in deze kolom?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "pharyngeal",
                "faryngaal",
                "pharyngaal",
                "faryngeaal"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "Pharyngeal (faryngaal)",
          "ref": "Zie: week 1, college 1, dia 47",
          "image": "images/KLC1D47V32.webp",
          "alt": "IPA-tabel van de pulmonische consonanten met één kop vervangen door een rood vraagteken",
          "theory": "<p>De keelholte. Deze kolom is leeg in de Nederlandse klankentabel.</p>"
        },
        {
          "code": "KLC1D27V10",
          "num": 80,
          "title": "Spraakorganen",
          "cat": "Spraakorganen",
          "type": "blanks",
          "question": "<p>Wat staat op plek J?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "strottenhoofd",
                "larynx"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "strottenhoofd (larynx)",
          "ref": "Zie: week 1, college 1, dia 27",
          "image": "images/KLC1D27a.webp",
          "alt": "Doorsnede van het hoofd met de spraakorganen, labels vervangen door letters A tot en met M",
          "theory": "<p>Hierin zitten de stembanden (stemplooien). Het strottenhoofd hoort bij het glottale systeem, de geluidsbron van spraak (dia 29).</p>"
        },
        {
          "code": "KLC1D28V11",
          "num": 81,
          "title": "Spraakorganen – ander woord",
          "cat": "Spraakorganen",
          "type": "blanks",
          "question": "<p>Geef een ander woord voor stembanden.</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "stemplooien",
                "stemplooi"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "stemplooien",
          "ref": "Zie: week 1, college 1, dia 28 en 29",
          "image": null,
          "alt": "",
          "theory": "<p>Dia 28 noemt ze stemplooien, dia 29 stembanden: het is hetzelfde. Als ze trillen is een klank stemhebbend.</p>"
        },
        {
          "code": "KLC1D51V5",
          "num": 82,
          "title": "Plaats – passieve articulatoren",
          "cat": "Plaats",
          "type": "blanks",
          "question": "<p>Welke plaats van articulatie (kolommen in de IPA-tabel) hoort bij plek D?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "velar",
                "velair",
                "velaar"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "velar (velair)",
          "ref": "Zie: week 1, college 1, dia 51",
          "image": "images/KLC1D51.webp",
          "alt": "Doorsnede van het hoofd met de passieve articulatoren, labels vervangen door letters A tot en met J",
          "theory": "<p>Bij het zachte gehemelte (velum), achter het harde gehemelte.</p>"
        },
        {
          "code": "KLC1D47V14",
          "num": 83,
          "title": "Plaats – definities",
          "cat": "Plaats",
          "type": "blanks",
          "question": "<p>Benoem de plaats: de stembanden dicht bij elkaar?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "glottal",
                "glottaal"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "glottal (glottaal)",
          "ref": "Zie: week 1, college 1, dia 47 en 51",
          "image": null,
          "alt": "",
          "theory": "<p>Genoemd naar de glottis, de opening tussen de stembanden. Nederlandse glottalen zijn [ʔ] en [h].</p>"
        },
        {
          "code": "KLC1D47V23",
          "num": 84,
          "title": "Plaats – IPA-tabel",
          "cat": "Plaats",
          "type": "blanks",
          "question": "<p>Welk woord hoort op de plek van het rode vraagteken in deze kolom?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "bilabial",
                "bilabiaal"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "Bilabial (bilabiaal)",
          "ref": "Zie: week 1, college 1, dia 47",
          "image": "images/KLC1D47V23.webp",
          "alt": "IPA-tabel van de pulmonische consonanten met één kop vervangen door een rood vraagteken",
          "theory": "<p>De onderlip tegen de bovenlip: helemaal voor in de mond. Hier staan [p], [b] en [m]. Daarna komt labiodentaal.</p>"
        },
        {
          "code": "KLC1D47V2",
          "num": 85,
          "title": "Wijze – IPA-tabel",
          "cat": "Wijze",
          "type": "drag",
          "question": "Sleep elke wijze van articulatie naar de juiste rij.",
          "size": {
            "width": 1100,
            "height": 760
          },
          "bg": "images/KLC1D47V2.webp",
          "els": [
            {
              "text": "<p>Fricative</p>",
              "x": 11.455,
              "y": 70.614,
              "w": 7.75,
              "h": 2.625
            },
            {
              "text": "<p>Lateral approximant</p>",
              "x": 33.273,
              "y": 70.614,
              "w": 7.75,
              "h": 2.625
            },
            {
              "text": "<p>Nasal</p>",
              "x": 55.091,
              "y": 70.614,
              "w": 7.75,
              "h": 2.625
            },
            {
              "text": "<p>Tap or Flap</p>",
              "x": 76.909,
              "y": 70.614,
              "w": 7.75,
              "h": 2.625
            },
            {
              "text": "<p>Approximant</p>",
              "x": 11.455,
              "y": 84.649,
              "w": 7.75,
              "h": 2.625
            },
            {
              "text": "<p>Plosive</p>",
              "x": 33.273,
              "y": 84.649,
              "w": 7.75,
              "h": 2.625
            },
            {
              "text": "<p>Lateral fricative</p>",
              "x": 55.091,
              "y": 84.649,
              "w": 7.75,
              "h": 2.625
            },
            {
              "text": "<p>Trill</p>",
              "x": 76.909,
              "y": 84.649,
              "w": 7.75,
              "h": 2.625
            }
          ],
          "zones": [
            {
              "x": 1.091,
              "y": 8.947,
              "w": 7.875,
              "h": 2.75,
              "single": true,
              "correct": [
                5
              ],
              "label": "Plosive"
            },
            {
              "x": 1.091,
              "y": 15.263,
              "w": 7.875,
              "h": 2.75,
              "single": true,
              "correct": [
                2
              ],
              "label": "Nasal"
            },
            {
              "x": 1.091,
              "y": 21.579,
              "w": 7.875,
              "h": 2.75,
              "single": true,
              "correct": [
                7
              ],
              "label": "Trill"
            },
            {
              "x": 1.091,
              "y": 27.895,
              "w": 7.875,
              "h": 2.75,
              "single": true,
              "correct": [
                3
              ],
              "label": "Tap or Flap"
            },
            {
              "x": 1.091,
              "y": 34.211,
              "w": 7.875,
              "h": 2.75,
              "single": true,
              "correct": [
                0
              ],
              "label": "Fricative"
            },
            {
              "x": 1.091,
              "y": 40.526,
              "w": 7.875,
              "h": 2.75,
              "single": true,
              "correct": [
                6
              ],
              "label": "Lateral fricative"
            },
            {
              "x": 1.091,
              "y": 46.842,
              "w": 7.875,
              "h": 2.75,
              "single": true,
              "correct": [
                4
              ],
              "label": "Approximant"
            },
            {
              "x": 1.091,
              "y": 53.158,
              "w": 7.875,
              "h": 2.75,
              "single": true,
              "correct": [
                1
              ],
              "label": "Lateral approximant"
            }
          ],
          "ref": "Zie: week 1, college 1, dia 47",
          "theory": "<p>De rijen van de IPA-tabel zijn de wijzen van articulatie. Elke combinatie van plaats (kolom) en wijze (rij) heeft een eigen symbool.</p>"
        },
        {
          "code": "KLC1D27V11",
          "num": 86,
          "title": "Spraakorganen",
          "cat": "Spraakorganen",
          "type": "blanks",
          "question": "<p>Wat staat op plek K?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "stemspleet",
                "glottis"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "stemspleet (glottis)",
          "ref": "Zie: week 1, college 1, dia 27",
          "image": "images/KLC1D27a.webp",
          "alt": "Doorsnede van het hoofd met de spraakorganen, labels vervangen door letters A tot en met M",
          "theory": "<p>De glottis is de opening tussen de stembanden (dia 29). De drie systemen zijn ernaar genoemd: sub-, supra- en glottaal. Samen met het strottenhoofd en de stembanden vormt de glottis het glottale systeem.</p>"
        },
        {
          "code": "KLC1D51V6",
          "num": 87,
          "title": "Plaats – passieve articulatoren",
          "cat": "Plaats",
          "type": "blanks",
          "question": "<p>Welke plaats van articulatie (kolommen in de IPA-tabel) hoort bij plek E?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "dental",
                "dentaal"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "dental (dentaal)",
          "ref": "Zie: week 1, college 1, dia 51",
          "image": "images/KLC1D51.webp",
          "alt": "Doorsnede van het hoofd met de passieve articulatoren, labels vervangen door letters A tot en met J",
          "theory": "<p>Bij de boventanden.</p>"
        },
        {
          "code": "KLC1D64V2",
          "num": 88,
          "title": "Wijze – klanken indelen",
          "cat": "Wijze",
          "type": "drag",
          "question": "Sleep elke klank naar de juiste wijze van articulatie.",
          "size": {
            "width": 600,
            "height": 450
          },
          "bg": "images/KLC1D64V2.webp",
          "els": [
            {
              "text": "<p>[p]</p>",
              "x": 12.0,
              "y": 72,
              "w": 3.5,
              "h": 2
            },
            {
              "text": "<p>[v]</p>",
              "x": 28.667,
              "y": 72,
              "w": 3.5,
              "h": 2
            },
            {
              "text": "<p>[ŋ]</p>",
              "x": 45.333,
              "y": 72,
              "w": 3.5,
              "h": 2
            },
            {
              "text": "<p>[d]</p>",
              "x": 62.0,
              "y": 72,
              "w": 3.5,
              "h": 2
            },
            {
              "text": "<p>[s]</p>",
              "x": 78.667,
              "y": 72,
              "w": 3.5,
              "h": 2
            }
          ],
          "zones": [
            {
              "x": 1.667,
              "y": 15.556,
              "w": 11.25,
              "h": 11.25,
              "single": false,
              "correct": [
                0,
                3
              ],
              "label": "Plosieven"
            },
            {
              "x": 35.0,
              "y": 15.556,
              "w": 11.25,
              "h": 11.25,
              "single": false,
              "correct": [
                1,
                4
              ],
              "label": "Fricatieven"
            },
            {
              "x": 68.333,
              "y": 15.556,
              "w": 11.25,
              "h": 11.25,
              "single": false,
              "correct": [
                2
              ],
              "label": "Nasalen"
            }
          ],
          "ref": "Zie: week 1, college 1, dia 56–62",
          "theory": "<p>Plosief: volledige afsluiting, dan een plofje. Fricatief: ruis door een turbulente luchtstroom. Nasaal: mond dicht, lucht via de neus.</p>"
        },
        {
          "code": "KLC1D47V9",
          "num": 89,
          "title": "Plaats – definities",
          "cat": "Plaats",
          "type": "blanks",
          "question": "<p>Benoem de plaats: de naar achteren omgekrulde tongpunt tegen het gebied achter de tandkassen?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "retroflex"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "retroflex (retroflex)",
          "ref": "Zie: week 1, college 1, dia 47 en 51",
          "image": null,
          "alt": "",
          "theory": "<p>Retroflex betekent teruggebogen. Deze kolom is leeg in de Nederlandse klankentabel.</p>"
        },
        {
          "code": "KLC1D47V27",
          "num": 90,
          "title": "Plaats – IPA-tabel",
          "cat": "Plaats",
          "type": "blanks",
          "question": "<p>Welk woord hoort op de plek van het rode vraagteken in deze kolom?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "postalveolar",
                "postalveolair",
                "postalveolaar"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "Postalveolar (postalveolair)",
          "ref": "Zie: week 1, college 1, dia 47",
          "image": "images/KLC1D47V27.webp",
          "alt": "IPA-tabel van de pulmonische consonanten met één kop vervangen door een rood vraagteken",
          "theory": "<p>Tussen alveolair en retroflex. Hier staan [ʃ] en [ʒ]. Dentaal, alveolair en postalveolair liggen vlak bij elkaar en delen in de tabel vaak een vak.</p>"
        },
        {
          "code": "KLC1D27V12",
          "num": 91,
          "title": "Spraakorganen",
          "cat": "Spraakorganen",
          "type": "blanks",
          "question": "<p>Wat staat op plek L?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "luchtpijp",
                "trachea"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "luchtpijp (trachea)",
          "ref": "Zie: week 1, college 1, dia 27",
          "image": "images/KLC1D27a.webp",
          "alt": "Doorsnede van het hoofd met de spraakorganen, labels vervangen door letters A tot en met M",
          "theory": "<p>De luchtpijp brengt de lucht van de longen naar het strottenhoofd. Hij hoort bij het subglottale systeem (dia 25).</p>"
        },
        {
          "code": "KLC1D64V3",
          "num": 92,
          "title": "Wijze – klanken indelen",
          "cat": "Wijze",
          "type": "drag",
          "question": "Sleep elke klank naar de juiste wijze van articulatie.",
          "size": {
            "width": 600,
            "height": 450
          },
          "bg": "images/KLC1D64V3.webp",
          "els": [
            {
              "text": "<p>[l]</p>",
              "x": 12.0,
              "y": 72,
              "w": 3.5,
              "h": 2
            },
            {
              "text": "<p>[r]</p>",
              "x": 28.667,
              "y": 72,
              "w": 3.5,
              "h": 2
            },
            {
              "text": "<p>[j]</p>",
              "x": 45.333,
              "y": 72,
              "w": 3.5,
              "h": 2
            },
            {
              "text": "<p>[ʋ]</p>",
              "x": 62.0,
              "y": 72,
              "w": 3.5,
              "h": 2
            },
            {
              "text": "<p>[ʀ]</p>",
              "x": 78.667,
              "y": 72,
              "w": 3.5,
              "h": 2
            }
          ],
          "zones": [
            {
              "x": 1.667,
              "y": 15.556,
              "w": 11.25,
              "h": 11.25,
              "single": false,
              "correct": [
                0
              ],
              "label": "Lateralen"
            },
            {
              "x": 35.0,
              "y": 15.556,
              "w": 11.25,
              "h": 11.25,
              "single": false,
              "correct": [
                1,
                4
              ],
              "label": "Trilklanken"
            },
            {
              "x": 68.333,
              "y": 15.556,
              "w": 11.25,
              "h": 11.25,
              "single": false,
              "correct": [
                2,
                3
              ],
              "label": "Approximanten"
            }
          ],
          "ref": "Zie: week 1, college 1, dia 56–62",
          "theory": "<p>Lateraal: lucht langs de zijkanten van de tong. Trilklank: serie korte afsluitingen (tongpunt-r en huig-r). Approximant: nauwelijks constrictie.</p>"
        },
        {
          "code": "KLC1D54V1",
          "num": 93,
          "title": "Wijze – definitie",
          "cat": "Wijze",
          "type": "card",
          "front": "<p>Wat is wijze van articulatie?</p>",
          "back": "<p>Definieert de mate van de vernauwing tussen de actieve en de passieve articulatoren.</p>",
          "ref": "Zie: week 1, college 1, dia 54",
          "image": null,
          "alt": "",
          "theory": "<p>Kort gezegd: hoe sterk is de (lucht)constrictie? (dia 55). Van helemaal dicht (plosief) tot bijna open (approximant).</p>"
        },
        {
          "code": "KLC1D47V15",
          "num": 94,
          "title": "Wijze – definities",
          "cat": "Wijze",
          "type": "blanks",
          "question": "<p>Hoe heet de wijze van articulatie waarbij de luchtstroom in de mondholte volledig wordt afgesloten en het ontsnappen van de lucht een kleine plofklank creëert?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "plosive",
                "plosief",
                "plosieven",
                "plofklank",
                "stop"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "plosive (plosief)",
          "ref": "Zie: week 1, college 1, dia 56",
          "image": null,
          "alt": "",
          "theory": "<p>Plosieven heten ook plofklanken of stops. De Nederlandse plosieven op de dia zijn [p], [b], [t], [d], [k] en [g].</p>"
        },
        {
          "code": "KLC1D56V3",
          "num": 95,
          "title": "Wijze – plosieven en fricatieven",
          "cat": "Wijze",
          "type": "blanks",
          "question": "<p>Wat is de Nederlandse naam voor plosieven?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "plofklanken",
                "plofklank"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "plofklanken",
          "ref": "Zie: week 1, college 1, dia 56",
          "image": null,
          "alt": "",
          "theory": "<p>De naam zegt wat je hoort: bij een plosief wordt de lucht helemaal tegengehouden en ontsnapt ze daarna met een plofje.</p>"
        },
        {
          "code": "KLC1D47V38",
          "num": 96,
          "title": "Wijze – IPA-tabel",
          "cat": "Wijze",
          "type": "blanks",
          "question": "<p>Welk woord hoort op de plek van het rode vraagteken in deze rij?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "fricative",
                "fricatief",
                "fricatieven",
                "wrijfklank"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "Fricative (fricatief)",
          "ref": "Zie: week 1, college 1, dia 47",
          "image": "images/KLC1D47V38.webp",
          "alt": "IPA-tabel van de pulmonische consonanten met één kop vervangen door een rood vraagteken",
          "theory": "<p>Een turbulente luchtstroom geeft een ruisachtig geluid.</p>"
        },
        {
          "code": "KLC1D64V1",
          "num": 97,
          "title": "Wijze – overzicht",
          "cat": "Wijze",
          "type": "card",
          "front": "<p>Noem de zeven wijzen van articulatie.</p>",
          "back": "<p>Plosieven, fricatieven, nasalen, lateralen, trilklanken (ratelaars), taps, approximanten</p>",
          "ref": "Zie: week 1, college 1, dia 64",
          "image": null,
          "alt": "",
          "theory": "<p>De wijze zegt hoe sterk de constrictie is. Plosieven sluiten de luchtstroom helemaal af; approximanten hebben nauwelijks constrictie.</p>"
        },
        {
          "code": "KLC1D51V7",
          "num": 98,
          "title": "Plaats – passieve articulatoren",
          "cat": "Plaats",
          "type": "blanks",
          "question": "<p>Welke plaats van articulatie (kolommen in de IPA-tabel) hoort bij plek F?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "uvular",
                "uvulair",
                "uvulaar"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "uvular (uvulair)",
          "ref": "Zie: week 1, college 1, dia 51",
          "image": "images/KLC1D51.webp",
          "alt": "Doorsnede van het hoofd met de passieve articulatoren, labels vervangen door letters A tot en met J",
          "theory": "<p>Bij de huig (uvula), het uiteinde van het zachte gehemelte.</p>"
        },
        {
          "code": "KLC1D47V5",
          "num": 99,
          "title": "Plaats – definities",
          "cat": "Plaats",
          "type": "blanks",
          "question": "<p>Benoem de plaats: de onderlip tegen de boventanden?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "labiodental",
                "labiodentaal"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "labiodental (labiodentaal)",
          "ref": "Zie: week 1, college 1, dia 47 en 51",
          "image": null,
          "alt": "",
          "theory": "<p>Labio is lip, dentaal is tand. Nederlandse labiodentalen zijn [f], [v] en [ʋ].</p>"
        },
        {
          "code": "KLC1D47V30",
          "num": 100,
          "title": "Plaats – IPA-tabel",
          "cat": "Plaats",
          "type": "blanks",
          "question": "<p>Welk woord hoort op de plek van het rode vraagteken in deze kolom?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "velar",
                "velair",
                "velaar"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "Velar (velair)",
          "ref": "Zie: week 1, college 1, dia 47",
          "image": "images/KLC1D47V30.webp",
          "alt": "IPA-tabel van de pulmonische consonanten met één kop vervangen door een rood vraagteken",
          "theory": "<p>Het zachte gehemelte. Hier staan [k], [g], [ŋ], [x] en [ɣ].</p>"
        },
        {
          "code": "KLC1D27V13",
          "num": 101,
          "title": "Spraakorganen",
          "cat": "Spraakorganen",
          "type": "blanks",
          "question": "<p>Wat staat op plek M?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "slokdarm",
                "esophagus",
                "oesophagus"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "slokdarm (esophagus)",
          "ref": "Zie: week 1, college 1, dia 27",
          "image": "images/KLC1D27a.webp",
          "alt": "Doorsnede van het hoofd met de spraakorganen, labels vervangen door letters A tot en met M",
          "theory": "<p>De slokdarm ligt achter de luchtpijp en is voor voedsel. Hij speelt geen rol bij het maken van spraakklanken.</p>"
        },
        {
          "code": "KLC1D64V4",
          "num": 102,
          "title": "Wijze – klanken indelen",
          "cat": "Wijze",
          "type": "drag",
          "question": "Sleep elke klank naar de juiste wijze van articulatie.",
          "size": {
            "width": 600,
            "height": 450
          },
          "bg": "images/KLC1D64V4.webp",
          "els": [
            {
              "text": "<p>[k]</p>",
              "x": 15.333,
              "y": 72,
              "w": 3.5,
              "h": 2
            },
            {
              "text": "<p>[m]</p>",
              "x": 35.333,
              "y": 72,
              "w": 3.5,
              "h": 2
            },
            {
              "text": "<p>[ɹ]</p>",
              "x": 55.333,
              "y": 72,
              "w": 3.5,
              "h": 2
            },
            {
              "text": "<p>[b]</p>",
              "x": 75.333,
              "y": 72,
              "w": 3.5,
              "h": 2
            }
          ],
          "zones": [
            {
              "x": 1.667,
              "y": 15.556,
              "w": 11.25,
              "h": 11.25,
              "single": false,
              "correct": [
                0,
                3
              ],
              "label": "Plosieven"
            },
            {
              "x": 35.0,
              "y": 15.556,
              "w": 11.25,
              "h": 11.25,
              "single": false,
              "correct": [
                1
              ],
              "label": "Nasalen"
            },
            {
              "x": 68.333,
              "y": 15.556,
              "w": 11.25,
              "h": 11.25,
              "single": false,
              "correct": [
                2
              ],
              "label": "Approximanten"
            }
          ],
          "ref": "Zie: week 1, college 1, dia 56–62",
          "theory": "<p>[ɹ] is de Gooische r: een approximant, geen trilklank. Plosief: volledige afsluiting. Nasaal: lucht via de neus.</p>"
        },
        {
          "code": "KLC1D47V19",
          "num": 103,
          "title": "Wijze – definities",
          "cat": "Wijze",
          "type": "blanks",
          "question": "<p>Hoe heet de wijze van articulatie waarbij een turbulente luchtstroom een ruisachtig geluid geeft?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "fricative",
                "fricatief",
                "fricatieven",
                "wrijfklank"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "fricative (fricatief)",
          "ref": "Zie: week 1, college 1, dia 56",
          "image": null,
          "alt": "",
          "theory": "<p>Fricatieven heten ook wrijfklanken. De vernauwing is nauw, maar niet helemaal dicht. Voorbeelden op de dia: [f], [v], [s], [z] en [χ].</p>"
        },
        {
          "code": "KLC1D58V1",
          "num": 104,
          "title": "Wijze – nasalen",
          "cat": "Wijze",
          "type": "card",
          "front": "<p>Zijn nasalen in het Nederlands stemhebbend of stemloos?</p>",
          "back": "<p>In het Nederlands altijd stemhebbend. (Zeldzaam: in het Faeröers kunnen nasalen ook stemloos zijn: <em>einki</em>.)</p>",
          "ref": "Zie: week 1, college 1, dia 58",
          "image": null,
          "alt": "",
          "theory": "<p>Zeldzaam: in het Faeröers kunnen nasalen ook stemloos zijn, zoals in einki.</p>"
        },
        {
          "code": "KLC1D47V35",
          "num": 105,
          "title": "Wijze – IPA-tabel",
          "cat": "Wijze",
          "type": "blanks",
          "question": "<p>Welk woord hoort op de plek van het rode vraagteken in deze rij?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "nasal",
                "nasaal",
                "nasalen"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "Nasal (nasaal)",
          "ref": "Zie: week 1, college 1, dia 47",
          "image": "images/KLC1D47V35.webp",
          "alt": "IPA-tabel van de pulmonische consonanten met één kop vervangen door een rood vraagteken",
          "theory": "<p>De mondholte is volledig afgesloten en de lucht ontsnapt via de neusholte. Hier staan [m], [ɱ], [n], [ɲ] en [ŋ].</p>"
        },
        {
          "code": "KLC1D51V8",
          "num": 106,
          "title": "Plaats – passieve articulatoren",
          "cat": "Plaats",
          "type": "blanks",
          "question": "<p>Welke plaats van articulatie (kolommen in de IPA-tabel) hoort bij plek G?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "bilabial",
                "bilabiaal"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "bilabial (bilabiaal)",
          "ref": "Zie: week 1, college 1, dia 51",
          "image": "images/KLC1D51.webp",
          "alt": "Doorsnede van het hoofd met de passieve articulatoren, labels vervangen door letters A tot en met J",
          "theory": "<p>Bij de lippen: de onderlip beweegt naar de bovenlip.</p>"
        },
        {
          "code": "KLC1D47V12",
          "num": 107,
          "title": "Plaats – definities",
          "cat": "Plaats",
          "type": "blanks",
          "question": "<p>Benoem de plaats: de achterkant van de tong tegen de huig?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "uvular",
                "uvulair",
                "uvulaar"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "uvular (uvulair)",
          "ref": "Zie: week 1, college 1, dia 47 en 51",
          "image": null,
          "alt": "",
          "theory": "<p>Genoemd naar de uvula, de huig. De huig-r [ʀ] is uvulair, net als [χ] in gans.</p>"
        },
        {
          "code": "KLC1D47V33",
          "num": 108,
          "title": "Plaats – IPA-tabel",
          "cat": "Plaats",
          "type": "blanks",
          "question": "<p>Welk woord hoort op de plek van het rode vraagteken in deze kolom?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "glottal",
                "glottaal"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "Glottal (glottaal)",
          "ref": "Zie: week 1, college 1, dia 47",
          "image": "images/KLC1D47V33.webp",
          "alt": "IPA-tabel van de pulmonische consonanten met één kop vervangen door een rood vraagteken",
          "theory": "<p>Helemaal achterin, genoemd naar de glottis, de opening tussen de stembanden. Hier staan [ʔ] en [h].</p>"
        },
        {
          "code": "KLC1D64V5",
          "num": 109,
          "title": "Wijze – klanken indelen",
          "cat": "Wijze",
          "type": "drag",
          "question": "Sleep elke klank naar de juiste wijze van articulatie.",
          "size": {
            "width": 600,
            "height": 450
          },
          "bg": "images/KLC1D64V5.webp",
          "els": [
            {
              "text": "<p>[r]</p>",
              "x": 20.333,
              "y": 72,
              "w": 3.5,
              "h": 2
            },
            {
              "text": "<p>[ɾ]</p>",
              "x": 45.333,
              "y": 72,
              "w": 3.5,
              "h": 2
            },
            {
              "text": "<p>[l]</p>",
              "x": 70.333,
              "y": 72,
              "w": 3.5,
              "h": 2
            }
          ],
          "zones": [
            {
              "x": 1.667,
              "y": 15.556,
              "w": 11.25,
              "h": 11.25,
              "single": false,
              "correct": [
                0
              ],
              "label": "Trilklanken"
            },
            {
              "x": 35.0,
              "y": 15.556,
              "w": 11.25,
              "h": 11.25,
              "single": false,
              "correct": [
                1
              ],
              "label": "Taps"
            },
            {
              "x": 68.333,
              "y": 15.556,
              "w": 11.25,
              "h": 11.25,
              "single": false,
              "correct": [
                2
              ],
              "label": "Lateralen"
            }
          ],
          "ref": "Zie: week 1, college 1, dia 56–62",
          "theory": "<p>[r] en [ɾ] lijken op elkaar: een trilklank heeft een serie afsluitingen, een tap maar één. Bij [l] stroomt de lucht langs de zijkanten van de tong.</p>"
        },
        {
          "code": "KLC1D47V16",
          "num": 110,
          "title": "Wijze – definities",
          "cat": "Wijze",
          "type": "blanks",
          "question": "<p>Hoe heet de wijze van articulatie waarbij de mondholte volledig is afgesloten en de lucht via de neusholte ontsnapt?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "nasal",
                "nasaal",
                "nasalen"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "nasal (nasaal)",
          "ref": "Zie: week 1, college 1, dia 58",
          "image": null,
          "alt": "",
          "theory": "<p>De nasalen op de dia zijn [m], [n] en [ŋ]. In het Nederlands zijn nasalen altijd stemhebbend.</p>"
        },
        {
          "code": "KLC1D60V1",
          "num": 111,
          "title": "Wijze – trilklanken",
          "cat": "Wijze",
          "type": "card",
          "front": "<p>Welke twee r-klanken zijn trilklanken?</p>",
          "back": "<p>[r] = tongpunt-r en [ʀ] = huig-r. Voor transcripties mag je zelf kiezen, maar wees consistent!</p>",
          "ref": "Zie: week 1, college 1, dia 60",
          "image": null,
          "alt": "",
          "theory": "<p>Bij een trilklank trilt de actieve articulator: de tongpunt of de huig.</p>"
        },
        {
          "code": "KLC1D47V3",
          "num": 112,
          "title": "Classificatie – Nederlandse klanken",
          "cat": "Classificatie",
          "type": "drag",
          "question": "De klanken van het Nederlands zijn uit de tabel gehaald. Sleep elke klank terug naar de juiste plek.",
          "size": {
            "width": 1100,
            "height": 760
          },
          "bg": "images/KLC1D47V3.webp",
          "els": [
            {
              "text": "<p>ʀ</p>",
              "x": 4.125,
              "y": 71.14,
              "w": 2.125,
              "h": 2.25
            },
            {
              "text": "<p>m</p>",
              "x": 10.432,
              "y": 71.14,
              "w": 2.125,
              "h": 2.25
            },
            {
              "text": "<p>ɣ</p>",
              "x": 16.739,
              "y": 71.14,
              "w": 2.125,
              "h": 2.25
            },
            {
              "text": "<p>j</p>",
              "x": 23.045,
              "y": 71.14,
              "w": 2.125,
              "h": 2.25
            },
            {
              "text": "<p>ʋ</p>",
              "x": 29.352,
              "y": 71.14,
              "w": 2.125,
              "h": 2.25
            },
            {
              "text": "<p>l</p>",
              "x": 35.659,
              "y": 71.14,
              "w": 2.125,
              "h": 2.25
            },
            {
              "text": "<p>h</p>",
              "x": 41.966,
              "y": 71.14,
              "w": 2.125,
              "h": 2.25
            },
            {
              "text": "<p>k</p>",
              "x": 48.273,
              "y": 71.14,
              "w": 2.125,
              "h": 2.25
            },
            {
              "text": "<p>ɟ</p>",
              "x": 54.58,
              "y": 71.14,
              "w": 2.125,
              "h": 2.25
            },
            {
              "text": "<p>w</p>",
              "x": 60.886,
              "y": 71.14,
              "w": 2.125,
              "h": 2.25
            },
            {
              "text": "<p>x</p>",
              "x": 67.193,
              "y": 71.14,
              "w": 2.125,
              "h": 2.25
            },
            {
              "text": "<p>g</p>",
              "x": 73.5,
              "y": 71.14,
              "w": 2.125,
              "h": 2.25
            },
            {
              "text": "<p>z</p>",
              "x": 79.807,
              "y": 71.14,
              "w": 2.125,
              "h": 2.25
            },
            {
              "text": "<p>c</p>",
              "x": 86.114,
              "y": 71.14,
              "w": 2.125,
              "h": 2.25
            },
            {
              "text": "<p>ʒ</p>",
              "x": 92.42,
              "y": 71.14,
              "w": 2.125,
              "h": 2.25
            },
            {
              "text": "<p>d</p>",
              "x": 4.125,
              "y": 84.912,
              "w": 2.125,
              "h": 2.25
            },
            {
              "text": "<p>p</p>",
              "x": 10.432,
              "y": 84.912,
              "w": 2.125,
              "h": 2.25
            },
            {
              "text": "<p>ɹ</p>",
              "x": 16.739,
              "y": 84.912,
              "w": 2.125,
              "h": 2.25
            },
            {
              "text": "<p>b</p>",
              "x": 23.045,
              "y": 84.912,
              "w": 2.125,
              "h": 2.25
            },
            {
              "text": "<p>ʃ</p>",
              "x": 29.352,
              "y": 84.912,
              "w": 2.125,
              "h": 2.25
            },
            {
              "text": "<p>ɲ</p>",
              "x": 35.659,
              "y": 84.912,
              "w": 2.125,
              "h": 2.25
            },
            {
              "text": "<p>f</p>",
              "x": 41.966,
              "y": 84.912,
              "w": 2.125,
              "h": 2.25
            },
            {
              "text": "<p>ʔ</p>",
              "x": 48.273,
              "y": 84.912,
              "w": 2.125,
              "h": 2.25
            },
            {
              "text": "<p>ɱ</p>",
              "x": 54.58,
              "y": 84.912,
              "w": 2.125,
              "h": 2.25
            },
            {
              "text": "<p>s</p>",
              "x": 60.886,
              "y": 84.912,
              "w": 2.125,
              "h": 2.25
            },
            {
              "text": "<p>r</p>",
              "x": 67.193,
              "y": 84.912,
              "w": 2.125,
              "h": 2.25
            },
            {
              "text": "<p>v</p>",
              "x": 73.5,
              "y": 84.912,
              "w": 2.125,
              "h": 2.25
            },
            {
              "text": "<p>ŋ</p>",
              "x": 79.807,
              "y": 84.912,
              "w": 2.125,
              "h": 2.25
            },
            {
              "text": "<p>t</p>",
              "x": 86.114,
              "y": 84.912,
              "w": 2.125,
              "h": 2.25
            },
            {
              "text": "<p>n</p>",
              "x": 92.42,
              "y": 84.912,
              "w": 2.125,
              "h": 2.25
            }
          ],
          "zones": [
            {
              "x": 13.098,
              "y": 9.211,
              "w": 2.5,
              "h": 2.5,
              "single": true,
              "correct": [
                16
              ],
              "label": "p"
            },
            {
              "x": 16.538,
              "y": 9.211,
              "w": 2.5,
              "h": 2.5,
              "single": true,
              "correct": [
                18
              ],
              "label": "b"
            },
            {
              "x": 36.273,
              "y": 9.211,
              "w": 2.25,
              "h": 2.5,
              "single": true,
              "correct": [
                28
              ],
              "label": "t"
            },
            {
              "x": 40.636,
              "y": 9.211,
              "w": 2.25,
              "h": 2.5,
              "single": true,
              "correct": [
                15
              ],
              "label": "d"
            },
            {
              "x": 60.007,
              "y": 9.211,
              "w": 2.5,
              "h": 2.5,
              "single": true,
              "correct": [
                13
              ],
              "label": "c"
            },
            {
              "x": 63.447,
              "y": 9.211,
              "w": 2.5,
              "h": 2.5,
              "single": true,
              "correct": [
                8
              ],
              "label": "ɟ"
            },
            {
              "x": 67.825,
              "y": 9.211,
              "w": 2.5,
              "h": 2.5,
              "single": true,
              "correct": [
                7
              ],
              "label": "k"
            },
            {
              "x": 71.265,
              "y": 9.211,
              "w": 2.5,
              "h": 2.5,
              "single": true,
              "correct": [
                11
              ],
              "label": "g"
            },
            {
              "x": 91.28,
              "y": 9.211,
              "w": 2.5,
              "h": 2.5,
              "single": true,
              "correct": [
                22
              ],
              "label": "ʔ"
            },
            {
              "x": 16.538,
              "y": 15.526,
              "w": 2.5,
              "h": 2.5,
              "single": true,
              "correct": [
                1
              ],
              "label": "m"
            },
            {
              "x": 24.356,
              "y": 15.526,
              "w": 2.5,
              "h": 2.5,
              "single": true,
              "correct": [
                23
              ],
              "label": "ɱ"
            },
            {
              "x": 38.273,
              "y": 15.526,
              "w": 2.5,
              "h": 2.5,
              "single": true,
              "correct": [
                29
              ],
              "label": "n"
            },
            {
              "x": 63.447,
              "y": 15.526,
              "w": 2.5,
              "h": 2.5,
              "single": true,
              "correct": [
                20
              ],
              "label": "ɲ"
            },
            {
              "x": 71.265,
              "y": 15.526,
              "w": 2.5,
              "h": 2.5,
              "single": true,
              "correct": [
                27
              ],
              "label": "ŋ"
            },
            {
              "x": 38.273,
              "y": 21.842,
              "w": 2.5,
              "h": 2.5,
              "single": true,
              "correct": [
                25
              ],
              "label": "r"
            },
            {
              "x": 79.084,
              "y": 21.842,
              "w": 2.5,
              "h": 2.5,
              "single": true,
              "correct": [
                0
              ],
              "label": "ʀ"
            },
            {
              "x": 20.916,
              "y": 34.474,
              "w": 2.5,
              "h": 2.5,
              "single": true,
              "correct": [
                21
              ],
              "label": "f"
            },
            {
              "x": 24.356,
              "y": 34.474,
              "w": 2.5,
              "h": 2.5,
              "single": true,
              "correct": [
                26
              ],
              "label": "v"
            },
            {
              "x": 36.553,
              "y": 34.474,
              "w": 2.5,
              "h": 2.5,
              "single": true,
              "correct": [
                24
              ],
              "label": "s"
            },
            {
              "x": 39.993,
              "y": 34.474,
              "w": 2.5,
              "h": 2.5,
              "single": true,
              "correct": [
                12
              ],
              "label": "z"
            },
            {
              "x": 44.371,
              "y": 34.474,
              "w": 2.5,
              "h": 2.5,
              "single": true,
              "correct": [
                19
              ],
              "label": "ʃ"
            },
            {
              "x": 47.811,
              "y": 34.474,
              "w": 2.5,
              "h": 2.5,
              "single": true,
              "correct": [
                14
              ],
              "label": "ʒ"
            },
            {
              "x": 67.825,
              "y": 34.474,
              "w": 2.5,
              "h": 2.5,
              "single": true,
              "correct": [
                10
              ],
              "label": "x"
            },
            {
              "x": 71.265,
              "y": 34.474,
              "w": 2.5,
              "h": 2.5,
              "single": true,
              "correct": [
                2
              ],
              "label": "ɣ"
            },
            {
              "x": 91.28,
              "y": 34.474,
              "w": 2.5,
              "h": 2.5,
              "single": true,
              "correct": [
                6
              ],
              "label": "h"
            },
            {
              "x": 16.538,
              "y": 47.105,
              "w": 2.5,
              "h": 2.5,
              "single": true,
              "correct": [
                9
              ],
              "label": "w"
            },
            {
              "x": 24.356,
              "y": 47.105,
              "w": 2.5,
              "h": 2.5,
              "single": true,
              "correct": [
                4
              ],
              "label": "ʋ"
            },
            {
              "x": 38.273,
              "y": 47.105,
              "w": 2.5,
              "h": 2.5,
              "single": true,
              "correct": [
                17
              ],
              "label": "ɹ"
            },
            {
              "x": 63.447,
              "y": 47.105,
              "w": 2.5,
              "h": 2.5,
              "single": true,
              "correct": [
                3
              ],
              "label": "j"
            },
            {
              "x": 38.273,
              "y": 53.421,
              "w": 2.5,
              "h": 2.5,
              "single": true,
              "correct": [
                5
              ],
              "label": "l"
            }
          ],
          "ref": "Zie: week 1, college 1, dia 47 en college 2, dia 46–47",
          "theory": "<p>Elke klank heeft één plek: de kolom is de plaats, de rij de wijze. Binnen een vak staat links de stemloze en rechts de stemhebbende klank.</p>"
        },
        {
          "code": "KLC1D47V40",
          "num": 113,
          "title": "Wijze – IPA-tabel",
          "cat": "Wijze",
          "type": "blanks",
          "question": "<p>Welk woord hoort op de plek van het rode vraagteken in deze rij?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "approximant",
                "approximanten",
                "halfvocaal",
                "halfklinker"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "Approximant (approximanten)",
          "ref": "Zie: week 1, college 1, dia 47",
          "image": "images/KLC1D47V40.webp",
          "alt": "IPA-tabel van de pulmonische consonanten met één kop vervangen door een rood vraagteken",
          "theory": "<p>Geen tot nauwelijks constrictie; niet echt een vocaal, maar ook niet echt een consonant.</p>"
        },
        {
          "code": "KLC1D51V9",
          "num": 114,
          "title": "Plaats – passieve articulatoren",
          "cat": "Plaats",
          "type": "blanks",
          "question": "<p>Welke plaats van articulatie (kolommen in de IPA-tabel) hoort bij plek H?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "pharyngeal",
                "faryngaal",
                "pharyngaal",
                "faryngeaal"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "pharyngeal (faryngaal)",
          "ref": "Zie: week 1, college 1, dia 51",
          "image": "images/KLC1D51.webp",
          "alt": "Doorsnede van het hoofd met de passieve articulatoren, labels vervangen door letters A tot en met J",
          "theory": "<p>In de keelholte (farynx), tussen de huig en het strottenhoofd.</p>"
        },
        {
          "code": "KLC1D47V8",
          "num": 115,
          "title": "Plaats – definities",
          "cat": "Plaats",
          "type": "blanks",
          "question": "<p>Benoem de plaats: het tongblad tegen het gebied net achter de tandkassen?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "postalveolar",
                "postalveolair",
                "postalveolaar"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "postalveolar (postalveolair)",
          "ref": "Zie: week 1, college 1, dia 47 en 51",
          "image": null,
          "alt": "",
          "theory": "<p>Post betekent achter: net achter de alveolen. In het Nederlands zijn dat [ʃ] en [ʒ], zoals in bagage.</p>"
        },
        {
          "code": "KLC1D47V26",
          "num": 116,
          "title": "Plaats – IPA-tabel",
          "cat": "Plaats",
          "type": "blanks",
          "question": "<p>Welk woord hoort op de plek van het rode vraagteken in deze kolom?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "alveolar",
                "alveolair",
                "alveolaar"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "Alveolar (alveolair)",
          "ref": "Zie: week 1, college 1, dia 47",
          "image": "images/KLC1D47V26.webp",
          "alt": "IPA-tabel van de pulmonische consonanten met één kop vervangen door een rood vraagteken",
          "theory": "<p>Genoemd naar de alveolen, de rand achter de boventanden. Hier staan onder andere [t], [d], [n], [s], [z] en [l]. Dentaal, alveolair en postalveolair liggen vlak bij elkaar en delen in de tabel vaak een vak.</p>"
        },
        {
          "code": "KLC1D64V6",
          "num": 117,
          "title": "Wijze – klanken indelen",
          "cat": "Wijze",
          "type": "drag",
          "question": "Sleep elke klank naar de juiste wijze van articulatie.",
          "size": {
            "width": 600,
            "height": 450
          },
          "bg": "images/KLC1D64V6.webp",
          "els": [
            {
              "text": "<p>[χ]</p>",
              "x": 12.0,
              "y": 72,
              "w": 3.5,
              "h": 2
            },
            {
              "text": "<p>[g]</p>",
              "x": 28.667,
              "y": 72,
              "w": 3.5,
              "h": 2
            },
            {
              "text": "<p>[n]</p>",
              "x": 45.333,
              "y": 72,
              "w": 3.5,
              "h": 2
            },
            {
              "text": "<p>[w]</p>",
              "x": 62.0,
              "y": 72,
              "w": 3.5,
              "h": 2
            },
            {
              "text": "<p>[z]</p>",
              "x": 78.667,
              "y": 72,
              "w": 3.5,
              "h": 2
            }
          ],
          "zones": [
            {
              "x": 1.667,
              "y": 15.556,
              "w": 8.125,
              "h": 11.25,
              "single": false,
              "correct": [
                0,
                4
              ],
              "label": "Fricatieven"
            },
            {
              "x": 26.667,
              "y": 15.556,
              "w": 8.125,
              "h": 11.25,
              "single": false,
              "correct": [
                1
              ],
              "label": "Plosieven"
            },
            {
              "x": 51.667,
              "y": 15.556,
              "w": 8.125,
              "h": 11.25,
              "single": false,
              "correct": [
                2
              ],
              "label": "Nasalen"
            },
            {
              "x": 76.667,
              "y": 15.556,
              "w": 8.125,
              "h": 11.25,
              "single": false,
              "correct": [
                3
              ],
              "label": "Approximanten"
            }
          ],
          "ref": "Zie: week 1, college 1, dia 56–62",
          "theory": "<p>[χ] is de eerste klank in gans: een fricatief. [g] is de stemhebbende tegenhanger van [k], zoals in goal: een plosief. [w] is een approximant.</p>"
        },
        {
          "code": "KLC1D47V21",
          "num": 118,
          "title": "Wijze – definities",
          "cat": "Wijze",
          "type": "blanks",
          "question": "<p>Hoe heet de wijze van articulatie waarbij er geen tot nauwelijks constrictie is: niet echt een vocaal, maar ook niet echt een consonant?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "approximant",
                "approximanten",
                "halfvocaal",
                "halfklinker"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "approximant (approximanten)",
          "ref": "Zie: week 1, college 1, dia 62",
          "image": null,
          "alt": "",
          "theory": "<p>Approximanten heten ook halfvocalen of halfklinkers. Voorbeelden: [j] in jan en [ʋ] in wesp. Vergelijk [i] met [j].</p>"
        },
        {
          "code": "KLC1D62V1",
          "num": 119,
          "title": "Wijze – approximanten",
          "cat": "Wijze",
          "type": "card",
          "front": "<p>Waarom zeggen we dat approximanten tussen wal en schip vallen?</p>",
          "back": "<p>Ze zijn niet echt vocalen, maar ook niet echt consonanten: er is geen tot nauwelijks constrictie (vergelijk [i] met [j]).</p>",
          "ref": "Zie: week 1, college 1, dia 62",
          "image": null,
          "alt": "",
          "theory": "<p>Vergelijk de klinker [i] met de approximant [j]: ze lijken sterk op elkaar. Daarom heten approximanten ook halfvocalen of halfklinkers.</p>"
        },
        {
          "code": "KLC1D47V34",
          "num": 120,
          "title": "Wijze – IPA-tabel",
          "cat": "Wijze",
          "type": "blanks",
          "question": "<p>Welk woord hoort op de plek van het rode vraagteken in deze rij?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "plosive",
                "plosief",
                "plosieven",
                "plofklank",
                "stop"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "Plosive (plosief)",
          "ref": "Zie: week 1, college 1, dia 47",
          "image": "images/KLC1D47V34.webp",
          "alt": "IPA-tabel van de pulmonische consonanten met één kop vervangen door een rood vraagteken",
          "theory": "<p>De luchtstroom in de mondholte wordt volledig afgesloten en het ontsnappen van de lucht geeft een kleine plofklank.</p><p>In elk vak staat links de stemloze en rechts de stemhebbende klank.</p>"
        },
        {
          "code": "KLC1D51V10",
          "num": 121,
          "title": "Plaats – passieve articulatoren",
          "cat": "Plaats",
          "type": "blanks",
          "question": "<p>Welke plaats van articulatie (kolommen in de IPA-tabel) hoort bij plek I?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "labiodental",
                "labiodentaal"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "labiodental (labiodentaal)",
          "ref": "Zie: week 1, college 1, dia 51",
          "image": "images/KLC1D51.webp",
          "alt": "Doorsnede van het hoofd met de passieve articulatoren, labels vervangen door letters A tot en met J",
          "theory": "<p>Bij de boventanden, waar de onderlip tegenaan komt.</p>"
        },
        {
          "code": "KLC1D47V13",
          "num": 122,
          "title": "Plaats – definities",
          "cat": "Plaats",
          "type": "blanks",
          "question": "<p>Benoem de plaats: de tong naar achteren en omlaag, de keelholte in?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "pharyngeal",
                "faryngaal",
                "pharyngaal",
                "faryngeaal"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "pharyngeal (faryngaal)",
          "ref": "Zie: week 1, college 1, dia 47 en 51",
          "image": null,
          "alt": "",
          "theory": "<p>Genoemd naar de farynx, de keelholte. Deze kolom is leeg in de Nederlandse klankentabel.</p>"
        },
        {
          "code": "KLC1D47V24",
          "num": 123,
          "title": "Plaats – IPA-tabel",
          "cat": "Plaats",
          "type": "blanks",
          "question": "<p>Welk woord hoort op de plek van het rode vraagteken in deze kolom?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "labiodental",
                "labiodentaal"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "Labiodental (labiodentaal)",
          "ref": "Zie: week 1, college 1, dia 47",
          "image": "images/KLC1D47V24.webp",
          "alt": "IPA-tabel van de pulmonische consonanten met één kop vervangen door een rood vraagteken",
          "theory": "<p>De onderlip tegen de boventanden. Hier staan [f], [v], [ʋ] en [ɱ].</p>"
        },
        {
          "code": "KLC1D47V17",
          "num": 124,
          "title": "Wijze – definities",
          "cat": "Wijze",
          "type": "blanks",
          "question": "<p>Hoe heet de wijze van articulatie waarbij er een serie zeer korte afsluitingen is tussen twee articulatoren (een passieve en een actieve), waardoor de actieve articulator gaat trillen?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "trill",
                "trilklank",
                "ratelaar",
                "trills"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "trill (trilklank)",
          "ref": "Zie: week 1, college 1, dia 60",
          "image": null,
          "alt": "",
          "theory": "<p>Trilklanken heten ook ratelaars. Voorbeelden zijn de tongpunt-r [r] en de huig-r [ʀ].</p>"
        },
        {
          "code": "KLC1D56V2",
          "num": 125,
          "title": "Wijze – plosieven en fricatieven",
          "cat": "Wijze",
          "type": "card",
          "front": "<p>Welke klank is [χ]?</p>",
          "back": "<p>De eerste klank in <em>gans</em> (een fricatief)</p>",
          "ref": "Zie: week 1, college 1, dia 56",
          "image": null,
          "alt": "",
          "theory": "<p>[χ] is een fricatief: een turbulente luchtstroom geeft een ruisachtig geluid. Het is de harde g.</p>"
        },
        {
          "code": "KLC1D47V37",
          "num": 126,
          "title": "Wijze – IPA-tabel",
          "cat": "Wijze",
          "type": "blanks",
          "question": "<p>Welk woord hoort op de plek van het rode vraagteken in deze rij?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "tap or flap",
                "tap",
                "flap",
                "taps"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "Tap or Flap (tap)",
          "ref": "Zie: week 1, college 1, dia 47",
          "image": "images/KLC1D47V37.webp",
          "alt": "IPA-tabel van de pulmonische consonanten met één kop vervangen door een rood vraagteken",
          "theory": "<p>Een enkele, zeer korte afsluiting tussen twee articulatoren, zonder dat er spanning wordt opgebouwd.</p>"
        },
        {
          "code": "KLC1D51V11",
          "num": 127,
          "title": "Plaats – passieve articulatoren",
          "cat": "Plaats",
          "type": "blanks",
          "question": "<p>Welke plaats van articulatie (kolommen in de IPA-tabel) hoort bij plek J?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "glottal",
                "glottaal"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "glottal (glottaal)",
          "ref": "Zie: week 1, college 1, dia 51",
          "image": "images/KLC1D51.webp",
          "alt": "Doorsnede van het hoofd met de passieve articulatoren, labels vervangen door letters A tot en met J",
          "theory": "<p>Bij de glottis, de opening tussen de stembanden. Dit is de achterste plaats van articulatie.</p>"
        },
        {
          "code": "KLC1D47V6",
          "num": 128,
          "title": "Plaats – definities",
          "cat": "Plaats",
          "type": "blanks",
          "question": "<p>Benoem de plaats: de tongpunt of het tongblad tegen de boventanden?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "dental",
                "dentaal"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "dental (dentaal)",
          "ref": "Zie: week 1, college 1, dia 47 en 51",
          "image": null,
          "alt": "",
          "theory": "<p>Dentaal betekent van de tanden. Een bekend voorbeeld is de Engelse th.</p>"
        },
        {
          "code": "KLC1D47V31",
          "num": 129,
          "title": "Plaats – IPA-tabel",
          "cat": "Plaats",
          "type": "blanks",
          "question": "<p>Welk woord hoort op de plek van het rode vraagteken in deze kolom?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "uvular",
                "uvulair",
                "uvulaar"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "Uvular (uvulair)",
          "ref": "Zie: week 1, college 1, dia 47",
          "image": "images/KLC1D47V31.webp",
          "alt": "IPA-tabel van de pulmonische consonanten met één kop vervangen door een rood vraagteken",
          "theory": "<p>De huig. Hier staat de huig-r [ʀ].</p>"
        },
        {
          "code": "KLC1D66V1",
          "num": 130,
          "title": "Classificatie – kenmerken van consonanten",
          "cat": "Classificatie",
          "type": "blanks",
          "question": "<p>Vul in.</p>",
          "segs": [
            {
              "text": "<p>In het Nederlands kunnen we consonanten (medeklinkers) indelen op "
            },
            {
              "blank": [
                "laryngale",
                "laryngaal"
              ]
            },
            {
              "text": " kenmerken en "
            },
            {
              "blank": [
                "supralaryngale",
                "supralaryngaal"
              ]
            },
            {
              "text": " kenmerken.</p>"
            }
          ],
          "correct": "In het Nederlands kunnen we consonanten (medeklinkers) indelen op laryngale kenmerken en supralaryngale kenmerken.",
          "ref": "Zie: week 1, college 1, dia 66",
          "image": null,
          "alt": "",
          "theory": "<p>Laryngaal betekent van de larynx (het strottenhoofd): stemhebbend of stemloos. Supralaryngaal betekent boven de larynx: plaats en wijze van articulatie.</p>"
        },
        {
          "code": "KLC1D47V18",
          "num": 131,
          "title": "Wijze – definities",
          "cat": "Wijze",
          "type": "blanks",
          "question": "<p>Hoe heet de wijze van articulatie waarbij er één enkele, zeer korte afsluiting is tussen twee articulatoren, zonder dat er spanning wordt opgebouwd (dus geen release burst)?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "tap or flap",
                "tap",
                "flap",
                "taps"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "tap or flap (tap)",
          "ref": "Zie: week 1, college 1, dia 61",
          "image": null,
          "alt": "",
          "theory": "<p>Een tap lijkt op een trilklank, maar heeft maar één afsluiting. Voorbeeld: [ɾ] in Amerikaans-Engels better.</p>"
        },
        {
          "code": "KLC1D58V2",
          "num": 132,
          "title": "Wijze – nasalen",
          "cat": "Wijze",
          "type": "card",
          "front": "<p>Wat is de relatie tussen nasalen en stops?</p>",
          "back": "<p>Alle nasalen zijn stops, maar niet alle stops zijn nasalen.</p>",
          "ref": "Zie: week 1, college 1, dia 58",
          "image": null,
          "alt": "",
          "theory": "<p>Bij een nasaal is de mondholte volledig afgesloten, net als bij een plosief. Het verschil is dat de lucht via de neusholte ontsnapt.</p>"
        },
        {
          "code": "KLC1D47V41",
          "num": 133,
          "title": "Wijze – IPA-tabel",
          "cat": "Wijze",
          "type": "blanks",
          "question": "<p>Welk woord hoort op de plek van het rode vraagteken in deze rij?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "lateral approximant",
                "laterale approximant",
                "lateraal approximant"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "Lateral approximant (laterale approximant)",
          "ref": "Zie: week 1, college 1, dia 47",
          "image": "images/KLC1D47V41.webp",
          "alt": "IPA-tabel van de pulmonische consonanten met één kop vervangen door een rood vraagteken",
          "theory": "<p>De lucht stroomt langs de zijkanten van de tong, met geen tot nauwelijks constrictie.</p>"
        },
        {
          "code": "KLC1D47V10",
          "num": 134,
          "title": "Plaats – definities",
          "cat": "Plaats",
          "type": "blanks",
          "question": "<p>Benoem de plaats: het tongblad en het voorste deel van de tongrug tegen het harde gehemelte?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "palatal",
                "palataal"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "palatal (palataal)",
          "ref": "Zie: week 1, college 1, dia 47 en 51",
          "image": null,
          "alt": "",
          "theory": "<p>Genoemd naar het palatum. De Nederlandse [j] is palataal. Door assimilatie hoor je ook [ɲ], zoals in aanjagen.</p>"
        },
        {
          "code": "KLC1D47V28",
          "num": 135,
          "title": "Plaats – IPA-tabel",
          "cat": "Plaats",
          "type": "blanks",
          "question": "<p>Welk woord hoort op de plek van het rode vraagteken in deze kolom?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "retroflex"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "Retroflex (retroflex)",
          "ref": "Zie: week 1, college 1, dia 47",
          "image": "images/KLC1D47V28.webp",
          "alt": "IPA-tabel van de pulmonische consonanten met één kop vervangen door een rood vraagteken",
          "theory": "<p>De tongpunt is hier naar achteren gekruld. Deze kolom is leeg in de Nederlandse klankentabel.</p>"
        },
        {
          "code": "KLC1D65V1",
          "num": 136,
          "title": "Systemen – overzicht",
          "cat": "Systemen",
          "type": "card",
          "front": "<p>Welke drie systemen onderscheiden we in de anatomie van de spraakproductie?</p>",
          "back": "<p>Het subglottale systeem, het glottale systeem en het supraglottale systeem</p>",
          "ref": "Zie: week 1, college 1, dia 65",
          "image": null,
          "alt": "",
          "theory": "<p>De namen zeggen waar het systeem zit ten opzichte van de glottis: eronder (sub), erbij, of erboven (supra). Samen vormen ze het power-source-filter model.</p>"
        },
        {
          "code": "KLC1D47V20",
          "num": 137,
          "title": "Wijze – definities",
          "cat": "Wijze",
          "type": "blanks",
          "question": "<p>Hoe heet de wijze van articulatie waarbij de lucht langs de zijkanten van de tong stroomt en een turbulente luchtstroom een ruisachtig geluid geeft?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "lateral fricative",
                "laterale fricatief",
                "lateraal fricatief"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "lateral fricative (laterale fricatief)",
          "ref": "Zie: week 1, college 1, dia 56 en 59",
          "image": null,
          "alt": "",
          "theory": "<p>Dit is een combinatie van twee wijzen: lateraal (lucht langs de zijkanten van de tong) en fricatief (ruis door turbulentie).</p>"
        },
        {
          "code": "KLC1D61V1",
          "num": 138,
          "title": "Wijze – taps",
          "cat": "Wijze",
          "type": "card",
          "front": "<p>Wat is het verschil tussen een tap en een trilklank?</p>",
          "back": "<p>Een trilklank is een serie van zeer korte afsluitingen; een tap heeft één enkele afsluiting. Bij een tap bouwt er geen spanning op en is er dus geen release burst. Voorbeeld: [ɾ] in Amerikaans-Engels <em>better</em>.</p>",
          "ref": "Zie: week 1, college 1, dia 61",
          "image": null,
          "alt": "",
          "theory": "<p>Bij een tap bouwt er geen spanning op, dus er is ook geen release burst. Voorbeeld: [ɾ] in Amerikaans-Engels <i>bette<b>r</b></i>.</p>"
        },
        {
          "code": "KLC1D47V36",
          "num": 139,
          "title": "Wijze – IPA-tabel",
          "cat": "Wijze",
          "type": "blanks",
          "question": "<p>Welk woord hoort op de plek van het rode vraagteken in deze rij?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "trill",
                "trilklank",
                "ratelaar",
                "trills"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "Trill (trilklank)",
          "ref": "Zie: week 1, college 1, dia 47",
          "image": "images/KLC1D47V36.webp",
          "alt": "IPA-tabel van de pulmonische consonanten met één kop vervangen door een rood vraagteken",
          "theory": "<p>Een serie zeer korte afsluitingen tussen twee articulatoren, waardoor de actieve articulator gaat trillen.</p>"
        },
        {
          "code": "KLC1D47V1",
          "num": 140,
          "title": "Plaats – IPA-tabel",
          "cat": "Plaats",
          "type": "drag",
          "question": "Sleep elke plaats van articulatie naar de juiste kolom.",
          "size": {
            "width": 1100,
            "height": 760
          },
          "bg": "images/KLC1D47V1.webp",
          "els": [
            {
              "text": "<p>Velar</p>",
              "x": 8.649,
              "y": 70.088,
              "w": 5.0,
              "h": 3.0
            },
            {
              "text": "<p>Dental</p>",
              "x": 23.662,
              "y": 70.088,
              "w": 5.0,
              "h": 3.0
            },
            {
              "text": "<p>Glottal</p>",
              "x": 38.675,
              "y": 70.088,
              "w": 5.0,
              "h": 3.0
            },
            {
              "text": "<p>Bilabial</p>",
              "x": 53.688,
              "y": 70.088,
              "w": 5.0,
              "h": 3.0
            },
            {
              "text": "<p>Retro&shy;flex</p>",
              "x": 68.701,
              "y": 70.088,
              "w": 5.0,
              "h": 3.0
            },
            {
              "text": "<p>Uvular</p>",
              "x": 83.714,
              "y": 70.088,
              "w": 5.0,
              "h": 3.0
            },
            {
              "text": "<p>Alveolar</p>",
              "x": 11.152,
              "y": 84.386,
              "w": 5.0,
              "h": 3.0
            },
            {
              "text": "<p>Palatal</p>",
              "x": 28.667,
              "y": 84.386,
              "w": 5.0,
              "h": 3.0
            },
            {
              "text": "<p>Labio&shy;dental</p>",
              "x": 46.182,
              "y": 84.386,
              "w": 5.0,
              "h": 3.0
            },
            {
              "text": "<p>Pharyn&shy;geal</p>",
              "x": 63.697,
              "y": 84.386,
              "w": 5.0,
              "h": 3.0
            },
            {
              "text": "<p>Post&shy;alveolar</p>",
              "x": 81.212,
              "y": 84.386,
              "w": 5.0,
              "h": 3.0
            }
          ],
          "zones": [
            {
              "x": 12.909,
              "y": 1.579,
              "w": 5.125,
              "h": 3.25,
              "single": true,
              "correct": [
                3
              ],
              "label": "Bilabial"
            },
            {
              "x": 20.727,
              "y": 1.579,
              "w": 5.125,
              "h": 3.25,
              "single": true,
              "correct": [
                8
              ],
              "label": "Labiodental"
            },
            {
              "x": 28.545,
              "y": 1.579,
              "w": 5.125,
              "h": 3.25,
              "single": true,
              "correct": [
                1
              ],
              "label": "Dental"
            },
            {
              "x": 36.364,
              "y": 1.579,
              "w": 5.125,
              "h": 3.25,
              "single": true,
              "correct": [
                6
              ],
              "label": "Alveolar"
            },
            {
              "x": 44.182,
              "y": 1.579,
              "w": 5.125,
              "h": 3.25,
              "single": true,
              "correct": [
                10
              ],
              "label": "Postalveolar"
            },
            {
              "x": 52.0,
              "y": 1.579,
              "w": 5.125,
              "h": 3.25,
              "single": true,
              "correct": [
                4
              ],
              "label": "Retroflex"
            },
            {
              "x": 59.818,
              "y": 1.579,
              "w": 5.125,
              "h": 3.25,
              "single": true,
              "correct": [
                7
              ],
              "label": "Palatal"
            },
            {
              "x": 67.636,
              "y": 1.579,
              "w": 5.125,
              "h": 3.25,
              "single": true,
              "correct": [
                0
              ],
              "label": "Velar"
            },
            {
              "x": 75.455,
              "y": 1.579,
              "w": 5.125,
              "h": 3.25,
              "single": true,
              "correct": [
                5
              ],
              "label": "Uvular"
            },
            {
              "x": 83.273,
              "y": 1.579,
              "w": 5.125,
              "h": 3.25,
              "single": true,
              "correct": [
                9
              ],
              "label": "Pharyngeal"
            },
            {
              "x": 91.091,
              "y": 1.579,
              "w": 5.125,
              "h": 3.25,
              "single": true,
              "correct": [
                2
              ],
              "label": "Glottal"
            }
          ],
          "ref": "Zie: week 1, college 1, dia 47",
          "theory": "<p>De kolommen van de IPA-tabel zijn de plaatsen van articulatie. Ze lopen van voor in de mond (de lippen) naar achter (de glottis).</p>"
        },
        {
          "code": "KLC1D66V2",
          "num": 141,
          "title": "Classificatie – laryngale kenmerken",
          "cat": "Classificatie",
          "type": "blanks",
          "question": "<p>In het Nederlands kunnen we consonanten indelen op laryngale kenmerken en supralaryngale kenmerken. Noem een laryngaal kenmerk.</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "stemhebbendheid",
                "stemhebbend ~ stemloos",
                "stemhebbend",
                "stemloos",
                "stemhebbend of stemloos"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "stemhebbendheid (stemhebbend ~ stemloos)",
          "ref": "Zie: week 1, college 1, dia 66",
          "image": null,
          "alt": "",
          "theory": "<p>Laryngaal betekent van de larynx. Daar zitten de stembanden, en die bepalen of een klank stemhebbend of stemloos is.</p>"
        },
        {
          "code": "KLC1D47V22",
          "num": 142,
          "title": "Wijze – definities",
          "cat": "Wijze",
          "type": "blanks",
          "question": "<p>Hoe heet de wijze van articulatie waarbij de lucht langs de zijkanten van de tong stroomt, met geen tot nauwelijks constrictie?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "lateral approximant",
                "laterale approximant",
                "lateraal approximant"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "lateral approximant (laterale approximant)",
          "ref": "Zie: week 1, college 1, dia 59 en 62",
          "image": null,
          "alt": "",
          "theory": "<p>Dit is een combinatie van lateraal en approximant. De Nederlandse [l] hoort hier.</p>"
        },
        {
          "code": "KLC1D63V1",
          "num": 143,
          "title": "Wijze – approximanten",
          "cat": "Wijze",
          "type": "card",
          "front": "<p>Welke andere namen zijn er voor approximanten?</p>",
          "back": "<p>Halfvocalen, halfklinkers, glides of glijklanken</p>",
          "ref": "Zie: week 1, college 1, dia 63",
          "image": null,
          "alt": "",
          "theory": "<p>Halfvocaal en halfklinker zeggen dat de klank tussen vocaal en consonant in zit. Glide en glijklank zeggen dat de klank een overgang tussen twee klanken is.</p>"
        },
        {
          "code": "KLC1D47V39",
          "num": 144,
          "title": "Wijze – IPA-tabel",
          "cat": "Wijze",
          "type": "blanks",
          "question": "<p>Welk woord hoort op de plek van het rode vraagteken in deze rij?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "lateral fricative",
                "laterale fricatief",
                "lateraal fricatief"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "Lateral fricative (laterale fricatief)",
          "ref": "Zie: week 1, college 1, dia 47",
          "image": "images/KLC1D47V39.webp",
          "alt": "IPA-tabel van de pulmonische consonanten met één kop vervangen door een rood vraagteken",
          "theory": "<p>De lucht stroomt langs de zijkanten van de tong en een turbulente luchtstroom geeft een ruisachtig geluid.</p>"
        },
        {
          "code": "KLC1D66V3",
          "num": 145,
          "title": "Classificatie – supralaryngale kenmerken",
          "cat": "Classificatie",
          "type": "card",
          "front": "<p>In het Nederlands kunnen we consonanten indelen op laryngale kenmerken en supralaryngale kenmerken. Noem twee supralaryngale kenmerken.</p>",
          "back": "<p>Plaats van articulatie en wijze van articulatie</p>",
          "ref": "Zie: week 1, college 1, dia 66",
          "image": null,
          "alt": "",
          "theory": "<p>Supralaryngaal betekent boven de larynx. Plaats en wijze worden allebei bepaald in het spraakkanaal, dus boven het strottenhoofd.</p>"
        },
        {
          "code": "KLC1D58V3",
          "num": 146,
          "title": "Wijze – nasalen",
          "cat": "Wijze",
          "type": "card",
          "front": "<p>Welke klank is [ŋ]? Noem het voorbeeldwoord van de dia.</p>",
          "back": "<p>De laatste klank in <em>slang</em></p>",
          "ref": "Zie: week 1, college 1, dia 58",
          "image": null,
          "alt": "",
          "theory": "<p>[ŋ] is een nasaal: de mond is afgesloten en de lucht gaat door de neus.</p>"
        },
        {
          "code": "KLC1D56V4",
          "num": 147,
          "title": "Wijze – plosieven en fricatieven",
          "cat": "Wijze",
          "type": "blanks",
          "question": "<p>Wat is de Nederlandse naam voor fricatieven?</p>",
          "segs": [
            {
              "text": "<p>"
            },
            {
              "blank": [
                "wrijfklanken",
                "wrijfklank"
              ]
            },
            {
              "text": "</p>"
            }
          ],
          "correct": "wrijfklanken",
          "ref": "Zie: week 1, college 1, dia 56",
          "image": null,
          "alt": "",
          "theory": "<p>De naam zegt wat je hoort: bij een fricatief wrijft de lucht door een nauwe opening en hoor je ruis.</p>"
        },
        {
          "code": "KLC1D58V4",
          "num": 148,
          "title": "Wijze – nasalen",
          "cat": "Wijze",
          "type": "card",
          "front": "<p>Kunnen ook klinkers nasaal zijn? Geef het voorbeeld van de dia.</p>",
          "back": "<p>Ja, bijvoorbeeld in het Frans: <em>un bon vin blanc</em> → /œ̃ bɔ̃ vɛ̃ blɑ̃/</p>",
          "ref": "Zie: week 1, college 1, dia 58",
          "image": null,
          "alt": "",
          "theory": "<p>In IPA schrijf je een nasale klinker met een tilde (golfje) erboven. De vier klinkers in un bon vin blanc zijn alle vier nasaal.</p>"
        },
        {
          "code": "KLC1D63V2",
          "num": 149,
          "title": "Wijze – approximanten",
          "cat": "Wijze",
          "type": "card",
          "front": "<p>Wat is een glide (glijklank)? Geef de voorbeelden van de dia.</p>",
          "back": "<p>Een transitie tussen twee klanken. Voorbeelden op de dia: <em>theater</em>, <em>power</em> en <em>januari</em>, met de glijklanken /j/ en /w/.</p>",
          "ref": "Zie: week 1, college 1, dia 63",
          "image": null,
          "alt": "",
          "theory": "<p>Tussen twee klinkers ontstaat vanzelf een overgangsklank: een /j/ in theater en een /w/ in power en januari.</p>"
        }
      ]
    },
    {
      "id": "c2",
      "title": "College 2",
      "week": "Week 1 · hoorcollege 2",
      "sub": "Spraakprocessen en IPA-transcriptie",
      "items": [
        {
          "type": "card",
          "code": "KLC2D3V1",
          "title": "Articulatoren – definitie",
          "cat": "Articulatoren",
          "ref": "Zie: week 1, college 2, dia 3",
          "front": "<p>Wat is de actieve articulator?</p>",
          "back": "<p>Het deel dat beweegt (de onderlip of de tong).</p>",
          "image": null,
          "alt": "",
          "num": 1,
          "theory": "<p>Bij elke consonant beweegt de actieve articulator naar de passieve toe. Bij [p] is dat de onderlip, bij [t] de tong.</p>"
        },
        {
          "type": "card",
          "code": "KLC2D12V1",
          "title": "Vocalen – kenmerken",
          "cat": "Vocalen",
          "ref": "Zie: week 1, college 2, dia 12",
          "front": "<p>Welk vocalisch kenmerk ontbreekt?</p><p>Vocalische kenmerken:<br><b>[…]</b> – plaats – ronding – (lengte/duur)</p>",
          "back": "<p><b>constrictie</b> – plaats – ronding – (lengte/duur)</p>",
          "image": null,
          "alt": "",
          "clz": {
            "q": "Welk vocalisch kenmerk ontbreekt?",
            "label": "Vocalische kenmerken",
            "parts": [
              "constrictie",
              "plaats",
              "ronding",
              "lengte/duur"
            ],
            "hide": 0,
            "opt": [
              3
            ]
          },
          "num": 2,
          "theory": "<p>Constrictie zegt hoe sterk de vernauwing is: gesloten, mid of open.</p>"
        },
        {
          "type": "click",
          "code": "KLC2D16V1",
          "title": "Vocalen – vocalendriehoek",
          "cat": "Vocalen",
          "ref": "Zie: week 1, college 2, dia 16",
          "question": "Klik in de vocalendriehoek op de lijn van constrictie: gesloten (close).",
          "lines": [
            [
              0.0,
              0,
              225,
              0
            ],
            [
              36.9,
              57,
              225,
              57
            ],
            [
              73.1,
              113,
              225,
              113
            ],
            [
              110.0,
              170,
              225,
              170
            ],
            [
              0,
              0,
              110,
              170
            ],
            [
              113,
              0,
              167,
              170
            ],
            [
              225,
              0,
              225,
              170
            ]
          ],
          "target": 0,
          "num": 3,
          "theory": "<p>De horizontale lijnen geven de constrictie aan, van gesloten (boven) naar open (onder). Gesloten klinkers zijn [i], [y] en [u].</p>"
        },
        {
          "type": "card",
          "code": "KLC2D3V2",
          "title": "Articulatoren – definitie",
          "cat": "Articulatoren",
          "ref": "Zie: week 1, college 2, dia 3",
          "front": "<p>Wat is de passieve articulator?</p>",
          "back": "<p>De plek waar de actieve articulator naartoe beweegt.</p>",
          "image": null,
          "alt": "",
          "num": 4,
          "theory": "<p>De plaatsen van articulatie zijn naar de passieve articulator genoemd, zoals alveolair (tandkassen) en velair (velum).</p>"
        },
        {
          "type": "card",
          "code": "KLC2D12V2",
          "title": "Vocalen – kenmerken",
          "cat": "Vocalen",
          "ref": "Zie: week 1, college 2, dia 12",
          "front": "<p>Welk vocalisch kenmerk ontbreekt?</p><p>Vocalische kenmerken:<br>constrictie – <b>[…]</b> – ronding – (lengte/duur)</p>",
          "back": "<p>constrictie – <b>plaats</b> – ronding – (lengte/duur)</p>",
          "image": null,
          "alt": "",
          "clz": {
            "q": "Welk vocalisch kenmerk ontbreekt?",
            "label": "Vocalische kenmerken",
            "parts": [
              "constrictie",
              "plaats",
              "ronding",
              "lengte/duur"
            ],
            "hide": 1,
            "opt": [
              3
            ]
          },
          "num": 5,
          "theory": "<p>Plaats zegt waar de constrictie gemaakt wordt: voor, mid of achterin.</p>"
        },
        {
          "type": "click",
          "code": "KLC2D16V5",
          "title": "Vocalen – vocalendriehoek",
          "cat": "Vocalen",
          "ref": "Zie: week 1, college 2, dia 16",
          "question": "Klik in de vocalendriehoek op de lijn van plaats: voor (front).",
          "lines": [
            [
              0.0,
              0,
              225,
              0
            ],
            [
              36.9,
              57,
              225,
              57
            ],
            [
              73.1,
              113,
              225,
              113
            ],
            [
              110.0,
              170,
              225,
              170
            ],
            [
              0,
              0,
              110,
              170
            ],
            [
              113,
              0,
              167,
              170
            ],
            [
              225,
              0,
              225,
              170
            ]
          ],
          "target": 4,
          "num": 6,
          "theory": "<p>De lijnen van boven naar beneden geven de plaats aan. Links is voor in de mond: [i], [eː] en [ɛ].</p>"
        },
        {
          "type": "card",
          "code": "KLC2D13V1",
          "title": "Vocalen – kenmerken",
          "cat": "Vocalen",
          "ref": "Zie: week 1, college 2, dia 13",
          "front": "<p>Hoe sterk kan de constrictie bij vocalen zijn?</p>",
          "back": "<p>Gesloten – mid – open</p>",
          "image": null,
          "alt": "",
          "num": 7,
          "theory": "<p>Bij een gesloten klinker is de mond bijna dicht, zoals bij [u] in toekan. Bij een open klinker is de mond ver open, zoals bij [a] in schaap.</p>"
        },
        {
          "type": "click",
          "code": "KLC2D16V2",
          "title": "Vocalen – vocalendriehoek",
          "cat": "Vocalen",
          "ref": "Zie: week 1, college 2, dia 16",
          "question": "Klik in de vocalendriehoek op de lijn van constrictie: close-mid.",
          "lines": [
            [
              0.0,
              0,
              225,
              0
            ],
            [
              36.9,
              57,
              225,
              57
            ],
            [
              73.1,
              113,
              225,
              113
            ],
            [
              110.0,
              170,
              225,
              170
            ],
            [
              0,
              0,
              110,
              170
            ],
            [
              113,
              0,
              167,
              170
            ],
            [
              225,
              0,
              225,
              170
            ]
          ],
          "target": 1,
          "num": 8,
          "theory": "<p>De horizontale lijnen lopen van gesloten (boven) naar open (onder). Close-mid is half gesloten: [eː], [øː] en [oː].</p>"
        },
        {
          "type": "ipa",
          "code": "KLC2D21V4",
          "title": "Vocalen – IPA-symbool",
          "cat": "Vocalen",
          "ref": "Zie: week 1, college 2, dia 21",
          "question": "Hoe schrijf je de 'ee' in b<b>ee</b>k in IPA?",
          "answers": [
            "e",
            "eː"
          ],
          "show": "e (in de vocalendriehoek: eː)",
          "num": 9,
          "theory": "<p>Een lange klinker: close-mid, voor, niet gerond. De korte e van bek is [ɛ].</p>"
        },
        {
          "type": "card",
          "code": "KLC2D12V3",
          "title": "Vocalen – kenmerken",
          "cat": "Vocalen",
          "ref": "Zie: week 1, college 2, dia 12",
          "front": "<p>Welk vocalisch kenmerk ontbreekt?</p><p>Vocalische kenmerken:<br>constrictie – plaats – <b>[…]</b> – (lengte/duur)</p>",
          "back": "<p>constrictie – plaats – <b>ronding</b> – (lengte/duur)</p>",
          "image": null,
          "alt": "",
          "clz": {
            "q": "Welk vocalisch kenmerk ontbreekt?",
            "label": "Vocalische kenmerken",
            "parts": [
              "constrictie",
              "plaats",
              "ronding",
              "lengte/duur"
            ],
            "hide": 2,
            "opt": [
              3
            ]
          },
          "num": 10,
          "theory": "<p>Ronding zegt of de lippen gerond zijn of niet. Zo is de [u] in toekan gerond en de [a] in schaap niet.</p>"
        },
        {
          "type": "ipa",
          "code": "KLC2D21V2",
          "title": "Vocalen – IPA-symbool",
          "cat": "Vocalen",
          "ref": "Zie: week 1, college 2, dia 21",
          "question": "Hoe schrijf je de 'a' in b<b>a</b>k in IPA?",
          "answers": [
            "ɑ"
          ],
          "show": "ɑ",
          "num": 11,
          "theory": "<p>De korte a. [ɑ] is een open klinker achterin; de lange aa van kaak is [aː] en zit meer naar voren.</p>"
        },
        {
          "type": "ipa",
          "code": "KLC2D21V7",
          "title": "Vocalen – IPA-symbool",
          "cat": "Vocalen",
          "ref": "Zie: week 1, college 2, dia 21",
          "question": "Hoe schrijf je de 'ie' in z<b>ie</b>k in IPA?",
          "answers": [
            "i"
          ],
          "show": "i",
          "num": 12,
          "theory": "<p>Gesloten, voor, niet gerond. De ie is kort; alleen vóór een r wordt hij lang: mier [iː].</p>"
        },
        {
          "type": "click",
          "code": "KLC2D16V6",
          "title": "Vocalen – vocalendriehoek",
          "cat": "Vocalen",
          "ref": "Zie: week 1, college 2, dia 16",
          "question": "Klik in de vocalendriehoek op de lijn van plaats: mid (central).",
          "lines": [
            [
              0.0,
              0,
              225,
              0
            ],
            [
              36.9,
              57,
              225,
              57
            ],
            [
              73.1,
              113,
              225,
              113
            ],
            [
              110.0,
              170,
              225,
              170
            ],
            [
              0,
              0,
              110,
              170
            ],
            [
              113,
              0,
              167,
              170
            ],
            [
              225,
              0,
              225,
              170
            ]
          ],
          "target": 5,
          "num": 13,
          "theory": "<p>De lijnen van boven naar beneden geven de plaats aan. In het midden staat de sjwa [ə].</p>"
        },
        {
          "type": "ipa",
          "code": "KLC2D21V10",
          "title": "Vocalen – IPA-symbool",
          "cat": "Vocalen",
          "ref": "Zie: week 1, college 2, dia 21",
          "question": "Hoe schrijf je de 'o' in b<b>o</b>t in IPA?",
          "answers": [
            "ɔ"
          ],
          "show": "ɔ",
          "num": 14,
          "theory": "<p>De korte o: open-mid, achter, gerond. Lang komt [ɔː] alleen in leenwoorden voor, zoals zone.</p>"
        },
        {
          "type": "ipa",
          "code": "KLC2D21V12",
          "title": "Vocalen – IPA-symbool",
          "cat": "Vocalen",
          "ref": "Zie: week 1, college 2, dia 21",
          "question": "Hoe schrijf je de 'uu' in f<b>uu</b>t in IPA?",
          "answers": [
            "y"
          ],
          "show": "y",
          "num": 15,
          "theory": "<p>Gesloten, voor, gerond. De uu is kort; alleen vóór een r wordt hij lang: muur [yː].</p>"
        },
        {
          "type": "card",
          "code": "KLC2D13V2",
          "title": "Vocalen – kenmerken",
          "cat": "Vocalen",
          "ref": "Zie: week 1, college 2, dia 13",
          "front": "<p>Waar kan de constrictie bij vocalen gemaakt worden?</p>",
          "back": "<p>Voor – mid – achterin</p>",
          "image": null,
          "alt": "",
          "num": 16,
          "theory": "<p>De [u] in toekan wordt achterin gemaakt. De [a] in schaap zit voor tot mid.</p>"
        },
        {
          "type": "ipa",
          "code": "KLC2D21V5",
          "title": "Vocalen – IPA-symbool",
          "cat": "Vocalen",
          "ref": "Zie: week 1, college 2, dia 21",
          "question": "Hoe schrijf je de 'e' in b<b>e</b>k in IPA?",
          "answers": [
            "ɛ"
          ],
          "show": "ɛ",
          "num": 17,
          "theory": "<p>De korte e: open-mid, voor, niet gerond. Lang komt [ɛː] alleen in leenwoorden voor, zoals crème.</p>"
        },
        {
          "type": "ipa",
          "code": "KLC2D21V11",
          "title": "Vocalen – IPA-symbool",
          "cat": "Vocalen",
          "ref": "Zie: week 1, college 2, dia 21",
          "question": "Hoe schrijf je de 'oe' in b<b>oe</b>k in IPA?",
          "answers": [
            "u"
          ],
          "show": "u",
          "num": 18,
          "theory": "<p>Gesloten, achter, gerond (zoals in toekan). De oe is kort; alleen vóór een r wordt hij lang: moer [uː].</p>"
        },
        {
          "type": "click",
          "code": "KLC2D16V3",
          "title": "Vocalen – vocalendriehoek",
          "cat": "Vocalen",
          "ref": "Zie: week 1, college 2, dia 16",
          "question": "Klik in de vocalendriehoek op de lijn van constrictie: open-mid.",
          "lines": [
            [
              0.0,
              0,
              225,
              0
            ],
            [
              36.9,
              57,
              225,
              57
            ],
            [
              73.1,
              113,
              225,
              113
            ],
            [
              110.0,
              170,
              225,
              170
            ],
            [
              0,
              0,
              110,
              170
            ],
            [
              113,
              0,
              167,
              170
            ],
            [
              225,
              0,
              225,
              170
            ]
          ],
          "target": 2,
          "num": 19,
          "theory": "<p>De horizontale lijnen lopen van gesloten (boven) naar open (onder). Open-mid is half open: [ɛ] en [ɔ].</p>"
        },
        {
          "type": "ipa",
          "code": "KLC2D21V3",
          "title": "Vocalen – IPA-symbool",
          "cat": "Vocalen",
          "ref": "Zie: week 1, college 2, dia 21",
          "question": "Hoe schrijf je de 'aa' in k<b>aa</b>k in IPA?",
          "answers": [
            "a",
            "aː"
          ],
          "show": "a (in de vocalendriehoek: aː)",
          "num": 20,
          "theory": "<p>De lange aa. [a] is een open klinker, niet gerond, voor tot mid (zoals in schaap).</p>"
        },
        {
          "type": "ipa",
          "code": "KLC2D21V8",
          "title": "Vocalen – IPA-symbool",
          "cat": "Vocalen",
          "ref": "Zie: week 1, college 2, dia 21",
          "question": "Hoe schrijf je de 'i' in b<b>i</b>t in IPA?",
          "answers": [
            "ɪ"
          ],
          "show": "ɪ",
          "num": 21,
          "theory": "<p>[ɪ] staat in de vocalendriehoek net onder [i], de ie van ziek.</p>"
        },
        {
          "type": "card",
          "code": "KLC2D12V4",
          "title": "Vocalen – kenmerken",
          "cat": "Vocalen",
          "ref": "Zie: week 1, college 2, dia 12",
          "front": "<p>Welk vocalisch kenmerk ontbreekt?</p><p>Vocalische kenmerken:<br>constrictie – plaats – ronding – (<b>[…]</b>)</p>",
          "back": "<p>constrictie – plaats – ronding – (<b>lengte/duur</b>)</p>",
          "image": null,
          "alt": "",
          "clz": {
            "q": "Welk vocalisch kenmerk ontbreekt?",
            "label": "Vocalische kenmerken",
            "parts": [
              "constrictie",
              "plaats",
              "ronding",
              "lengte/duur"
            ],
            "hide": 3,
            "opt": [
              3
            ]
          },
          "num": 22,
          "theory": "<p>Lengte zegt hoe lang de klinker is: lang of kort. In IPA is ː het lengteteken.</p>"
        },
        {
          "type": "ipa",
          "code": "KLC2D21V13",
          "title": "Vocalen – IPA-symbool",
          "cat": "Vocalen",
          "ref": "Zie: week 1, college 2, dia 21",
          "question": "Hoe schrijf je de 'eu' in d<b>eu</b>k in IPA?",
          "answers": [
            "ø",
            "øː"
          ],
          "show": "ø (in de vocalendriehoek: øː)",
          "num": 23,
          "theory": "<p>Een lange klinker: close-mid, voor, gerond. Het is de geronde tegenhanger van [eː].</p>"
        },
        {
          "type": "ipa",
          "code": "KLC2D21V15",
          "title": "Diftongen – IPA-symbool",
          "cat": "Diftongen",
          "ref": "Zie: week 1, college 2, dia 21",
          "question": "Hoe schrijf je de 'ij' in d<b>ij</b>k in IPA?",
          "answers": [
            "ɛi̯"
          ],
          "show": "ɛi̯",
          "num": 24,
          "theory": "<p>Een diftong: de klank begint bij [ɛ] en beweegt naar [i]. Het boogje geeft aan dat de i geen eigen lettergreep is.</p>"
        },
        {
          "type": "click",
          "code": "KLC2D16V7",
          "title": "Vocalen – vocalendriehoek",
          "cat": "Vocalen",
          "ref": "Zie: week 1, college 2, dia 16",
          "question": "Klik in de vocalendriehoek op de lijn van plaats: achter (back).",
          "lines": [
            [
              0.0,
              0,
              225,
              0
            ],
            [
              36.9,
              57,
              225,
              57
            ],
            [
              73.1,
              113,
              225,
              113
            ],
            [
              110.0,
              170,
              225,
              170
            ],
            [
              0,
              0,
              110,
              170
            ],
            [
              113,
              0,
              167,
              170
            ],
            [
              225,
              0,
              225,
              170
            ]
          ],
          "target": 6,
          "num": 25,
          "theory": "<p>De lijnen van boven naar beneden geven de plaats aan. Rechts is achter in de mond: [u], [oː], [ɔ] en [ɑ].</p>"
        },
        {
          "type": "ipa",
          "code": "KLC2D21V9",
          "title": "Vocalen – IPA-symbool",
          "cat": "Vocalen",
          "ref": "Zie: week 1, college 2, dia 21",
          "question": "Hoe schrijf je de 'oo' in b<b>oo</b>t in IPA?",
          "answers": [
            "o",
            "oː"
          ],
          "show": "o (in de vocalendriehoek: oː)",
          "num": 26,
          "theory": "<p>Een lange klinker: close-mid, achter, gerond.</p>"
        },
        {
          "type": "ipa",
          "code": "KLC2D21V14",
          "title": "Vocalen – IPA-symbool",
          "cat": "Vocalen",
          "ref": "Zie: week 1, college 2, dia 21",
          "question": "Hoe schrijf je de 'u' in b<b>u</b>s in IPA?",
          "answers": [
            "ʏ"
          ],
          "show": "ʏ",
          "num": 27,
          "theory": "<p>De korte u. [ʏ] staat in de vocalendriehoek net onder [y], de uu van fuut, en is gerond.</p>"
        },
        {
          "type": "card",
          "code": "KLC2D13V3",
          "title": "Vocalen – kenmerken",
          "cat": "Vocalen",
          "ref": "Zie: week 1, college 2, dia 13",
          "front": "<p>Wat zegt het kenmerk ronding?</p>",
          "back": "<p>Of de lippen gerond zijn of niet</p>",
          "image": null,
          "alt": "",
          "num": 28,
          "theory": "<p>Vergelijk [i] in ziek (niet gerond) met [y] in fuut (gerond): de tong doet bijna hetzelfde, alleen de lippen verschillen.</p>"
        },
        {
          "type": "ipa",
          "code": "KLC2D21V6",
          "title": "Vocalen – IPA-symbool",
          "cat": "Vocalen",
          "ref": "Zie: week 1, college 2, dia 21",
          "question": "Hoe schrijf je de 'e' in bak<b>e</b>n in IPA?",
          "answers": [
            "ə"
          ],
          "show": "ə",
          "num": 29,
          "theory": "<p>Dit is de sjwa, de klinker in het midden van de vocalendriehoek. Hij wordt op verschillende manieren gespeld: gemakkelijk, aardige.</p>"
        },
        {
          "type": "ipa",
          "code": "KLC2D21V16",
          "title": "Diftongen – IPA-symbool",
          "cat": "Diftongen",
          "ref": "Zie: week 1, college 2, dia 21",
          "question": "Hoe schrijf je de 'ou' in k<b>ou</b>d in IPA?",
          "answers": [
            "ɑu̯"
          ],
          "show": "ɑu̯",
          "num": 30,
          "theory": "<p>Een diftong: de klank begint bij [ɑ] en beweegt naar [u]. Het boogje geeft aan dat de u geen eigen lettergreep is.</p>"
        },
        {
          "type": "click",
          "code": "KLC2D16V4",
          "title": "Vocalen – vocalendriehoek",
          "cat": "Vocalen",
          "ref": "Zie: week 1, college 2, dia 16",
          "question": "Klik in de vocalendriehoek op de lijn van constrictie: open.",
          "lines": [
            [
              0.0,
              0,
              225,
              0
            ],
            [
              36.9,
              57,
              225,
              57
            ],
            [
              73.1,
              113,
              225,
              113
            ],
            [
              110.0,
              170,
              225,
              170
            ],
            [
              0,
              0,
              110,
              170
            ],
            [
              113,
              0,
              167,
              170
            ],
            [
              225,
              0,
              225,
              170
            ]
          ],
          "target": 3,
          "num": 31,
          "theory": "<p>De horizontale lijnen lopen van gesloten (boven) naar open (onder). Open klinkers zijn [aː] en [ɑ].</p>"
        },
        {
          "type": "ipa",
          "code": "KLC2D21V17",
          "title": "Diftongen – IPA-symbool",
          "cat": "Diftongen",
          "ref": "Zie: week 1, college 2, dia 21",
          "question": "Hoe schrijf je de 'ui' in k<b>ui</b>ken in IPA?",
          "answers": [
            "œy̯",
            "œy̑"
          ],
          "show": "œy̑",
          "num": 32,
          "theory": "<p>Een diftong: de klank begint bij [œ] en beweegt naar [y]. Het boogje geeft aan dat de y geen eigen lettergreep is.</p>"
        },
        {
          "type": "card",
          "code": "KLC2D13V4",
          "title": "Vocalen – kenmerken",
          "cat": "Vocalen",
          "ref": "Zie: week 1, college 2, dia 13",
          "front": "<p>Wat zegt het kenmerk lengte/duur?</p>",
          "back": "<p>Hoe lang de klinker is: lang – kort</p>",
          "image": null,
          "alt": "",
          "num": 33,
          "theory": "<p>In IPA geef je lengte aan met ː. Zo wordt de korte [i] lang vóór een r: mier [iː].</p>"
        },
        {
          "type": "drag",
          "code": "KLC2D21V1",
          "title": "Vocalen – Nederlandse klinkers in de vocalendriehoek",
          "cat": "Vocalen",
          "ref": "Zie: week 1, college 2, dia 21",
          "question": "Sleep elke klinker naar de juiste plek in de vocalendriehoek.",
          "size": {
            "width": 1000,
            "height": 600
          },
          "bg": "images/KLC2D21V1.webp",
          "hint": "Sleep de klanken naar de vakjes. Op een telefoon kun je ook eerst een klank en dan een vakje aantikken. Met het toetsenbord: Tab naar een klank en Enter, daarna met Tab naar het juiste vakje en Enter.",
          "zones": [
            {
              "x": 7.04,
              "y": 8.47,
              "w": 4.2,
              "h": 2.8,
              "single": true,
              "correct": [
                0
              ],
              "label": ""
            },
            {
              "x": 15.44,
              "y": 8.47,
              "w": 4.2,
              "h": 2.8,
              "single": true,
              "correct": [
                1
              ],
              "label": ""
            },
            {
              "x": 14.72,
              "y": 21.27,
              "w": 4.2,
              "h": 2.8,
              "single": true,
              "correct": [
                2
              ],
              "label": ""
            },
            {
              "x": 22.16,
              "y": 21.27,
              "w": 4.2,
              "h": 2.8,
              "single": true,
              "correct": [
                3
              ],
              "label": ""
            },
            {
              "x": 65.6,
              "y": 8.47,
              "w": 4.2,
              "h": 2.8,
              "single": true,
              "correct": [
                4
              ],
              "label": ""
            },
            {
              "x": 20.0,
              "y": 39.27,
              "w": 4.2,
              "h": 2.8,
              "single": true,
              "correct": [
                5
              ],
              "label": ""
            },
            {
              "x": 28.64,
              "y": 39.27,
              "w": 4.2,
              "h": 2.8,
              "single": true,
              "correct": [
                6
              ],
              "label": ""
            },
            {
              "x": 50.72,
              "y": 50.87,
              "w": 4.2,
              "h": 2.8,
              "single": true,
              "correct": [
                7
              ],
              "label": ""
            },
            {
              "x": 65.6,
              "y": 39.27,
              "w": 4.2,
              "h": 2.8,
              "single": true,
              "correct": [
                8
              ],
              "label": ""
            },
            {
              "x": 33.2,
              "y": 67.67,
              "w": 4.2,
              "h": 2.8,
              "single": true,
              "correct": [
                9
              ],
              "label": ""
            },
            {
              "x": 64.64,
              "y": 67.67,
              "w": 4.2,
              "h": 2.8,
              "single": true,
              "correct": [
                10
              ],
              "label": ""
            },
            {
              "x": 40.4,
              "y": 83.27,
              "w": 4.2,
              "h": 2.8,
              "single": true,
              "correct": [
                11
              ],
              "label": ""
            },
            {
              "x": 65.6,
              "y": 83.27,
              "w": 4.2,
              "h": 2.8,
              "single": true,
              "correct": [
                12
              ],
              "label": ""
            }
          ],
          "els": [
            {
              "text": "<span class=\"ipa\">i(ː)</span>",
              "x": 79.0,
              "y": 7.5,
              "w": 3.6,
              "h": 2.3
            },
            {
              "text": "<span class=\"ipa\">y(ː)</span>",
              "x": 89.0,
              "y": 7.5,
              "w": 3.6,
              "h": 2.3
            },
            {
              "text": "<span class=\"ipa\">ɪ</span>",
              "x": 79.0,
              "y": 20.0,
              "w": 3.6,
              "h": 2.3
            },
            {
              "text": "<span class=\"ipa\">ʏ</span>",
              "x": 89.0,
              "y": 20.0,
              "w": 3.6,
              "h": 2.3
            },
            {
              "text": "<span class=\"ipa\">u(ː)</span>",
              "x": 79.0,
              "y": 32.5,
              "w": 3.6,
              "h": 2.3
            },
            {
              "text": "<span class=\"ipa\">eː</span>",
              "x": 89.0,
              "y": 32.5,
              "w": 3.6,
              "h": 2.3
            },
            {
              "text": "<span class=\"ipa\">øː</span>",
              "x": 79.0,
              "y": 45.0,
              "w": 3.6,
              "h": 2.3
            },
            {
              "text": "<span class=\"ipa\">ə</span>",
              "x": 89.0,
              "y": 45.0,
              "w": 3.6,
              "h": 2.3
            },
            {
              "text": "<span class=\"ipa\">oː</span>",
              "x": 79.0,
              "y": 57.5,
              "w": 3.6,
              "h": 2.3
            },
            {
              "text": "<span class=\"ipa\">ɛ(ː)</span>",
              "x": 89.0,
              "y": 57.5,
              "w": 3.6,
              "h": 2.3
            },
            {
              "text": "<span class=\"ipa\">ɔ(ː)</span>",
              "x": 79.0,
              "y": 70.0,
              "w": 3.6,
              "h": 2.3
            },
            {
              "text": "<span class=\"ipa\">aː</span>",
              "x": 89.0,
              "y": 70.0,
              "w": 3.6,
              "h": 2.3
            },
            {
              "text": "<span class=\"ipa\">ɑ</span>",
              "x": 79.0,
              "y": 82.5,
              "w": 3.6,
              "h": 2.3
            }
          ],
          "num": 34,
          "theory": "<p>Hoogte is constrictie (boven gesloten, onder open), links-rechts is plaats (links voor, rechts achter). Staan er twee klinkers naast elkaar, dan is de rechter gerond.</p>"
        },
        {
          "type": "card",
          "code": "KLC2D22V1",
          "title": "Vocalen – verlengde klinkers",
          "cat": "Vocalen",
          "ref": "Zie: week 1, college 2, dia 22",
          "front": "<p>i, y en u zijn normaal korte klinkers. Wanneer worden ze verlengd?</p>",
          "back": "<p>Vóór een r-klank: [ɾ] [ɹ] [ʁ] [ʀ]</p>",
          "image": null,
          "alt": "",
          "num": 35,
          "theory": "<p>Voorbeelden: mier [iː], muur [yː], moer [uː]. Dia 22 noemt ook analyse, centrifuge en zoom; dia 51 zegt: voor /r/ en in leenwoorden.</p>"
        },
        {
          "type": "card",
          "code": "KLC2D23V1",
          "title": "Diftongen – definitie",
          "cat": "Diftongen",
          "ref": "Zie: week 1, college 2, dia 23",
          "front": "<p>Wat is een diftong?</p>",
          "back": "<p>Een klinker die tijdens de articulatie van plaats verandert</p>",
          "image": null,
          "alt": "",
          "num": 36,
          "theory": "<p>Een ander woord is tweeklank. Het Nederlands kent er drie: de ij/ei, de ou/au en de ui.</p>"
        },
        {
          "type": "card",
          "code": "KLC2D36V1",
          "title": "IPA – consonantentabel",
          "cat": "IPA",
          "ref": "Zie: week 1, college 2, dia 36",
          "front": "<p>Wat betekenen de grijze vlakken in dit schema?</p>",
          "back": "<p>Die articulaties zijn onmogelijk.</p>",
          "image": "images/KLC2D36V1.webp",
          "alt": "IPA-tabel van de consonanten met grijze vlakken",
          "num": 37,
          "theory": "<p>Sommige combinaties van plaats en wijze kun je fysiek niet maken. Zo hebben lateralen altijd de tong nodig. Lege witte vakken zijn wel mogelijk, maar niet gerapporteerd.</p>"
        },
        {
          "type": "mc",
          "code": "KLC2D49V1",
          "title": "Diftongen – soort tweeklank",
          "cat": "Diftongen",
          "ref": "Zie: week 1, college 2, dia 49",
          "question": "<p>De Nederlandse diftongen zijn allemaal sluitende tweeklanken. Wat betekent dit?</p>",
          "answers": [
            {
              "text": "De klank eindigt meer gesloten dan hij begint.",
              "correct": true
            },
            {
              "text": "De klank eindigt meer open dan hij begint.",
              "correct": false
            },
            {
              "text": "De mond gaat aan het eind van de klank helemaal dicht.",
              "correct": false
            },
            {
              "text": "De klank blijft op dezelfde plek in de vocalendriehoek.",
              "correct": false
            }
          ],
          "num": 38,
          "theory": "<p>Alle drie eindigen op een gesloten klinker: [ɛi̯] eindigt bij [i], [œy̑] bij [y] en [ɑu̯] bij [u].</p>"
        },
        {
          "type": "card",
          "code": "KLC2D22V2",
          "title": "Vocalen – verlengde klinkers",
          "cat": "Vocalen",
          "ref": "Zie: week 1, college 2, dia 22",
          "front": "<p>In wat voor woorden komen de lange klinkers ɛː, œː en ɔː voor?</p>",
          "back": "<p>In leenwoorden</p>",
          "image": null,
          "alt": "",
          "num": 39,
          "theory": "<p>Voorbeelden: crème [ɛː], œuvre [œː] en zone [ɔː]. In Nederlandse woorden zijn [ɛ] en [ɔ] kort.</p>"
        },
        {
          "type": "drag",
          "code": "KLC2D49V2",
          "title": "Diftongen – spelling en IPA",
          "cat": "Diftongen",
          "ref": "Zie: week 1, college 2, dia 49",
          "question": "Het Nederlands heeft drie diftongen. Sleep de spelling naar de juiste IPA-klank.",
          "size": {
            "width": 900,
            "height": 360
          },
          "bg": "images/KLC2D49V2.webp",
          "hint": "Sleep de spelling naar de vakjes. Op een telefoon kun je ook eerst een spelling en dan een vakje aantikken. Met het toetsenbord: Tab naar een spelling en Enter, daarna met Tab naar het juiste vakje en Enter.",
          "zones": [
            {
              "x": 21.11,
              "y": 11.11,
              "w": 8.75,
              "h": 3.75,
              "single": false,
              "correct": [
                1
              ],
              "label": ""
            },
            {
              "x": 21.11,
              "y": 41.67,
              "w": 8.75,
              "h": 3.75,
              "single": false,
              "correct": [
                2
              ],
              "label": ""
            },
            {
              "x": 21.11,
              "y": 72.22,
              "w": 8.75,
              "h": 3.75,
              "single": false,
              "correct": [
                0
              ],
              "label": ""
            }
          ],
          "els": [
            {
              "text": "<span class=\"ipa\">ui</span>",
              "x": 71.11,
              "y": 12.5,
              "w": 5,
              "h": 3
            },
            {
              "text": "<span class=\"ipa\">ij</span>",
              "x": 71.11,
              "y": 43.06,
              "w": 5,
              "h": 3
            },
            {
              "text": "<span class=\"ipa\">ou</span>",
              "x": 71.11,
              "y": 73.61,
              "w": 5,
              "h": 3
            }
          ],
          "num": 40,
          "theory": "<p>Een diftong schrijf je met twee symbolen: waar de klank begint en waar hij naartoe beweegt. De ei schrijf je hetzelfde als de ij, en de au hetzelfde als de ou.</p>"
        },
        {
          "type": "blanks",
          "code": "KLC2D39V1",
          "title": "IPA – extra tekens",
          "cat": "IPA",
          "ref": "Zie: week 1, college 2, dia 39",
          "question": "<p>Vul het ontbrekende woord in.</p>",
          "segs": [
            {
              "text": "IPA is niet altijd toereikend, daarom gebruiken we ook andere tekens om klanken specifieker weer te geven. Dit noem je "
            },
            {
              "blank": [
                "diakritische"
              ]
            },
            {
              "text": " tekens."
            }
          ],
          "correct": "diakritische",
          "image": "images/KLC2D39V1.webp",
          "alt": "tabel met tekens boven en onder IPA-symbolen",
          "num": 41,
          "theory": "<p>Diakritische tekens zijn kleine tekens boven of onder een IPA-symbool.</p>"
        },
        {
          "type": "mc",
          "code": "KLC2D50V1",
          "title": "Vocalen – uitspraakverschillen",
          "cat": "Vocalen",
          "ref": "Zie: week 1, college 2, dia 50",
          "question": "<p>Sommige sprekers van het Nederlands spreken lange klinkers (eː, øː, oː) uit als een diftong. Waar komt dit meer voor?</p>",
          "answers": [
            {
              "text": "Nederlands Nederlands",
              "correct": true
            },
            {
              "text": "Belgisch Nederlands",
              "correct": false
            }
          ],
          "num": 42,
          "theory": "<p>Diftongeren betekent dat de klinker tijdens het uitspreken van plaats verandert, zodat bijvoorbeeld [eː] richting [ei] gaat. In Belgisch Nederlands blijven deze klinkers meestal zuiver.</p>"
        },
        {
          "type": "drag",
          "code": "KLC2D51V1",
          "title": "IPA – complexe klanken",
          "cat": "IPA",
          "ref": "Zie: week 1, college 2, dia 51",
          "question": "Het Nederlands kent een aantal complexe klanken. Sleep elke klank naar de juiste categorie.",
          "size": {
            "width": 1000,
            "height": 770
          },
          "bg": "images/KLC2D51V1.webp",
          "hint": "Sleep de klanken naar de vakjes. Op een telefoon kun je ook eerst een klank en dan een vakje aantikken. Met het toetsenbord: Tab naar een klank en Enter, daarna met Tab naar het juiste vakje en Enter.",
          "zones": [
            {
              "x": 2.0,
              "y": 32.47,
              "w": 29.06,
              "h": 6.88,
              "single": false,
              "correct": [
                0,
                1,
                10
              ],
              "label": ""
            },
            {
              "x": 51.5,
              "y": 32.47,
              "w": 29.06,
              "h": 6.88,
              "single": false,
              "correct": [
                14,
                7,
                3
              ],
              "label": ""
            },
            {
              "x": 2.0,
              "y": 57.14,
              "w": 29.06,
              "h": 6.88,
              "single": false,
              "correct": [
                6,
                4,
                12,
                8,
                2
              ],
              "label": ""
            },
            {
              "x": 51.5,
              "y": 57.14,
              "w": 29.06,
              "h": 6.88,
              "single": false,
              "correct": [
                5,
                11
              ],
              "label": ""
            },
            {
              "x": 2.0,
              "y": 81.82,
              "w": 29.06,
              "h": 6.88,
              "single": false,
              "correct": [
                13
              ],
              "label": ""
            },
            {
              "x": 51.5,
              "y": 81.82,
              "w": 29.06,
              "h": 6.88,
              "single": false,
              "correct": [
                9
              ],
              "label": ""
            }
          ],
          "els": [
            {
              "text": "<span class=\"ipa\">ɛː</span>",
              "x": 2.5,
              "y": 3.25,
              "w": 4,
              "h": 3
            },
            {
              "text": "<span class=\"ipa\">œː</span>",
              "x": 14.5,
              "y": 3.25,
              "w": 4,
              "h": 3
            },
            {
              "text": "<span class=\"ipa\">ʒ</span>",
              "x": 26.5,
              "y": 3.25,
              "w": 4,
              "h": 3
            },
            {
              "text": "<span class=\"ipa\">uː</span>",
              "x": 38.5,
              "y": 3.25,
              "w": 4,
              "h": 3
            },
            {
              "text": "<span class=\"ipa\">ɟ</span>",
              "x": 50.5,
              "y": 3.25,
              "w": 4,
              "h": 3
            },
            {
              "text": "<span class=\"ipa\">ɱ</span>",
              "x": 62.5,
              "y": 3.25,
              "w": 4,
              "h": 3
            },
            {
              "text": "<span class=\"ipa\">c</span>",
              "x": 74.5,
              "y": 3.25,
              "w": 4,
              "h": 3
            },
            {
              "text": "<span class=\"ipa\">yː</span>",
              "x": 86.5,
              "y": 3.25,
              "w": 4,
              "h": 3
            },
            {
              "text": "<span class=\"ipa\">ʃ</span>",
              "x": 2.5,
              "y": 12.99,
              "w": 4,
              "h": 3
            },
            {
              "text": "<span class=\"ipa\">ɹ</span>",
              "x": 14.5,
              "y": 12.99,
              "w": 4,
              "h": 3
            },
            {
              "text": "<span class=\"ipa\">ɔː</span>",
              "x": 26.5,
              "y": 12.99,
              "w": 4,
              "h": 3
            },
            {
              "text": "<span class=\"ipa\">ɲ</span>",
              "x": 38.5,
              "y": 12.99,
              "w": 4,
              "h": 3
            },
            {
              "text": "<span class=\"ipa\">ɡ</span>",
              "x": 50.5,
              "y": 12.99,
              "w": 4,
              "h": 3
            },
            {
              "text": "<span class=\"ipa\">ʔ</span>",
              "x": 62.5,
              "y": 12.99,
              "w": 4,
              "h": 3
            },
            {
              "text": "<span class=\"ipa\">iː</span>",
              "x": 74.5,
              "y": 12.99,
              "w": 4,
              "h": 3
            }
          ],
          "num": 43,
          "theory": "<p>Dit zijn klanken die alleen in bepaalde omgevingen voorkomen. Voorbeelden van de dia: crème, mier, bagage, onweer, aap en woord.</p>"
        },
        {
          "type": "drag",
          "code": "KLC2D49V3",
          "title": "Diftongen – vocalendriehoek",
          "cat": "Diftongen",
          "ref": "Zie: week 1, college 2, dia 49",
          "question": "Sleep elke diftong naar de juiste pijl in de vocalendriehoek.",
          "size": {
            "width": 945,
            "height": 865
          },
          "bg": "images/KLC2D49V3.webp",
          "hint": "Sleep de klanken naar de vakjes. Op een telefoon kun je ook eerst een klank en dan een vakje aantikken. Met het toetsenbord: Tab naar een klank en Enter, daarna met Tab naar het juiste vakje en Enter.",
          "zones": [
            {
              "x": 6.03,
              "y": 3.82,
              "w": 6.0,
              "h": 3.75,
              "single": false,
              "correct": [
                2
              ],
              "label": ""
            },
            {
              "x": 24.02,
              "y": 3.82,
              "w": 6.0,
              "h": 3.75,
              "single": false,
              "correct": [
                1
              ],
              "label": ""
            },
            {
              "x": 86.98,
              "y": 3.82,
              "w": 6.0,
              "h": 3.75,
              "single": false,
              "correct": [
                0
              ],
              "label": ""
            }
          ],
          "els": [
            {
              "text": "<span class=\"ipa\">ɑu̯</span>",
              "x": 21.16,
              "y": 88.44,
              "w": 5,
              "h": 3
            },
            {
              "text": "<span class=\"ipa\">œy̑</span>",
              "x": 44.44,
              "y": 88.44,
              "w": 5,
              "h": 3
            },
            {
              "text": "<span class=\"ipa\">ɛi̯</span>",
              "x": 67.72,
              "y": 88.44,
              "w": 5,
              "h": 3
            }
          ],
          "num": 44,
          "theory": "<p>De pijl begint bij de eerste klank en wijst naar de tweede. Alle pijlen gaan omhoog, want het zijn sluitende tweeklanken.</p>"
        },
        {
          "type": "card",
          "code": "KLC2D53V1",
          "title": "Processen – fonologische processen",
          "cat": "Processen",
          "ref": "Zie: week 1, college 2, dia 53",
          "front": "<p>Welk fonologisch proces ontbreekt?</p><p>Fonologische processen die klanken kunnen beïnvloeden:<br><b>[…]</b> – coarticulatie – reductie</p>",
          "back": "<p><b>assimilatie</b> – coarticulatie – reductie</p>",
          "image": null,
          "alt": "",
          "clz": {
            "q": "Welk fonologisch proces ontbreekt?",
            "label": "Fonologische processen die klanken kunnen beïnvloeden",
            "parts": [
              "assimilatie",
              "coarticulatie",
              "reductie"
            ],
            "hide": 0,
            "opt": []
          },
          "num": 45,
          "theory": "<p>Bij assimilatie worden aangrenzende klanken meer gelijk aan elkaar.</p>"
        },
        {
          "type": "blanks",
          "code": "KLC2D54V1",
          "title": "Processen – definitie",
          "cat": "Processen",
          "ref": "Zie: week 1, college 2, dia 54",
          "question": "<p>Vul het ontbrekende woord in.</p>",
          "segs": [
            {
              "blank": [
                "assimilatie"
              ]
            },
            {
              "text": " is een fonologisch proces dat ervoor zorgt dat aangrenzende klanken, die normaalgesproken van elkaar verschillen in kenmerken, worden geproduceerd op een manier dat ze meer gelijk aan elkaar worden."
            }
          ],
          "correct": "assimilatie",
          "image": null,
          "alt": "",
          "num": 46,
          "theory": "<p>Het is een aanpassingsproces: naburige klanken gaan één of meer kenmerken delen. De reden is uitspraakgemak.</p>"
        },
        {
          "type": "card",
          "code": "KLC2D59V1",
          "title": "Processen – assimilatie van stem",
          "cat": "Processen",
          "ref": "Zie: week 1, college 2, dia 59",
          "front": "<p>Wat wordt bedoeld met assimilatie van stem?</p>",
          "back": "<p>Een klank past zich in stem aan aan de klank ernaast: hij wordt stemhebbend of stemloos, net als die buurklank.</p><p>Bijvoorbeeld <i>ijsbeer</i>: de stemloze [s] wordt een stemhebbende [z] voor de stemhebbende [b].</p>",
          "image": null,
          "alt": "",
          "num": 47,
          "theory": "<p>Voorbeelden: opzet, afzien, ijsbeer, zakdoek, op zee, lees dat. In ijsbeer wordt de stemloze [s] een stemhebbende [z] voor de [b].</p>"
        },
        {
          "type": "card",
          "code": "KLC2D53V2",
          "title": "Processen – fonologische processen",
          "cat": "Processen",
          "ref": "Zie: week 1, college 2, dia 53",
          "front": "<p>Welk fonologisch proces ontbreekt?</p><p>Fonologische processen die klanken kunnen beïnvloeden:<br>assimilatie – <b>[…]</b> – reductie</p>",
          "back": "<p>assimilatie – <b>coarticulatie</b> – reductie</p>",
          "image": null,
          "alt": "",
          "clz": {
            "q": "Welk fonologisch proces ontbreekt?",
            "label": "Fonologische processen die klanken kunnen beïnvloeden",
            "parts": [
              "assimilatie",
              "coarticulatie",
              "reductie"
            ],
            "hide": 1,
            "opt": []
          },
          "num": 48,
          "theory": "<p>De dia noemt drie fonologische processen die klanken kunnen beïnvloeden: assimilatie, coarticulatie en reductie.</p>"
        },
        {
          "type": "card",
          "code": "KLC2D63V1",
          "title": "Processen – assimilatie van plaats",
          "cat": "Processen",
          "ref": "Zie: week 1, college 2, dia 63",
          "front": "<p>Wat wordt bedoeld met assimilatie van plaats?</p>",
          "back": "<p>Een klank past zich aan aan de plaats van articulatie van de klank ernaast.</p><p>Bijvoorbeeld <i>inpakken</i>: de alveolaire [n] wordt een bilabiale [m] voor de bilabiale [p].</p>",
          "image": null,
          "alt": "",
          "num": 49,
          "theory": "<p>Voorbeelden: inpakken, onweer, aanjagen, inkopen, in Parijs. In inpakken wordt de alveolaire [n] een bilabiale [m] voor de [p].</p>"
        },
        {
          "type": "mc",
          "code": "KLC2D57V1",
          "title": "Processen – stem of plaats",
          "cat": "Processen",
          "ref": "Zie: week 1, college 2, dia 59",
          "question": "<p>Bij <i>ijsbeer</i> wordt [ʔɛi<u>s</u>beːɹ] uitgesproken als [ʔɛi<u>z</u>beːɹ]. Hier spreek je van assimilatie van …</p>",
          "answers": [
            {
              "text": "stem",
              "correct": true
            },
            {
              "text": "plaats",
              "correct": false
            }
          ],
          "num": 50,
          "theory": "<p>[s] is stemloos en [b] is stemhebbend. Door assimilatie worden beide stemhebbend: de [s] wordt een [z]. De plaats verandert niet.</p>"
        },
        {
          "type": "card",
          "code": "KLC2D54V2",
          "title": "Processen – definitie",
          "cat": "Processen",
          "ref": "Zie: week 1, college 2, dia 54",
          "front": "<p>Wat is assimilatie?</p>",
          "back": "<p>Een fonologisch proces dat ervoor zorgt dat aangrenzende klanken, die normaalgesproken van elkaar verschillen in kenmerken, worden geproduceerd op een manier dat ze meer gelijk aan elkaar worden.</p>",
          "image": null,
          "alt": "",
          "num": 51,
          "theory": "<p>Het is een aanpassingsproces: naburige klanken gaan één of meer kenmerken delen. De reden is uitspraakgemak. Er is assimilatie van stem en van plaats.</p>"
        },
        {
          "type": "mc",
          "code": "KLC2D65V1",
          "title": "Processen – stem of plaats",
          "cat": "Processen",
          "ref": "Zie: week 1, college 2, dia 66",
          "question": "<p>Bij <i>onweer</i> wordt [ʔɔ<u>n</u>ʋeːɾ] uitgesproken als [ʔɔ<u>ɱ</u>ʋeːɾ]. Hier spreek je van assimilatie van …</p>",
          "answers": [
            {
              "text": "stem",
              "correct": false
            },
            {
              "text": "plaats",
              "correct": true
            }
          ],
          "num": 52,
          "theory": "<p>[n] is alveolair en [ʋ] is labiodentaal. Door assimilatie worden beide labiodentaal: de [n] wordt een [ɱ]. De stem verandert niet.</p>"
        },
        {
          "type": "card",
          "code": "KLC2D53V3",
          "title": "Processen – fonologische processen",
          "cat": "Processen",
          "ref": "Zie: week 1, college 2, dia 53",
          "front": "<p>Welk fonologisch proces ontbreekt?</p><p>Fonologische processen die klanken kunnen beïnvloeden:<br>assimilatie – coarticulatie – <b>[…]</b></p>",
          "back": "<p>assimilatie – coarticulatie – <b>reductie</b></p>",
          "image": null,
          "alt": "",
          "clz": {
            "q": "Welk fonologisch proces ontbreekt?",
            "label": "Fonologische processen die klanken kunnen beïnvloeden",
            "parts": [
              "assimilatie",
              "coarticulatie",
              "reductie"
            ],
            "hide": 2,
            "opt": []
          },
          "num": 53,
          "theory": "<p>De dia noemt drie fonologische processen die klanken kunnen beïnvloeden: assimilatie, coarticulatie en reductie.</p>"
        },
        {
          "type": "mc",
          "code": "KLC2D63V2",
          "title": "Processen – stem of plaats",
          "cat": "Processen",
          "ref": "Zie: week 1, college 2, dia 63",
          "question": "<p>Als assimilatie ervoor zorgt dat beide klanken bilabiaal zijn, heb je het over assimilatie van …</p>",
          "answers": [
            {
              "text": "stem",
              "correct": false
            },
            {
              "text": "plaats",
              "correct": true
            }
          ],
          "num": 54,
          "theory": "<p>Bilabiaal is een plaats van articulatie. Voorbeeld: inpakken, waar de alveolaire [n] een bilabiale [m] wordt voor de bilabiale [p].</p>"
        },
        {
          "type": "mc",
          "code": "KLC2D60V1",
          "title": "Processen – stem of plaats",
          "cat": "Processen",
          "ref": "Zie: week 1, college 2, dia 61",
          "question": "<p>Bij <i>op zee</i> wordt [ʔɔp<u>z</u>eː] uitgesproken als [ʔɔp<u>s</u>eː]. Hier spreek je van assimilatie van …</p>",
          "answers": [
            {
              "text": "stem",
              "correct": true
            },
            {
              "text": "plaats",
              "correct": false
            }
          ],
          "num": 55,
          "theory": "<p>[p] is stemloos en [z] is stemhebbend. Door assimilatie worden beide stemloos: de [z] wordt een [s]. De plaats verandert niet.</p>"
        },
        {
          "type": "mc",
          "code": "KLC2D64V1",
          "title": "Processen – woordgrenzen",
          "cat": "Processen",
          "ref": "Zie: week 1, college 2, dia 64",
          "question": "<p>Spelen woordgrenzen een rol bij assimilatie?</p>",
          "answers": [
            {
              "text": "ja",
              "correct": false
            },
            {
              "text": "nee",
              "correct": true
            }
          ],
          "note": "Assimilatie gaat ook over een woordgrens heen: <i>inpakken</i> [ʔɪmpɑkə] en <i>in Parijs</i> [ʔɪmpaɾɛis] krijgen allebei een [m].",
          "num": 56,
          "theory": "<p>Assimilatie gaat ook over een woordgrens heen: inpakken en in Parijs krijgen allebei een [m] voor de [p]. (Deze vraag heeft al een toelichting op de site.)</p>"
        },
        {
          "type": "mc",
          "code": "KLC2D67V1",
          "title": "Processen – stem of plaats",
          "cat": "Processen",
          "ref": "Zie: week 1, college 2, dia 68",
          "question": "<p>Bij <i>aanjagen</i> wordt [ʔaː<u>n</u>jaːxə] uitgesproken als [ʔaː<u>ɲ</u>jaːxə]. Hier spreek je van assimilatie van …</p>",
          "answers": [
            {
              "text": "stem",
              "correct": false
            },
            {
              "text": "plaats",
              "correct": true
            }
          ],
          "num": 57,
          "theory": "<p>[n] is alveolair en [j] is palataal. Door assimilatie worden beide palataal: de [n] wordt een [ɲ]. De stem verandert niet.</p>"
        },
        {
          "type": "mc",
          "code": "KLC2D61V2",
          "title": "Processen – stem of plaats",
          "cat": "Processen",
          "ref": "Zie: week 1, college 2, dia 61",
          "question": "<p>Als assimilatie ervoor zorgt dat beide klanken stemloos zijn, heb je het over assimilatie van …</p>",
          "answers": [
            {
              "text": "stem",
              "correct": true
            },
            {
              "text": "plaats",
              "correct": false
            }
          ],
          "num": 58,
          "theory": "<p>Stemloos en stemhebbend zijn kenmerken van stem. Voorbeeld: op zee, waar de [z] een [s] wordt na de stemloze [p].</p>"
        },
        {
          "type": "card",
          "code": "KLC2D70V1",
          "title": "Processen – soorten assimilatie",
          "cat": "Processen",
          "ref": "Zie: week 1, college 2, dia 70",
          "front": "<p>Wat is progressieve assimilatie?</p>",
          "back": "<p>Een klank past zich aan aan de klank ervóór. Bijvoorbeeld <i>opzet</i>: de [z] wordt [s] na de stemloze [p].</p>",
          "image": null,
          "alt": "",
          "num": 59,
          "theory": "<p>Voorbeelden: opzet, afzien, afval. De eerste klank blijft gelijk en verandert de tweede: in opzet wordt de [z] een [s] na de stemloze [p].</p>"
        },
        {
          "type": "card",
          "code": "KLC2D74V1",
          "title": "Processen – soorten assimilatie",
          "cat": "Processen",
          "ref": "Zie: week 1, college 2, dia 74",
          "front": "<p>Wat is interne assimilatie?</p>",
          "back": "<p>Assimilatie binnen een woord. Bijvoorbeeld <i>ijsbeer</i>, <i>onweer</i>.</p>",
          "image": null,
          "alt": "",
          "num": 60,
          "theory": "<p>Voorbeelden: ijsbeer en onweer. De twee klanken staan in hetzelfde woord.</p>"
        },
        {
          "type": "card",
          "code": "KLC2D71V1",
          "title": "Processen – soorten assimilatie",
          "cat": "Processen",
          "ref": "Zie: week 1, college 2, dia 71",
          "front": "<p>Wat is regressieve assimilatie?</p>",
          "back": "<p>Een klank past zich aan aan de klank erna. Bijvoorbeeld <i>asbak</i>: de [s] wordt [z] voor de stemhebbende [b].</p>",
          "image": null,
          "alt": "",
          "num": 61,
          "theory": "<p>Voorbeelden: asbak, bruikbaar, inpakken. De tweede klank blijft gelijk en verandert de eerste: in asbak wordt de [s] een [z] voor de stemhebbende [b].</p>"
        },
        {
          "type": "card",
          "code": "KLC2D75V1",
          "title": "Processen – soorten assimilatie",
          "cat": "Processen",
          "ref": "Zie: week 1, college 2, dia 75",
          "front": "<p>Wat is externe assimilatie?</p>",
          "back": "<p>Assimilatie over een woordgrens heen. Bijvoorbeeld <i>in Parijs</i>, <i>op zee</i>.</p>",
          "image": null,
          "alt": "",
          "num": 62,
          "theory": "<p>Voorbeelden: in Parijs en op zee. De twee klanken staan in verschillende woorden. Woordgrenzen houden assimilatie niet tegen.</p>"
        },
        {
          "type": "card",
          "code": "KLC2D72V1",
          "title": "Processen – soorten assimilatie",
          "cat": "Processen",
          "ref": "Zie: week 1, college 2, dia 72",
          "front": "<p>Wat is partiële assimilatie?</p>",
          "back": "<p>Een klank neemt één of enkele kenmerken van de buurklank over, maar wordt niet helemaal gelijk. Bijvoorbeeld <i>ijsbeer</i>: [s] wordt [z], alleen de stem verandert.</p>",
          "image": null,
          "alt": "",
          "num": 63,
          "theory": "<p>Voorbeelden: ijsbeer, inpakken, op zee. In ijsbeer wordt [s] een [z]: alleen de stem verandert, het blijft een andere klank dan [b].</p>"
        },
        {
          "type": "card",
          "code": "KLC2D73V1",
          "title": "Processen – soorten assimilatie",
          "cat": "Processen",
          "ref": "Zie: week 1, college 2, dia 73",
          "front": "<p>Wat is totale assimilatie?</p>",
          "back": "<p>Een klank wordt helemaal gelijk aan de buurklank. Bijvoorbeeld <i>opbod</i>: de [p] wordt [b].</p>",
          "image": null,
          "alt": "",
          "num": 64,
          "theory": "<p>Voorbeelden: inmaken en opbod. In opbod wordt de [p] een [b] voor de [b]; in inmaken wordt de [n] een [m] voor de [m].</p>"
        },
        {
          "type": "drag",
          "code": "KLC2D75V2",
          "title": "Processen – soorten assimilatie",
          "cat": "Processen",
          "ref": "Zie: week 1, college 2, dia 75",
          "question": "Sleep elk voorbeeld naar de juiste soort assimilatie.",
          "size": {
            "width": 900,
            "height": 470
          },
          "bg": "images/KLC2D75V2.webp",
          "hint": "Sleep de voorbeelden naar de vakjes. Op een telefoon kun je ook eerst een voorbeeld en dan een vakje aantikken. Met het toetsenbord: Tab naar een voorbeeld en Enter, daarna met Tab naar het juiste vakje en Enter.",
          "zones": [
            {
              "x": 2.22,
              "y": 42.55,
              "w": 25.94,
              "h": 14.38,
              "single": false,
              "correct": [
                0,
                1
              ],
              "label": ""
            },
            {
              "x": 51.67,
              "y": 42.55,
              "w": 25.94,
              "h": 14.38,
              "single": false,
              "correct": [
                3,
                2
              ],
              "label": ""
            }
          ],
          "els": [
            {
              "text": "ijsbeer",
              "x": 2.22,
              "y": 5.32,
              "w": 8,
              "h": 2.6
            },
            {
              "text": "onweer",
              "x": 18.33,
              "y": 5.32,
              "w": 8,
              "h": 2.6
            },
            {
              "text": "op zee",
              "x": 34.44,
              "y": 5.32,
              "w": 8,
              "h": 2.6
            },
            {
              "text": "in Parijs",
              "x": 50.56,
              "y": 5.32,
              "w": 8,
              "h": 2.6
            }
          ],
          "num": 65,
          "theory": "<p>Staan de twee klanken in hetzelfde woord, dan is het intern. Zit er een woordgrens (een spatie) tussen, dan is het extern.</p>"
        },
        {
          "type": "drag",
          "code": "KLC2D71V2",
          "title": "Processen – soorten assimilatie",
          "cat": "Processen",
          "ref": "Zie: week 1, college 2, dia 71",
          "question": "Sleep elk voorbeeld naar de juiste soort assimilatie.",
          "size": {
            "width": 900,
            "height": 470
          },
          "bg": "images/KLC2D71V2.webp",
          "hint": "Sleep de voorbeelden naar de vakjes. Op een telefoon kun je ook eerst een voorbeeld en dan een vakje aantikken. Met het toetsenbord: Tab naar een voorbeeld en Enter, daarna met Tab naar het juiste vakje en Enter.",
          "zones": [
            {
              "x": 2.22,
              "y": 42.55,
              "w": 25.94,
              "h": 14.38,
              "single": false,
              "correct": [
                1,
                4,
                0
              ],
              "label": ""
            },
            {
              "x": 51.67,
              "y": 42.55,
              "w": 25.94,
              "h": 14.38,
              "single": false,
              "correct": [
                5,
                2,
                3
              ],
              "label": ""
            }
          ],
          "els": [
            {
              "text": "afval",
              "x": 2.22,
              "y": 5.32,
              "w": 8,
              "h": 2.6
            },
            {
              "text": "opzet",
              "x": 18.33,
              "y": 5.32,
              "w": 8,
              "h": 2.6
            },
            {
              "text": "bruikbaar",
              "x": 34.44,
              "y": 5.32,
              "w": 8,
              "h": 2.6
            },
            {
              "text": "inpakken",
              "x": 50.56,
              "y": 5.32,
              "w": 8,
              "h": 2.6
            },
            {
              "text": "afzien",
              "x": 66.67,
              "y": 5.32,
              "w": 8,
              "h": 2.6
            },
            {
              "text": "asbak",
              "x": 82.78,
              "y": 5.32,
              "w": 8,
              "h": 2.6
            }
          ],
          "num": 66,
          "theory": "<p>Kijk welke klank verandert. Verandert de tweede klank (door de klank ervoor), dan is het progressief. Verandert de eerste klank (door de klank erna), dan is het regressief.</p>"
        },
        {
          "type": "drag",
          "code": "KLC2D73V2",
          "title": "Processen – soorten assimilatie",
          "cat": "Processen",
          "ref": "Zie: week 1, college 2, dia 73",
          "question": "Sleep elk voorbeeld naar de juiste soort assimilatie.",
          "size": {
            "width": 900,
            "height": 470
          },
          "bg": "images/KLC2D73V2.webp",
          "hint": "Sleep de voorbeelden naar de vakjes. Op een telefoon kun je ook eerst een voorbeeld en dan een vakje aantikken. Met het toetsenbord: Tab naar een voorbeeld en Enter, daarna met Tab naar het juiste vakje en Enter.",
          "zones": [
            {
              "x": 2.22,
              "y": 42.55,
              "w": 25.94,
              "h": 14.38,
              "single": false,
              "correct": [
                4,
                3,
                0
              ],
              "label": ""
            },
            {
              "x": 51.67,
              "y": 42.55,
              "w": 25.94,
              "h": 14.38,
              "single": false,
              "correct": [
                1,
                2
              ],
              "label": ""
            }
          ],
          "els": [
            {
              "text": "op zee",
              "x": 2.22,
              "y": 5.32,
              "w": 8,
              "h": 2.6
            },
            {
              "text": "inmaken",
              "x": 18.33,
              "y": 5.32,
              "w": 8,
              "h": 2.6
            },
            {
              "text": "opbod",
              "x": 34.44,
              "y": 5.32,
              "w": 8,
              "h": 2.6
            },
            {
              "text": "inpakken",
              "x": 50.56,
              "y": 5.32,
              "w": 8,
              "h": 2.6
            },
            {
              "text": "ijsbeer",
              "x": 66.67,
              "y": 5.32,
              "w": 8,
              "h": 2.6
            }
          ],
          "num": 67,
          "theory": "<p>Kijk of de twee klanken na de assimilatie precies gelijk zijn. In inmaken ([mm]) en opbod ([bb]) is dat zo: totaal. In inpakken ([mp]) blijven het twee verschillende klanken: partieel.</p>"
        }
      ]
    }
  ]
};
