'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function CTABanner() {
  const ref = useRef(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set(ref.current, { opacity: 1, y: 0 })
        return
      }

      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 90%',
            once: true,
          },
        }
      )
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className="bg-[#0A0A0A] border border-[#222222] rounded-3xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-[#333333] transition-colors duration-500"
        >
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 bg-[#1A1A1A] rounded-2xl flex items-center justify-center text-[#00C8F8] shrink-0 transition-transform duration-300 hover:scale-110">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                Not sure which service you need?
              </h3>
              <p className="text-[#9CA3AF] text-sm">
                Tell us your current website goal and we&apos;ll recommend the
                right service mix.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 bg-white hover:bg-[#F0F0F0] text-[#000000] font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#00C8F8]/20 hover:-translate-y-0.5"
          >
            Find My Service Mix
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
