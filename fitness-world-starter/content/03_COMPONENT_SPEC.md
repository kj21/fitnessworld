# Komponenten-Spezifikation

## Header

### Inhalt

- Logo aus `assets/fitness-world-logo.svg`
- Hauptnavigation
- CTA Button `Probetraining`
- Mobile Burger

### Verhalten

- Sticky Header nach Scroll
- Hintergrund initial transparent über Hero, danach `rgba(7,17,28,0.92)` mit Blur
- Aktiver Menüpunkt blau unterstrichen

## HeroSection

### Props

- eyebrow
- headline
- highlightedWord
- subline
- primaryCtaLabel
- primaryCtaUrl
- secondaryCtaLabel
- secondaryCtaUrl
- imageUrl
- stats

### Design

- Fullscreen oder min-height 760px Desktop
- Dunkles Overlay auf Bild
- Große Headline links
- CTA-Gruppe darunter
- Stats unter CTA

## LocationCard

### Inhalt

- Standortname
- Bild
- Features
- CTA

### Beispiel

```txt
Holdorf
24/7 Training
Boxen
Wellness
Kostenlose Parkplätze
Studio entdecken
```

## ServiceCard

### Inhalt

- Icon
- Titel
- Kurzbeschreibung
- Link optional

## SectionHeader

### Inhalt

- Eyebrow in Blau
- Headline groß
- Introtext optional

## TestimonialCard

### Inhalt

- Bewertung
- Zitat
- Name
- Standort

## PricingCard

### Inhalt

- Tarifname
- Preis
- Beschreibung
- Features
- CTA
- Highlight bool

## LeadForm

### Felder

- Vorname
- Nachname
- E-Mail
- Telefon
- Wunschstandort
- Interesse
- Nachricht optional
- Datenschutz Checkbox

### Interessen

- Probetraining allgemein
- Reha-Sport
- Personal Training
- Boxen & Kickboxen
- Mitgliedschaft

## FAQAccordion

- Frage
- Antwort
- Immer barrierefrei mit Button, aria-expanded und Keyboard-Navigation

## CTAFooterBanner

Headline:

> Finde heraus, was in dir steckt.

Text:

> Vereinbare jetzt dein kostenloses Probetraining und lerne Fitness World persönlich kennen.

Button:

> Probetraining vereinbaren
