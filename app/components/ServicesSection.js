'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
  {
    id: 'crm',
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
    title: 'CRM Websites',
    tagline:
      'Conversion-focused, CRM-connected websites designed to capture, qualify and route enquiries more effectively.',
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
    id: 'cms',
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'CMS Development',
    tagline: 'Scalable content systems for fast, flexible publishing.',
    bestFor: ['Content teams', 'Multi-page sites', 'Blogs & news'],
    included: [
      'Custom CMS setup',
      'Content templates',
      'Editor training',
      'Migration support',
    ],
    outcomes: [
      'Faster content updates',
      'Consistent brand output',
      'Reduced developer dependency',
    ],
  },
  {
    id: 'seo',
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
    title: 'Technical SEO',
    tagline: 'Technical foundations that improve visibility and crawlability.',
    bestFor: ['Established sites', 'E-commerce', 'Enterprise'],
    included: [
      'Site audit',
      'Schema markup',
      'Core Web Vitals',
      'Crawl optimisation',
    ],
    outcomes: [
      'Higher search rankings',
      'Better indexing',
      'More organic traffic',
    ],
  },
  {
    id: 'perf',
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2a10 10 0 0 1 10 10" />
        <circle cx="12" cy="12" r="2" />
        <path d="m12 12 4-4" />
      </svg>
    ),
    title: 'Web Performance',
    tagline: 'Speed, Core Web Vitals and smoother site experiences.',
    bestFor: ['All websites', 'High-traffic sites', 'E-commerce'],
    included: [
      'Performance audit',
      'Image optimisation',
      'Caching setup',
      'CDN configuration',
    ],
    outcomes: [
      'Faster load times',
      'Better Core Web Vitals',
      'Lower bounce rates',
    ],
  },
  {
    id: 'ux',
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: 'UX Optimisation',
    tagline: 'Sharper user journeys and lower conversion friction.',
    bestFor: ['Conversion-focused', 'SaaS', 'Lead gen'],
    included: [
      'UX audit',
      'Heatmap analysis',
      'A/B testing',
      'Journey mapping',
    ],
    outcomes: [
      'Higher conversion rates',
      'Lower drop-off',
      'Better user satisfaction',
    ],
  },
  {
    id: 'website-development',
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 20h8" />
        <path d="M12 18v2" />
        <path d="M7 9h10" />
        <path d="M7 13h6" />
      </svg>
    ),
    title: 'Website Development',
    tagline:
      'Fast, modern and conversion-focused websites built to represent your brand clearly and help visitors take action.',
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
    id: 'social-media-optimisation',
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="M8.6 10.6l6.8-4.2" />
        <path d="M8.6 13.4l6.8 4.2" />
      </svg>
    ),
    title: 'Social Media Optimisation',
    tagline:
      'Profile, content and brand optimisation that helps your social media presence look professional and connect with the right audience.',
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
    id: 'google-map-business',
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: 'Google Map Business',
    tagline:
      'Google Business Profile optimisation designed to improve local visibility, build trust and help customers find your business easily.',
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
    id: 'analytics',
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      </svg>
    ),
    title: 'Analytics & Strategy',
    tagline: 'Measurement, insight and growth planning.',
    bestFor: ['Growth-focused', 'Data-driven teams', 'Scaling businesses'],
    included: [
      'GA4 setup',
      'Custom dashboards',
      'Monthly reporting',
      'Growth strategy',
    ],
    outcomes: [
      'Clearer data picture',
      'Informed decisions',
      'Measurable growth',
    ],
  },
  {
    id: 'support',
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: 'Ongoing Support',
    tagline: 'Maintenance, iteration and long-term improvement.',
    bestFor: ['All clients', 'Growing teams', 'Post-launch'],
    included: [
      'Monthly updates',
      'Security monitoring',
      'Performance checks',
      'Priority support',
    ],
    outcomes: ['Stable site', 'Continuous improvement', 'Peace of mind'],
  },
]

function ServiceCard({ service }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35 }}
      className="bg-[#111111] rounded-2xl border border-[#1A1A1A] shadow-sm overflow-hidden"
    >
      <div className="grid lg:grid-cols-5 gap-0">
        {/* Main content */}
        <div className="lg:col-span-3 p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#1A1A1A] rounded-xl flex items-center justify-center text-[#AAFF00]">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-white">
              {service.title}
            </h3>
          </div>
          <p className="text-[#9CA3AF] mb-6 leading-relaxed">
            {service.tagline}
          </p>

          <div className="mb-6">
            <p className="text-sm font-semibold text-[#9CA3AF] uppercase tracking-wide mb-3">
              Best for
            </p>
            <div className="flex flex-wrap gap-2">
              {service.bestFor.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-[#1A1A1A] text-[#D1D5DB] text-sm font-medium rounded-lg border border-[#222222]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="text-sm font-semibold text-[#AAFF00] mb-3">
                What&apos;s included
              </p>
              <ul className="space-y-2">
                {service.included.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-[#E5E7EB]"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#AAFF00"
                      strokeWidth="2.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#AAFF00] mb-3">
                Typical outcomes
              </p>
              <ul className="space-y-2">
                {service.outcomes.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-[#E5E7EB]"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#AAFF00"
                      strokeWidth="2.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Illustration side */}
        <div className="lg:col-span-2 bg-[#0A0A0A] p-8 flex items-center justify-center min-h-48">
          <div className="w-full max-w-xs">
            <div className="bg-[#111111] rounded-2xl shadow-md p-5 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#AAFF00] rounded-lg flex items-center justify-center text-white">
                  {service.icon}
                </div>
                <div className="h-3 bg-[#222222] rounded-full flex-1" />
              </div>
              <div className="space-y-2">
                <div className="h-2.5 bg-[#1A1A1A] rounded-full w-full" />
                <div className="h-2.5 bg-[#161616] rounded-full w-4/5" />
                <div className="h-2.5 bg-[#161616] rounded-full w-3/5" />
              </div>
              <div className="flex gap-2 pt-2">
                <div className="h-7 bg-[#AAFF00] rounded-lg flex-1" />
                <div className="h-7 bg-[#161616] rounded-lg w-16" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function CompactServiceRow({ service, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between p-4 hover:bg-[#0A0A0A] rounded-xl transition-colors text-left group cursor-pointer"
    >
      <div className="flex items-center gap-4">
        <div className="w-9 h-9 bg-[#0A0A0A] group-hover:bg-[#1A1A1A] rounded-xl flex items-center justify-center text-[#9CA3AF] group-hover:text-[#AAFF00] transition-colors">
          {service.icon}
        </div>
        <div>
          <p className="font-semibold text-white text-sm">{service.title}</p>
          <p className="text-xs text-[#9CA3AF] mt-0.5">{service.tagline}</p>
        </div>
      </div>
      <span className="text-[#AAFF00] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 shrink-0 ml-4">
        View details
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
      </span>
    </button>
  )
}

export default function ServicesSection() {
  const [active, setActive] = useState(0)

  return (
    <section id="services" className="py-20 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Our Services
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[220px_1fr] gap-8">
          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block"
          >
            <nav className="space-y-1 sticky top-24">
              {services.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setActive(i)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-medium transition-all cursor-pointer ${
                    active === i
                      ? 'bg-[#1A1A1A] text-[#D1D5DB] border border-[#333333]'
                      : 'text-[#9CA3AF] hover:bg-[#0A0A0A] hover:text-white'
                  }`}
                >
                  <span
                    className={active === i ? 'text-[#AAFF00]' : 'text-[#6B7280]'}
                  >
                    {s.icon}
                  </span>
                  {s.title}
                </button>
              ))}
            </nav>
          </motion.aside>

          {/* Main content */}
          <div className="space-y-4">
            {/* Active service card */}
            <AnimatePresence mode="wait">
              <ServiceCard key={active} service={services[active]} />
            </AnimatePresence>

            {/* Compact rows for other services */}
            <div className="bg-[#0A0A0A]/50 rounded-2xl border border-[#1A1A1A] divide-y divide-[#1A1A1A]">
              {services.map((s, i) => {
                if (i === active) return null
                return (
                  <CompactServiceRow
                    key={s.id}
                    service={s}
                    onClick={() => setActive(i)}
                  />
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile accordion */}
        <div className="lg:hidden mt-8 space-y-2">
          {services.map((s, i) => (
            <MobileServiceAccordion
              key={s.id}
              service={s}
              isOpen={active === i}
              onToggle={() => setActive(active === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function MobileServiceAccordion({ service, isOpen, onToggle }) {
  return (
    <div className="border border-[#222222] rounded-2xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 text-left bg-[#000000]"
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${isOpen ? 'bg-[#1A1A1A] text-[#AAFF00]' : 'bg-[#0A0A0A] text-[#9CA3AF]'}`}
          >
            {service.icon}
          </div>
          <span className="font-semibold text-white">{service.title}</span>
        </div>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`text-[#6B7280] transition-transform ${isOpen ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
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
            <div className="px-4 pb-4 bg-[#000000] border-t border-[#1A1A1A]">
              <p className="text-[#9CA3AF] text-sm mt-3 mb-4">
                {service.tagline}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {service.bestFor.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-[#1A1A1A] text-[#D1D5DB] text-xs font-medium rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#AAFF00] mb-2">
                    What&apos;s included
                  </p>
                  <ul className="space-y-1.5">
                    {service.included.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-1.5 text-xs text-[#E5E7EB]"
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#AAFF00"
                          strokeWidth="2.5"
                          className="mt-0.5 shrink-0"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#AAFF00] mb-2">
                    Typical outcomes
                  </p>
                  <ul className="space-y-1.5">
                    {service.outcomes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-1.5 text-xs text-[#E5E7EB]"
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#AAFF00"
                          strokeWidth="2.5"
                          className="mt-0.5 shrink-0"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {item}
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
}
