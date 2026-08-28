'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register once
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// ─── Reduced Motion ───

export function useReducedMotion() {
  if (typeof window === 'undefined') return false
  return (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

// ─── Reusable Eases ───

export const eases = {
  smooth: 'power3.out',
  snappy: 'power4.out',
  expo: 'expo.out',
  soft: 'power2.out',
  slow: 'power1.out',
}

// ─── Scroll-triggered Reveal ───

/**
 * Generic scroll reveal via GSAP ScrollTrigger.
 * Animates `from` properties to defaults (opacity: 1, y: 0, etc).
 */
export function useScrollReveal(ref, options = {}) {
  const {
    from = { opacity: 0, y: 40 },
    ease = eases.smooth,
    duration = 0.9,
    delay = 0,
    stagger = 0,
    start = 'top 85%',
    once = true,
    scrub = false,
    markers = false,
  } = options

  useEffect(() => {
    if (!ref.current) return
    if (useReducedMotion()) {
      gsap.set(ref.current, { opacity: 1, y: 0 })
      return
    }

    const targets = stagger ? ref.current.children : ref.current
    const tl = gsap.fromTo(
      targets,
      from,
      {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration,
        ease,
        delay,
        stagger: stagger || 0,
        scrollTrigger: {
          trigger: ref.current,
          start,
          once,
          scrub,
          markers,
        },
      }
    )

    return () => {
      tl.kill()
      if (tl.scrollTrigger) tl.scrollTrigger.kill()
    }
  }, [])
}

// ─── Parallax Effect ───

export function useParallax(ref, options = {}) {
  const { speed = 0.3, scrub = true } = options

  useEffect(() => {
    if (!ref.current) return
    if (useReducedMotion()) return

    const tl = gsap.fromTo(
      ref.current,
      { y: 0 },
      {
        y: () => window.innerHeight * speed * -0.5,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub,
        },
      }
    )

    return () => {
      tl.kill()
      if (tl.scrollTrigger) tl.scrollTrigger.kill()
    }
  }, [])
}

// ─── Scale Reveal ───

export function useScaleReveal(ref, options = {}) {
  const {
    from = 0.92,
    ease = eases.smooth,
    duration = 1,
    delay = 0,
    start = 'top 85%',
  } = options

  useEffect(() => {
    if (!ref.current) return
    if (useReducedMotion()) {
      gsap.set(ref.current, { opacity: 1, scale: 1 })
      return
    }

    const tl = gsap.fromTo(
      ref.current,
      { opacity: 0, scale: from },
      {
        opacity: 1,
        scale: 1,
        duration,
        ease,
        delay,
        scrollTrigger: {
          trigger: ref.current,
          start,
          once: true,
        },
      }
    )

    return () => {
      tl.kill()
      if (tl.scrollTrigger) tl.scrollTrigger.kill()
    }
  }, [])
}

// ─── Stagger Children Reveal ───

export function useStaggerReveal(parentRef, options = {}) {
  const {
    from = { opacity: 0, y: 30 },
    ease = eases.smooth,
    duration = 0.7,
    stagger = 0.08,
    delay = 0,
    start = 'top 85%',
    childSelector,
  } = options

  useEffect(() => {
    const el = parentRef.current
    if (!el) return
    if (useReducedMotion()) {
      const children = childSelector
        ? el.querySelectorAll(childSelector)
        : el.children
      gsap.set(children, { opacity: 1, y: 0, x: 0 })
      return
    }

    const targets = childSelector
      ? el.querySelectorAll(childSelector)
      : el.children

    if (!targets.length) return

    const tl = gsap.fromTo(
      targets,
      from,
      {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration,
        ease,
        delay,
        stagger,
        scrollTrigger: {
          trigger: el,
          start,
          once: true,
        },
      }
    )

    return () => {
      tl.kill()
      if (tl.scrollTrigger) tl.scrollTrigger.kill()
    }
  }, [])
}

// ─── Cleanup Helper ───

export function killScrollTriggers(ref) {
  if (!ref?.current) return
  const triggers = ScrollTrigger.getAll()
  triggers.forEach((t) => {
    if (ref.current.contains(t.trigger)) t.kill()
  })
}
