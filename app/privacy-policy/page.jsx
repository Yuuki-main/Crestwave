'use client'

import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

/* ─── Data ─── */

const privacySections = [
  {
    number: '01',
    title: 'Information We Collect',
    description:
      'We collect information that you provide directly to us, such as your name, email address, phone number, and company details when you contact us or use our services. We may also collect information automatically through cookies and analytics tools.',
  },
  {
    number: '02',
    title: 'How We Use Your Information',
    description:
      'We use the information we collect to provide, maintain, and improve our services, communicate with you, respond to inquiries, and send you relevant updates. We do not sell your personal information to third parties.',
  },
  {
    number: '03',
    title: 'Information Sharing',
    description:
      'We may share your information with trusted third-party service providers who assist us in operating our website and delivering our services. These parties are obligated to keep your information confidential.',
  },
  {
    number: '04',
    title: 'Data Security',
    description:
      'We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.',
  },
  {
    number: '05',
    title: 'Your Rights',
    description:
      'You have the right to access, update, or delete your personal information. If you wish to exercise these rights, please contact us using the details provided below.',
  },
  {
    number: '06',
    title: 'Cookies',
    description:
      'Our website uses cookies to enhance your experience and analyze website traffic. You can choose to disable cookies through your browser settings, but this may affect certain functionalities.',
  },
  {
    number: '07',
    title: 'Changes to This Policy',
    description:
      'We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date.',
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
    lock: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        <path d="M12 15v2" />
      </svg>
    ),
    shield: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-5" />
      </svg>
    ),
  }

  return icons[name] || icons.document
}

/* ─── Hero Illustration ─── */

function PrivacyIllustration() {
  return (
    <div className="relative hidden lg:flex w-full max-w-sm h-72 items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-[#1A1A1A]" />

      <div className="absolute left-4 top-6 grid grid-cols-5 gap-2 opacity-40">
        {Array.from({ length: 25 }).map((_, index) => (
          <span key={index} className="w-1.5 h-1.5 rounded-full bg-[#00C8F8]" />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.15 }}
        className="relative w-40 h-52 bg-[#111111] rounded-3xl shadow-sm border border-[#222222] flex flex-col px-8 py-9"
      >
        <div className="h-3 w-20 bg-[#1A1A1A] rounded-full mb-5" />
        <div className="h-3 w-28 bg-[#1A1A1A] rounded-full mb-4" />
        <div className="h-3 w-24 bg-[#1A1A1A] rounded-full mb-4" />
        <div className="h-3 w-14 bg-[#1A1A1A] rounded-full" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-8 bottom-10 w-24 h-24 rounded-3xl bg-[#1A1A1A] text-[#00C8F8] flex items-center justify-center shadow-sm"
      >
        <Icon name="lock" className="w-12 h-12" />
      </motion.div>
    </div>
  )
}

/* ─── Components ─── */

function SectionLabel({ children }) {
  return (
    <p className="inline-flex items-center gap-2 text-[#00C8F8] font-bold text-sm uppercase tracking-wide mb-6">
      <span className="w-2.5 h-2.5 rounded-full bg-[#00C8F8]" />
      {children}
    </p>
  )
}

function PrivacyItem({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="grid md:grid-cols-[80px_1fr] gap-6 md:gap-10 py-8 border-b border-[#222222] last:border-b-0"
    >
      <div className="w-16 h-16 rounded-full bg-[#1A1A1A] text-[#00C8F8] flex items-center justify-center text-xl font-bold shrink-0">
        {item.number}
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">{item.title}</h2>
        <p className="text-[#E5E7EB] text-base leading-relaxed max-w-4xl">
          {item.description}
        </p>
      </div>
    </motion.article>
  )
}

/* ─── Page ─── */

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#000000]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-16 overflow-hidden bg-[#000000] border-b border-[#1A1A1A]">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#1A1A1A]/50 blur-3xl" />
          <div className="absolute top-1/3 -left-24 w-72 h-72 rounded-full bg-[#1A1A1A]/40 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SectionLabel>Legal</SectionLabel>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-7">
                Privacy Policy
              </h1>

              <p className="text-xl text-[#9CA3AF] leading-relaxed max-w-3xl">
                Your privacy is important to us. This Privacy Policy explains
                how we collect, use, disclose, and protect your information when
                you visit our website or use our services.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <PrivacyIllustration />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Policy Content ── */}
      <section className="py-12 sm:py-14 bg-[#000000]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            {privacySections.map((item, index) => (
              <PrivacyItem key={item.number} item={item} index={index} />
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="mt-9 text-sm text-[#9CA3AF]"
          >
            Last updated: May 20, 2025
          </motion.p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
