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
  {
    icon: (
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    ),
    href: 'https://wa.me/61428895741',
    label: 'WhatsApp',
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
  Company: ['About Us', 'Work', 'Services', 'Contact'],
}

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#1A1A1A] pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            {/* <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#000000] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M9 2C5.13 2 2 5.13 2 9s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8.2c-1.67 0-3.14-.85-4-2.15.02-1.33 2.67-2.05 4-2.05 1.33 0 3.98.72 4 2.05a4.8 4.8 0 01-4 2.15z"
                    fill="white"
                  />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">Crestwave</span>
            </Link> */}
            <Link href="/" className="cursor-pointer flex items-center gap-2">
              <Image
                src="/web_logo.png"
                alt="Crestwave"
                width={200}
                height={48}
                className="h-10 w-auto"
              />
              {/* <span className="text-lg font-bold text-white">Crestwave</span> */}
            </Link>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="cursor-pointer w-8 h-8 bg-[#161616] hover:bg-[#1A1A1A] hover:text-[#AAFF00] rounded-lg flex items-center justify-center text-[#9CA3AF] transition-colors"
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
              <h4 className="font-semibold text-white mb-4 text-sm">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="cursor-pointer text-sm text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors"
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
            <h4 className="font-semibold text-white mb-4 text-sm">
              Get in touch
            </h4>
            <div className="space-y-3">
              <a
                href="tel:0489943211"
                className="cursor-pointer flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors"
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
                0489943211
              </a>
              <a
                href="mailto:hello@crestwavedigital.com"
                className="cursor-pointer flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors"
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
              <div className="flex items-center gap-2 text-sm text-[#9CA3AF]">
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
        <div className="border-t border-[#1A1A1A] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#555555]">
            © 2025 Crestwave Pty Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="cursor-pointer text-xs text-[#555555] hover:text-[#9CA3AF] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="cursor-pointer text-xs text-[#555555] hover:text-[#9CA3AF] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
