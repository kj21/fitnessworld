# Fitness World Studios Relaunch Package

Dieses Paket ist für die direkte Weitergabe an Claude Code gedacht. Es enthält Design-System, Seitenstruktur, echte deutsche Website-Texte, Komponentenlogik und einen ausführlichen Implementierungs-Prompt.

## Wichtige Vorgaben

- Das echte Logo liegt unter `assets/fitness-world-logo.svg` und zusätzlich als PNG unter `assets/fitness-world-logo.png`.
- Die Akzentfarbe aus dem Logo ist exakt: `#1A91D5`.
- Keine Neon-Grün-Ästhetik verwenden.
- Kein Fantasie-Logo erzeugen oder nachbauen.
- Logo unverändert einbinden.
- Designrichtung: hochwertig, modern, sportlich, lokal vertrauenswürdig.
- Inspiration: große Typografie, starke Bildflächen, klares Grid, dunkle Premium-Flächen, blaue Akzente.

## Ordnerstruktur

```txt
fitnessworld_claude_package/
├── 00_README.md
├── 01_DESIGN_SYSTEM.md
├── 02_SITE_STRUCTURE.md
├── 03_COMPONENT_SPEC.md
├── 04_IMPLEMENTATION_NOTES.md
├── 05_CLAUDE_CODE_PROMPT.md
├── design-tokens.json
├── sitemap.json
├── assets/
│   ├── fitness-world-logo.svg
│   └── fitness-world-logo.png
└── pages/
    ├── 01_home.md
    ├── 02_holdorf.md
    ├── 03_goldenstedt.md
    ├── 04_twistringen.md
    ├── 05_vechta.md
    ├── 06_kurse.md
    ├── 07_reha-sport.md
    ├── 08_personal-training.md
    ├── 09_boxen.md
    ├── 10_mitgliedschaft.md
    ├── 11_probetraining.md
    ├── 12_team.md
    ├── 13_jobs.md
    ├── 14_blog.md
    ├── 15_kontakt.md
    └── 16_legal.md
```

## Ziel

Claude Code soll daraus eine vollständige Website aufbauen oder ein bestehendes Projekt umbauen. Die Texte sind bewusst so geschrieben, dass sie direkt in die Seite übernommen werden können. Wo konkrete Studiobilder fehlen, sollen Platzhalter mit klaren Dateinamen verwendet werden, z. B. `/images/studios/holdorf-hero.jpg`.
