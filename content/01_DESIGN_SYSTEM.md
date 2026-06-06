# Design System: Fitness World Studios

## 1. Markenrichtung

Fitness World Studios soll nicht wie ein austauschbares regionales Fitnessstudio wirken. Die neue Website soll die Marke als moderne Fitness-, Gesundheits- und Community-Plattform mit mehreren Standorten inszenieren.

Kernbotschaft:

> Stärker. Gesünder. Gemeinsam.

Sekundärer Claim:

> Trainiere für mehr.

Die Seite muss kraftvoll und sportlich sein, aber auch vertrauenswürdig genug für Reha-Sport, AOK-Kurse und gesundheitsorientierte Zielgruppen.

## 2. Logo und Farbe

Das echte Logo muss unverändert aus `assets/fitness-world-logo.svg` eingebunden werden.

Akzentfarbe aus dem Logo:

```css
--fw-blue: #1A91D5;
```

Weitere Logo-Farben:

```css
--fw-dark: #373737;
--fw-grey: #DDDDDC;
--fw-light: #ECECEC;
```

Website-Farben:

```css
--navy-900: #07111C;
--navy-800: #0B1724;
--navy-700: #102437;
--white: #FFFFFF;
--off-white: #F7F9FC;
--text-dark: #111827;
--text-muted: #667085;
--line-light: #E6EBF1;
```

## 3. Typografie

### Headlines

Sehr große, kondensierte Sans-Serif Schrift. Empfohlen:

- `Anton`
- Alternative: `Oswald`
- Fallback: `Impact, sans-serif`

Headline-Stil:

- Großbuchstaben
- Enge Laufweite
- Harte Zeilenumbrüche
- Blau für einzelne Schlüsselwörter

Beispiel:

```txt
STÄRKER.
GESÜNDER.
GEMEINSAM.
```

### Body

Empfohlen:

- `Inter`
- Alternative: `Manrope`
- Fallback: `system-ui, sans-serif`

Body-Texte sollen klar, direkt, vertrauenswürdig und nicht zu werblich sein.

## 4. Layout-Prinzipien

- Großzügige Sektionen
- Starke Bildflächen
- Editoriale Grid-Struktur
- Große Headlines links, erklärender Text rechts
- Dunkle Premium-Flächen im Wechsel mit hellen, klaren Informationsflächen
- Blau nur gezielt einsetzen: Buttons, Icons, Linien, Hover, aktive States

## 5. Bildsprache

Keine generischen Stockbilder, wenn echte Studiobilder verfügbar sind.

Bildmotive:

- echte Trainingssituationen
- Trainer korrigiert Übung
- Mitglieder lachen oder interagieren
- Boxtraining in Bewegung
- Reha/Health ruhig und vertrauensvoll
- Studio-Architektur und Geräte
- Community-Momente

Platzhalter-Dateinamen:

```txt
/images/hero/home-hero.jpg
/images/studios/holdorf-hero.jpg
/images/studios/goldenstedt-hero.jpg
/images/studios/twistringen-hero.jpg
/images/studios/vechta-hero.jpg
/images/services/reha.jpg
/images/services/boxen.jpg
/images/services/personal-training.jpg
/images/community/community-01.jpg
```

## 6. Buttons

### Primary Button

Label-Beispiele:

- Kostenloses Probetraining
- Probetraining vereinbaren
- Jetzt Mitglied werden
- Studio entdecken

Style:

- Hintergrund: `#1A91D5`
- Text: Weiß
- Radius: 0 oder maximal 8px, je nach Gesamtdesign
- Pfeil rechts als Icon
- Hover: leicht dunkler `#1479B3`

### Secondary Button

- Transparent
- Weißer oder blauer Rahmen
- Pfeil rechts

## 7. UI-Elemente

### Standort-Cards

- Bild als Hintergrund
- dunkles Overlay
- Standortname groß
- 3 bis 4 Bulletpoints
- CTA: `Studio entdecken →`
- Hover: Bild zoomt leicht, blaue Linie fährt ein

### Service-Cards

- Helle Fläche
- Outline-Icon in Blau
- kurzer Titel
- 1 bis 2 Zeilen Nutzen
- Hover: Border blau, Schatten leicht

### Testimonial-Cards

- Weißer Hintergrund
- 5 Sterne in Blau oder dunkel
- kurzer echter wirkender Text
- Name + Standort
- Google-Icon optional

### CTA-Banner

- Dunkler Hintergrund
- Bild rechts oder als Overlay
- Headline groß
- blauer Button

## 8. Mobile Design

Mobile ist Priorität.

- Sticky CTA unten: `Probetraining`
- Burger-Menü rechts
- Standort-Cards horizontal swipebar
- Hero-Headline maximal 3 Zeilen
- Keine überlangen Textblöcke
- Telefonnummer und Route auf Standortseiten prominent

## 9. Tonalität

Jung-professionell, direkt, lokal, vertrauenswürdig.

Nicht schreiben:

- „Werde die beste Version deiner selbst“
- „No pain no gain“
- „Premium Lifestyle Experience“

Besser schreiben:

- „Trainiere, wann es in deinen Alltag passt.“
- „Wir begleiten dich mit Struktur, Betreuung und ehrlichem Feedback.“
- „Egal ob Start, Wiedereinstieg oder neues Ziel: Wir holen dich dort ab, wo du stehst.“
