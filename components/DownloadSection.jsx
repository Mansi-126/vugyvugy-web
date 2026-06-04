"use client";

import { motion } from "framer-motion";

export default function DownloadSection() {
  return (
    <section id="download" className="py-28 bg-vugy-primary text-white relative overflow-hidden scroll-mt-16">
      {/* Decorative accent details */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-white/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Label Pill */}
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider mb-6">
            Free Download
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Ready to vibe at work?
          </h2>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-white/80 max-w-lg mb-10 leading-relaxed">
            Join developers who refuse to be boring. Install in seconds.
          </p>

          {/* Download CTAs */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full max-w-md mb-8">
            {/* Windows Download */}
            <a
              href="https://github.com/Mansi-126/vugyvugy-web/releases/download/v1.0.0/VugyVugy.Setup.1.0.0.exe"
              download
              className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white text-vugy-primary hover:bg-[#FAFBF9] font-bold transition-all shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M0 3.449L9.75 2.1v9.45H0V3.449zM0 12.45h9.75v9.45L0 20.551v-8.1zM11.25 1.9L24 0v11.55H11.25V1.9zM11.25 12.45H24v11.55l-12.75-1.9v-9.65z" />
              </svg>
              <div className="text-left leading-tight">
                <span className="block text-[9px] font-medium opacity-85 uppercase font-sans">Download for</span>
                <span className="text-sm font-extrabold">Windows .exe</span>
              </div>
            </a>

            {/* Mac Download */}
            <a
              href="https://github.com/Mansi-126/vugyvugy-web/releases/download/v1.0.0/VugyVugy-1.0.0-arm64.dmg"
              download
              className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-white bg-transparent text-white hover:bg-white/10 font-bold transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.2.67-2.92 1.49-.62.71-1.16 1.85-1.01 2.96 1.12.09 2.27-.57 2.94-1.39z" />
              </svg>
              <div className="text-left leading-tight">
                <span className="block text-[9px] font-medium opacity-85 uppercase font-sans">Download for</span>
                <span className="text-sm font-extrabold">macOS .dmg</span>
              </div>
            </a>
          </div>

          {/* Under Info */}
          <div className="text-xs text-white/60 space-y-2 mt-4 font-mono font-medium">
            <p>Works on Windows & Mac · Free · No account needed</p>
            <p className="italic text-white/50 text-[10px]">
              Works best when your manager isn't watching 😅
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
