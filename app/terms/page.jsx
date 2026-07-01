'use client'

import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

/* ─── Data ─── */

const termsSections = [
  {
    number: '01',
    title: 'Introduction',
    description:
      'Welcome to Crestwave. By accessing our website or using our services, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our website or services.',
  },
  {
    number: '02',
    title: 'Services',
    description:
      'Crestwave provides digital solutions including web development, design, branding, and digital marketing. The scope and deliverables of our services will be outlined in individual agreements or proposals.',
  },
  {
    number: '03',
    title: 'Client Responsibilities',
    description:
      'You agree to provide accurate information, timely feedback, and necessary materials to enable us to deliver our services effectively. Delays caused by missing information may impact project timelines.',
  },
  {
    number: '04',
    title: 'Payments',
    description:
      'All fees and payment terms will be specified in the proposal or agreement. Payments must be made as per the agreed schedule. Late payments may result in delays or suspension of services.',
  },
  {
    number: '05',
    title: 'Intellectual Property',
    description:
      'All content, designs, and materials created by Crestwave remain our intellectual property until full payment is received. Upon full payment, ownership of deliverables will be transferred to the client as per the agreement.',
  },
  {
    number: '06',
    title: 'Limitation of Liability',
    description:
      'Crestwave is not liable for any indirect, incidental, or consequential damages resulting from the use of our services or website. Our total liability shall not exceed the amount paid by the client for the specific service.',
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
    legal: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="M4.93 4.93l2.83 2.83" />
        <path d="M16.24 16.24l2.83 2.83" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <path d="M4.93 19.07l2.83-2.83" />
        <path d="M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    document: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z" />
        <path d="M14 2v5h5" />
        <path d="M9 13h6" />
        <path d="M9 17h4" />
        <path d="M9 9h2" />
      </svg>
    ),
    shield: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-5" />
      </svg>
    ),
    arrow: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
      </svg>
    ),
  }

  return icons[name] || icons.document
}

/* ─── Hero Illustration ─── */

function TermsIllustration() {
  return (
    <div className="relative w-full max-w-sm h-72 hidden lg:flex items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-blue-50" />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.15 }}
        className="relative w-40 h-52 bg-white rounded-3xl shadow-sm border border-blue-100 flex flex-col px-8 py-9"
      >
        <div className="h-3 w-20 bg-blue-100 rounded-full mb-5" />
        <div className="h-3 w-28 bg-blue-100 rounded-full mb-4" />
        <div className="h-3 w-24 bg-blue-100 rounded-full mb-4" />
        <div className="h-3 w-14 bg-blue-100 rounded-full" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-8 bottom-10 w-24 h-24 rounded-3xl bg-blue-100 text-blue-600 flex items-center justify-center shadow-sm"
      >
        <Icon name="shield" className="w-12 h-12" />
      </motion.div>

      <div className="absolute left-4 top-6 grid grid-cols-5 gap-2 opacity-40">
        {Array.from({ length: 25 }).map((_, index) => (
          <span key={index} className="w-1.5 h-1.5 rounded-full bg-blue-300" />
        ))}
      </div>
    </div>
  )
}

/* ─── Components ─── */

function SectionLabel({ children }) {
  return (
    <p className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-wide mb-6">
      <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
      {children}
    </p>
  )
}

function TermsItem({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="grid md:grid-cols-[80px_1fr] gap-6 md:gap-10 py-9 border-b border-gray-200 last:border-b-0"
    >
      <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xl font-bold shrink-0">
        {item.number}
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h2>
        <p className="text-gray-700 text-base leading-relaxed max-w-4xl">
          {item.description}
        </p>
      </div>
    </motion.article>
  )
}

/* ─── Page ─── */

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-16 overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl" />
          <div className="absolute top-1/3 -left-24 w-72 h-72 rounded-full bg-indigo-100/40 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SectionLabel>Legal</SectionLabel>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-tight mb-7">
                Terms &amp; Conditions
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Please read these terms and conditions carefully before using
                our website or services.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <TermsIllustration />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Terms Content ── */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            {termsSections.map((item, index) => (
              <TermsItem key={item.number} item={item} index={index} />
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="mt-10 text-sm text-gray-600"
          >
            Last updated: May 20, 2025
          </motion.p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
