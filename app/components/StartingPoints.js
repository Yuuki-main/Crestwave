'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const points = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Website Build',
    bestFor: 'New websites or replatforming',
    includes: 'Design, development, CMS setup',
    timeline: '4–8 weeks',
    outcome: 'A strong conversion-ready website',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
    title: 'SEO & Performance',
    bestFor: 'Existing websites needing growth',
    includes: 'Technical SEO and speed optimisation',
    timeline: '2–6 weeks',
    outcome: 'Better rankings and faster load times',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    title: 'Growth System',
    bestFor: 'Businesses ready to scale leads',
    includes: 'Analytics, CRM flows, conversion planning',
    timeline: '4–10 weeks',
    outcome: 'More measurable growth',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: 'Ongoing Support',
    bestFor: 'Teams needing continuous improvement',
    includes: 'Updates, maintenance, reporting',
    timeline: 'Monthly',
    outcome: 'A stable and improving website',
  },
]

export default function StartingPoints() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set(titleRef.current, { opacity: 1, y: 0 })
        gsap.set(cardsRef.current?.children || [], { opacity: 1, y: 0 })
        return
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 30%',
          scrub: 0.5,
        },
      })

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
      )

      if (cardsRef.current) {
        tl.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 50, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
          },
          '-=0.3'
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Choose the Right Starting Point
          </h2>
        </div>

        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {points.map((p) => (
            <div
              key={p.title}
              className="sp-card bg-[#111111] rounded-2xl p-6 border border-[#222222] hover:shadow-lg hover:border-[#333333] hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer"
            >
              <div className="w-11 h-11 bg-[#1A1A1A] rounded-xl flex items-center justify-center text-[#00C8F8] mb-5 group-hover:scale-110 transition-transform duration-300">
                {p.icon}
              </div>
              <h3 className="font-bold text-white text-lg mb-4">{p.title}</h3>
              <div className="space-y-3 flex-1">
                <div>
                  <p className="text-xs font-semibold text-[#D1D5DB] uppercase tracking-wide mb-1">
                    Best for:
                  </p>
                  <p className="text-sm text-[#E5E7EB]">{p.bestFor}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#D1D5DB] uppercase tracking-wide mb-1">
                    Includes:
                  </p>
                  <p className="text-sm text-[#E5E7EB]">{p.includes}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#D1D5DB] uppercase tracking-wide mb-1">
                    Timeline:
                  </p>
                  <p className="text-sm text-[#E5E7EB]">{p.timeline}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#D1D5DB] uppercase tracking-wide mb-1">
                    Outcome:
                  </p>
                  <p className="text-sm text-[#E5E7EB]">{p.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
