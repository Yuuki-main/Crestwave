'use client'

import { useMemo, useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BlogCard from '../components/BlogCard'
import { categories, posts } from './data'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

function CategoryTabs({ active, setActive }) {
  return (
    <div className="bg-[#000000] border border-[#222222] rounded-2xl p-2 flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActive(category)}
          className={`cursor-pointer shrink-0 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
            active === category
              ? 'bg-[#1A1A1A] text-[#D1D5DB] border border-[#333333]'
              : 'text-[#9CA3AF] hover:text-white hover:bg-[#0A0A0A]'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

function MobileCategoryFilter({ active, setActive }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="lg:hidden relative">
      <button
        onClick={() => setOpen(!open)}
        className="cursor-pointer w-full flex items-center justify-between bg-[#000000] border border-[#222222] rounded-2xl px-4 py-3 text-sm font-semibold text-[#D1D5DB]"
      >
        {active}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
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
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActive(category)
                  setOpen(false)
                }}
                className={`cursor-pointer w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  active === category
                    ? 'bg-[#1A1A1A] text-[#D1D5DB]'
                    : 'text-[#9CA3AF] hover:bg-[#0A0A0A]'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function BlogsPage() {
  const [active, setActive] = useState('All Posts')
  const ctaRef = useRef(null)

  const filteredPosts = useMemo(() => {
    if (active === 'All Posts') return posts
    return posts.filter((post) => post.category === active)
  }, [active])

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (reduced) return

      const tl = gsap.timeline()
      tl.fromTo(
        '.blog-badge',
        { opacity: 0, y: 16, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6 },
      )
      tl.fromTo(
        '.blog-heading-line',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 },
        0.1,
      )
      tl.fromTo(
        '.blog-desc',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        0.4,
      )

      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ctaRef.current,
              start: 'top 90%',
              once: true,
            },
          },
        )
      }
    })

    return () => ctx.revert()
  }, [])

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
              <div className="blog-badge inline-flex items-center gap-2 bg-[#1A1A1A] border border-[#333333] text-[#D1D5DB] text-xs font-semibold px-3 py-1.5 rounded-full mb-5 uppercase">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
                Blogs
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
                <span className="blog-heading-line block">Insights That</span>
                <span className="blog-heading-line block">
                  Drive{' '}
                  <span className="text-[#00C8F8]">Digital Growth.</span>
                </span>
              </h1>

              <p className="blog-desc text-[#9CA3AF] text-lg leading-relaxed max-w-xl">
                Practical guidance on websites, CRM, energy systems, SEO and
                automation — written for Australian businesses that want their
                digital systems to actually perform.
              </p>
            </div>

            {/* Hero image slot — artwork to be added */}
            <div className="self-stretch w-full h-full min-h-64 sm:min-h-80 rounded-3xl bg-[#1A1A1A] border border-[#333333]" />
          </div>
        </div>
      </section>

      {/* ── Posts ── */}
      <section className="py-16 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:block mb-8">
            <CategoryTabs active={active} setActive={setActive} />
          </div>

          <div className="lg:hidden mb-6">
            <MobileCategoryFilter active={active} setActive={setActive} />
          </div>

          <p className="text-sm text-[#6B7280] mb-6">
            Showing {filteredPosts.length}{' '}
            {filteredPosts.length === 1 ? 'brief' : 'briefs'}
          </p>

          <AnimatePresence mode="popLayout">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredPosts.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-10 px-4 bg-[#000000]">
        <div className="max-w-7xl mx-auto">
          <div
            ref={ctaRef}
            className="bg-[#1A1A1A] border border-[#222222] rounded-3xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-[#333333] transition-colors duration-500"
          >
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 bg-[#111111] rounded-2xl border border-[#222222] flex items-center justify-center text-[#00C8F8] shrink-0 shadow-sm">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Want this content written for your business?
                </h3>
                <p className="text-[#9CA3AF]">
                  Crestwave plans, writes and publishes content built around
                  the searches your customers actually make.
                </p>
              </div>
            </div>

            <a
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 bg-white hover:bg-[#F0F0F0] text-[#000000] font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#00C8F8]/20"
            >
              Talk to Crestwave
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
