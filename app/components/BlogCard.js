'use client'

import { motion } from 'framer-motion'

export default function BlogCard({ post, index = 0 }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.35, delay: (index % 9) * 0.04 }}
      className="flex flex-col bg-[#000000] border border-[#222222] rounded-3xl overflow-hidden shadow-sm hover:shadow-lg hover:border-[#333333] transition-all duration-300 group"
    >
      {/* Card image slot — artwork to be added */}
      <div className="h-48 rounded-t-3xl bg-[#1A1A1A] border-b border-[#333333]" />

      <div className="flex flex-col flex-1 p-6">
        <span className="inline-flex self-start items-center px-2.5 py-1 rounded-lg bg-[#1A1A1A] text-[#D1D5DB] text-[11px] font-bold uppercase tracking-wide border border-[#222222] mb-3">
          {post.category}
        </span>

        <h3 className="text-lg font-bold text-white leading-snug mb-2">
          {post.title}
        </h3>

        <p className="text-sm text-[#9CA3AF] leading-relaxed mb-5">
          {post.purpose}
        </p>

        <div className="mb-5">
          <p className="text-[11px] font-bold text-[#00C8F8] uppercase tracking-wide mb-2">
            Key points to cover
          </p>
          <ul className="space-y-1.5">
            {post.keyPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2 text-sm text-[#E5E7EB]"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00C8F8"
                  strokeWidth="3"
                  className="mt-1 shrink-0"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-5">
          <p className="text-[11px] font-bold text-[#9CA3AF] uppercase tracking-wide mb-2">
            Target keywords
          </p>
          <div className="flex flex-wrap gap-2">
            {post.keywords.map((keyword) => (
              <span
                key={keyword}
                className="px-2.5 py-1 rounded-lg bg-[#111111] border border-[#222222] text-xs text-[#D1D5DB]"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-5 border-t border-[#1A1A1A]">
          <p className="text-[11px] font-bold text-[#9CA3AF] uppercase tracking-wide mb-2">
            Call to action
          </p>
          <p className="text-sm font-semibold text-[#00C8F8] leading-snug">
            {post.cta}
          </p>
        </div>
      </div>
    </motion.article>
  )
}
