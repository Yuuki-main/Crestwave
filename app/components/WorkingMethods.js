'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const methods = [
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z" />
        <path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
        <path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z" />
        <path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z" />
        <path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z" />
        <path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
        <path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z" />
        <path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z" />
      </svg>
    ),
    title: 'One-off Project',
    bestFor: 'Specific projects with clear scope',
    whatYouGet: 'Strategy, build and handover',
    duration: '2–10 weeks',
    cta: 'Start a Project',
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Growth Sprint',
    bestFor: 'Fast improvements and focused growth',
    whatYouGet: 'Strategy, build and measurable results',
    duration: '2–6 weeks',
    cta: 'Start a Sprint',
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'Ongoing Partner',
    bestFor: 'Long-term growth, continuous improvement',
    whatYouGet: 'Ongoing support, optimisation',
    duration: '2–6 weeks',
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

const packageCards = [
  { title: 'Website Build', sub: '4–8 weeks · Strong website' },
  { title: 'SEO & Performance', sub: '2–6 weeks · Better rankings' },
  { title: 'Growth System', sub: '4–10 weeks · More growth' },
  { title: 'Ongoing Support', sub: 'Monthly · Stable site' },
]

export default function WorkingMethods() {
  const [openMethod, setOpenMethod] = useState(null)

  return (
    <section className="py-20 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Ways to Work */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold text-white mb-8"
            >
              Ways to Work With Crestwave
            </motion.h2>

            {/* Desktop cards */}
            <div className="hidden md:grid grid-cols-3 gap-4">
              {methods.map((m, i) => (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-[#0A0A0A] rounded-2xl p-5 border border-[#1A1A1A] hover:border-[#333333] hover:bg-[#1A1A1A]/30 transition-all duration-200 flex flex-col"
                >
                  <div className="w-10 h-10 bg-[#000000] rounded-xl flex items-center justify-center text-[#00C8F8] shadow-sm mb-4">
                    {m.icon}
                  </div>
                  <h3 className="font-bold text-white mb-3">{m.title}</h3>
                  <div className="space-y-2 flex-1 text-xs">
                    <div>
                      <span className="text-[#9CA3AF]">Best for: </span>
                      <span className="text-[#E5E7EB]">{m.bestFor}</span>
                    </div>
                    <div>
                      <span className="text-[#9CA3AF]">What you get: </span>
                      <span className="text-[#E5E7EB]">{m.whatYouGet}</span>
                    </div>
                    <div>
                      <span className="text-[#9CA3AF]">Typical duration: </span>
                      <span className="text-[#E5E7EB]">{m.duration}</span>
                    </div>
                  </div>
                  <button className="cursor-pointer mt-4 w-full text-center text-sm font-semibold text-white border border-[#333333] rounded-xl py-2.5 hover:border-white bg-transparent transition-all duration-200">
                    {m.cta} →
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Mobile accordion */}
            <div className="md:hidden space-y-2">
              {methods.map((m, i) => (
                <div
                  key={m.title}
                  className="border border-[#222222] rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenMethod(openMethod === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 bg-[#000000] text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-[#1A1A1A] rounded-xl flex items-center justify-center text-[#00C8F8]">
                        {m.icon}
                      </div>
                      <span className="font-semibold text-white">
                        {m.title}
                      </span>
                    </div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`text-[#6B7280] transition-transform ${openMethod === i ? 'rotate-180' : ''}`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {openMethod === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 border-t border-[#1A1A1A] space-y-2 text-sm">
                          <div className="mt-3">
                            <span className="text-[#9CA3AF]">Best for: </span>
                            <span className="text-[#E5E7EB]">{m.bestFor}</span>
                          </div>
                          <div>
                            <span className="text-[#9CA3AF]">
                              What you get:{' '}
                            </span>
                            <span className="text-[#E5E7EB]">
                              {m.whatYouGet}
                            </span>
                          </div>
                          <div>
                            <span className="text-[#9CA3AF]">Duration: </span>
                            <span className="text-[#E5E7EB]">{m.duration}</span>
                          </div>
                          <button className="cursor-pointer mt-2 w-full text-center text-sm font-semibold text-[#00C8F8] border border-[#333333] rounded-xl py-2.5">
                            {m.cta} →
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Package cards (mobile-visible list) */}
            <div className="mt-8 space-y-2 md:hidden">
              {packageCards.map((card) => (
                <div
                  key={card.title}
                  className="flex items-center justify-between p-4 bg-[#0A0A0A] rounded-xl border border-[#1A1A1A]"
                >
                  <div>
                    <p className="font-semibold text-white text-sm">
                      {card.title}
                    </p>
                    <p className="text-xs text-[#9CA3AF] mt-0.5">{card.sub}</p>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9CA3AF"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* What You Can Expect */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold text-white mb-8"
            >
              What You Can Expect
            </motion.h2>

            <div className="space-y-3">
              {expectations.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-[#1A1A1A] flex items-center justify-center shrink-0">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00C8F8"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-[#E5E7EB] font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
