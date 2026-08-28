'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Wraps children and applies a scroll-triggered reveal animation.
 */
export default function ScrollReveal({
  children,
  className = '',
  as: Tag = 'div',
  from = { opacity: 0, y: 40 },
  ease = 'power3.out',
  duration = 0.9,
  delay = 0,
  stagger = 0,
  start = 'top 85%',
  once = true,
  scrub = false,
  markers = false,
}) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (reduced) {
      if (stagger && ref.current.children.length) {
        gsap.set(ref.current.children, { opacity: 1, y: 0 })
      } else {
        gsap.set(ref.current, { opacity: 1, y: 0 })
      }
      return
    }

    const targets = stagger ? ref.current.children : ref.current

    const ctx = gsap.context(() => {
      const tl = gsap.fromTo(
        targets,
        { ...from },
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
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}

/**
 * Image reveal — clip-path mask revealing from bottom, with optional scale.
 */
export function ImageReveal({
  children,
  className = '',
  delay = 0,
  duration = 1,
  ease = 'expo.out',
}) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (reduced) {
      gsap.set(ref.current, { clipPath: 'inset(0% 0% 0% 0%)', scale: 1 })
      const img = ref.current.querySelector('img')
      if (img) gsap.set(img, { scale: 1 })
      return
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { clipPath: 'inset(0% 0% 100% 0%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: duration * 1.2,
          ease,
          delay,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
            once: true,
          },
        }
      )

      const img = ref.current.querySelector('img')
      if (img) {
        gsap.fromTo(
          img,
          { scale: 1.15 },
          {
            scale: 1,
            duration: duration * 1.4,
            ease,
            delay,
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 85%',
              once: true,
            },
          }
        )
      }
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      {children}
    </div>
  )
}
