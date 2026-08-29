'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/* ─── Data ─── */

const stats = [
  { value: '1+', label: 'Years in Business', icon: 'users' },
  { value: '3+', label: 'Projects Delivered', icon: 'briefcase' },
  { value: '98%', label: 'Client Satisfaction', icon: 'smile' },
  { value: 'Canberra', label: 'ACT, Australia', icon: 'pin' },
]

const values = [
  { title: 'Client First', description: 'We put your goals at the center of everything we do.', icon: 'users' },
  { title: 'Results Driven', description: 'We focus on measurable outcomes that drive growth.', icon: 'chart' },
  { title: 'Technical Excellence', description: 'We build fast, secure and scalable digital solutions.', icon: 'code' },
  { title: 'Transparent', description: 'Clear communication and honest advice, always.', icon: 'message' },
  { title: 'Long-Term Partner', description: 'We grow with you and support you over time.', icon: 'handshake' },
]

/* ─── Icons ─── */

function Icon({ name, className = 'w-5 h-5' }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }

  const icons = {
    users: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    briefcase: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M3 12h18" />
      </svg>
    ),
    smile: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <path d="M9 9h.01" /><path d="M15 9h.01" />
      </svg>
    ),
    pin: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    chart: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M4 19V5" /><path d="M4 19h16" /><path d="M8 15l3-3 3 2 5-7" />
      </svg>
    ),
    code: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M16 18l6-6-6-6" /><path d="M8 6l-6 6 6 6" />
      </svg>
    ),
    message: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    handshake: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M11 17l-2 2a2.8 2.8 0 0 1-4 0l-2-2" />
        <path d="M13 17l2 2a2.8 2.8 0 0 0 4 0l2-2" />
        <path d="M8 12l4-4 4 4" /><path d="M12 8v11" />
      </svg>
    ),
    arrow: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
      </svg>
    ),
    mail: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" />
      </svg>
    ),
    spark: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3z" />
        <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" />
      </svg>
    ),
  }

  return icons[name] || icons.spark
}

function SectionLabel({ children }) {
  return (
    <p className="inline-flex items-center gap-2 text-[#00C8F8] font-bold text-xs uppercase tracking-wide mb-4">
      <Icon name="spark" className="w-3.5 h-3.5" />
      {children}
    </p>
  )
}

/* ─── Visuals ─── */

function SydneyVisual() {
  return (
    <div className="relative h-[330px] rounded-[2rem] overflow-hidden border border-[#222222] shadow-sm bg-[#0A0A0A]">
      <svg viewBox="0 0 620 330" className="w-full h-full" fill="none">
        <rect width="620" height="330" fill="url(#sky)" />
        <path d="M0 225C120 200 190 230 295 205C410 178 510 210 620 188V330H0Z" fill="#555555" opacity="0.45" />
        <path d="M0 250C120 225 210 260 315 235C430 208 520 238 620 218V330H0Z" fill="#444444" opacity="0.35" />
        <path d="M115 205C138 140 175 115 212 205H115Z" fill="#111111" />
        <path d="M165 205C194 132 238 108 270 205H165Z" fill="#222222" />
        <path d="M218 205C250 150 290 132 320 205H218Z" fill="#111111" />
        <path d="M330 198C405 90 520 92 590 198" stroke="#222222" strokeWidth="8" />
        <path d="M340 198H600" stroke="#222222" strokeWidth="5" />
        {Array.from({ length: 9 }).map((_, i) => (
          <path key={i} d={`M${350 + i * 27} 198L${375 + i * 18} ${135 + Math.abs(i - 4) * 8}`} stroke="#222222" strokeWidth="2" opacity="0.75" />
        ))}
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="620" y2="330">
            <stop stopColor="#111111" /><stop offset="0.45" stopColor="#1A1A1A" /><stop offset="1" stopColor="#111111" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute left-8 bottom-8 bg-[#111111] rounded-3xl border border-[#222222] shadow-lg p-5 flex items-center gap-4">
        <div className="w-11 h-11 bg-[#1A1A1A] rounded-2xl flex items-center justify-center text-[#00C8F8]">
          <Icon name="pin" className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs text-[#9CA3AF]">Proudly based in</p>
          <p className="font-bold text-white">Canberra, Australia</p>
        </div>
      </div>
    </div>
  )
}

/* ─── Page ─── */

export default function AboutPage() {
  const heroRef = useRef(null)
  const heroImgRef = useRef(null)
  const statsRef = useRef(null)
  const storyRef = useRef(null)
  const storyImgRef = useRef(null)
  const valuesRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set('.about-animate', { opacity: 1, y: 0, x: 0, scale: 1 })
        return
      }

      // Hero timeline
      const heroTl = gsap.timeline()
      heroTl.fromTo('.about-badge', { opacity: 0, y: 16, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.6 })
      heroTl.fromTo('.about-heading-line', { opacity: 0, y: 40, clipPath: 'inset(0% 0% 100% 0%)' }, { opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)', duration: 0.8, stagger: 0.12 }, 0.1)
      heroTl.fromTo('.about-desc', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, 0.4)
      heroTl.fromTo('.about-cta', { opacity: 0, y: 16, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.1 }, 0.55)
      heroTl.fromTo(heroImgRef.current, { opacity: 0, scale: 0.9, y: 30 }, { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: 'power4.out' }, 0.2)

      // Stats reveal
      gsap.fromTo(statsRef.current, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: statsRef.current, start: 'top 85%', once: true },
      })

      // Story section
      gsap.fromTo(storyRef.current, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: storyRef.current, start: 'top 80%', once: true },
      })
      gsap.fromTo(storyImgRef.current, { opacity: 0, scale: 0.92, x: 30 }, {
        opacity: 1, scale: 1, x: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: storyImgRef.current, start: 'top 80%', once: true },
      })

      // Values stagger
      gsap.fromTo(valuesRef.current?.children || [], { opacity: 0, y: 40, scale: 0.95 }, {
        opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: valuesRef.current, start: 'top 85%', once: true },
      })

      // CTA
      gsap.fromTo(ctaRef.current, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: ctaRef.current, start: 'top 90%', once: true },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <main className="min-h-screen bg-[#000000]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-16 overflow-hidden bg-[#000000]">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#222222]/40 blur-3xl" />
          <div className="absolute top-1/2 -left-16 w-64 h-64 rounded-full bg-[#00AAFF]/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="about-badge">
                <SectionLabel>About Us</SectionLabel>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                <span className="about-heading-line block overflow-hidden">
                  <span className="block">We build digital solutions</span>
                </span>
                <span className="about-heading-line block overflow-hidden">
                  <span className="block">that drive{' '}
                    <span className="text-[#00C8F8]">real growth.</span>
                  </span>
                </span>
              </h1>

              <p className="about-desc text-[#9CA3AF] text-lg leading-relaxed max-w-xl mb-8">
                Crestwave is a digital agency based in Canberra, Australia. We
                partner with ambitious businesses to design, build and grow
                digital systems that create impact and deliver results.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/work"
                  className="about-cta inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F0F0F0] text-[#000000] font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#00C8F8]/20"
                >
                  Our Work
                  <Icon name="arrow" className="w-4 h-4" />
                </a>
                <a
                  href="/contact"
                  className="about-cta inline-flex items-center justify-center gap-2 bg-transparent border border-[#333333] text-white font-semibold px-7 py-3.5 rounded-xl hover:border-white hover:bg-transparent transition-all duration-300"
                >
                  <Icon name="mail" className="w-4 h-4" />
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Hero image slot — artwork to be added */}
            <div
              ref={heroImgRef}
              className="self-stretch w-full h-full min-h-64 sm:min-h-80 rounded-3xl bg-[#1A1A1A] border border-[#333333]"
            />
          </div>

          {/* Stats */}
          <div ref={statsRef} className="mt-16 bg-[#111111] border border-[#1A1A1A] rounded-3xl shadow-sm p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:divide-x divide-[#1A1A1A]">
              {stats.map((stat, index) => (
                <div key={stat.label} className="lg:pl-8 first:pl-0">
                  <div className="flex items-center gap-4">
                    <div className="w-13 h-13 bg-[#1A1A1A] rounded-2xl flex items-center justify-center text-[#00C8F8] shrink-0">
                      <Icon name={stat.icon} className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                      <p className="text-sm text-[#9CA3AF]">{stat.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="py-20 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
            <div ref={storyRef}>
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
                Built on purpose. <br />
                Driven by results.
              </h2>
              <div className="space-y-5 text-[#9CA3AF] leading-relaxed mb-8">
                <p>
                  We started Crestwave with a simple mission — to help
                  businesses succeed online through smart strategy, technical
                  excellence and meaningful partnerships.
                </p>
                <p>
                  From day one, we&apos;ve focused on building long-term
                  relationships and delivering digital solutions that actually
                  move the needle.
                </p>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#000000] border border-[#333333] text-[#D1D5DB] font-semibold px-6 py-3.5 rounded-xl hover:bg-[#1A1A1A] transition-all"
              >
                More About Us
                <Icon name="arrow" className="w-4 h-4" />
              </a>
            </div>
            <div ref={storyImgRef}>
              <SydneyVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>Our Values</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              The principles that guide our work
            </h2>
          </div>

          <div ref={valuesRef} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 mx-auto bg-[#1A1A1A] rounded-full flex items-center justify-center text-[#00C8F8] mb-5 transition-transform duration-300 hover:scale-110">
                  <Icon name={value.icon} className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed max-w-[170px] mx-auto">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 bg-[#000000] px-4">
        <div className="max-w-7xl mx-auto">
          <div
            ref={ctaRef}
            className="bg-[#1A1A1A] border border-[#222222] rounded-3xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-[#333333] transition-colors duration-500"
          >
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 bg-[#111111] rounded-2xl border border-[#222222] flex items-center justify-center text-[#00C8F8] shrink-0 shadow-sm">
                <Icon name="message" className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Ready to build something great together?
                </h3>
                <p className="text-[#9CA3AF]">
                  Let&apos;s create digital solutions that drive real results
                  for your business.
                </p>
              </div>
            </div>
            <a
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 bg-white hover:bg-[#F0F0F0] text-[#000000] font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#00C8F8]/20"
            >
              Book a Consultation
              <Icon name="arrow" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
