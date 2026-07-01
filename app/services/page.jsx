'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

/* ─── Data ─── */

const categories = [
  {
    title: 'Build',
    desc: 'Websites, CMS platforms and CRM-connected systems',
    icon: 'window',
  },
  {
    title: 'Optimise',
    desc: 'SEO, UX and performance improvements',
    icon: 'target',
  },
  {
    title: 'Scale',
    desc: 'Analytics, growth strategy and conversion systems',
    icon: 'chart',
  },
  {
    title: 'Support',
    desc: 'Maintenance, iteration and long-term support',
    icon: 'support',
  },
]

const services = [
  {
    name: 'CRM Websites',
    icon: 'users',
    desc: 'Conversion-focused, CRM-connected websites designed to capture, qualify and route enquiries more effectively.',
    shortDesc:
      'CRM-connected websites that turn visitors into qualified leads.',
    bestFor: ['Lead generation', 'Sales teams', 'Service businesses'],
    included: [
      'CRM-connected enquiry flows',
      'Lead capture forms',
      'Conversion-focused landing pages',
      'Tracking and reporting setup',
    ],
    outcomes: [
      'Better lead quality',
      'Faster enquiry handling',
      'Clearer customer pipeline',
    ],
  },
  {
    name: 'CMS Development',
    icon: 'code',
    desc: 'Scalable content systems for fast, flexible publishing.',
    shortDesc: 'Scalable content systems for fast, flexible publishing.',
    bestFor: ['Content teams', 'Growing websites', 'Multi-page platforms'],
    included: [
      'Scalable CMS architecture',
      'Reusable page sections',
      'Editor-friendly content workflows',
      'Secure publishing setup',
    ],
    outcomes: [
      'Easier updates',
      'Faster publishing',
      'More scalable website management',
    ],
  },
  {
    name: 'Technical SEO',
    icon: 'search',
    desc: 'Technical foundations that improve visibility and crawlability.',
    shortDesc:
      'Technical foundations that improve visibility and crawlability.',
    bestFor: ['Ranking issues', 'Site migrations', 'Organic growth'],
    included: [
      'Technical audit',
      'Metadata and structure improvements',
      'Schema / structured data',
      'Indexing and crawlability fixes',
    ],
    outcomes: [
      'Better visibility',
      'Cleaner site structure',
      'Improved organic performance',
    ],
  },
  {
    name: 'Website Development',
    icon: 'window',
    desc: 'Fast, modern and conversion-focused websites built to represent your brand clearly and help visitors take action.',
    shortDesc:
      'Modern business websites designed for speed, clarity and enquiries.',
    bestFor: ['Business websites', 'Service pages', 'Brand presence'],
    included: [
      'Custom website design and development',
      'Responsive mobile-friendly layouts',
      'Fast-loading page structure',
      'Contact forms and enquiry flows',
    ],
    outcomes: [
      'Stronger online presence',
      'Better user experience',
      'More enquiries from your website',
    ],
  },
  {
    name: 'Social Media Optimisation',
    icon: 'share',
    desc: 'Profile, content and brand optimisation that helps your social media presence look professional and connect with the right audience.',
    shortDesc:
      'Optimised social profiles and content structure for better brand visibility.',
    bestFor: ['Brand awareness', 'Content visibility', 'Local businesses'],
    included: [
      'Profile optimisation',
      'Bio and brand messaging improvements',
      'Content structure recommendations',
      'Social media growth guidance',
    ],
    outcomes: [
      'More professional social presence',
      'Clearer brand communication',
      'Improved audience engagement',
    ],
  },
  {
    name: 'Google Map Business',
    icon: 'pin',
    desc: 'Google Business Profile optimisation designed to improve local visibility, build trust and help customers find your business easily.',
    shortDesc:
      'Google Maps and local profile optimisation for better local visibility.',
    bestFor: ['Local SEO', 'Google Maps visibility', 'Service businesses'],
    included: [
      'Google Business Profile setup',
      'Business information optimisation',
      'Photos, services and category updates',
      'Review and local visibility guidance',
    ],
    outcomes: [
      'Better Google Maps presence',
      'More local customer trust',
      'Higher chance of local enquiries',
    ],
  },
  {
    name: 'Web Performance',
    icon: 'speed',
    desc: 'Speed, Core Web Vitals and smoother site experiences.',
    shortDesc: 'Speed, Core Web Vitals and smoother site experiences.',
    bestFor: ['Slow websites', 'Mobile issues', 'Core Web Vitals'],
    included: [
      'Speed audit',
      'Image and asset optimisation',
      'Frontend performance fixes',
      'Core Web Vitals improvements',
    ],
    outcomes: [
      'Faster load times',
      'Better user experience',
      'Improved conversion potential',
    ],
  },
  {
    name: 'UX Optimisation',
    icon: 'flow',
    desc: 'Sharper user journeys and lower conversion friction.',
    shortDesc: 'Sharper user journeys and lower conversion friction.',
    bestFor: ['Low enquiries', 'Confusing journeys', 'Redesigns'],
    included: [
      'User journey review',
      'Landing page improvements',
      'Conversion friction fixes',
      'Accessibility and usability improvements',
    ],
    outcomes: ['Better engagement', 'More enquiries', 'Clearer user flows'],
  },
  {
    name: 'Analytics & Strategy',
    icon: 'bars',
    desc: 'Measurement, insight and growth planning.',
    shortDesc: 'Measurement, insight and growth planning.',
    bestFor: ['Growth planning', 'Reporting gaps', 'Marketing teams'],
    included: [
      'Measurement framework',
      'KPI setup',
      'Analytics dashboard planning',
      'Growth roadmap',
    ],
    outcomes: [
      'Better decision-making',
      'Clearer reporting',
      'Smarter growth priorities',
    ],
  },
  {
    name: 'Ongoing Support',
    icon: 'headset',
    desc: 'Maintenance, iteration and long-term improvement.',
    shortDesc: 'Maintenance, iteration and long-term improvement.',
    bestFor: [
      'Post-launch teams',
      'Ongoing improvements',
      'Growing businesses',
    ],
    included: [
      'Monthly updates',
      'Technical maintenance',
      'Reporting reviews',
      'Priority support',
    ],
    outcomes: ['Consistent improvements', 'Lower risk', 'Long-term momentum'],
  },
]

const startingPoints = [
  {
    title: 'Website Build',
    icon: 'window',
    bestFor: 'New websites or replatforming',
    includes: 'Design, development, CMS setup',
    timeline: '4–8 weeks',
    outcome: 'A strong conversion-ready website',
  },
  {
    title: 'SEO & Performance',
    icon: 'search',
    bestFor: 'Existing websites needing growth',
    includes: 'Technical SEO and speed optimisation',
    timeline: '2–6 weeks',
    outcome: 'Better rankings and faster load times',
  },
  {
    title: 'Growth System',
    icon: 'chart',
    bestFor: 'Businesses ready to scale leads',
    includes: 'Analytics, CRM flows, conversion planning',
    timeline: '4–10 weeks',
    outcome: 'More measurable growth',
  },
  {
    title: 'Ongoing Support',
    icon: 'headset',
    bestFor: 'Teams needing continuous improvement',
    includes: 'Updates, maintenance, reporting',
    timeline: 'Monthly',
    outcome: 'A stable and improving website',
  },
]

const workModels = [
  {
    title: 'One-off Project',
    icon: 'briefcase',
    bestFor: 'Specific projects with clear scope',
    get: 'Strategy, build and handover',
    duration: '2–12 weeks',
    cta: 'Start a Project',
  },
  {
    title: 'Growth Sprint',
    icon: 'rocket',
    bestFor: 'Fast improvements and focused growth',
    get: 'Strategy, build and measurable results',
    duration: '2–6 weeks',
    cta: 'Start a Sprint',
    featured: true,
  },
  {
    title: 'Ongoing Partner',
    icon: 'users',
    bestFor: 'Long-term growth and continuous improvement',
    get: 'Ongoing support, iteration and optimisation',
    duration: 'Monthly',
    cta: 'Become a Partner',
  },
]

const expectations = [
  'Clear project scope',
  'Transparent communication',
  'Strategy before execution',
  'Performance-focused build',
  'SEO-aware structure',
  'Easy-to-manage systems',
  'Post-launch support options',
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
    window: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
        <path d="M8 15h4" />
      </svg>
    ),
    target: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </svg>
    ),
    chart: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <rect x="7" y="12" width="3" height="4" rx="1" />
        <rect x="12" y="9" width="3" height="7" rx="1" />
        <rect x="17" y="6" width="3" height="10" rx="1" />
      </svg>
    ),
    support: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M4 13a8 8 0 0 1 16 0" />
        <path d="M4 13v4a2 2 0 0 0 2 2h2v-8H6a2 2 0 0 0-2 2z" />
        <path d="M20 13v4a2 2 0 0 1-2 2h-2v-8h2a2 2 0 0 1 2 2z" />
        <path d="M16 19c0 1.1-.9 2-2 2h-2" />
      </svg>
    ),
    users: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    code: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M16 18l6-6-6-6" />
        <path d="M8 6l-6 6 6 6" />
      </svg>
    ),
    search: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20l-3.5-3.5" />
      </svg>
    ),
    speed: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M21 12a9 9 0 1 0-18 0" />
        <path d="M12 12l5-5" />
        <path d="M8 21h8" />
      </svg>
    ),
    flow: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="18" r="3" />
        <path d="M9 6h4a5 5 0 0 1 5 5v4" />
      </svg>
    ),
    bars: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="M8 16v-4" />
        <path d="M12 16V8" />
        <path d="M16 16v-6" />
      </svg>
    ),
    headset: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M4 13a8 8 0 0 1 16 0" />
        <path d="M4 13v4a2 2 0 0 0 2 2h1v-8H6a2 2 0 0 0-2 2z" />
        <path d="M20 13v4a2 2 0 0 1-2 2h-1v-8h1a2 2 0 0 1 2 2z" />
        <path d="M16 19c0 1.1-.9 2-2 2h-2" />
      </svg>
    ),
    briefcase: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M3 12h18" />
      </svg>
    ),
    rocket: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M4.5 16.5c-1 1-1.5 3-1.5 3s2-.5 3-1.5" />
        <path d="M9 15l-3-3a22 22 0 0 1 9-8l3 3a22 22 0 0 1-8 9z" />
        <path d="M15 4l5-1-1 5" />
        <path d="M9 15l-1 4 4-1" />
      </svg>
    ),
  }

  return icons[name] || icons.window
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.8"
      className="mt-0.5 shrink-0 text-blue-600"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

/* ─── Hero Illustration ─── */

function ServiceIllustration() {
  return (
    <div className="relative w-full max-w-md h-64">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.15 }}
        className="absolute left-12 top-6 w-64 h-44 rounded-3xl bg-white/80 border border-blue-100 shadow-sm"
      >
        <svg viewBox="0 0 260 180" className="w-full h-full" fill="none">
          <rect x="24" y="26" width="212" height="128" rx="18" fill="#F8FBFF" />
          <circle cx="45" cy="46" r="4" fill="#60A5FA" />
          <circle cx="59" cy="46" r="4" fill="#93C5FD" />
          <circle cx="73" cy="46" r="4" fill="#BFDBFE" />
          <rect x="42" y="70" width="48" height="40" rx="8" fill="#DBEAFE" />
          <rect x="106" y="72" width="92" height="8" rx="4" fill="#C7D2FE" />
          <rect x="106" y="90" width="70" height="8" rx="4" fill="#E0E7FF" />
          <rect x="42" y="126" width="126" height="7" rx="3.5" fill="#DBEAFE" />
          <rect x="42" y="141" width="94" height="7" rx="3.5" fill="#E0E7FF" />
        </svg>
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-8 top-24 w-20 h-20 bg-white rounded-3xl shadow-lg border border-blue-100 flex items-center justify-center text-blue-600"
      >
        <Icon name="speed" className="w-9 h-9" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-4 top-24 w-16 h-16 bg-white rounded-2xl shadow-lg border border-blue-100 flex items-center justify-center text-blue-600"
      >
        <Icon name="support" className="w-7 h-7" />
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-2 top-8 w-12 h-12 bg-white rounded-2xl shadow-sm border border-blue-100 flex items-center justify-center text-blue-600"
      >
        <Icon name="search" className="w-6 h-6" />
      </motion.div>

      <svg
        viewBox="0 0 420 260"
        className="absolute inset-0 w-full h-full pointer-events-none"
        fill="none"
      >
        <path
          d="M72 132C92 70 165 42 229 65C293 88 324 39 375 64"
          stroke="#BFDBFE"
          strokeWidth="2"
          strokeDasharray="5 7"
        />
        <path
          d="M65 170C150 236 276 222 343 145"
          stroke="#BFDBFE"
          strokeWidth="2"
          strokeDasharray="5 7"
        />
      </svg>
    </div>
  )
}

/* ─── Components ─── */

function CategoryCard({ category, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`text-left p-5 rounded-2xl border transition-all duration-200 ${
        active
          ? 'bg-white border-blue-200 shadow-sm'
          : 'bg-white/70 border-gray-100 hover:border-blue-100 hover:bg-white'
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
            active ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'
          }`}
        >
          <Icon name={category.icon} className="w-5 h-5" />
        </div>
        <div>
          <p className="font-bold text-gray-900 text-sm">{category.title}</p>
          <p className="text-xs text-gray-500 leading-relaxed mt-1">
            {category.desc}
          </p>
        </div>
      </div>
    </button>
  )
}

function ServiceSidebar({ activeService, setActiveService }) {
  return (
    <aside className="cursor-pointer bg-white border border-gray-100 rounded-3xl p-4 shadow-sm lg:sticky lg:top-28">
      <h3 className="font-bold text-gray-900 px-3 mb-3">Our Services</h3>
      <div className="space-y-1">
        {services.map((service, index) => {
          const isActive = activeService === index

          return (
            <button
              key={service.name}
              onClick={() => setActiveService(index)}
              className={`w-full flex items-center justify-between gap-3 px-3 py-3 rounded-xl text-left transition-all ${
                isActive
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <span className="flex items-center gap-3">
                <span
                  className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isActive
                      ? 'bg-white text-blue-600'
                      : 'bg-gray-50 text-gray-500'
                  }`}
                >
                  <Icon name={service.icon} className="w-4 h-4" />
                </span>
                <span className="text-sm font-semibold">{service.name}</span>
              </span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={isActive ? 'text-blue-600' : 'text-gray-300'}
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          )
        })}
      </div>
    </aside>
  )
}

function ExpandedService({ service }) {
  return (
    <motion.div
      key={service.name}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6 sm:p-8 overflow-hidden relative"
    >
      <div className="grid lg:grid-cols-[1fr_240px] gap-8">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
              <Icon name={service.icon} className="w-6 h-6" />
            </div>
            <h2 className="text-[22px] sm:text-[28px] font-bold text-gray-900">
              {service.name}
            </h2>
          </div>

          <p className="text-gray-600 leading-relaxed max-w-2xl mb-6">
            {service.desc}
          </p>

          <div className="mb-7">
            <p className="text-sm font-bold text-blue-700 mb-3">Best for</p>
            <div className="flex flex-wrap gap-2">
              {service.bestFor.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-4">
                What&apos;s included
              </h3>
              <ul className="space-y-3">
                {service.included.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-gray-600"
                  >
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-4">
                Typical outcomes
              </h3>
              <ul className="space-y-3">
                {service.outcomes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-gray-600"
                  >
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center">
          <div className="relative w-56 h-56">
            <div className="absolute inset-0 rounded-4xl bg-linear-to-br from-blue-50 to-indigo-100 border border-blue-100" />
            <div className="absolute top-8 left-7 right-7 h-28 bg-white rounded-2xl border border-blue-100 shadow-sm">
              <div className="flex gap-1.5 px-4 pt-4">
                <span className="w-2 h-2 rounded-full bg-blue-300" />
                <span className="w-2 h-2 rounded-full bg-blue-200" />
                <span className="w-2 h-2 rounded-full bg-blue-100" />
              </div>
              <div className="px-4 pt-4 space-y-2">
                <div className="w-24 h-2 rounded-full bg-blue-100" />
                <div className="w-32 h-2 rounded-full bg-blue-50" />
                <div className="w-20 h-2 rounded-full bg-blue-50" />
              </div>
            </div>
            <div className="absolute bottom-8 right-4 w-24 bg-white rounded-2xl border border-blue-100 shadow-md p-4">
              <div className="space-y-2">
                <div className="w-full h-2 rounded-full bg-blue-100" />
                <div className="w-4/5 h-2 rounded-full bg-blue-100" />
                <div className="w-3/5 h-2 rounded-full bg-blue-100" />
              </div>
            </div>
            <div className="absolute bottom-5 left-5 w-12 h-12 rounded-2xl bg-white border border-blue-100 shadow-md flex items-center justify-center text-blue-600">
              <Icon name="users" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function CollapsedServiceRow({ service, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between gap-4 bg-white border border-gray-100 rounded-2xl px-4 py-4 hover:border-blue-200 hover:shadow-sm transition-all text-left"
    >
      <div className="flex items-center gap-4 min-w-0">
        <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
          <Icon name={service.icon} className="w-5 h-5" />
        </div>
        <div className="min-w-0">
          <p className="font-bold text-gray-900 text-sm">{service.name}</p>
          <p className="text-sm text-gray-500 truncate">{service.shortDesc}</p>
        </div>
      </div>

      <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-blue-600 shrink-0">
        View details
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </span>
    </button>
  )
}

function StartingPointCard({ item }) {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
      <div className="w-11 h-11 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-5">
        <Icon name={item.icon} className="w-5 h-5" />
      </div>

      <h3 className="font-bold text-gray-900 mb-5">{item.title}</h3>

      <div className="space-y-4 text-sm">
        <div>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">
            Best for
          </p>
          <p className="text-gray-700">{item.bestFor}</p>
        </div>
        <div>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">
            Includes
          </p>
          <p className="text-gray-700">{item.includes}</p>
        </div>
        <div>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">
            Timeline
          </p>
          <p className="text-gray-700">{item.timeline}</p>
        </div>
        <div>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">
            Outcome
          </p>
          <p className="text-gray-700">{item.outcome}</p>
        </div>
      </div>
    </div>
  )
}

function WorkModelCard({ model }) {
  return (
    <div
      className={`rounded-3xl p-6 border transition-all ${
        model.featured
          ? 'bg-blue-50 border-blue-200 shadow-sm'
          : 'bg-white border-gray-100'
      }`}
    >
      <div className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-5 border border-blue-100">
        <Icon name={model.icon} className="w-5 h-5" />
      </div>

      <h3 className="font-bold text-gray-900 mb-5">{model.title}</h3>

      <div className="space-y-4 text-sm mb-6">
        <div>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">
            Best for
          </p>
          <p className="text-gray-700">{model.bestFor}</p>
        </div>
        <div>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">
            What you get
          </p>
          <p className="text-gray-700">{model.get}</p>
        </div>
        <div>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">
            Typical duration
          </p>
          <p className="text-gray-700">{model.duration}</p>
        </div>
      </div>

      <a
        href="/contact"
        className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
          model.featured
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-white text-blue-600 border border-blue-200 hover:bg-blue-50'
        }`}
      >
        {model.cta}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  )
}

function MobileServiceAccordion() {
  const [open, setOpen] = useState(0)

  return (
    <div className="lg:hidden space-y-3">
      {services.map((service, index) => {
        const isOpen = open === index

        return (
          <div
            key={service.name}
            className="bg-white border border-gray-100 rounded-2xl overflow-hidden"
          >
            <button
              onClick={() => setOpen(isOpen ? null : index)}
              className={`w-full flex items-center justify-between gap-3 px-4 py-4 text-left ${
                isOpen ? 'bg-blue-50' : 'bg-white'
              }`}
            >
              <span className="flex items-center gap-3">
                <span className="w-9 h-9 bg-white border border-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  <Icon name={service.icon} className="w-4 h-4" />
                </span>
                <span className="font-bold text-gray-900 text-sm">
                  {service.name}
                </span>
              </span>
              <span className="text-blue-600 font-bold text-lg">
                {isOpen ? '−' : '+'}
              </span>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-5 pt-2 border-t border-blue-100">
                    <p className="text-sm text-gray-600 leading-relaxed mb-5">
                      {service.desc}
                    </p>

                    <p className="text-xs font-bold text-blue-700 mb-2">
                      Best for
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {service.bestFor.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 text-[11px] font-semibold border border-blue-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-5">
                      <div>
                        <p className="text-xs font-bold text-gray-900 mb-3">
                          What&apos;s included
                        </p>
                        <ul className="space-y-2">
                          {service.included.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-xs text-gray-600"
                            >
                              <CheckIcon />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-xs font-bold text-gray-900 mb-3">
                          Typical outcomes
                        </p>
                        <ul className="space-y-2">
                          {service.outcomes.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-xs text-gray-600"
                            >
                              <CheckIcon />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

/* ─── Page ─── */

export default function Services() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [activeService, setActiveService] = useState(0)

  const selectedService = services[activeService]
  const collapsedServices = services.filter(
    (_, index) => index !== activeService,
  )

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── Intro ── */}
      <section className="relative pt-16 overflow-hidden bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="absolute top-1/2 -left-16 w-64 h-64 rounded-full bg-indigo-200/30 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5"
              >
                <Icon name="window" className="w-3 h-3" />
                Services
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-5"
              >
                Services Built Around{' '}
                <span className="text-blue-600">Digital Growth</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="text-gray-600 text-lg leading-relaxed max-w-xl mb-8"
              >
                From CRM websites and CMS platforms to technical SEO,
                performance optimisation and analytics, Crestwave helps
                businesses build digital systems that are faster, clearer and
                easier to scale.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.24 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-200"
                >
                  Explore Services
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white border border-blue-200 text-blue-700 font-semibold px-6 py-3.5 rounded-xl hover:bg-blue-50 transition-all duration-200"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                  Book a Consultation
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <ServiceIllustration />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Category selector ── */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.title}
                category={category}
                active={activeCategory === index}
                onClick={() => setActiveCategory(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Services directory ── */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-10"
          >
            <p className="text-blue-600 font-semibold text-sm mb-2">
              Our Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              A focused capability guide
            </h2>
          </motion.div>

          {/* Desktop services */}
          <div className="hidden lg:grid lg:grid-cols-[280px_1fr] gap-8 items-start">
            <ServiceSidebar
              activeService={activeService}
              setActiveService={setActiveService}
            />

            <div className="space-y-4">
              <ExpandedService service={selectedService} />

              <div className="space-y-3">
                {collapsedServices.map((service) => {
                  const originalIndex = services.findIndex(
                    (item) => item.name === service.name,
                  )

                  return (
                    <CollapsedServiceRow
                      key={service.name}
                      service={service}
                      onClick={() => setActiveService(originalIndex)}
                    />
                  )
                })}
              </div>
            </div>
          </div>

          {/* Mobile services */}
          <MobileServiceAccordion />
        </div>
      </section>

      {/* ── Starting point ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Choose the Right Starting Point
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Pick the starting point that best matches your current website
              stage, growth priority and level of support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {startingPoints.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <StartingPointCard item={item} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ways to work ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Ways to Work With Crestwave
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Choose a focused project, a growth sprint, or a long-term support
              relationship depending on what your website needs next.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-5">
            {workModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <WorkModelCard model={model} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Expectations + CTA ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <p className="text-blue-600 font-semibold text-sm mb-2">
                What You Can Expect
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Clear delivery without the guesswork
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Every engagement is shaped around clarity, practical execution
                and measurable improvement — so you know what is happening, why
                it matters and what comes next.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                {expectations.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                      <CheckIcon />
                    </span>
                    <p className="text-sm font-medium text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mt-14 bg-linear-to-br from-blue-600 to-blue-700 rounded-3xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative"
          >
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <svg viewBox="0 0 900 180" className="w-full h-full" fill="none">
                <path
                  d="M0 110C120 35 230 145 355 82C480 20 570 120 690 72C790 32 850 80 900 50"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <div className="relative flex items-start gap-5">
              <div className="w-11 h-11 bg-white/20 rounded-2xl flex items-center justify-center text-white shrink-0">
                <Icon name="support" className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  Not sure which service you need?
                </h3>
                <p className="text-blue-100 text-sm">
                  Tell us your current website goal and we&apos;ll recommend the
                  right service mix.
                </p>
              </div>
            </div>

            <a
              href="/contact"
              className="relative shrink-0 inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3.5 rounded-xl hover:bg-blue-50 transition-all duration-200 hover:shadow-md"
            >
              Find My Service Mix
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
