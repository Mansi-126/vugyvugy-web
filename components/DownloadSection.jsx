"use client";

import { motion } from "framer-motion";
import { useAptabase } from "@aptabase/react";

export default function DownloadSection() {
  const { trackEvent } = useAptabase();
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
          <div className="flex justify-center items-center w-full max-w-[280px] mb-8">
            {/* Windows Download */}
            <a
              href="https://github.com/Mansi-126/vugyvugy-web/releases/download/v1.0.0/VugyVugy.Setup.1.0.0.exe"
              download
              onClick={() => trackEvent("download", { platform: "windows", location: "download_section" })}
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
          </div>

          {/* Under Info */}
          <div className="text-xs text-white/60 space-y-2 mt-4 font-mono font-medium">
            <p>Works on Windows & Linux · Free · No account needed</p>
            <p className="italic text-white/50 text-[10px]">
              Works best when your manager isn't watching 😅
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
