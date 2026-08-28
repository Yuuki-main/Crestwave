'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'

export default function TextReveal({
  children,
  as: Tag = 'h1',
  className = '',
  delay = 0,
  stagger = 0.03,
  duration = 0.6,
  ease = 'power3.out',
  from = { opacity: 0, y: 30 },
  once = false,
}) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (reduced) {
      gsap.set(ref.current.querySelectorAll('.reveal-word'), {
        opacity: 1,
        y: 0,
      })
      return
    }

    const words = ref.current.querySelectorAll('.reveal-word')
    if (!words.length) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        from,
        {
          opacity: 1,
          y: 0,
          duration,
          ease,
          delay,
          stagger,
        }
      )
    }, ref)

    return () => ctx.revert()
  }, [])

  // Split text into words wrapped in spans
  const renderWords = () => {
    if (typeof children !== 'string') return children
    return children.split(' ').map((word, i) => (
      <span
        key={i}
        className="reveal-word inline-block"
        style={{ display: 'inline-block' }}
      >
        {word}
        {i < children.split(' ').length - 1 ? '\u00A0' : ''}
      </span>
    ))
  }

  return (
    <Tag ref={ref} className={className}>
      {renderWords()}
    </Tag>
  )
}

// ─── Line Reveal (lines split by \n or <br>) ───

export function LineReveal({
  children,
  as: Tag = 'h1',
  className = '',
  delay = 0,
  stagger = 0.15,
  duration = 0.8,
  ease = 'expo.out',
}) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (reduced) {
      gsap.set(ref.current.querySelectorAll('.reveal-line'), {
        opacity: 1,
        y: 0,
        clipPath: 'inset(0% 0% 0% 0%)',
      })
      return
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current.querySelectorAll('.reveal-line'),
        { opacity: 0, y: 40, clipPath: 'inset(0% 0% 100% 0%)' },
        {
          opacity: 1,
          y: 0,
          clipPath: 'inset(0% 0% 0% 0%)',
          duration,
          ease,
          delay,
          stagger,
        }
      )
    }, ref)

    return () => ctx.revert()
  }, [])

  if (typeof children !== 'string') {
    return (
      <Tag ref={ref} className={className}>
        {children}
      </Tag>
    )
  }

  const lines = children.split('\n')

  return (
    <Tag ref={ref} className={className}>
      {lines.map((line, i) => (
        <span
          key={i}
          className="reveal-line block overflow-hidden"
          style={{ display: 'block', overflow: 'hidden' }}
        >
          <span className="block">{line || '\u00A0'}</span>
        </span>
      ))}
    </Tag>
  )
}
