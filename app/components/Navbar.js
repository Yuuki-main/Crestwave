'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const headerRef = useRef(null)

  useEffect(() => {
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (reduced) return

    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.fromTo(
        headerRef.current,
        { y: -80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          delay: 0.1,
        },
      )

      // Scroll shadow only — background stays as set by the bg-* class
      ScrollTrigger.create({
        trigger: document.body,
        start: 'top -80',
        onEnter: () => {
          gsap.to(headerRef.current, {
            boxShadow: '0 1px 3px 0 rgba(0,0,0,0.10)',
            duration: 0.3,
            ease: 'power2.out',
          })
        },
        onLeaveBack: () => {
          gsap.to(headerRef.current, {
            boxShadow: '0 0 0 0 rgba(0,0,0,0)',
            duration: 0.3,
            ease: 'power2.out',
          })
        },
      })
    }, headerRef)

    return () => ctx.revert()
  }, [])

  const isActive = (href) => {
    if (href.startsWith('/')) return pathname === href
    return false
  }

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-[#f4f4f5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="cursor-pointer flex items-center gap-2 group"
          >
            <Image
              src="/png.png"
              alt="Crestwave"
              width={200}
              height={48}
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg group ${
                    active ? 'text-[#00C8F8]' : 'text-[#69696a] '
                  }`}
                >
                  {link.label}
                  {/* Hover underline */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#00C8F8] transition-all duration-300 rounded-full ${
                      active
                        ? 'w-5 opacity-100'
                        : 'w-0 opacity-0 group-hover:w-5 group-hover:opacity-100'
                    }`}
                  />
                </Link>
              )
            })}

            {/* CTA button */}
            <Link
              href="/contact"
              className="ml-4 inline-flex items-center gap-2 bg-white hover:bg-[#e5e5e5] border border-[#69696a] text-[#000000] font-semibold px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#00C8F8]/10 hover:-translate-y-[1px]"
            >
              Start a Project
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
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer z-50 group"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-[2px] bg-[#9CA3AF] group-hover:bg-white rounded-full transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-[5px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-[#9CA3AF] group-hover:bg-white rounded-full transition-all duration-300 ${
                mobileOpen ? 'opacity-0 -translate-x-2' : ''
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-[#9CA3AF] group-hover:bg-white rounded-full transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-[5px]' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden bg-[#000000]/98 backdrop-blur-lg border-t border-[#1A1A1A]"
          >
            <nav className="flex flex-col px-4 py-6 gap-1">
              {navLinks.map((link, i) => {
                const active = isActive(link.href)
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.25 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        active
                          ? 'bg-[#1A1A1A] text-[#00C8F8]'
                          : 'text-[#E5E7EB] hover:bg-[#111111] hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.06, duration: 0.25 }}
                className="mt-2"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block mx-4 px-4 py-3 rounded-xl text-sm font-semibold text-center bg-white text-black hover:bg-[#e5e5e5] transition-colors"
                >
                  Start a Project
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
