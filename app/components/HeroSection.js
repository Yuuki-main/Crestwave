"use client";
import { motion } from "framer-motion";

function HeroIllustration() {
  return (
    <div className="relative w-full h-80 lg:h-96">
      {/* Browser window mockup */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-72 lg:w-80 bg-[#111111] rounded-2xl shadow-xl border border-[#222222] overflow-hidden"
      >
        <div className="flex items-center gap-1.5 px-4 py-3 bg-[#0A0A0A] border-b border-[#1A1A1A]">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <div className="flex-1 mx-3 h-5 bg-[#222222] rounded-full" />
        </div>
        <div className="p-4 space-y-2">
          <div className="h-3 bg-[#1A1A1A] rounded-full w-3/4" />
          <div className="h-3 bg-[#161616] rounded-full w-full" />
          <div className="h-3 bg-[#161616] rounded-full w-5/6" />
          <div className="h-8 bg-[#AAFF00] rounded-lg w-1/2 mt-4" />
        </div>
      </motion.div>

      {/* Search icon badge */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-8 right-4 lg:right-8 w-14 h-14 bg-[#111111] rounded-2xl shadow-lg flex items-center justify-center border border-[#222222]"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#AAFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
      </motion.div>

      {/* Speed gauge badge */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-8 right-8 lg:right-16 w-14 h-14 bg-[#111111] rounded-2xl shadow-lg flex items-center justify-center border border-[#222222]"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#AAFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 0 1 10 10"/><path d="M12 6a6 6 0 0 1 6 6"/><circle cx="12" cy="12" r="2"/><path d="m12 12 4-4"/>
        </svg>
      </motion.div>

      {/* Person avatar badge */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-4 left-8 w-12 h-12 bg-[#AAFF00] rounded-full shadow-lg flex items-center justify-center"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
        </svg>
      </motion.div>

      {/* Floating dots */}
      {[
        { top: "20%", left: "15%", size: 6, delay: 0 },
        { top: "60%", left: "10%", size: 4, delay: 0.5 },
        { top: "40%", right: "5%", size: 5, delay: 1 },
        { top: "75%", right: "30%", size: 4, delay: 1.5 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: dot.delay }}
          className="absolute rounded-full bg-[#AAFF00]"
          style={{
            width: dot.size,
            height: dot.size,
            top: dot.top,
            left: dot.left,
            right: dot.right,
          }}
        />
      ))}
    </div>
  );
}

const pillars = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
    ),
    title: "Build",
    desc: "Websites, CMS platforms and CRM-connected systems",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
    ),
    title: "Optimise",
    desc: "SEO, UX and performance improvements",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
    ),
    title: "Scale",
    desc: "Analytics, growth strategy and conversion systems",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    ),
    title: "Support",
    desc: "Maintenance, iteration and long-term support",
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-16 overflow-hidden bg-[#000000]">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#222222]/40 blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 rounded-full bg-[#00AAFF]/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-[#1A1A1A]/50 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#1A1A1A] border border-[#333333] text-[#D1D5DB] text-xs font-semibold px-3 py-1.5 rounded-full mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#AAFF00]" />
              Services Page
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
            >
              Services Built Around{" "}
              <span className="text-[#AAFF00]">Digital Growth</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#9CA3AF] text-lg leading-relaxed mb-8 max-w-xl"
            >
              From CRM websites and CMS platforms to technical SEO, performance
              optimisation and analytics, Crestwave helps businesses build digital
              systems that are faster, clearer and easier to scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F0F0F0] text-[#000000] font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#AAFF00]/20 hover:-translate-y-0.5"
              >
                Explore Services
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:border-white text-white font-semibold px-6 py-3.5 rounded-xl border border-[#333333] transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                Book a Consultation
              </a>
            </motion.div>
          </div>

          {/* Right illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <HeroIllustration />
          </motion.div>
        </div>

        {/* Pillars row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pb-8"
        >
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
              className="bg-[#111111]/70 backdrop-blur-sm rounded-2xl p-5 border border-[#333333] hover:bg-[#161616] hover:shadow-md transition-all duration-200"
            >
              <div className="w-9 h-9 bg-[#1A1A1A] rounded-xl flex items-center justify-center text-[#AAFF00] mb-3">
                {p.icon}
              </div>
              <p className="font-semibold text-white text-sm mb-1">{p.title}</p>
              <p className="text-xs text-[#9CA3AF] leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
