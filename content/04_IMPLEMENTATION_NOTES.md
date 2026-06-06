# Implementation Notes für Claude Code

## Ziel

Erstelle eine hochwertige, responsive Website für Fitness World Studios auf Basis der gelieferten Dateien.

## Technische Erwartung

Claude Code soll zuerst das Projekt erkennen:

- Falls Next.js vorhanden ist: App Router oder Pages Router nutzen und Komponenten sauber in `/components` aufbauen.
- Falls Astro vorhanden ist: Komponenten/Layouts in Astro-Struktur abbilden.
- Falls WordPress Theme vorhanden ist: Templates/PHP/ACF-Felder entsprechend befüllen und CSS/JS modular ergänzen.
- Falls kein Framework vorhanden ist: statische HTML/CSS/JS-Struktur erstellen.

## Wichtig

- Keine Designfarbe erfinden. Blau ist `#1A91D5`.
- Kein Logo nachbauen. Nur `assets/fitness-world-logo.svg` verwenden.
- Text aus `pages/*.md` als Content-Grundlage nutzen.
- Für Bilder Platzhalter-Dateinamen verwenden und Alt-Texte setzen.
- Keine toten Links. Routen aus `sitemap.json` verwenden.
- Mobile zuerst denken.
- Lighthouse-Ziele: Performance > 85, Accessibility > 90, SEO > 90.

## SEO

Jede Seite braucht:

- Title Tag
- Meta Description
- H1 nur einmal
- semantische Sections
- klare interne Verlinkung
- lokale Keywords sinnvoll, nicht spammy

## Barrierefreiheit

- Buttons als Buttons/Links korrekt
- Fokuszustände sichtbar
- Kontrast prüfen
- Formulare mit Labels
- Akkordeons mit ARIA

## Content-Priorität

Startseite zuerst, danach:

1. Standortseiten
2. Probetraining
3. Mitgliedschaft
4. Kurse / Reha / Personal Training / Boxen
5. Team / Jobs / Blog / Kontakt
6. Legal Templates
