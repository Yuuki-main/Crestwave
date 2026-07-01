'use client'
import Image from 'next/image'
import Link from 'next/link'

const socialLinks = [
  {
    icon: (
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    ),
    href: 'https://www.linkedin.com/company/crestwave-digital/',
    label: 'LinkedIn',
  },
  {
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16.5 6.5h.01" />
      </>
    ),
    href: 'https://www.instagram.com/crest_wavedigital?igsh=MWY4ejh1cXVwcTV2eQ',
    label: 'Instagram',
  },
  {
    icon: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
    href: 'https://www.facebook.com/share/18yv9wV39s/',
    label: 'Facebook',
  },
]

const footerLinks = {
  Services: [
    'CRM Websites',
    'CMS Development',
    'Technical SEO',
    'Web Performance',
    'UX Optimisation',
    'Analytics & Strategy',
    'Ongoing Support',
  ],
  Solutions: [
    'Lead Generation',
    'E-commerce',
    'Marketing Platforms',
    'Integrations',
    'Website Migration',
    'Web Performance',
  ],
  Company: ['About Us', 'Work', 'Blog', 'Careers', 'Contact'],
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            {/* <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M9 2C5.13 2 2 5.13 2 9s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8.2c-1.67 0-3.14-.85-4-2.15.02-1.33 2.67-2.05 4-2.05 1.33 0 3.98.72 4 2.05a4.8 4.8 0 01-4 2.15z"
                    fill="white"
                  />
                </svg>
              </div>
              <span className="text-lg font-bold text-gray-900">Crestwave</span>
            </Link> */}
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
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="cursor-pointer w-8 h-8 bg-gray-100 hover:bg-blue-50 hover:text-blue-600 rounded-lg flex items-center justify-center text-gray-500 transition-colors"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-semibold text-gray-900 mb-4 text-sm">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="cursor-pointer text-sm text-gray-500 hover:text-gray-800 transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm">
              Get in touch
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+61428895741"
                className="cursor-pointer flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors"
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
                className="cursor-pointer flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors"
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
              <div className="flex items-center gap-2 text-sm text-gray-500">
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
                Canberra, Australia
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © 2025 Crestwave Pty Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="cursor-pointer text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="cursor-pointer text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
