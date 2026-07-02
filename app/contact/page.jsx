'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

/* ─── Hero illustration ─── */
function ContactIllustration() {
  return (
    <div className="relative w-64 h-48 sm:w-80 sm:h-56">
      {/* Envelope */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="absolute top-4 left-1/2 -translate-x-1/2 w-48 sm:w-56"
      >
        <svg
          viewBox="0 0 220 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="4"
            y="20"
            width="212"
            height="126"
            rx="12"
            fill="#111111"
            stroke="#1A1A1A"
            strokeWidth="2"
          />
          <rect
            x="4"
            y="20"
            width="212"
            height="126"
            rx="12"
            fill="url(#envGrad)"
            opacity="0.4"
          />
          <path d="M4 32L110 88L216 32" stroke="#333333" strokeWidth="2" />
          <circle
            cx="170"
            cy="50"
            r="24"
            fill="#111111"
            stroke="#1A1A1A"
            strokeWidth="2"
          />
          <path
            d="M162 50h16M170 42v16"
            stroke="#555555"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="envGrad"
              x1="4"
              y1="20"
              x2="216"
              y2="146"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#111111" />
              <stop offset="1" stopColor="#1A1A1A" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Phone badge */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-2 left-6 w-14 h-14 bg-[#111111] rounded-2xl shadow-lg border border-[#222222] flex items-center justify-center"
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#AAFF00"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.76 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.7 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.65a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </motion.div>

      {/* Floating dots */}
      {[
        { top: '10%', right: '8%', size: 5, delay: 0 },
        { top: '50%', left: '4%', size: 4, delay: 0.6 },
        { bottom: '15%', right: '12%', size: 6, delay: 1.2 },
      ].map((d, i) => (
        <motion.div
          key={i}
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: d.delay }}
          className="absolute rounded-full bg-[#AAFF00]"
          style={{
            width: d.size,
            height: d.size,
            top: d.top,
            right: d.right,
            left: d.left,
            bottom: d.bottom,
          }}
        />
      ))}
    </div>
  )
}

/* ─── Sydney map SVG ─── */
function SydneyMap() {
  return (
    <div className="relative w-full h-full min-h-64 bg-[#0A0A0A] rounded-2xl overflow-hidden">
      <svg
        viewBox="0 0 500 320"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ background: '#0D0D0D' }}
      >
        {/* Water */}
        <rect width="500" height="320" fill="#0D0D0D" />
        {/* Land masses */}
        <path
          d="M0 80 Q60 60 120 90 Q180 50 220 70 Q260 40 300 80 Q340 60 380 90 Q420 70 460 100 Q500 80 500 120V320H0Z"
          fill="#1A1A1A"
          opacity="0.5"
        />
        <path
          d="M100 120 Q140 100 180 130 Q220 110 260 140 Q300 120 340 150 Q370 130 400 160V320H80Z"
          fill="#1A1A1A"
          opacity="0.6"
        />
        {/* Roads */}
        <path
          d="M0 180 Q100 170 200 185 Q300 175 500 180"
          stroke="#2A2A2A"
          strokeWidth="3"
          strokeDasharray="8 4"
        />
        <path
          d="M220 320 Q230 250 240 200 Q250 160 260 120"
          stroke="#2A2A2A"
          strokeWidth="2.5"
          strokeDasharray="6 4"
        />
        <path
          d="M150 320 Q180 280 200 240 Q220 210 250 200"
          stroke="#2A2A2A"
          strokeWidth="2"
          strokeDasharray="5 4"
        />
        {/* Harbour bridge shape */}
        <path
          d="M180 160 Q200 140 220 160"
          stroke="#333333"
          strokeWidth="3"
          fill="none"
        />
        {/* CBD buildings */}
        {[
          [230, 170, 12, 40],
          [248, 175, 10, 35],
          [263, 168, 14, 42],
          [281, 172, 11, 38],
          [296, 175, 9, 32],
        ].map(([x, y, w, h], i) => (
          <rect
            key={i}
            x={x}
            y={y}
            width={w}
            height={h}
            rx="2"
            fill="#2A2A2A"
            opacity="0.8"
          />
        ))}
        {/* Pin */}
        <g transform="translate(248, 145)">
          <circle cx="12" cy="12" r="12" fill="#AAFF00" opacity="0.15" />
          <path
            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
            fill="#AAFF00"
          />
        </g>
        {/* Label */}
        <text
          x="260"
          y="178"
          fontFamily="system-ui"
          fontSize="11"
          fill="#9CA3AF"
          fontWeight="600"
        >
          Sydney CBD
        </text>
        {/* Darling Harbour label */}
        <text
          x="195"
          y="210"
          fontFamily="system-ui"
          fontSize="9"
          fill="#6B7280"
        >
          Darling Harbour
        </text>
        {/* Pyrmont */}
        <text
          x="148"
          y="235"
          fontFamily="system-ui"
          fontSize="9"
          fill="#6B7280"
        >
          Pyrmont
        </text>
        {/* Circular Quay */}
        <text
          x="256"
          y="140"
          fontFamily="system-ui"
          fontSize="8"
          fill="#6B7280"
        >
          Circular Quay
        </text>
        {/* Barangaroo */}
        <text
          x="170"
          y="158"
          fontFamily="system-ui"
          fontSize="8"
          fill="#6B7280"
        >
          Barangaroo
        </text>
        {/* Wynyard */}
        <text
          x="292"
          y="128"
          fontFamily="system-ui"
          fontSize="8"
          fill="#6B7280"
        >
          Wynyard
        </text>
      </svg>
    </div>
  )
}

/* ─── FAQ accordion ─── */
const faqs = [
  {
    q: 'How quickly will you respond?',
    a: 'We aim to respond to all enquiries within 1 business day. For urgent matters, please call us directly on +61 428 895 741.',
  },
  {
    q: 'Can I book a call before sending a brief?',
    a: "Absolutely. We're happy to have an initial conversation to understand your needs before you commit to anything. Use the Book a Time button to schedule a free 30-minute call.",
  },
  {
    q: 'Do you work with businesses outside Sydney?',
    a: 'Yes — we work with clients across Australia. Most of our work is done remotely with regular video calls. We can also travel for larger projects if needed.',
  },
  {
    q: 'What should I include in my enquiry?',
    a: "The more context the better: your goals, current situation, rough timeline, and budget range all help us prepare a relevant response. But even a short message works — we'll ask the right questions.",
  },
]

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-[#222222] overflow-hidden ">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-[#000000] hover:bg-[#0A0A0A] transition-colors cursor-pointer"
      >
        <span className="font-semibold text-white text-sm sm:text-base">
          {faq.q}
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`text-[#6B7280] shrink-0 ml-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
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
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-[#9CA3AF] text-sm leading-relaxed border-t border-[#1A1A1A] pt-4">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─── Page ─── */
export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(null)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    stage: '',
    budget: '',
    message: '',
  })
  const [agreed, setAgreed] = useState(false)
  const [status, setStatus] = useState('idle')

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!agreed) return
    setStatus('loading')
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, agreed }),
    })
    setStatus(res.ok ? 'success' : 'error')
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-16 overflow-hidden bg-[#000000]">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#222222]/40 blur-3xl" />
          <div className="absolute top-1/2 -left-16 w-64 h-64 rounded-full bg-[#00AAFF]/10 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="inline-flex items-center gap-2 bg-[#1A1A1A] border border-[#333333] text-[#D1D5DB] text-xs font-semibold px-3 py-1.5 rounded-full mb-5"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Us
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4"
              >
                Let&apos;s Start the
                <br />
                Right Conversation
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="text-[#9CA3AF] text-lg leading-relaxed max-w-md"
              >
                Tell us what you&apos;re building, where you are in the process,
                and what kind of support you need. We&apos;ll help you find the
                best next step.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <ContactIllustration />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Form + Cards ── */}
      <section className="py-16 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_380px] gap-8 items-start">
            {/* Form card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#111111] border border-[#222222] rounded-3xl shadow-sm p-8"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 bg-[#1A1A1A] rounded-xl flex items-center justify-center text-[#AAFF00]">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-white">
                  Send an Enquiry
                </h2>
              </div>
              <p className="text-sm text-[#9CA3AF] mb-7 ml-12">
                Fill out the form below and we&apos;ll get back to you shortly.
              </p>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#D1D5DB] mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#222222] text-sm text-white placeholder-[#6B7280] bg-[#0D0D0D] focus:outline-none focus:border-[#AAFF00] focus:ring-2 focus:ring-[#AAFF00]/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#D1D5DB] mb-1.5">
                      Work Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your work email"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#222222] text-sm text-white placeholder-[#6B7280] bg-[#0D0D0D] focus:outline-none focus:border-[#AAFF00] focus:ring-2 focus:ring-[#AAFF00]/10 transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#D1D5DB] mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Enter your company name"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#222222] text-sm text-white placeholder-[#6B7280] bg-[#0D0D0D] focus:outline-none focus:border-[#AAFF00] focus:ring-2 focus:ring-[#AAFF00]/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#D1D5DB] mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#222222] text-sm text-white placeholder-[#6B7280] bg-[#0D0D0D] focus:outline-none focus:border-[#AAFF00] focus:ring-2 focus:ring-[#AAFF00]/10 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#D1D5DB] mb-1.5">
                    What do you need help with?
                  </label>
                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="cursor-pointer w-full appearance-none px-4 py-2.5 rounded-xl border border-[#222222] text-sm text-[#9CA3AF] bg-[#0A0A0A] focus:outline-none focus:border-[#AAFF00] focus:ring-2 focus:ring-[#AAFF00]/10 transition-all pr-10"
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option>CRM Websites</option>
                      <option>CMS Development</option>
                      <option>Technical SEO</option>
                      <option>Web Performance</option>
                      <option>UX Optimisation</option>
                      <option>Analytics &amp; Strategy</option>
                      <option>Ongoing Support</option>
                      <option>Not sure yet</option>
                    </select>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#555555"
                      strokeWidth="2"
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#D1D5DB] mb-1.5">
                      Project stage
                    </label>
                    <div className="relative">
                      <select
                        name="stage"
                        value={formData.stage}
                        onChange={handleChange}
                        className="cursor-pointer w-full appearance-none px-4 py-2.5 rounded-xl border border-[#222222] text-sm text-[#9CA3AF] bg-[#0A0A0A] focus:outline-none focus:border-[#AAFF00] focus:ring-2 focus:ring-[#AAFF00]/10 transition-all pr-10"
                      >
                        <option value="" disabled>
                          Select project stage
                        </option>
                        <option>Just exploring</option>
                        <option>Have a brief</option>
                        <option>Ready to start</option>
                        <option>Ongoing project</option>
                      </select>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#555555"
                        strokeWidth="2"
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#D1D5DB] mb-1.5">
                      Budget range
                    </label>
                    <div className="relative">
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="cursor-pointer w-full appearance-none px-4 py-2.5 rounded-xl border border-[#222222] text-sm text-[#9CA3AF] bg-[#0A0A0A] focus:outline-none focus:border-[#AAFF00] focus:ring-2 focus:ring-[#AAFF00]/10 transition-all pr-10"
                      >
                        <option value="" disabled>
                          Select budget range
                        </option>
                        <option>Under $5,000</option>
                        <option>$5,000 – $15,000</option>
                        <option>$15,000 – $30,000</option>
                        <option>$30,000+</option>
                        <option>Not sure yet</option>
                      </select>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#555555"
                        strokeWidth="2"
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#D1D5DB] mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project, goals, or any specific requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-[#222222] text-sm text-white placeholder-[#6B7280] bg-[#0D0D0D] focus:outline-none focus:border-[#AAFF00] focus:ring-2 focus:ring-[#AAFF00]/10 transition-all resize-none"
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <div
                    onClick={() => setAgreed(!agreed)}
                    className={`w-4 h-4 mt-0.5 rounded border shrink-0 flex items-center justify-center transition-colors ${agreed ? 'bg-[#AAFF00] border-[#AAFF00]' : 'border-[#333333] bg-[#0D0D0D]'}`}
                  >
                    {agreed && (
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </div>
                  <span className="text-xs text-[#9CA3AF] leading-relaxed">
                    I agree to the{' '}
                    <Link
                      href="/privacy"
                      className="text-[#AAFF00] underline underline-offset-2 hover:text-[#D1D5DB]"
                    >
                      Privacy Policy
                    </Link>{' '}
                    and consent to Crestwave contacting me regarding my enquiry.
                  </span>
                </label>

                {status === 'success' ? (
                  <div className="w-full bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                    <p className="text-green-700 font-semibold text-sm">
                      Message sent successfully!
                    </p>
                    <p className="text-green-600 text-xs mt-1">
                      We&apos;ll get back to you within 1 business day.
                    </p>
                  </div>
                ) : (
                  <>
                    <button
                      type="submit"
                      disabled={!agreed || status === 'loading'}
                      className="w-full flex items-center justify-center gap-2 bg-white hover:bg-[#F0F0F0] disabled:bg-[#333333] disabled:cursor-not-allowed text-[#000000] font-semibold py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#AAFF00]/20 hover:-translate-y-0.5 text-sm"
                    >
                      {status === 'loading' ? (
                        <>Sending...</>
                      ) : (
                        <>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <line x1="22" y1="2" x2="11" y2="13" />
                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                          </svg>
                          Send Message
                        </>
                      )}
                    </button>
                    {status === 'error' && (
                      <p className="text-red-500 text-xs text-center mt-2">
                        Something went wrong. Please try again or email us
                        directly.
                      </p>
                    )}
                  </>
                )}
                <p className="text-center text-xs text-[#6B7280] flex items-center justify-center gap-1.5">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  We usually reply within 1 business day.
                </p>
              </form>
            </motion.div>

            {/* Right cards */}
            <div className="space-y-4">
              {/* Email Us */}
              <motion.a
                href="mailto:hello@crestwavedigital.com"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="flex items-center justify-between p-5 bg-[#000000] border border-[#1A1A1A] rounded-2xl shadow-sm hover:border-[#333333] hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#1A1A1A] rounded-xl flex items-center justify-center text-[#AAFF00] group-hover:bg-[#1A1A1A] transition-colors">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">
                      Email Us
                    </p>
                    <p className="text-xs text-[#9CA3AF] mt-0.5">
                      hello@crestwavedigital.com
                    </p>
                  </div>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#555555"
                  strokeWidth="2"
                  className="group-hover:stroke-[#AAFF00] transition-colors"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.a>

              {/* Call Us */}
              <motion.a
                href="tel:1300123456"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-center justify-between p-5 bg-[#000000] border border-[#1A1A1A] rounded-2xl shadow-sm hover:border-[#333333] hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#1A1A1A] rounded-xl flex items-center justify-center text-[#AAFF00] group-hover:bg-[#1A1A1A] transition-colors">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.76 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.7 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.65a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">
                      Call Us
                    </p>
                    <p className="text-xs text-[#9CA3AF] mt-0.5">
                      +61 428 895 741
                    </p>
                  </div>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#555555"
                  strokeWidth="2"
                  className="group-hover:stroke-[#AAFF00] transition-colors"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.a>

              {/* Book a Consultation */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="p-5 bg-[#000000] border border-[#1A1A1A] rounded-2xl shadow-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#1A1A1A] rounded-xl flex items-center justify-center text-[#AAFF00]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">
                      Book a Consultation
                    </p>
                    <p className="text-xs text-[#9CA3AF] mt-0.5">
                      Schedule a free consultation with our team.
                    </p>
                  </div>
                </div>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 w-full bg-white hover:bg-[#F0F0F0] text-[#000000] font-semibold py-2.5 rounded-xl text-sm transition-all duration-200 hover:shadow-md"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                  Book a Time
                </a>
              </motion.div>

              {/* Average Response Time */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex items-center gap-4 p-5 bg-[#000000] border border-[#1A1A1A] rounded-2xl shadow-sm"
              >
                <div className="w-10 h-10 bg-[#1A1A1A] rounded-xl flex items-center justify-center text-[#AAFF00] shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">
                    Average Response Time
                  </p>
                  <p className="text-xs text-[#AAFF00] font-medium mt-0.5">
                    Within 1 business day
                  </p>
                  <p className="text-xs text-[#9CA3AF] mt-1">
                    We&apos;re quick, helpful, and easy to reach.
                  </p>
                </div>
              </motion.div>

              {/* Best For */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="p-5 bg-[#000000] border border-[#1A1A1A] rounded-2xl shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#1A1A1A] rounded-xl flex items-center justify-center text-[#AAFF00] shrink-0">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">
                      Best For
                    </p>
                    <p className="text-xs text-[#9CA3AF]">
                      We help businesses with:
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    'New website',
                    'CMS build',
                    'SEO audit',
                    'Website performance',
                    'CRM integration',
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-[#1A1A1A] text-[#D1D5DB] text-xs font-medium rounded-lg border border-[#222222]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Office ── */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[#AAFF00] font-semibold text-sm flex items-center gap-1.5 mb-3">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Our Office
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
                Canberra, Australia
              </h2>
              <p className="text-[#9CA3AF] mb-2">Level 1, 11–17 Swanson Court</p>
              <p className="text-[#9CA3AF] mb-6">Belconnen, ACT 2617</p>
              <div className="space-y-3 mb-6">
                <a
                  href="tel:1300123456"
                  className="flex items-center gap-2 text-[#E5E7EB] hover:text-[#AAFF00] transition-colors text-sm"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.76 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.7 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.65a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +61 428 895 741
                </a>
                <a
                  href="mailto:hello@crestwavedigital.com"
                  className="flex items-center gap-2 text-[#E5E7EB] hover:text-[#AAFF00] transition-colors text-sm"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  hello@crestwavedigital.com
                </a>
              </div>
              <p className="text-[#9CA3AF] text-sm">
                Working with clients across Australia.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="h-64 sm:h-72 rounded-2xl overflow-hidden border border-[#222222] shadow-sm"
            >
              <SydneyMap />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 bg-[#000000]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-10 flex items-center gap-3"
          >
            <div className="w-9 h-9 bg-[#1A1A1A] rounded-xl flex items-center justify-center text-[#AAFF00]">
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
            </div>
            <h2 className="text-2xl font-bold text-white">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
              >
                <FAQItem
                  faq={faq}
                  isOpen={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="bg-[#000000] rounded-3xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-start gap-5">
              <div className="w-11 h-11 bg-[#FFFFFF]/10 rounded-2xl flex items-center justify-center text-white shrink-0">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Not sure what you need yet?
                </h3>
                <p className="text-[#D1D5DB] text-sm">
                  Send us a short message and we&apos;ll guide you toward the
                  right option.
                </p>
              </div>
            </div>
            <a
              href="#"
              className="shrink-0 inline-flex items-center gap-2 bg-[#000000] text-[#AAFF00] font-semibold px-6 py-3.5 rounded-xl hover:bg-[#1A1A1A] transition-all duration-200 hover:shadow-md"
            >
              Ask a Question
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
