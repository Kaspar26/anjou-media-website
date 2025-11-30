# Anjou Media Website

Statische Marketing-Website für Anjou Media - Analytics & AdTech für deutsche Verlage.

## 🚀 Quick Start

### Lokal entwickeln

```bash
# Repository klonen
git clone https://github.com/yourusername/anjou-media-website.git
cd anjou-media-website

# Lokalen Server starten
npx serve . -p 3000
# oder mit Python
python -m http.server 3000
```

Dann öffne http://localhost:3000

### Deployment auf Vercel

1. **GitHub Repository erstellen**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/anjou-media-website.git
   git push -u origin main
   ```

2. **Mit Vercel verbinden**
   - Gehe zu [vercel.com](https://vercel.com)
   - "Import Project" → wähle dein GitHub Repo
   - Framework: "Other" (static site)
   - Deploy!

3. **Domain konfigurieren**
   - In Vercel: Settings → Domains
   - Füge `anjou-media.com` hinzu
   - Konfiguriere DNS bei deinem Domain-Anbieter

## 📁 Projektstruktur

```
anjou-media-website/
├── index.html          # Hauptseite
├── impressum.html      # Impressum
├── datenschutz.html    # Datenschutzerklärung
├── css/
│   └── styles.css      # Alle Styles
├── js/
│   └── main.js         # JavaScript
├── assets/
│   └── favicon.svg     # Favicon
├── vercel.json         # Vercel-Konfiguration
└── package.json        # NPM-Konfiguration
```

## 🎨 Design System

### Farben (Anjou Green)
- Primary 900: `#14532d`
- Primary 700: `#166534` (Hauptfarbe)
- Primary 500: `#22c55e` (Akzent)
- Primary 100: `#dcfce7` (Hintergründe)

### Fonts
- **Inter** (Google Fonts) - Modern, lesbar, professionell

## ✏️ Anpassungen

### Content ändern
- Texte direkt in den HTML-Dateien bearbeiten
- Impressum: Adresse und USt-IdNr. ergänzen
- Hero-Statistiken: Zahlen in `index.html` anpassen

### Logo/Favicon ändern
- SVG-Logo in `assets/` ersetzen
- Inline-SVGs in den HTML-Dateien aktualisieren

### Kontaktformular
Das Formular ist aktuell nur Frontend. Für echte Funktionalität:

**Option A: Formspree**
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

**Option B: Eigener Endpoint**
- In `js/main.js` die `initDemoForm()` Funktion anpassen
- Fetch-Request an deinen Backend-Endpoint senden

## 🔧 Nächste Schritte

- [ ] Impressum mit echten Daten ausfüllen
- [ ] GitHub Repository erstellen
- [ ] Auf Vercel deployen
- [ ] Domain konfigurieren
- [ ] Kontaktformular-Backend einrichten
- [ ] Analytics (z.B. Plausible oder Simple Analytics) hinzufügen
- [ ] Demo-Bereich implementieren

## 📝 Lizenz

Proprietär - © 2024 Anjou Media
