'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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
    title: 'Precision Plumbing',
    category: 'CRM Websites',
    description:
      'CRM-connected website with advanced enquiry routing and conversion-focused landing pages.',
    theme: 'dark',
    visual: 'plumbing',
  },
  {
    title: 'GreenScape Australia',
    category: 'CMS Platforms',
    description:
      'Scalable CMS platform with custom content modules for a growing team.',
    theme: 'green',
    visual: 'landscape',
  },
  {
    title: 'Living Space Co.',
    category: 'E-commerce',
    description:
      'E-commerce experience designed to increase AOV and streamline checkout.',
    theme: 'warm',
    visual: 'commerce',
  },
  {
    title: 'Apex Fitness',
    category: 'SEO & Performance',
    description:
      'Core Web Vitals optimisation that improved speed and user experience.',
    theme: 'black',
    visual: 'fitness',
  },
  {
    title: 'Data Driven Co.',
    category: 'SEO & Performance',
    description:
      'Analytics setup, KPI tracking and custom dashboards for clarity.',
    theme: 'data',
    visual: 'analytics',
  },
  {
    title: 'WorkFlow Hub',
    category: 'Integrations',
    description:
      'Custom integrations connecting CRM, payments and marketing platforms.',
    theme: 'blue',
    visual: 'workflow',
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

/* ─── Hero Illustration ─── */

function WorkIllustration() {
  return (
    <div className="relative w-full max-w-md h-64">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.15 }}
        className="absolute left-16 top-8 w-64 h-44 rounded-3xl bg-[#111111]/80 border border-[#222222] shadow-sm"
      >
        <svg viewBox="0 0 260 180" className="w-full h-full" fill="none">
          <rect x="26" y="24" width="208" height="132" rx="18" fill="#111111" />
          <circle cx="47" cy="44" r="4" fill="#444444" />
          <circle cx="61" cy="44" r="4" fill="#555555" />
          <circle cx="75" cy="44" r="4" fill="#333333" />
          <path
            d="M48 126C72 98 88 114 110 86C134 55 154 102 180 72C196 54 209 58 220 44"
            stroke="#00C8F8"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path d="M48 137h172" stroke="#1A1A1A" strokeWidth="2" />
          <path
            d="M58 70h40"
            stroke="#1A1A1A"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M58 88h28"
            stroke="#1A1A1A"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-8 top-28 w-24 h-24 bg-[#111111] rounded-3xl shadow-lg border border-[#222222] flex items-center justify-center"
      >
        <div className="relative w-14 h-14 rounded-full bg-[#1A1A1A]">
          <div className="absolute inset-2 rounded-full border-8 border-[#333333]" />
          <div className="absolute inset-2 rounded-full border-8 border-[#00C8F8] border-r-transparent border-b-transparent" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-4 bottom-8 w-24 h-20 bg-[#111111] rounded-3xl shadow-lg border border-[#222222] flex items-center justify-center text-[#00C8F8]"
      >
        <Icon name="image" className="w-10 h-10" />
      </motion.div>

      <svg
        viewBox="0 0 420 260"
        className="absolute inset-0 w-full h-full pointer-events-none"
        fill="none"
      >
        <path
          d="M70 135C95 72 165 45 224 68C290 94 323 42 374 70"
          stroke="#333333"
          strokeWidth="2"
          strokeDasharray="5 7"
        />
        <path
          d="M68 176C152 235 279 218 350 145"
          stroke="#333333"
          strokeWidth="2"
          strokeDasharray="5 7"
        />
      </svg>
    </div>
  )
}

/* ─── Project Visuals ─── */

function ProjectVisual({ project }) {
  const base =
    'relative h-48 overflow-hidden rounded-t-3xl border-b border-[#1A1A1A]'

  if (project.theme === 'dark') {
    return (
      <div className={`${base} bg-[#000000] text-white`}>
        <div className="absolute inset-0 bg-[#000000]" />
        <div className="absolute inset-0 opacity-30">
          <svg viewBox="0 0 500 220" className="w-full h-full" fill="none">
            <path
              d="M0 160C90 80 185 190 280 110C355 48 420 70 500 30"
              stroke="#00C8F8"
              strokeWidth="3"
            />
            <path
              d="M0 190C120 120 200 210 310 140C390 88 445 96 500 70"
              stroke="#444444"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="relative p-7">
          <p className="text-xs text-[#00C8F8] font-semibold mb-5">Crestwave</p>
          <h3 className="text-2xl font-bold leading-tight max-w-xs">
            Precision Plumbing <br /> Services You Can Trust
          </h3>
          <div className="mt-7 flex gap-3">
            <span className="px-4 py-2 rounded-full bg-[#00C8F8] text-xs font-semibold">
              Book Service
            </span>
            <span className="px-4 py-2 rounded-full border border-[#333333] text-xs">
              View Services
            </span>
          </div>
        </div>
        <div className="absolute right-7 top-10 w-28 bg-[#000000] rounded-2xl p-4 shadow-xl">
          <div className="space-y-2">
            <div className="h-2 rounded-full bg-[#222222]" />
            <div className="h-2 rounded-full bg-[#161616]" />
            <div className="h-9 rounded-xl bg-[#1A1A1A] mt-4" />
            <div className="h-8 rounded-xl bg-[#00C8F8]" />
          </div>
        </div>
      </div>
    )
  }

  if (project.theme === 'green') {
    return (
      <div className={`${base} bg-[#0A0A0A]`}>
        <div className="absolute inset-0 bg-linear-to-br from-[#0A0A0A] to-[#0D0D0D]" />
        <div className="relative p-7">
          <p className="text-xs text-green-700 font-semibold mb-5">
            GreenScape
          </p>
          <h3 className="text-2xl font-bold text-white leading-tight max-w-xs">
            Australia&apos;s Trusted <br /> Landscape Experts
          </h3>
          <div className="mt-7 flex gap-3">
            <span className="px-4 py-2 rounded-full bg-[#00C8F8] text-white text-xs font-semibold">
              Get Quote
            </span>
            <span className="px-4 py-2 rounded-full bg-[#000000] text-[#E5E7EB] text-xs">
              Services
            </span>
          </div>
        </div>
        <div className="absolute right-6 bottom-6 w-40 h-28 rounded-2xl bg-[#000000] shadow-lg border border-green-100 overflow-hidden">
          <div className="h-16 bg-linear-to-br from-[#00C8F8]/20 to-[#00C8F8]/40" />
          <div className="p-3 space-y-2">
            <div className="h-2 rounded-full bg-green-100" />
            <div className="h-2 rounded-full bg-[#161616]" />
          </div>
        </div>
      </div>
    )
  }

  if (project.theme === 'warm') {
    return (
      <div className={`${base} bg-[#0A0A0A]`}>
        <div className="absolute inset-0 bg-linear-to-br from-[#0A0A0A] to-[#0D0D0D]" />
        <div className="relative p-7">
          <p className="text-xs text-stone-600 font-semibold mb-5">LivSpace</p>
          <h3 className="text-2xl font-bold text-white leading-tight max-w-xs">
            Quality Furniture, <br /> Designed for Life
          </h3>
          <p className="text-xs text-[#9CA3AF] max-w-xs mt-3">
            Discover better living with curated interiors.
          </p>
        </div>
        <div className="absolute right-5 bottom-5 flex gap-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="w-20 h-24 bg-[#111111] rounded-2xl shadow-md p-2"
            >
              <div className="h-12 rounded-xl bg-stone-200 mb-2" />
              <div className="h-2 rounded-full bg-stone-200" />
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (project.theme === 'black') {
    return (
      <div className={`${base} bg-black text-white`}>
        <div className="absolute inset-0 bg-[#000000]" />
        <div className="relative p-7">
          <p className="text-xs text-[#00C8F8] font-semibold mb-5">
            Apex Fitness
          </p>
          <h3 className="text-2xl font-bold leading-tight">
            Performance <br /> That Drives Results
          </h3>
          <div className="mt-8 flex gap-3">
            {[96, 100, 96, 100].map((score, i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-full border-2 border-green-400 flex items-center justify-center text-xs font-bold"
              >
                {score}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute right-6 top-9 w-40 h-28 bg-[#0A0A0A] rounded-2xl border border-[#333333] p-4">
          <svg viewBox="0 0 140 80" className="w-full h-full" fill="none">
            <path
              d="M5 60C25 20 45 70 70 38C95 8 105 55 135 20"
              stroke="#00C8F8"
              strokeWidth="3"
            />
            <path d="M5 70h130" stroke="#222222" />
          </svg>
        </div>
      </div>
    )
  }

  if (project.theme === 'data') {
    return (
      <div className={`${base} bg-[#000000] text-white`}>
        <div className="absolute inset-0 bg-[#000000]" />
        <div className="relative p-7">
          <p className="text-xs text-cyan-300 font-semibold mb-5">
            Data Driven Co.
          </p>
          <h3 className="text-2xl font-bold leading-tight max-w-xs">
            Data That Drives <br /> Smarter Decisions
          </h3>
        </div>
        <div className="absolute right-6 bottom-6 w-44 h-28 bg-[#0A0A0A]/80 rounded-2xl border border-[#333333] p-4">
          <div className="flex items-end gap-2 h-full">
            {[35, 52, 44, 70, 58, 86, 74].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-md bg-cyan-400"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`${base} bg-[#000000] text-white`}>
      <div className="absolute inset-0 bg-[#000000]" />
      <div className="relative p-7">
        <p className="text-xs text-[#D1D5DB] font-semibold mb-5">Crestwave</p>
        <h3 className="text-2xl font-bold leading-tight max-w-xs">
          All Your Tools. <br /> One Seamless Platform.
        </h3>
        <p className="text-xs text-[#D1D5DB] max-w-xs mt-3">
          Connect your systems and simplify your workflows.
        </p>
      </div>
      <div className="absolute right-7 bottom-6 w-44 bg-[#000000] rounded-2xl p-4 shadow-xl">
        <div className="grid grid-cols-4 gap-2">
          {['S', 'X', 'H', 'P'].map((item) => (
            <div
              key={item}
              className="w-8 h-8 rounded-full bg-[#1A1A1A] text-[#00C8F8] text-xs font-bold flex items-center justify-center"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
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
      <ProjectVisual project={project} />

      <div className="p-6">
        <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-[#1A1A1A] text-[#D1D5DB] text-[11px] font-bold uppercase tracking-wide border border-[#222222] mb-3">
          {project.category}
        </span>

        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>

        <p className="text-sm text-[#9CA3AF] leading-relaxed mb-5">
          {project.description}
        </p>

        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#00C8F8] group-hover:gap-3 transition-all"
        >
          View Case Study
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
        <div className="rounded-xl overflow-hidden h-24">
          <ProjectVisual project={project} />
        </div>

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
            href="#"
            className="inline-flex items-center gap-1 text-xs font-bold text-[#00C8F8]"
          >
            View Case Study
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

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All Projects') return projects
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

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
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="inline-flex items-center gap-2 bg-[#1A1A1A] border border-[#333333] text-[#D1D5DB] text-xs font-semibold px-3 py-1.5 rounded-full mb-5 uppercase"
              >
                <Icon name="grid" className="w-3 h-3" />
                Our Work
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5"
              >
                Digital Solutions. <br />
                Real Business <span className="text-[#00C8F8]">Impact.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="text-[#9CA3AF] text-lg leading-relaxed max-w-xl"
              >
                We partner with businesses to design, build and grow digital
                systems that drive leads, improve performance and create
                long-term value.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <WorkIllustration />
            </motion.div>
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
            <div className="hidden lg:grid lg:grid-cols-3 gap-7">
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

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mt-10 flex justify-center"
          >
            <button className="cursor-pointer inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-[#333333] bg-[#000000] text-[#D1D5DB] font-semibold text-sm hover:bg-[#1A1A1A] hover:border-[#444444] transition-all">
              Load More Projects
              <Icon name="chevron" className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-10 px-4 bg-[#000000]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="bg-[#1A1A1A] border border-[#222222] rounded-3xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6"
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
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
