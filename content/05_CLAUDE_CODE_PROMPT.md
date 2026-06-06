# Claude Code Prompt

Kopiere diesen Prompt in Claude Code und lade den kompletten Ordner `fitnessworld_claude_package` hoch.

---

Du bist ein Senior Frontend Engineer, UI/UX Designer und Conversion-Stratege. Baue oder refactore die Website für Fitness World Studios anhand des hochgeladenen Pakets.

## Wichtigste Regeln

1. Verwende ausschließlich das echte Logo aus `assets/fitness-world-logo.svg`. Nicht nachbauen, nicht typografisch ersetzen, nicht verändern.
2. Verwende als Akzentfarbe exakt `#1A91D5`. Keine Neon-Grün-Akzente verwenden.
3. Die Seite soll hochwertig, modern, sportlich und vertrauenswürdig wirken.
4. Designrichtung: große Typografie, starke Bildflächen, dunkle Premium-Sektionen, klare weiße Inhaltsbereiche, blaue CTA- und Icon-Akzente.
5. Nutze alle Texte aus `pages/*.md` als echte Website-Texte. Nicht durch Lorem Ipsum ersetzen.
6. Falls echte Bilder fehlen, nutze semantische Platzhalterpfade wie `/images/studios/holdorf-hero.jpg` und setze aussagekräftige Alt-Texte.
7. Implementiere responsive/mobile-first. Mobile braucht Sticky CTA `Probetraining`.
8. Keine toten Links. Nutze die Routen aus `sitemap.json`.
9. Achte auf Barrierefreiheit: Labels, Fokuszustände, Kontrast, ARIA für Akkordeons.
10. SEO sauber umsetzen: pro Seite ein H1, Title, Meta Description, semantische Sections.

## Vorgehen

1. Analysiere zuerst das bestehende Projekt:
   - Framework erkennen: Next.js, Astro, WordPress Theme, Vite, plain HTML oder anderes.
   - Projektstruktur kurz zusammenfassen.
   - Danach die passende Umsetzungsstrategie wählen.

2. Lege ein Design-System an:
   - Farben aus `design-tokens.json`
   - Typografie
   - Buttons
   - Cards
   - Section Header
   - Formulare
   - Header/Footer

3. Baue globale Komponenten:
   - Header
   - Footer
   - HeroSection
   - SectionHeader
   - LocationCard
   - ServiceCard
   - TestimonialCard
   - PricingCard
   - FAQAccordion
   - LeadForm
   - CTAFooterBanner

4. Erstelle alle Seiten:
   - `/`
   - `/holdorf`
   - `/goldenstedt`
   - `/twistringen`
   - `/vechta`
   - `/kurse`
   - `/kurse/reha-sport`
   - `/kurse/personal-training`
   - `/kurse/boxen`
   - `/mitgliedschaft`
   - `/probetraining`
   - `/team`
   - `/jobs`
   - `/blog`
   - `/kontakt`
   - `/impressum`
   - `/datenschutz`
   - `/agb`
   - `/hausordnung`

5. Baue die Startseite zuerst vollständig:
   - Hero mit Claim `STÄRKER. GESÜNDER. GEMEINSAM.`
   - Marquee
   - Warum Fitness World?
   - Standortkarten
   - Leistungen
   - Community-Galerie
   - Zahlen
   - Testimonials
   - Final CTA

6. Baue Standortseiten als wiederverwendbares Template:
   - Hero
   - Key Facts
   - Intro
   - Ausstattung
   - Galerie
   - Kurse vor Ort
   - Trainer vor Ort
   - CTA

7. Baue Formularseiten:
   - Formular mit echten Labels
   - Datenschutz Checkbox
   - Success Message
   - Validierung

8. Falls WordPress/ACF genutzt wird:
   - Mache ACF-Feldgruppen logisch passend zu den Sektionen.
   - Bestehende Felder nicht kaputtmachen.
   - Wenn nötig, Templates so bauen, dass sie mit bestehenden ACF-Daten funktionieren.

9. Falls Next.js/Tailwind genutzt wird:
   - Komponenten in `/components` strukturieren.
   - Routen im App Router anlegen.
   - Design Tokens in Tailwind Config oder CSS Variables abbilden.
   - Metadata pro Page setzen.

## Qualitätskriterien

- Sieht aus wie eine moderne Multi-Location Fitness- und Gesundheitsmarke, nicht wie ein Standard-Fitnessstudio-Template.
- Das Logo ist exakt das hochgeladene Logo.
- Akzentfarbe ist exakt `#1A91D5`.
- Texte sind deutsch und direkt nutzbar.
- Alle Seiten sind responsiv.
- CTA `Kostenloses Probetraining` ist auf jeder relevanten Seite sichtbar.
- Navigation und Footer enthalten alle wichtigen Routen.
- Keine Lorem-Ipsum-Texte.

## Liefere am Ende

1. Kurze Zusammenfassung der geänderten Dateien.
2. Hinweise, welche Bilder noch ersetzt werden müssen.
3. Hinweise, welche rechtlichen Inhalte final geprüft werden müssen.
4. Kurze Liste der nächsten sinnvollen Optimierungen.
