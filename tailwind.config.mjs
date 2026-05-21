/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        /* ── Noir literario + Granate ──────────────────────────── */
        bg:           'var(--color-bg)',
        surface:      'var(--color-surface)',
        amber:        'var(--color-amber)',
        'amber-light':'var(--color-amber-light)',
        text:         'var(--color-text)',
        muted:        'var(--color-muted)',
        border:       'var(--color-border)',
        'bg-light':   'var(--color-bg-light)',
        'text-light': 'var(--color-text-light)',
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
