'use client'

import { useMemo, useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/* ─── Data ─── */

const filters = [
  'All Projects',
  'CRM Websites',
  'CMS Platforms',
  'E-commerce',
  'SEO & Performance',
  'Integrations',
]

const projects = [
  {
    title: "Som's Energy",
    category: 'CRM Websites',
    description:
      'Solar and battery storage site for a Melbourne installer, built around free-consultation enquiries and $0-upfront system offers.',
    url: 'https://somsenergy.com.au/',
  },
  {
    title: 'Aussie Energreen',
    category: 'CMS Platforms',
    description:
      'VEU-accredited provider site covering solar, batteries, heat pumps and air conditioning across Victoria.',
    url: 'https://aussieenergreen.com.au/',
  },
  {
    title: 'Moving Easy',
    category: 'Integrations',
    description:
      'Moving marketplace connecting New Zealand customers with verified carriers, returning comparable quotes in minutes.',
    url: 'https://movingeasy.co.nz/',
  },
  {
    title: 'Averon Electricals',
    category: 'SEO & Performance',
    description:
      'Adelaide solar and electrical site with fixed transparent pricing, rebate guidance and 40+ supported equipment brands.',
    url: 'https://averon-web.vercel.app/',
  },
  {
    title: 'Nexon Energy',
    category: 'E-commerce',
    description:
      'Product catalogue for a solar distributor — panels, hybrid inverters and LiFePO4 storage, with a system sizing calculator.',
    url: 'https://www.nexonandco.com.au/',
  },
  {
    title: 'CrestWave Energy',
    category: 'CRM Websites',
    description:
      'Solar and energy-efficiency site for Victorian homes and businesses, with CEC-approved installs and warranty-led messaging.',
    url: 'https://www.crestwaveenergy.com.au/',
  },
]

/* ─── Icons ─── */

function Icon({ name, className = 'w-5 h-5' }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }

  const icons = {
    grid: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
    chart: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="M7 15l4-4 3 3 5-7" />
      </svg>
    ),
    image: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="8.5" cy="10" r="1.5" />
        <path d="M21 16l-5-5-4 4-2-2-5 5" />
      </svg>
    ),
    message: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    arrow: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
      </svg>
    ),
    chevron: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <polyline points="6 9 12 15 18 9" />
      </svg>
    ),
  }

  return icons[name] || icons.grid
}

/* ─── Components ─── */

function FilterTabs({ activeFilter, setActiveFilter }) {
  return (
    <div className="bg-[#000000] border border-[#222222] rounded-2xl p-2 flex gap-2 overflow-x-auto">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`shrink-0 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
            activeFilter === filter
              ? 'bg-[#1A1A1A] text-[#D1D5DB] border border-[#333333]'
              : 'text-[#9CA3AF] hover:text-white hover:bg-[#0A0A0A]'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}

function MobileFilter({ activeFilter, setActiveFilter }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="lg:hidden relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between bg-[#000000] border border-[#222222] rounded-2xl px-4 py-3 text-sm font-semibold text-[#D1D5DB]"
      >
        {activeFilter}
        <Icon
          name="chevron"
          className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 8 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="absolute z-20 left-0 right-0 top-full bg-[#000000] border border-[#222222] rounded-2xl shadow-lg p-2"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter)
                  setOpen(false)
                }}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  activeFilter === filter
                    ? 'bg-[#1A1A1A] text-[#D1D5DB]'
                    : 'text-[#9CA3AF] hover:bg-[#0A0A0A]'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="bg-[#000000] border border-[#222222] rounded-3xl overflow-hidden shadow-sm hover:shadow-lg hover:border-[#333333] transition-all duration-300 group"
    >
      {/* Card image slot — artwork to be added */}
      <div className="h-48 rounded-t-3xl bg-[#1A1A1A] border-b border-[#333333]" />

      <div className="p-6">
        <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-[#1A1A1A] text-[#D1D5DB] text-[11px] font-bold uppercase tracking-wide border border-[#222222] mb-3">
          {project.category}
        </span>

        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>

        <p className="text-sm text-[#9CA3AF] leading-relaxed mb-5">
          {project.description}
        </p>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#00C8F8] group-hover:gap-3 transition-all"
        >
          Visit Site
          <Icon name="arrow" className="w-4 h-4" />
        </a>
      </div>
    </motion.article>
  )
}

function MobileProjectCard({ project, index }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32, delay: index * 0.04 }}
      className="bg-[#000000] border border-[#222222] rounded-2xl p-3 shadow-sm"
    >
      <div className="grid grid-cols-[112px_1fr] gap-4">
        <div className="h-24 rounded-xl bg-[#1A1A1A] border border-[#333333]" />

        <div className="min-w-0">
          <span className="inline-flex px-2 py-0.5 rounded-md bg-[#1A1A1A] text-[#D1D5DB] text-[9px] font-bold uppercase mb-1.5">
            {project.category}
          </span>

          <h3 className="font-bold text-white text-sm leading-tight mb-1">
            {project.title}
          </h3>

          <p className="text-xs text-[#9CA3AF] leading-relaxed line-clamp-2 mb-2">
            {project.description}
          </p>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-bold text-[#00C8F8]"
          >
            Visit Site
            <Icon name="arrow" className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.article>
  )
}

/* ─── Page ─── */

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('All Projects')
  const heroRef = useRef(null)
  const projectsRef = useRef(null)
  const ctaRef = useRef(null)

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All Projects') return projects
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (reduced) return

      // Hero timeline
      const tl = gsap.timeline()
      tl.fromTo('.work-badge', { opacity: 0, y: 16, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.6 })
      tl.fromTo('.work-heading-line', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 }, 0.1)
      tl.fromTo('.work-desc', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, 0.4)

      // Projects stagger — scrub-tied for smooth scroll sync
      if (projectsRef.current) {
        gsap.fromTo(projectsRef.current.children, { opacity: 0, y: 40, scale: 0.97 }, {
          opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.06, ease: 'power3.out',
          scrollTrigger: { trigger: projectsRef.current, start: 'top 85%', end: 'bottom 35%', scrub: 0.5 },
        })
      }

      // CTA reveal
      if (ctaRef.current) {
        gsap.fromTo(ctaRef.current, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: ctaRef.current, start: 'top 90%', once: true },
        })
      }
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="work-badge inline-flex items-center gap-2 bg-[#1A1A1A] border border-[#333333] text-[#D1D5DB] text-xs font-semibold px-3 py-1.5 rounded-full mb-5 uppercase">
                <Icon name="grid" className="w-3 h-3" />
                Our Work
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
                <span className="work-heading-line block">Digital Solutions.</span>
                <span className="work-heading-line block">Real Business{' '}
                  <span className="text-[#00C8F8]">Impact.</span>
                </span>
              </h1>

              <p className="work-desc text-[#9CA3AF] text-lg leading-relaxed max-w-xl">
                We partner with businesses to design, build and grow digital
                systems that drive leads, improve performance and create
                long-term value.
              </p>
            </div>

            {/* Hero image slot — artwork to be added */}
            <div className="self-stretch w-full h-full min-h-64 sm:min-h-80 rounded-3xl bg-[#1A1A1A] border border-[#333333]" />
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section className="py-16 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:block mb-8">
            <FilterTabs
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
          </div>

          <div className="lg:hidden mb-6">
            <MobileFilter
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
          </div>

          <AnimatePresence mode="popLayout">
            <div ref={projectsRef} className="hidden lg:grid lg:grid-cols-3 gap-7">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </AnimatePresence>

          <AnimatePresence mode="popLayout">
            <div className="lg:hidden space-y-4">
              {filteredProjects.map((project, index) => (
                <MobileProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </AnimatePresence>

          <div className="mt-10 flex justify-center">
            <button className="cursor-pointer inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-[#333333] bg-[#000000] text-[#D1D5DB] font-semibold text-sm hover:bg-[#1A1A1A] hover:border-[#444444] transition-all">
              Load More Projects
              <Icon name="chevron" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-10 px-4 bg-[#000000]">
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
                <h3 className="text-2xl font-bold text-[#D1D5DB] mb-2">
                  Have a project in mind?
                </h3>
                <p className="text-[#9CA3AF]">
                  Let&apos;s build something that drives real results for your
                  business.
                </p>
              </div>
            </div>

            <a
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 bg-[#000000] hover:bg-[#000000] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#00C8F8]/20"
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
