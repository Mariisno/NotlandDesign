# NotlandDesign - Design System

Dette dokumentet beskriver designsystemet for NotlandDesign porteføljenettsiden.

## 🎨 Fargepalett

### Primære farger
- **Slate**: Base tekst og bakgrunner
  - `slate-900`: Overskrifter
  - `slate-600`: Brødtekst
  - `slate-400`: Muted tekst
  - `slate-50`: Lyse bakgrunner

### Accent-farger
- **Blue**: Primær accent (`blue-600`, `blue-100`, `blue-50`)
- **Purple**: Samarbeid og kreativitet (`purple-600`, `purple-100`)
- **Pink**: Design og passion (`pink-600`, `pink-100`)
- **Green**: Vekst og brukeradvokat (`green-600`, `green-100`)
- **Amber/Orange**: Energi og innovasjon (`amber-600`, `amber-100`)

## 📐 Spacing System

Konsistent spacing brukt i hele prosjektet:

```typescript
spacing = {
  tight: 'gap-2',    // 8px
  snug: 'gap-4',     // 16px
  normal: 'gap-6',   // 24px
  relaxed: 'gap-8',  // 32px
  loose: 'gap-12',   // 48px
}
```

### Section padding
- Standard: `py-24` (96px)
- Kompakt: `py-16` (64px)
- Ekstra luft: `py-32` (128px)

## 🔤 Typografi

### Fonter
- **Gabriela**: Logo og hovedoverskrifter
- **Inter**: Brødtekst og UI-elementer

### Hierarki
- `h1`: Store overskrifter (hero sections)
- `h2`: Seksjonsoverskrifter
- `h3`: Kortoverskrifter
- `h4`: Mindre overskrifter
- `p`: Brødtekst

### Font weights
- Normal: `400`
- Medium: `500`
- Semi Bold: `600`
- Bold: `700`

## 🎯 Icon størrelser

Standardiserte størrelser for ikoner:

```typescript
iconSizes = {
  xs: 'size-3',   // 12px
  sm: 'size-4',   // 16px
  md: 'size-5',   // 20px
  lg: 'size-6',   // 24px
  xl: 'size-8',   // 32px
  '2xl': 'size-10', // 40px
  '3xl': 'size-12', // 48px
}
```

**Retningslinjer:**
- Inline ikoner i badges/knapper: `size-4`
- Standard UI-ikoner: `size-6`
- Feature/card ikoner: `size-7` eller `size-8`
- Hero/stor ikon: `size-10` eller større

## 🎁 Border Radius

Konsistent bruk av avrundede hjørner:

```typescript
radius = {
  sm: 'rounded-lg',   // 8px
  md: 'rounded-xl',   // 12px
  lg: 'rounded-2xl',  // 16px
  xl: 'rounded-3xl',  // 24px
  full: 'rounded-full', // Helt rund
}
```

**Retningslinjer:**
- Badges/pills: `rounded-full`
- Kort: `rounded-2xl`
- IconBox: `rounded-xl`
- Knapper: `rounded-xl`

## 🧩 Komponenter

### IconBox
Farget boks med ikon - brukes gjennomgående for visuell konsistens.

```tsx
import { IconBox } from './components/ui/icon-box';

<IconBox 
  icon={<User className="size-6" />} 
  variant="blue" 
  size="md"
/>
```

**Størrelser:**
- `sm`: 40px (size-10)
- `md`: 48px (size-12) - default
- `lg`: 56px (size-14)

### PillBadge
Avrundet badge for tags og teknologier.

```tsx
import { PillBadge } from './components/ui/pill-badge';

<PillBadge variant="blue">Figma</PillBadge>
```

### InfoBadge
Gradient badge for seksjonsoverskrifter.

```tsx
import { InfoBadge } from './components/ui/pill-badge';

<InfoBadge icon={<Sparkles />}>My Projects</InfoBadge>
```

### HighlightCard
Gradient kort med ikon, tittel og beskrivelse.

```tsx
import { HighlightCard } from './components/ui/feature-card';

<HighlightCard
  icon={<Lightbulb className="size-6" />}
  title="Research-Driven"
  description="Deep understanding..."
  variant="blue"
/>
```

### FeatureCard
Hvit kort med skygge for features og ferdigheter.

```tsx
import { FeatureCard } from './components/ui/feature-card';

<FeatureCard
  icon={<Code className="size-6" />}
  title="UX Design"
  description="..."
  variant="blue"
/>
```

## 🎭 Animasjoner

### Motion presets
Bruker Framer Motion (motion/react):

```tsx
// Fade in with slide up
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}

// Staggered delays
transition={{ delay: index * 0.1 }}
```

### Hover-effekter
- Kort: `hover:shadow-xl transition-shadow`
- Ikoner: `hover:scale-110 transition-transform`
- Lenker: `hover:opacity-70 transition-opacity`

## 🌈 Gradienter

Standardiserte gradienter for hver farge:

- Blue: `from-blue-50 to-indigo-50`
- Purple: `from-purple-50 to-pink-50`
- Green: `from-green-50 to-emerald-50`
- Slate: `from-slate-50 to-blue-50`

## ✅ Best Practices

1. **Konsistens**: Bruk design tokens og gjenbrukbare komponenter
2. **Spacing**: Følg spacing-systemet for visuell harmoni
3. **Farger**: Bruk colorVariants fra design-tokens.ts
4. **Ikoner**: Konsistent størrelse basert på kontekst
5. **Animasjoner**: Subtile og meningsfulle - ikke overdrive
6. **Responsivitet**: Mobile-first, bruk md: og lg: breakpoints
7. **Accessibility**: God kontrast, focus-states, semantic HTML

## 📦 Importere design tokens

```typescript
import { 
  colorVariants, 
  iconSizes, 
  spacing, 
  radius 
} from './utils/design-tokens';
```

## 🔄 Vedlikehold

Når du legger til nye komponenter:
1. Vurder om det kan gjenbrukes
2. Bruk eksisterende design tokens
3. Følg naming conventions
4. Dokumenter props og varianter
5. Test responsivitet og accessibility
