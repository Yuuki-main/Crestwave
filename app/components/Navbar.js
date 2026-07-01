'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Services', href: '/services' },
  // { label: 'Solutions', href: '#solutions' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const isActive = (href) => {
    if (href.startsWith('/')) return pathname === href
    return false
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="cursor-pointer flex items-center gap-2">
            <Image
              src="/crestwave_logo.png"
              alt="Crestwave"
              width={200}
              height={48}
              className="h-10 w-auto"
            />
            {/* <span className="text-lg font-bold text-gray-900">Crestwave</span> */}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    active
                      ? 'text-blue-600 border-b-2 border-blue-600 pb-0.5'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-gray-700 transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-700 transition-all ${mobileOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-700 transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
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
            className="md:hidden bg-white border-t border-gray-100"
          >
            <nav className="flex flex-col px-4 py-4 gap-4">
              {navLinks.map((link) => {
                const active = isActive(link.href)
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-sm font-medium ${active ? 'text-blue-600' : 'text-gray-700'}`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
