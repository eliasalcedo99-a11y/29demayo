/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        /* ── Noir literario + Granate ──────────────────────────── */
        bg:           '#080608',
        surface:      '#110D0E',
        amber:        '#A31515',   // granate profundo
        'amber-light':'#C41E1E',   // crimson vivo
        text:         '#F2EAE0',   // crema cálida
        muted:        '#8A7A74',   // taupe cálido
        border:       '#231212',   // borde oscuro cálido
        'bg-light':   '#F0EDE8',   // papel
        'text-light': '#180A0A',   // tinta oscura sobre papel
      },
      fontFamily: {
        serif:  ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans:   ['"Outfit"', 'system-ui', 'sans-serif'],
        italic: ['"Lora"', 'Georgia', 'serif'],   // itálica literaria (body quotes)
        mono:   ['"DM Mono"', 'monospace'],
      },
      fontSize: {
        'fluid-hero':    'clamp(3.5rem, 12vw, 10rem)',
        'fluid-date':    'clamp(5rem, 22vw, 18rem)',
        'fluid-section': 'clamp(2rem, 5vw, 4rem)',
      },
      letterSpacing: {
        widest2: '0.5em',
        widest3: '1em',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
