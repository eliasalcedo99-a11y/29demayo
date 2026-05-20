# DESIGN.md — 29 de Mayo

## Color Strategy

**Committed** — el granate `#A31515` carga el 40% de la identidad visual.
Crema `#F2EAE0` es el carácter del texto. Negro `#080608` es el escenario.

### Paleta

```
Background       #080608   (negro cálido casi puro, hint de hue rojiza)
Surface          #110D0E   (negro suave para tarjetas sobre el bg)
Amber/Granate    #A31515   (acento principal — emoción)
Amber-light      #C41E1E   (granate vivo para hover/glow)
Text             #F2EAE0   (crema cálida — descansa la vista)
Muted            #8A7A74   (taupe cálido — texto secundario)
Border           #231212   (borde oscuro cálido)
Bg-light         #F0EDE8   (papel — fragmentos del libro)
Text-light       #180A0A   (tinta oscura sobre papel)
```

OKLCH equivalentes (uso interno, mantener para nuevas variantes):
- amber `#A31515` ≈ `oklch(0.45 0.18 24)`
- bg `#080608` ≈ `oklch(0.08 0.005 30)`
- text `#F2EAE0` ≈ `oklch(0.94 0.012 65)`

### Reglas de uso

- **Granate** sólo en: CTAs primarios, acentos editoriales (eyebrows, líneas decorativas),
  estados hover, frases clímax. Nunca en bloques grandes de fondo.
- **Crema** para todo texto principal sobre fondo oscuro
- **Taupe muted** para subtítulos, footers, metadata
- **Papel** sólo en Fragmento (la "hoja del libro") — fuera del contexto literal del libro, prohibido
- **Grain SVG fractalNoise** opacity 0.04 fijo en `body::after`, z-index 9997

## Typography

```
Serif display   Cormorant Garamond  (titulares editoriales)
                fallback: Playfair Display, Georgia, serif
Italic literary Lora Italic         (citas, prosa del libro)
                fallback: Georgia, serif
Sans body       Outfit              (texto largo, párrafos)
                fallback: system-ui, sans-serif
Mono accent     DM Mono             (eyebrows, mono labels, contador)
                fallback: monospace
```

### Escala tipográfica

- Hero title: `clamp(3.5rem, 12vw, 10rem)` · letter-spacing -0.025em
- Section h2: `clamp(2rem, 4vw, 3rem)` · text-wrap balance
- Body: `1.05rem` · line-height 1.65 · max 65ch
- Eyebrow: `0.6rem-0.65rem` · letter-spacing 0.4em-0.55em · uppercase
- Cita (literaria): Lora italic `clamp(0.95rem, 1.8vw, 1.15rem)` · line-height 1.7

## Layout

- Container max-width: `7xl` (1280px) para secciones estándar, `4xl` (896px) para texto largo
- Padding sección: `py-28 md:py-36` (vertical generoso, ritmo editorial)
- Padding horizontal: `px-6` mobile, `px-8 md:px-16` desktop
- Grid SobreElLibro: `minmax(0,1fr) minmax(0,1.15fr)` con min-w-0 (fix overflow)
- Espaciado intra-sección: `space-y-6` para prosa, `gap-16 md:gap-24` para grids horizontales

## Components

### `.btn-amber` (primario)
- Granate sólido / borde granate
- Padding `px-7 py-3.5`
- Font DM Mono `0.72rem` letter-spacing 0.18em uppercase
- Hover: granate vivo + glow `0 0 32px rgba(163,21,21,0.4)`

### `.btn-amber-solid`
- Variante rellena del primario
- Para CTAs principales (Amazon)

### `.card-glass`
- Background gradient sutil rgba(255,255,255,0.025)
- Border 1px rgba(255,255,255,0.07)
- backdrop-filter blur 16px
- Shadow `0 8px 32px rgba(0,0,0,0.65)`
- Uso: cards de contenido sobre fondos oscuros

### `.paper`
- Background `#F0EDE8`
- Box-shadow profunda + ring 1px sutil
- Línea decorativa izquierda (granate 18% opacity) simulando margen de cuaderno
- Uso: SOLO Fragmento

### `.section-label` (eyebrow)
- Línea horizontal 1.25rem + texto DM Mono 0.6rem
- Color muted `#8A6A60`
- Letter-spacing 0.5em uppercase

### `.frag-btn-secondary`
- Background granate 12% opacity
- Border granate 35% opacity
- Hover: opacity 25% / 55%
- Uso: CTAs secundarios en Fragmento

### Sticky CTA (`#sticky-cta`)
- Cápsula granate fija bottom-right
- Aparece tras 30% scroll
- Se silencia (`body.sticky-mute`) en LaFecha + Fragmento

## Motion

- Easing por defecto: `power3.out` (entradas) · `power2.inOut` (transiciones)
- GSAP scrub: `1-2.5` para parallax (más alto = más lerdo)
- Duraciones: 0.7-1.1s entrada, 0.3s hover, 0.5-0.8s reveal
- Stagger: 0.1-0.18 entre elementos relacionados
- ScrollTrigger `once: true` para entradas (no re-disparar)
- `prefers-reduced-motion`: globalmente respetado en CSS

## Architecture

```
Landing principal (index)
  Splash (sessionStorage-gated)
  → Hero (video moto sunset, título kinetic, sticky-CTA-muted aquí)
  → LaFecha (5 actos narrativos, partículas ceniza, sticky-CTA-muted aquí)
  → Contador (días héroe + horas/minutos secundarios)
  → SobreElLibro (Three.js libro 3D + texto, sticky en desktop)
  → Timeline (scroll horizontal GSAP, 12 nodos del año 2023)
  → Fragmento (papel claro sobre fondo oscuro, prosa Lora)
  → DemoCTA (cápsula glass con icono libro)
  → SobreElias (foto B/N grayscale, easter egg overlay)
  → Reseñas (slider infinito GSAP)
  → Newsletter (Resend API)
  → Contacto (Netlify Forms)
  → Footer
  + StickyCTA fijo

Demo separado (/demo)
  Libro interactivo CSS 3D
  8 páginas reales del PDF: Prólogo, Cap 1, 2, 3
  Flip-leaf con transform-origin adaptado
  Pantalla final con dos CTAs Amazon
```

## Forbidden / Anti-patterns project-specific

- ❌ Colores plateados / azul corporativo (Gemini metió esto, se eliminó)
- ❌ Colores rosa `#E8627C` `#F28DA0` (versión previa del proyecto)
- ❌ Hero con stock photos genéricos
- ❌ Gradientes morados de SaaS
- ❌ Cards uniformes con icono+título+texto
- ❌ Tipografía Inter o de sistema
- ❌ Emojis como iconos (sólo SVG con viewBox)
- ❌ Stat heroes (1000+ lectores!)
- ❌ Modal first-thought (probar siempre inline antes)
- ❌ Tipografía centrada para prosa larga (matar)
- ❌ Side-stripe borders (border-left de color como acento)
- ❌ Gradient text (background-clip: text)
