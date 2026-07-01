"use client";
import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-linear-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-3xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-800 mb-1">
                Not sure which service you need?
              </h3>
              <p className="text-gray-600 text-sm">
                Tell us your current website goal and we&apos;ll recommend the right service mix.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5"
          >
            Find My Service Mix
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
