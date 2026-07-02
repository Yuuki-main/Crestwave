'use client'

import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

/* ─── Data ─── */

const stats = [
  {
    value: '1+',
    label: 'Years in Business',
    icon: 'users',
  },
  {
    value: '3+',
    label: 'Projects Delivered',
    icon: 'briefcase',
  },
  {
    value: '98%',
    label: 'Client Satisfaction',
    icon: 'smile',
  },
  {
    value: 'Canberra',
    label: 'ACT, Australia',
    icon: 'pin',
  },
]

const values = [
  {
    title: 'Client First',
    description: 'We put your goals at the center of everything we do.',
    icon: 'users',
  },
  {
    title: 'Results Driven',
    description: 'We focus on measurable outcomes that drive growth.',
    icon: 'chart',
  },
  {
    title: 'Technical Excellence',
    description: 'We build fast, secure and scalable digital solutions.',
    icon: 'code',
  },
  {
    title: 'Transparent',
    description: 'Clear communication and honest advice, always.',
    icon: 'message',
  },
  {
    title: 'Long-Term Partner',
    description: 'We grow with you and support you over time.',
    icon: 'handshake',
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
        <path d="M9 9h.01" />
        <path d="M15 9h.01" />
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
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="M8 15l3-3 3 2 5-7" />
      </svg>
    ),
    code: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M16 18l6-6-6-6" />
        <path d="M8 6l-6 6 6 6" />
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
        <path d="M8 12l4-4 4 4" />
        <path d="M12 8v11" />
      </svg>
    ),
    arrow: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
      </svg>
    ),
    mail: (
      <svg viewBox="0 0 24 24" className={className} {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
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

/* ─── Visuals ─── */

function TeamMeetingVisual() {
  return (
    <div className="relative">
      <div className="relative h-[360px] rounded-[2rem] overflow-hidden bg-[#0A0A0A] border border-[#222222] shadow-sm">
        <svg viewBox="0 0 520 360" className="w-full h-full" fill="none">
          <rect width="520" height="360" fill="url(#meetingBg)" />

          {/* Window */}
          <rect
            x="350"
            y="40"
            width="120"
            height="190"
            rx="18"
            fill="#1A1A1A"
            opacity="0.8"
          />
          <path d="M410 40v190M350 105h120" stroke="#333333" strokeWidth="3" />

          {/* Screen */}
          <rect
            x="150"
            y="58"
            width="190"
            height="112"
            rx="18"
            fill="#000000"
          />
          <rect x="166" y="75" width="158" height="78" rx="12" fill="#111111" />
          <circle cx="204" cy="114" r="18" fill="#AAFF00" opacity="0.16" />
          <text
            x="230"
            y="119"
            fontFamily="system-ui"
            fontSize="18"
            fontWeight="700"
            fill="#FFFFFF"
          >
            Crestwave
          </text>

          {/* Table */}
          <ellipse
            cx="265"
            cy="270"
            rx="190"
            ry="58"
            fill="#222222"
            opacity="0.55"
          />
          <ellipse cx="265" cy="252" rx="170" ry="45" fill="#111111" />

          {/* People */}
          <g opacity="0.95">
            <circle cx="240" cy="190" r="24" fill="#D7B79D" />
            <path d="M204 350c2-70 22-112 58-112s57 42 59 112" fill="#111827" />
            <rect
              x="215"
              y="215"
              width="90"
              height="88"
              rx="28"
              fill="#111111"
            />
          </g>

          <g>
            <circle cx="120" cy="230" r="20" fill="#CFA48B" />
            <path d="M68 350c4-54 21-86 54-86s50 32 54 86" fill="#222222" />
          </g>

          <g>
            <circle cx="405" cy="230" r="20" fill="#D6B39B" />
            <path d="M350 350c4-54 21-86 54-86s51 32 55 86" fill="#2A2A2A" />
          </g>

          <g>
            <circle cx="300" cy="230" r="17" fill="#D8B197" />
            <path d="M260 350c3-48 18-76 45-76s42 28 45 76" fill="#333333" />
          </g>

          {/* Laptops */}
          <rect x="155" y="250" width="66" height="42" rx="8" fill="#222222" />
          <rect x="315" y="250" width="66" height="42" rx="8" fill="#222222" />
          <rect x="235" y="245" width="70" height="45" rx="8" fill="#222222" />

          <defs>
            <linearGradient id="meetingBg" x1="0" y1="0" x2="520" y2="360">
              <stop stopColor="#111111" />
              <stop offset="0.5" stopColor="#0A0A0A" />
              <stop offset="1" stopColor="#111111" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-5 top-10 bg-[#111111] border border-[#222222] rounded-3xl shadow-lg p-5 w-36"
      >
        <div className="w-10 h-10 bg-[#1A1A1A] rounded-2xl flex items-center justify-center text-[#AAFF00] mb-3">
          <Icon name="users" className="w-5 h-5" />
        </div>
        <p className="text-2xl font-bold text-white">10+</p>
        <p className="text-xs text-[#D1D5DB] leading-tight">
          Years of Experience
        </p>
      </motion.div>

      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-5 bottom-8 bg-[#111111] border border-[#222222] rounded-3xl shadow-lg p-5 w-36"
      >
        <div className="w-10 h-10 bg-[#1A1A1A] rounded-2xl flex items-center justify-center text-[#AAFF00] mb-3">
          <Icon name="chart" className="w-5 h-5" />
        </div>
        <p className="text-2xl font-bold text-white">150+</p>
        <p className="text-xs text-[#D1D5DB] leading-tight">
          Projects Delivered
        </p>
      </motion.div>
    </div>
  )
}

function SydneyVisual() {
  return (
    <div className="relative h-[330px] rounded-[2rem] overflow-hidden border border-[#222222] shadow-sm bg-[#0A0A0A]">
      <svg viewBox="0 0 620 330" className="w-full h-full" fill="none">
        <rect width="620" height="330" fill="url(#sky)" />
        <path
          d="M0 225C120 200 190 230 295 205C410 178 510 210 620 188V330H0Z"
          fill="#555555"
          opacity="0.45"
        />
        <path
          d="M0 250C120 225 210 260 315 235C430 208 520 238 620 218V330H0Z"
          fill="#444444"
          opacity="0.35"
        />

        {/* Opera House */}
        <path d="M115 205C138 140 175 115 212 205H115Z" fill="#111111" />
        <path d="M165 205C194 132 238 108 270 205H165Z" fill="#222222" />
        <path d="M218 205C250 150 290 132 320 205H218Z" fill="#111111" />

        {/* Bridge */}
        <path
          d="M330 198C405 90 520 92 590 198"
          stroke="#222222"
          strokeWidth="8"
        />
        <path d="M340 198H600" stroke="#222222" strokeWidth="5" />
        {Array.from({ length: 9 }).map((_, i) => (
          <path
            key={i}
            d={`M${350 + i * 27} 198L${375 + i * 18} ${135 + Math.abs(i - 4) * 8}`}
            stroke="#222222"
            strokeWidth="2"
            opacity="0.75"
          />
        ))}

        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="620" y2="330">
            <stop stopColor="#111111" />
            <stop offset="0.45" stopColor="#1A1A1A" />
            <stop offset="1" stopColor="#111111" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute left-8 bottom-8 bg-[#111111] rounded-3xl border border-[#222222] shadow-lg p-5 flex items-center gap-4">
        <div className="w-11 h-11 bg-[#1A1A1A] rounded-2xl flex items-center justify-center text-[#AAFF00]">
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

/* ─── Components ─── */

function SectionLabel({ children }) {
  return (
    <p className="inline-flex items-center gap-2 text-[#AAFF00] font-bold text-xs uppercase tracking-wide mb-4">
      <Icon name="spark" className="w-3.5 h-3.5" />
      {children}
    </p>
  )
}

function StatCard({ stat, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="flex items-center gap-4"
    >
      <div className="w-13 h-13 bg-[#1A1A1A] rounded-2xl flex items-center justify-center text-[#AAFF00] shrink-0">
        <Icon name={stat.icon} className="w-6 h-6" />
      </div>
      <div>
        <p className="text-2xl font-bold text-white">{stat.value}</p>
        <p className="text-sm text-[#9CA3AF]">{stat.label}</p>
      </div>
    </motion.div>
  )
}

function ValueItem({ value, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="text-center"
    >
      <div className="w-16 h-16 mx-auto bg-[#1A1A1A] rounded-full flex items-center justify-center text-[#AAFF00] mb-5">
        <Icon name={value.icon} className="w-7 h-7" />
      </div>
      <h3 className="font-bold text-white mb-2">{value.title}</h3>
      <p className="text-sm text-[#9CA3AF] leading-relaxed max-w-[170px] mx-auto">
        {value.description}
      </p>
    </motion.div>
  )
}

/* ─── Page ─── */

export default function AboutPage() {
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
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
              >
                <SectionLabel>About Us</SectionLabel>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              >
                We build digital solutions that drive{' '}
                <span className="text-[#AAFF00]">real growth.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="text-[#9CA3AF] text-lg leading-relaxed max-w-xl mb-8"
              >
                Crestwave is a digital agency based in Canberra, Australia. We
                partner with ambitious businesses to design, build and grow
                digital systems that create impact and deliver results.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.24 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <a
                  href="/work"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F0F0F0] text-[#000000] font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#AAFF00]/20"
                >
                  Our Work
                  <Icon name="arrow" className="w-4 h-4" />
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border border-[#333333] text-white font-semibold px-7 py-3.5 rounded-xl hover:border-white hover:bg-transparent transition-all duration-200"
                >
                  <Icon name="mail" className="w-4 h-4" />
                  Get in Touch
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <TeamMeetingVisual />
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mt-16 bg-[#111111] border border-[#1A1A1A] rounded-3xl shadow-sm p-6 sm:p-8"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:divide-x divide-[#1A1A1A]">
              {stats.map((stat, index) => (
                <div key={stat.label} className="lg:pl-8 first:pl-0">
                  <StatCard stat={stat} index={index} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="py-20 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              <SydneyVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-center mb-14"
          >
            <SectionLabel>Our Values</SectionLabel>

            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              The principles that guide our work
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {values.map((value, index) => (
              <ValueItem key={value.title} value={value} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 bg-[#000000] px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="bg-[#1A1A1A] border border-[#222222] rounded-3xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 bg-[#111111] rounded-2xl border border-[#222222] flex items-center justify-center text-[#AAFF00] shrink-0 shadow-sm">
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
              className="shrink-0 inline-flex items-center gap-2 bg-white hover:bg-[#F0F0F0] text-[#000000] font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#AAFF00]/20"
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
