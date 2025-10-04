# TemuGuiden 🛍️

Ærlige videoanmeldelser av Temu-produkter - en norsk anmeldelsesside med videoinnhold, filtrering og kjøpsguider.

## Om prosjektet

TemuGuiden er en norsk nettside som gir ærlige og detaljerte anmeldelser av produkter fra Temu. Siden fokuserer på:

- 📹 **Videoanmeldelser** - Innbyggede videoer som viser produktene i aksjon
- ⭐ **Ærlige vurderinger** - Objektive anmeldelser med for- og ulemper
- 🏷️ **Kategorisering** - Produkter organisert i kategorier for enkel navigering
- 🔍 **Filtrering** - Avanserte søke- og filtreringsmuligheter
- 💡 **Kjøpsguider** - Nyttige tips og guider for trygg handel på Temu
- 📱 **Responsiv design** - Optimalisert for alle enheter

## Teknologi

Prosjektet er bygget med moderne webutvikling-teknologier:

- **Next.js 15** - React-rammeverk med App Router
- **TypeScript** - Type-sikker JavaScript
- **Tailwind CSS** - Utility-first CSS-rammeverk
- **Shadcn/ui** - Moderne UI-komponenter
- **Lucide React** - Ikoner
- **Bun** - Rask pakkebehandler og runtime

## Komme i gang

### Forutsetninger

- [Node.js](https://nodejs.org/) (versjon 18 eller høyere)
- [Bun](https://bun.sh/) (anbefalt) eller npm/yarn

### Installasjon

1. **Klon repositoriet**
   ```bash
   git clone https://github.com/deanmartian/temuguiden.git
   cd temuguiden
   ```

2. **Installer avhengigheter**
   ```bash
   bun install
   # eller
   npm install
   ```

3. **Start utviklingsserveren**
   ```bash
   bun dev
   # eller
   npm run dev
   ```

4. **Åpne nettleseren**

   Gå til [http://localhost:3000](http://localhost:3000) for å se siden.

### Tilgjengelige kommandoer

```bash
# Start utviklingsserver
bun dev

# Bygg for produksjon
bun run build

# Start produksjonsserver
bun start

# Kjør linting og typesjekking
bun run lint

# Formater kode
bun run format
```

## Prosjektstruktur

```
src/
├── app/                    # Next.js App Router
│   ├── anmeldelser/       # Anmeldelsessider
│   ├── kategorier/        # Kategorisider
│   ├── tips/              # Kjøpsguider og tips
│   ├── om-oss/           # Om oss-side
│   └── kontakt/          # Kontaktside
├── components/            # React-komponenter
│   └── ui/               # UI-komponenter fra Shadcn
├── lib/                  # Utility-funksjoner og typer
└── data/                 # Datamodeller og seeddata
```

## Funksjoner

### 🎥 Videoanmeldelser
- Innbyggede YouTube-videoer
- Responsive videoplayer
- Automatisk lasting av miniatyrbilder

### ⭐ Vurderingssystem
- 5-stjerneskala
- Detaljerte for- og ulemper
- Sammenligning mellom produkter

### 🔍 Søk og filtrering
- Søk etter produktnavn eller kategori
- Filtrer etter stjerneverdi
- Sorter etter dato eller popularitet

### 📱 Responsiv design
- Optimalisert for mobil, tablet og desktop
- Rask lasting og god ytelse
- Tilgjengelig design

## Bidrag

Vi ønsker bidrag velkommen! Hvis du vil bidra til prosjektet:

1. Fork repositoriet
2. Opprett en feature branch (`git checkout -b feature/ny-funksjon`)
3. Commit endringene dine (`git commit -m 'Legg til ny funksjon'`)
4. Push til branchen (`git push origin feature/ny-funksjon`)
5. Åpne en Pull Request

## Lisens

Dette prosjektet er open source og tilgjengelig under [MIT License](LICENSE).

## Kontakt

For spørsmål eller tilbakemeldinger, besøk [kontaktsiden](https://temuguiden.no/kontakt) eller opprett en issue i dette repositoriet.

---

**Laget med ❤️ for norske forbrukere som vil gjøre smarte kjøp på Temu**
