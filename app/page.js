'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

/* ─── Data ─── */

const heroTags = ['Build', 'Optimise', 'Automate', 'Grow']

const heroStats = [
  { value: '100+', label: 'Businesses\nSupported' },
  { value: '4+', label: 'Years\nExperience' },
  { value: 'End-to-End', label: 'Digital\nSolutions' },
]

const industries = [
  { icon: 'sun', label: 'Solar & Energy' },
  { icon: 'hardhat', label: 'Construction' },
  { icon: 'home', label: 'Real Estate' },
  { icon: 'shield', label: 'Healthcare' },
  { icon: 'hospitality', label: 'Hospitality' },
  { icon: 'finance', label: 'Finance' },
]

const storyPoints = [
  {
    icon: 'pencil',
    title: 'Strategy First',
    desc: 'Every solution starts with your business goals',
  },
  {
    icon: 'message',
    title: 'Transparent Communication',
    desc: 'Clear updates at every step',
  },
  {
    icon: 'chart',
    title: 'Built for Growth',
    desc: 'Solutions designed to scale',
  },
  {
    icon: 'users',
    title: 'Long-Term Partnership',
    desc: "We're here beyond launch",
  },
]

const capabilities = [
  { icon: 'window', label: 'Websites' },
  { icon: 'crm', label: 'CRM' },
  { icon: 'search', label: 'SEO' },
  { icon: 'target', label: 'Digital Marketing' },
  { icon: 'social', label: 'Social Media' },
  { icon: 'pin', label: 'Google Business' },
  { icon: 'gears', label: 'Automation' },
  { icon: 'code', label: 'Custom Software' },
]

const services = [
  {
    icon: 'window',
    title: 'Website Development',
    desc: 'Custom websites that convert visitors into customers.',
  },
  {
    icon: 'users',
    title: 'CRM Development',
    desc: 'CRM systems built around your business.',
  },
  {
    icon: 'search',
    title: 'Technical SEO',
    desc: 'Get found by the right customers, rank higher.',
  },
  {
    icon: 'target',
    title: 'Digital Marketing',
    desc: 'Campaigns that turn traffic into real growth.',
  },
  {
    icon: 'social',
    title: 'Social Media',
    desc: 'Content and community that builds your brand.',
  },
  {
    icon: 'pin',
    title: 'Google Business',
    desc: 'Local visibility where customers are searching.',
  },
  {
    icon: 'gears',
    title: 'Business Automation',
    desc: 'Workflows that remove the manual work.',
  },
  {
    icon: 'code',
    title: 'Custom Software',
    desc: 'Bespoke platforms built for your operation.',
  },
]

const metrics = [
  { value: '9+', label: 'Years of Industry Experience' },
  { value: '3000+', label: 'Digital Assets Delivered' },
  { value: '50+', label: 'Awards and Certifications' },
  { value: '90%', label: 'Returning Client Rate' },
]

const differentiators = [
  {
    title: 'Agile Development Practices',
    body: 'We follow agile methodologies to ensure flexibility, faster delivery and measurable results at every stage of development.',
  },
  {
    title: 'Timely Project Delivery',
    body: 'Clear milestones and disciplined scope management mean your project ships when we said it would.',
  },
  {
    title: 'Transparent Communication',
    body: 'You get direct access to the people building your product, with honest updates at every step.',
  },
  {
    title: 'Scalable & Future-Ready Solutions',
    body: 'Everything we build is architected to grow with you, so today’s launch supports tomorrow’s scale.',
  },
]

const solutionTypes = [
  {
    number: '01',
    title: 'Enterprise Web Apps',
    desc: 'Scalable, secure and high-performance web applications for large organisations.',
  },
  {
    number: '02',
    title: 'Supply Chain Management Web Apps',
    desc: 'Connected systems for inventory, logistics and supplier visibility in one place.',
  },
  {
    number: '03',
    title: 'Web Portals',
    desc: 'Secure customer, partner and staff portals with role-based access and workflows.',
  },
  {
    number: '04',
    title: 'Customer-Facing Apps',
    desc: 'Fast, intuitive interfaces designed around how your customers actually behave.',
  },
  {
    number: '05',
    title: 'Online Web Services',
    desc: 'APIs and integrations that connect your platforms and third-party providers.',
  },
  {
    number: '06',
    title: 'Analytics Web Apps',
    desc: 'Dashboards and reporting that turn operational data into clear decisions.',
  },
]

const securityPillars = [
  {
    title: 'Customer Security',
    items: [
      'Personalized approach',
      'NDA and SLA guarantees',
      'Intellectual property policies',
    ],
  },
  {
    title: 'Data Security',
    items: [
      'Regulatory compliance',
      'Data encryption',
      'Security standards and protocols',
    ],
  },
  {
    title: 'App Security',
    items: ['Automated testing', 'Threat modeling', 'Attack blocking'],
  },
]

const successStories = [
  {
    tag: 'Solar & Energy',
    title: 'From Manual to Fully Automated Sales',
    metric: '+200% qualified leads',
  },
  {
    tag: 'Real Estate',
    title: 'A CRM That Scaled Their Operations',
    metric: '3x faster response time',
  },
  {
    tag: 'Hospitality',
    title: 'A High-Converting E-Commerce Experience',
    metric: '+150% online revenue',
  },
]

/* ─── Icons ─── */

function Icon({ name, className = 'w-5 h-5' }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }

  const icons = {
    arrow: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
      </svg>
    ),
    arrowLeft: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M19 12H5" />
        <path d="M12 19l-7-7 7-7" />
      </svg>
    ),
    calendar: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
    sun: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    ),
    hardhat: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M3 17a9 9 0 0 1 18 0z" />
        <path d="M9 17V7a3 3 0 0 1 6 0v10" />
        <path d="M2 20h20" />
      </svg>
    ),
    home: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M3 10l9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
      </svg>
    ),
    shield: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 9v6M9 12h6" />
      </svg>
    ),
    hospitality: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M4 4v6a4 4 0 0 0 8 0V4" />
        <path d="M8 14v6" />
        <path d="M18 4c-2 2-2 5 0 7v9" />
      </svg>
    ),
    finance: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M9.5 9.5a2.5 2.5 0 0 1 5 0c0 3-5 1.5-5 5a2.5 2.5 0 0 0 5 0" />
      </svg>
    ),
    pencil: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
      </svg>
    ),
    message: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    chart: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M4 19V5M4 19h16" />
        <path d="M8 15l3-3 3 2 5-7" />
      </svg>
    ),
    users: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      </svg>
    ),
    window: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 9h20" />
      </svg>
    ),
    crm: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M12 2l9 5v10l-9 5-9-5V7z" />
        <circle cx="12" cy="11" r="2.5" />
      </svg>
    ),
    search: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20l-3.5-3.5" />
      </svg>
    ),
    target: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="1" />
      </svg>
    ),
    social: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="M8.6 10.6l6.8-4.2M8.6 13.4l6.8 4.2" />
      </svg>
    ),
    pin: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    gears: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
      </svg>
    ),
    code: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M16 18l6-6-6-6" />
        <path d="M8 6l-6 6 6 6" />
      </svg>
    ),
  }

  return icons[name] || icons.arrow
}

/* ─── Shared bits ─── */

function Eyebrow({ children }) {
  return (
    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#00C8F8] mb-3">
      {children}
    </p>
  )
}

function TextLink({ children, href = '#' }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 text-sm font-semibold text-[#00C8F8] hover:gap-3 transition-all"
    >
      {children}
      <Icon name="arrow" className="w-4 h-4" />
    </a>
  )
}

function PrimaryButton({ children, href = '/contact' }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F0F0F0] text-[#0A0A0A] font-semibold px-6 py-3 rounded-lg text-sm transition-all duration-200 hover:-translate-y-[1px] hover:shadow-lg"
    >
      {children}
      <Icon name="arrow" className="w-4 h-4" />
    </a>
  )
}

function GhostButton({ children, href = '/contact' }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 bg-[#111111] border border-[#333333] text-white font-semibold px-6 py-3 rounded-lg text-sm hover:bg-[#1A1A1A] transition-all duration-200"
    >
      <Icon name="calendar" className="w-4 h-4" />
      {children}
    </a>
  )
}

/* ─── Page ─── */

export default function Home() {
  const [slide, setSlide] = useState(0)
  const [activeDiff, setActiveDiff] = useState(0)
  const [openSolution, setOpenSolution] = useState(0)

  const perView = 3
  const maxSlide = services.length - perView
  const visibleServices = services.slice(slide, slide + perView)

  return (
    <main className="min-h-screen bg-[#000000]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-16 overflow-hidden bg-[#000000]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[38rem] h-[38rem] rounded-full bg-[#0A4A8F]/25 blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-[#00AAFF]/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
                {heroTags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#6B7280]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-5">
                Digital
                <br />
                Solutions for
                <br />
                <span className="text-[#00C8F8]">Real Impact</span>
              </h1>

              <p className="text-[#9CA3AF] leading-relaxed max-w-md mb-8">
                Websites, CRM, marketing and automation — built around the way
                your business works.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-12">
                <PrimaryButton>Start a Project</PrimaryButton>
                <GhostButton>Book a Consultation</GhostButton>
              </div>

              <div className="flex flex-wrap gap-x-10 gap-y-6">
                {heroStats.map((stat) => (
                  <div key={stat.value}>
                    <p className="text-2xl font-extrabold text-white mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs text-[#6B7280] leading-tight whitespace-pre-line">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero image slot — artwork to be added */}
            <div className="self-stretch w-full h-full min-h-72 sm:min-h-96 rounded-3xl bg-[#1A1A1A] border border-[#333333]" />
          </div>
        </div>
      </section>

      {/* ── Industry trust bar ── */}
      <section className="py-8 bg-[#0A0A0A] border-y border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.16em] text-[#6B7280] mb-6">
            Trusted by businesses across industries
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
            {industries.map((industry) => (
              <div
                key={industry.label}
                className="flex items-center gap-2.5 text-sm text-[#D1D5DB]"
              >
                <Icon
                  name={industry.icon}
                  className="w-4 h-4 text-[#9CA3AF]"
                />
                {industry.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-16 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 items-center">
            <div>
              <Eyebrow>Our Story</Eyebrow>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
                More than
                <br />
                a service provider.
              </h2>
              <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6">
                We&apos;re a team of builders, problem-solvers and long-term
                partners, helping businesses turn ideas into real-world impact.
              </p>
              <TextLink href="/about">Learn more about us</TextLink>
            </div>

            {/* Image slot — artwork to be added */}
            <div className="min-h-56 lg:min-h-64 rounded-2xl bg-[#1A1A1A] border border-[#333333]" />

            <div className="space-y-5">
              {storyPoints.map((point) => (
                <div key={point.title} className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-full bg-[#111111] border border-[#222222] flex items-center justify-center text-[#9CA3AF] shrink-0">
                    <Icon name={point.icon} className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-white mb-0.5">
                      {point.title}
                    </p>
                    <p className="text-xs text-[#6B7280] leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="py-16 bg-[#0A0A0A] border-y border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1fr_auto] gap-8 items-end mb-12">
            <div>
              <Eyebrow>What We Do</Eyebrow>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Everything you need,
                <br />
                all in one place.
              </h2>
            </div>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              From websites to CRM to automation — we deliver complete digital
              solutions designed for real business impact.
            </p>
            <div className="lg:pb-1">
              <TextLink href="/services">Explore all services</TextLink>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 divide-x divide-[#1A1A1A] border-y border-[#1A1A1A]">
            {capabilities.map((capability) => (
              <div
                key={capability.label}
                className="flex flex-col items-center justify-start gap-3 py-7 px-2 text-center hover:bg-[#111111] transition-colors"
              >
                <Icon
                  name={capability.icon}
                  className="w-6 h-6 text-[#D1D5DB]"
                />
                <p className="text-xs text-[#9CA3AF] leading-tight">
                  {capability.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services carousel ── */}
      <section className="py-16 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
            <div>
              <p className="flex items-center gap-3 text-xs font-bold text-[#6B7280] mb-6">
                <span className="text-white">
                  {String(slide + 1).padStart(2, '0')}
                </span>
                <span className="w-6 h-px bg-[#333333]" />
                <span>{String(services.length).padStart(2, '0')}</span>
              </p>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
                Employ End-to-End Custom Digital Solutions
              </h2>
              <p className="text-sm text-[#9CA3AF] leading-relaxed mb-8">
                As a trusted digital partner, we offer a comprehensive range of
                services to help your business grow, operate smarter and stay
                ahead.
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => setSlide((s) => Math.max(0, s - 1))}
                  disabled={slide === 0}
                  aria-label="Previous services"
                  className="cursor-pointer w-11 h-11 rounded-full border border-[#333333] flex items-center justify-center text-white hover:bg-[#1A1A1A] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <Icon name="arrowLeft" className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSlide((s) => Math.min(maxSlide, s + 1))}
                  disabled={slide >= maxSlide}
                  aria-label="Next services"
                  className="cursor-pointer w-11 h-11 rounded-full border border-[#333333] flex items-center justify-center text-white hover:bg-[#1A1A1A] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <Icon name="arrow" className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <AnimatePresence mode="popLayout">
                {visibleServices.map((service, i) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className={`flex flex-col rounded-2xl p-6 border transition-colors ${
                      i === 0
                        ? 'bg-[#1D6FE8] border-[#1D6FE8]'
                        : 'bg-[#111111] border-[#222222] hover:border-[#333333]'
                    }`}
                  >
                    <span
                      className={`w-11 h-11 rounded-xl flex items-center justify-center mb-6 ${
                        i === 0
                          ? 'bg-white/15 text-white'
                          : 'bg-[#1A1A1A] text-[#9CA3AF]'
                      }`}
                    >
                      <Icon name={service.icon} className="w-5 h-5" />
                    </span>

                    <h3 className="text-lg font-bold text-white leading-snug mb-2">
                      {service.title}
                    </h3>
                    <p
                      className={`text-xs leading-relaxed mb-8 ${
                        i === 0 ? 'text-white/80' : 'text-[#9CA3AF]'
                      }`}
                    >
                      {service.desc}
                    </p>

                    <a
                      href="/services"
                      className={`mt-auto inline-flex items-center gap-2 text-xs font-bold hover:gap-3 transition-all ${
                        i === 0 ? 'text-white' : 'text-[#D1D5DB]'
                      }`}
                    >
                      Explore Service
                      <Icon name="arrow" className="w-3.5 h-3.5" />
                    </a>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── Metrics band ── */}
      <section className="pb-16 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F4F4F5] rounded-2xl px-8 py-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {metrics.map((metric) => (
                <div key={metric.label} className="text-center">
                  <p className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-3">
                    {metric.value}
                  </p>
                  <div className="w-16 h-px bg-[#CBD5E1] mx-auto mb-3" />
                  <p className="text-xs text-[#64748B] leading-tight">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white border border-[#CBD5E1] text-[#0F172A] font-semibold px-6 py-3 rounded-lg text-sm hover:bg-[#0F172A] hover:text-white hover:border-[#0F172A] transition-all duration-200"
              >
                Discuss Your Project Requirements
                <Icon name="arrow" className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose ── */}
      <section className="py-16 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
            Why Choose Crestwave
            <br />
            as Your Digital Partner?
          </h2>
          <p className="text-sm text-[#9CA3AF] leading-relaxed max-w-2xl mb-12">
            From initial consultation to the final product, our attention to
            detail and commitment to excellence is unparalleled. We combine
            cutting-edge technologies with creative solutions to deliver results
            that exceed expectations.
          </p>

          <div className="grid lg:grid-cols-[0.7fr_1fr_0.8fr] gap-10 items-center">
            <div className="space-y-1">
              {differentiators.map((item, i) => (
                <button
                  key={item.title}
                  onClick={() => setActiveDiff(i)}
                  className={`cursor-pointer w-full flex items-start gap-3 text-left py-3 transition-colors ${
                    activeDiff === i ? 'text-white' : 'text-[#6B7280]'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full mt-1.5 shrink-0 transition-colors ${
                      activeDiff === i ? 'bg-[#00C8F8]' : 'bg-[#333333]'
                    }`}
                  />
                  <span className="text-sm font-semibold leading-snug">
                    {item.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Image slot — artwork to be added */}
            <div className="min-h-56 lg:min-h-64 rounded-2xl bg-[#1A1A1A] border border-[#333333]" />

            <AnimatePresence mode="wait">
              <motion.p
                key={activeDiff}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="text-sm text-[#D1D5DB] leading-relaxed"
              >
                {differentiators[activeDiff].body}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── Solution types ── */}
      <section className="py-16 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
                Types of Custom Digital Solutions We Build
              </h2>
              <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6">
                We specialize in building a wide range of digital products
                tailored to unique business needs.
              </p>
              <TextLink href="/services">Explore all solutions</TextLink>
            </div>

            <div>
              {solutionTypes.map((solution, i) => {
                const isOpen = openSolution === i
                return (
                  <div
                    key={solution.number}
                    className="border-b border-[#1A1A1A]"
                  >
                    <button
                      onClick={() => setOpenSolution(isOpen ? -1 : i)}
                      className="cursor-pointer w-full flex items-center gap-5 py-4 text-left"
                    >
                      <span className="text-xs font-bold text-[#6B7280] shrink-0 tabular-nums">
                        ( {solution.number} )
                      </span>
                      <span
                        className={`flex-1 text-sm font-bold transition-colors ${
                          isOpen ? 'text-white' : 'text-[#D1D5DB]'
                        }`}
                      >
                        {solution.title}
                      </span>
                      <span
                        className={`shrink-0 text-lg leading-none ${
                          isOpen ? 'text-[#00C8F8]' : 'text-[#6B7280]'
                        }`}
                      >
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22 }}
                          className="overflow-hidden"
                        >
                          <p className="text-xs text-[#9CA3AF] leading-relaxed pl-[5.25rem] pr-8 pb-4">
                            {solution.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Web security ── */}
      <section className="py-16 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
              Building Resilience with Optimized
              <br />
              Web Security Practices
            </h2>
            <p className="text-sm text-[#9CA3AF] leading-relaxed max-w-2xl mx-auto">
              We prioritize security throughout every stage of the software
              product lifecycle to safeguard your data and maintain the
              integrity of your application.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {securityPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-[#0A0A0A] border border-[#222222] rounded-2xl p-7 hover:border-[#333333] transition-colors"
              >
                <h3 className="text-base font-bold text-white mb-4">
                  {pillar.title}
                </h3>
                <ul className="space-y-2">
                  {pillar.items.map((item) => (
                    <li key={item} className="text-sm text-[#9CA3AF]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1D6FE8] hover:bg-[#1A5FCC] text-white font-semibold px-6 py-3 rounded-lg text-sm transition-all duration-200 hover:-translate-y-[1px]"
            >
              Work with Us
              <Icon name="arrow" className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Success stories ── */}
      <section className="py-16 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-10 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
                Our Success Stories
              </h2>
              <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6">
                Real businesses. Real impact. Explore how we&apos;ve helped
                organisations grow with technology.
              </p>
              <TextLink href="/work">View all case studies</TextLink>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {successStories.map((story) => (
                <article
                  key={story.title}
                  className="flex flex-col bg-[#0A0A0A] border border-[#222222] rounded-2xl p-5 hover:border-[#333333] transition-colors group"
                >
                  <span className="inline-flex self-start px-2.5 py-1 rounded-md bg-[#1A1A1A] text-[9px] font-bold uppercase tracking-wider text-[#9CA3AF] mb-4">
                    {story.tag}
                  </span>

                  <h3 className="text-sm font-bold text-white leading-snug mb-8">
                    {story.title}
                  </h3>

                  <div className="mt-auto flex items-center justify-between gap-3 pt-4 border-t border-[#1A1A1A]">
                    <p className="text-xs font-bold text-[#00C8F8]">
                      {story.metric}
                    </p>
                    <span className="w-7 h-7 rounded-full bg-[#1A1A1A] flex items-center justify-center text-[#9CA3AF] group-hover:text-[#00C8F8] transition-colors shrink-0">
                      <Icon name="arrow" className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="pb-16 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-[#1D6FE8]/40 bg-[#0B1220] px-8 sm:px-10 py-10">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -bottom-24 left-1/3 w-96 h-96 rounded-full bg-[#1D6FE8]/30 blur-3xl" />
              <div className="absolute -top-20 -right-10 w-72 h-72 rounded-full bg-[#7C3AED]/20 blur-3xl" />
            </div>

            <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <div className="inline-flex items-center bg-white/10 border border-white/15 text-white text-[10px] font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-[0.14em]">
                  Let&apos;s Build Together
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-2">
                  Ready to take your business
                  <br />
                  to the next level?
                </h2>
                <p className="text-sm text-[#C7D2E5]">
                  Get a free consultation and a custom plan for your goals.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <PrimaryButton>Start a Project</PrimaryButton>
                <GhostButton>Book a Consultation</GhostButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
