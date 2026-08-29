'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'

const pillars = [
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Build',
    desc: 'Websites, CMS platforms and CRM-connected systems',
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: 'Optimise',
    desc: 'SEO, UX and performance improvements',
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    title: 'Scale',
    desc: 'Analytics, growth strategy and conversion systems',
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: 'Support',
    desc: 'Maintenance, iteration and long-term support',
  },
]

export default function HeroSection() {
  const sectionRef = useRef(null)
  const pillarsRef = useRef(null)

  useEffect(() => {
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (reduced) return

    const ctx = gsap.context(() => {
      // Main timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Badge
      tl.fromTo(
        '.hero-badge-pill',
        { opacity: 0, y: 16, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6 },
        0,
      )

      // Heading lines
      tl.fromTo(
        '.hero-heading-line',
        { opacity: 0, y: 40, clipPath: 'inset(0% 0% 100% 0%)' },
        {
          opacity: 1,
          y: 0,
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 0.8,
          stagger: 0.12,
        },
        0.1,
      )

      // Paragraph
      tl.fromTo(
        '.hero-description',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        0.45,
      )

      // CTA buttons
      tl.fromTo(
        '.hero-cta',
        { opacity: 0, y: 16, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.1 },
        0.6,
      )

      // Background blobs parallax — single timeline, single ScrollTrigger
      const blobTL = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      })

      blobTL.to('.hero-blob-1', { y: -80, x: -40, ease: 'none' }, 0)
      blobTL.to('.hero-blob-2', { y: 60, x: 30, ease: 'none' }, 0)

      // Pillars stagger in
      if (pillarsRef.current) {
        gsap.fromTo(
          pillarsRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: pillarsRef.current,
              start: 'top 90%',
              once: true,
            },
          },
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen pt-16 overflow-hidden bg-[#000000]"
    >
      {/* Background blobs with parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hero-blob-1 absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#222222]/40 blur-3xl" />
        <div className="hero-blob-2 absolute top-1/2 -left-20 w-72 h-72 rounded-full bg-[#00AAFF]/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-[#1A1A1A]/50 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* <div className="relative bg-[url('/crest_home_bg.png')] bg-cover bg-center"> */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
            {/* Left content */}
            <div>
              {/* Badge */}
              <div className="hero-badge-pill inline-flex items-center gap-2 bg-[#1A1A1A] border border-[#333333] text-[#D1D5DB] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00C8F8]" />
                Services Page
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                <span className="hero-heading-line block overflow-hidden">
                  <span className="block">Services Built Around</span>
                </span>
                <span className="hero-heading-line block overflow-hidden text-[#00C8F8]">
                  <span className="block">Digital Growth</span>
                </span>
              </h1>

              {/* Description */}
              <p className="hero-description text-[#9CA3AF] text-lg leading-relaxed mb-8 max-w-xl">
                From CRM websites and CMS platforms to technical SEO,
                performance optimisation and analytics, Crestwave helps
                businesses build digital systems that are faster, clearer and
                easier to scale.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#services"
                  className="hero-cta inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F0F0F0] text-[#000000] font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#00C8F8]/20 hover:-translate-y-0.5"
                >
                  Explore Services
                </a>

                <a
                  href="#contact"
                  className="hero-cta inline-flex items-center justify-center gap-2 bg-transparent hover:border-white text-white font-semibold px-6 py-3.5 rounded-xl border border-[#333333] transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                >
                  Book a Consultation
                </a>
              </div>
            </div>

            {/* Hero image slot — artwork to be added */}
            <div className="self-stretch w-full h-full min-h-64 sm:min-h-80 rounded-3xl bg-[#1A1A1A] border border-[#333333]" />
          </div>

          {/* Pillars row */}
          <div
            ref={pillarsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pb-8"
          >
            {pillars.map((p) => (
              <div
                key={p.title}
                className="bg-[#111111]/40 backdrop-blur-sm rounded-2xl p-5 border border-[#333333] hover:bg-[#161616] hover:shadow-md hover:border-[#444444] transition-all duration-300"
              >
                <div className="w-9 h-9 bg-[#1A1A1A] rounded-xl flex items-center justify-center text-[#00C8F8] mb-3">
                  {p.icon}
                </div>

                <p className="font-semibold text-white text-sm mb-1">
                  {p.title}
                </p>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
