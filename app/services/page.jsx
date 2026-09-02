'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

/* ─── Data ─── */

const heroStats = [
  { value: '100+', label: 'Businesses Supported' },
  { value: '4+ Years', label: 'Industry Experience' },
  { value: 'All-in-One', label: 'Growth Partner' },
]

const filters = [
  'All',
  'Websites & CRM',
  'Marketing & SEO',
  'Social & Local',
  'Automation',
  'Combos',
]

/* Featured rows — 01 / 02 */
const featured = [
  {
    number: '01',
    eyebrow: 'Website Development',
    group: 'Websites & CRM',
    title: 'Websites Built to Grow Your Business',
    desc: 'Custom, fast, responsive and conversion-focused websites designed around your business goals.',
    items: [
      'Business Website',
      'Corporate Website',
      'E-Commerce Website',
      'Solar & Energy Website',
      'Finance & Real Estate Website',
      'Healthcare Website',
      'Restaurant & Hospitality Website',
      'Landing Pages & Custom Web Apps',
      'Website Redesign & Maintenance',
    ],
    price: '$1,500',
    cta: 'Build My Website',
    tint: 'bg-white',
  },
  {
    number: '02',
    eyebrow: 'CRM Development',
    group: 'Websites & CRM',
    title: 'Custom CRM Built Around Your Business',
    desc: 'CRM systems tailored to your sales, operations and customer service workflows.',
    items: [
      'Energy & Solar CRM – Specialist',
      'Sales CRM',
      'Lead Management CRM',
      'Customer Service CRM',
      'Finance CRM',
      'Real Estate CRM',
      'Healthcare CRM',
      'Service Business CRM',
      'Custom Enterprise CRM',
    ],
    price: '$3,000',
    cta: 'Build My CRM',
    tint: 'bg-[#EFF6FF]',
  },
]

/* Energy CRM — 03, its own layout */
const energy = {
  number: '03',
  eyebrow: 'Energy Industry CRM',
  group: 'Websites & CRM',
  title: 'Built for Australian Energy Businesses',
  desc: 'A complete CRM to manage the entire journey — from lead to after-sales.',
  products: [
    { icon: 'sun', label: 'Solar', tint: 'bg-[#FEF3C7] text-[#B45309]' },
    { icon: 'battery', label: 'Battery', tint: 'bg-[#DCFCE7] text-[#15803D]' },
    {
      icon: 'snow',
      label: 'Air Conditioning',
      tint: 'bg-[#DBEAFE] text-[#1D4ED8]',
    },
    { icon: 'flame', label: 'Heat Pump', tint: 'bg-[#FEE2E2] text-[#B91C1C]' },
  ],
  highlights: [
    'Lead → Quote → Rebate → Installation → Payment → After Sales',
    'Built for real-world Australian rebate and compliance workflows',
  ],
  price: '$3,000',
  cta: 'Explore Energy CRM',
}

/* Grid cards — 04 to 09 */
const cards = [
  {
    number: '04',
    eyebrow: 'SEO Services',
    group: 'Marketing & SEO',
    title: 'Get Found by the Right Customers',
    items: [
      'Technical SEO',
      'Local SEO & GBP SEO',
      'On-Page & Off-Page SEO',
      'Keyword Research & Audit',
      'Monthly SEO Management',
    ],
    price: '$350',
    suffix: '/month',
    cta: 'Improve My Rankings',
    tint: 'bg-[#EFF6FF]',
    accent: 'text-[#1D4ED8]',
    badge: 'bg-[#DBEAFE] text-[#1D4ED8]',
    icon: 'search',
  },
  {
    number: '05',
    eyebrow: 'Digital Marketing',
    group: 'Marketing & SEO',
    title: 'Turn Traffic Into Real Business Growth',
    items: [
      'Google Ads',
      'Meta / Facebook Ads',
      'Lead Generation Campaigns',
      'Remarketing & Conversion Tracking',
      'Campaign Management & Reporting',
    ],
    price: '$350',
    suffix: '/month',
    cta: 'Grow My Business',
    tint: 'bg-[#F0FDF4]',
    accent: 'text-[#15803D]',
    badge: 'bg-[#DCFCE7] text-[#15803D]',
    icon: 'megaphone',
  },
  {
    number: '06',
    eyebrow: 'Social Media Management',
    group: 'Social & Local',
    title: 'Build a Brand People Recognise',
    items: [
      'Facebook, Instagram, LinkedIn',
      'Content Planning & Post Design',
      'Reels & Short-Form Content',
      'Community Management',
      'Monthly Performance Reports',
    ],
    price: '$300',
    suffix: '/month',
    cta: 'Manage My Social Media',
    tint: 'bg-[#FDF2F8]',
    accent: 'text-[#BE185D]',
    badge: 'bg-[#FCE7F3] text-[#BE185D]',
    icon: 'camera',
  },
  {
    number: '07',
    eyebrow: 'Google Business Profile',
    group: 'Social & Local',
    title: 'Get Discovered Locally',
    items: [
      'GBP Setup & Optimisation',
      'Google Maps Optimisation',
      'Review Strategy & Management',
      'Posts & Business Information',
      'Local Performance Reporting',
    ],
    price: '$300',
    suffix: '/month',
    cta: 'Improve Local Presence',
    tint: 'bg-[#F0F9FF]',
    accent: 'text-[#0369A1]',
    badge: 'bg-[#E0F2FE] text-[#0369A1]',
    icon: 'pin',
  },
  {
    number: '08',
    eyebrow: 'Software & Business Automation',
    group: 'Automation',
    title: 'Automate. Operate. Scale Faster.',
    items: [
      'Custom Business Software',
      'Workflow & AI Automation',
      'API, SMS & Email Integration',
      'Customer & Staff Portals',
      'Third-Party Software Integration',
    ],
    price: '$1,500',
    cta: 'Automate My Business',
    tint: 'bg-[#FFFBEB]',
    accent: 'text-[#B45309]',
    badge: 'bg-[#FEF3C7] text-[#B45309]',
    icon: 'bolt',
  },
  {
    number: '09',
    eyebrow: 'Popular Combos',
    group: 'Combos',
    title: 'Complete Solutions for Maximum Impact',
    combos: [
      { label: 'CRM + AI Automation', price: '$4,000' },
      { label: 'Website + CRM Combo', price: '$4,000' },
      { label: 'Complete Digital Business Setup', price: '$5,000' },
    ],
    cta: 'Get a Custom Plan',
    tint: 'bg-[#FEF2F2]',
    accent: 'text-[#BE123C]',
    badge: 'bg-[#FFE4E6] text-[#BE123C]',
    icon: 'stack',
  },
]

const ctaFeatures = [
  { icon: 'strategy', label: 'Personalised Strategy' },
  { icon: 'price', label: 'Transparent Pricing' },
  { icon: 'shield', label: 'Long-Term Partnership' },
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
    arrow: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
      </svg>
    ),
    calendar: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
    check: (
      <svg viewBox="0 0 24 24" className={className} {...common} strokeWidth="3">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    sun: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    ),
    battery: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <rect x="7" y="4" width="10" height="18" rx="2" />
        <path d="M10 2h4" />
        <path d="M10 13h4" />
      </svg>
    ),
    snow: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M12 2v20M4.5 6.5l15 11M19.5 6.5l-15 11" />
      </svg>
    ),
    flame: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M12 22c4 0 7-2.8 7-6.5 0-4.5-4-6-4-10.5 0 0-3 2-3 5-1.5-1-2-3-2-3-2 2-5 4.5-5 8.5C5 19.2 8 22 12 22z" />
      </svg>
    ),
    search: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20l-3.5-3.5" />
      </svg>
    ),
    megaphone: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M3 11v2a1 1 0 0 0 1 1h3l7 4V6L7 10H4a1 1 0 0 0-1 1z" />
        <path d="M18 9a4 4 0 0 1 0 6" />
      </svg>
    ),
    camera: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </svg>
    ),
    pin: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    bolt: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    stack: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M12 2l9 5-9 5-9-5 9-5z" />
        <path d="M3 12l9 5 9-5" />
        <path d="M3 17l9 5 9-5" />
      </svg>
    ),
    strategy: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </svg>
    ),
    price: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M9.5 9.5a2.5 2.5 0 0 1 5 0c0 3-5 1.5-5 5a2.5 2.5 0 0 0 5 0" />
      </svg>
    ),
    shield: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-5" />
      </svg>
    ),
  }

  return icons[name] || icons.arrow
}

/* ─── Reusable pieces ─── */

function Eyebrow({ children, className = 'text-[#0284A8]' }) {
  return (
    <p
      className={`text-[11px] font-bold uppercase tracking-[0.12em] mb-2 ${className}`}
    >
      {children}
    </p>
  )
}

function CheckItem({ children, accent = 'text-[#0284A8]' }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-[#334155]">
      <Icon name="check" className={`w-3.5 h-3.5 mt-1 shrink-0 ${accent}`} />
      <span>{children}</span>
    </li>
  )
}

function PriceTag({ price, suffix, accent = 'text-[#0284A8]' }) {
  return (
    <p className="flex items-baseline gap-1.5">
      <span className="text-xs text-[#64748B]">Starting at</span>
      <span className={`text-2xl font-extrabold ${accent}`}>{price}</span>
      {suffix && <span className="text-xs text-[#64748B]">{suffix}</span>}
    </p>
  )
}

function DarkButton({ children, href = '/contact', className = '' }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 hover:-translate-y-[1px] hover:shadow-lg ${className}`}
    >
      {children}
      <Icon name="arrow" className="w-4 h-4" />
    </a>
  )
}

/* Featured row — 01 / 02 */
function FeaturedRow({ service }) {
  return (
    <motion.section
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45 }}
      className={`${service.tint} rounded-3xl border border-[#E2E8F0]`}
    >
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)_minmax(0,1fr)] gap-8 p-8 sm:p-10">
        <div className="flex gap-4">
          <span className="text-2xl font-extrabold text-[#CBD5E1] leading-none pt-1">
            {service.number}
          </span>
          <div>
            <Eyebrow>{service.eyebrow}</Eyebrow>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] leading-tight mb-3">
              {service.title}
            </h3>
            <p className="text-sm text-[#64748B] leading-relaxed mb-6">
              {service.desc}
            </p>
            <div className="mb-4">
              <PriceTag price={service.price} />
            </div>
            <DarkButton>{service.cta}</DarkButton>
          </div>
        </div>

        <ul className="space-y-2.5 lg:pt-8">
          {service.items.map((item) => (
            <CheckItem key={item}>{item}</CheckItem>
          ))}
        </ul>

        {/* Image slot — artwork to be added */}
        <div className="min-h-56 rounded-2xl bg-[#E2E8F0] border border-[#CBD5E1]" />
      </div>
    </motion.section>
  )
}

/* Energy CRM row — 03 */
function EnergyRow({ service }) {
  return (
    <motion.section
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45 }}
      className="bg-white rounded-3xl border border-[#E2E8F0]"
    >
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)_minmax(0,1fr)] gap-8 p-8 sm:p-10">
        <div className="flex gap-4">
          <span className="text-2xl font-extrabold text-[#CBD5E1] leading-none pt-1">
            {service.number}
          </span>
          <div>
            <Eyebrow>{service.eyebrow}</Eyebrow>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] leading-tight mb-3">
              {service.title}
            </h3>
            <p className="text-sm text-[#64748B] leading-relaxed mb-6">
              {service.desc}
            </p>
            <div className="mb-4">
              <PriceTag price={service.price} />
            </div>
            <DarkButton>{service.cta}</DarkButton>
          </div>
        </div>

        <div className="space-y-3 lg:pt-8">
          {service.products.map((product) => (
            <div
              key={product.label}
              className="flex items-center gap-3 border-b border-[#E2E8F0] pb-3 last:border-0"
            >
              <span
                className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${product.tint}`}
              >
                <Icon name={product.icon} className="w-4 h-4" />
              </span>
              <span className="text-sm font-medium text-[#334155]">
                {product.label}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-[#EFF6FF] rounded-2xl p-6 space-y-4 self-start">
          {service.highlights.map((highlight) => (
            <div key={highlight} className="flex items-start gap-2.5">
              <Icon
                name="check"
                className="w-3.5 h-3.5 mt-1 shrink-0 text-[#1D4ED8]"
              />
              <p className="text-sm text-[#334155] leading-relaxed">
                {highlight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

/* Grid card — 04 to 09 */
function ServiceCard({ service }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4 }}
      className={`${service.tint} rounded-3xl border border-[#E2E8F0] p-7 flex flex-col`}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <span className="text-lg font-extrabold text-[#CBD5E1] leading-none">
            {service.number}
          </span>
          <div className="mt-2">
            <Eyebrow className={service.accent}>{service.eyebrow}</Eyebrow>
            <h3 className="text-xl font-extrabold text-[#0F172A] leading-snug">
              {service.title}
            </h3>
          </div>
        </div>
        <span
          className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${service.badge}`}
        >
          <Icon name={service.icon} className="w-5 h-5" />
        </span>
      </div>

      {service.items && (
        <ul className="space-y-2 mb-6">
          {service.items.map((item) => (
            <CheckItem key={item} accent={service.accent}>
              {item}
            </CheckItem>
          ))}
        </ul>
      )}

      {service.combos && (
        <ul className="space-y-2.5 mb-6">
          {service.combos.map((combo) => (
            <li
              key={combo.label}
              className="flex items-center justify-between gap-3 text-sm"
            >
              <span className="flex items-start gap-2.5 text-[#334155]">
                <Icon
                  name="check"
                  className={`w-3.5 h-3.5 mt-1 shrink-0 ${service.accent}`}
                />
                {combo.label}
              </span>
              <span className="font-bold text-[#0F172A] shrink-0">
                {combo.price}
              </span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto">
        {service.price && (
          <div className="mb-4">
            <PriceTag
              price={service.price}
              suffix={service.suffix}
              accent={service.accent}
            />
          </div>
        )}
        <DarkButton>{service.cta}</DarkButton>
      </div>
    </motion.article>
  )
}

/* ─── Page ─── */

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const show = (group) => activeFilter === 'All' || activeFilter === group

  const visibleCards = useMemo(
    () =>
      cards.filter(
        (card) => activeFilter === 'All' || activeFilter === card.group,
      ),
    [activeFilter],
  )

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-16 bg-white">
        <div className="bg-[#0A0A0A] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-[#00AAFF]/10 blur-3xl" />
            <div className="absolute bottom-0 -left-20 w-72 h-72 rounded-full bg-[#00C8F8]/5 blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#1A1A1A] border border-[#333333] text-[#D1D5DB] text-[11px] font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-[0.12em]">
                  Our Services
                </div>

                <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.1] mb-5">
                  Digital Solutions
                  <br />
                  for <span className="text-[#00C8F8]">Real Progress</span>
                </h1>

                <p className="text-[#9CA3AF] leading-relaxed max-w-lg mb-8">
                  From websites and CRM to marketing and automation, we help
                  businesses build, grow and scale — all in one place.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mb-10">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F0F0F0] text-[#0F172A] font-semibold px-6 py-3 rounded-lg text-sm transition-all duration-200 hover:-translate-y-[1px] hover:shadow-lg"
                  >
                    Get Started
                    <Icon name="arrow" className="w-4 h-4" />
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#111111] border border-[#333333] text-white font-semibold px-6 py-3 rounded-lg text-sm hover:bg-[#1A1A1A] transition-all duration-200"
                  >
                    <Icon name="calendar" className="w-4 h-4" />
                    Book a Consultation
                  </a>
                </div>

                <div className="flex flex-wrap gap-8">
                  {heroStats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-xl font-extrabold text-white">
                        {stat.value}
                      </p>
                      <p className="text-xs text-[#9CA3AF] leading-tight mt-0.5 max-w-24">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hero image slot — artwork to be added */}
              <div className="self-stretch w-full h-full min-h-64 sm:min-h-80 rounded-3xl bg-[#1A1A1A] border border-[#333333]" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Directory ── */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-end mb-8">
            <div>
              <Eyebrow className="text-[#64748B]">Our Services</Eyebrow>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight">
                Everything You Need,
                <br />
                Clearly Laid Out
              </h2>
            </div>
            <p className="text-sm text-[#64748B] leading-relaxed lg:pb-2 lg:max-w-md">
              Explore our services below. Each solution is designed to solve
              real business challenges with measurable results.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`cursor-pointer px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === filter
                    ? 'bg-[#0F172A] text-white'
                    : 'bg-white text-[#64748B] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:text-[#0F172A]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <AnimatePresence mode="popLayout">
            <div className="space-y-6">
              {featured
                .filter((service) => show(service.group))
                .map((service) => (
                  <FeaturedRow key={service.number} service={service} />
                ))}

              {show(energy.group) && <EnergyRow service={energy} />}

              {visibleCards.length > 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {visibleCards.map((service) => (
                    <ServiceCard key={service.number} service={service} />
                  ))}
                </div>
              )}
            </div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-[#0A0A0A] rounded-3xl px-8 sm:px-10 py-10">
            <div className="absolute -bottom-20 -right-16 w-72 h-72 rounded-full bg-[#00AAFF]/20 blur-3xl pointer-events-none" />

            <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <div className="inline-flex items-center bg-[#1A1A1A] border border-[#333333] text-[#D1D5DB] text-[11px] font-bold px-3 py-1.5 rounded-full mb-5 uppercase tracking-[0.12em]">
                  Let&apos;s Build Together
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
                  Have a project in mind?
                </h2>
                <p className="text-[#9CA3AF]">
                  Get a free consultation and a custom plan for your goals.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F0F0F0] text-[#0F172A] font-semibold px-6 py-3 rounded-lg text-sm transition-all duration-200 hover:-translate-y-[1px]"
                >
                  Start a Project
                  <Icon name="arrow" className="w-4 h-4" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#111111] border border-[#333333] text-white font-semibold px-6 py-3 rounded-lg text-sm hover:bg-[#1A1A1A] transition-all duration-200"
                >
                  <Icon name="calendar" className="w-4 h-4" />
                  Book a Consultation
                </a>
              </div>
            </div>

            <div className="relative flex flex-wrap gap-x-10 gap-y-4 mt-10 pt-8 border-t border-[#1A1A1A]">
              {ctaFeatures.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-2.5 text-sm text-[#D1D5DB]"
                >
                  <span className="w-8 h-8 rounded-lg bg-[#1A1A1A] flex items-center justify-center text-[#00C8F8]">
                    <Icon name={feature.icon} className="w-4 h-4" />
                  </span>
                  {feature.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
