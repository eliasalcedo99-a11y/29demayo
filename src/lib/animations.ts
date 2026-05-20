/**
 * Cinematic animation utilities for 29 de Mayo
 *
 * Core technique: masked line reveals — text slides up from behind
 * an overflow:hidden container (translateY 110% → 0).
 * This is what separates Awwwards sites from average ones.
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ── Types ─────────────────────────────────────────────────────
interface RevealOptions {
  delay?:    number;
  duration?: number;
  stagger?:  number;
  start?:    string;
  ease?:     string;
}

// ── 1. MASKED LINE REVEAL ─────────────────────────────────────
// Wraps each element in an overflow:hidden div so text slides UP
// from behind it — the signature Awwwards reveal technique.
export function maskedReveal(
  selector: string | HTMLElement[],
  options: RevealOptions = {}
) {
  const {
    delay    = 0,
    duration = 0.9,
    stagger  = 0.12,
    start    = 'top 82%',
    ease     = 'power4.out',
  } = options;

  const elements = typeof selector === 'string'
    ? gsap.utils.toArray<HTMLElement>(selector)
    : selector;

  if (!elements.length) return;

  // Wrap each element in a clip container
  elements.forEach((el) => {
    if (el.parentElement?.classList.contains('mask-wrap')) return;
    const wrap = document.createElement('div');
    wrap.className = 'mask-wrap';
    wrap.style.cssText = 'overflow:hidden; display:block;';
    el.parentNode?.insertBefore(wrap, el);
    wrap.appendChild(el);
    gsap.set(el, { yPercent: 110, opacity: 1 });
  });

  // Find the first element's parent to use as trigger
  const triggerEl = (elements[0] as HTMLElement).closest('.mask-wrap')?.parentElement
    ?? elements[0];

  gsap.to(elements, {
    yPercent: 0,
    duration,
    ease,
    delay,
    stagger,
    scrollTrigger: {
      trigger: triggerEl,
      start,
      once: true,
    },
  });
}

// ── 2. CHAR-BY-CHAR KINETIC TITLE ─────────────────────────────
// Splits a heading into individual characters with dramatic stagger.
export function kineticTitle(
  el: HTMLElement | null,
  options: { delay?: number; duration?: number; from?: gsap.TweenVars } = {}
) {
  if (!el) return;

  const {
    delay    = 0,
    duration = 0.06,
    from     = { yPercent: 120, opacity: 0, rotate: 4 },
  } = options;

  const text = el.textContent ?? '';
  el.innerHTML = text
    .split('')
    .map((ch) =>
      ch === ' '
        ? '<span class="char" style="display:inline-block;">&nbsp;</span>'
        : `<span class="char" style="display:inline-block; overflow:hidden;"><span class="char-inner" style="display:inline-block;">${ch}</span></span>`
    )
    .join('');

  gsap.set('.char-inner', from);
  gsap.to('.char-inner', {
    yPercent: 0,
    opacity:  1,
    rotate:   0,
    duration,
    stagger:  0.04,
    ease:     'power4.out',
    delay,
  });
}

// ── 3. MAGNETIC BUTTON ────────────────────────────────────────
// Buttons (and links) attract toward the cursor within a radius.
export function magneticEffect(selector = '.btn-amber, .btn-magnetic') {
  const buttons = document.querySelectorAll<HTMLElement>(selector);
  if (!window.matchMedia('(pointer: fine)').matches) return;

  buttons.forEach((btn) => {
    const strength = 0.35;

    btn.addEventListener('mousemove', (e) => {
      const rect   = btn.getBoundingClientRect();
      const cx     = rect.left + rect.width  / 2;
      const cy     = rect.top  + rect.height / 2;
      const dx     = (e.clientX - cx) * strength;
      const dy     = (e.clientY - cy) * strength;
      gsap.to(btn, { x: dx, y: dy, duration: 0.4, ease: 'power3.out' });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.4)' });
    });
  });
}

// ── 4. HORIZONTAL WIPE SECTION REVEAL ─────────────────────────
// A thin amber line sweeps left→right when a section enters viewport.
export function sectionWipe(sectionSelector: string) {
  const sections = gsap.utils.toArray<HTMLElement>(sectionSelector);

  sections.forEach((section) => {
    const line = document.createElement('div');
    line.style.cssText = `
      position: absolute;
      top: 0; left: 0;
      width: 0; height: 2px;
      background: var(--color-amber);
      z-index: 5;
      pointer-events: none;
    `;
    if (getComputedStyle(section).position === 'static') {
      section.style.position = 'relative';
    }
    section.prepend(line);

    gsap.to(line, {
      width: '100%',
      duration: 1.2,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        once: true,
      },
      onComplete: () => {
        gsap.to(line, { opacity: 0, duration: 0.4, delay: 0.2 });
      },
    });
  });
}

// ── 5. COUNTER ANIMATION ──────────────────────────────────────
export function animateCounter(
  el: HTMLElement,
  target: number,
  duration = 2,
  formatter?: (n: number) => string
) {
  const obj = { v: 0 };
  gsap.to(obj, {
    v: target,
    duration,
    ease: 'power3.out',
    onUpdate: () => {
      el.textContent = formatter
        ? formatter(Math.floor(obj.v))
        : Math.floor(obj.v).toLocaleString('es-ES');
    },
  });
}

// ── 6. SMOOTH INERTIA SCROLL (lightweight) ───────────────────
// Adds lerp-based scroll smoothing without a full library.
export function smoothScroll() {
  let current  = window.scrollY;
  let target   = window.scrollY;
  let rafId: number;
  const ease   = 0.085;

  function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }

  // On mobile or reduced-motion: skip
  if (
    window.matchMedia('(max-width: 768px)').matches ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) return;

  window.addEventListener('scroll', () => { target = window.scrollY; }, { passive: true });

  function tick() {
    current = lerp(current, target, ease);
    if (Math.abs(target - current) > 0.1) {
      rafId = requestAnimationFrame(tick);
    }
  }

  window.addEventListener('scroll', () => {
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(tick);
  }, { passive: true });
}

// ── 7. AMBIENT PARALLAX ───────────────────────────────────────
// Subtle Y-shift on decorative elements (book cover, author photo).
export function ambientParallax(selector: string, depth = 0.08) {
  if (window.matchMedia('(max-width: 768px)').matches) return;

  const elements = gsap.utils.toArray<HTMLElement>(selector);
  elements.forEach((el) => {
    gsap.to(el, {
      yPercent: -100 * depth,
      ease: 'none',
      scrollTrigger: {
        trigger: el.parentElement ?? el,
        start: 'top bottom',
        end:   'bottom top',
        scrub: 1.5,
      },
    });
  });
}
