"use client";

import { motion } from "framer-motion";
import { useAptabase } from "@aptabase/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function DownloadSection() {
  const { trackEvent } = useAptabase();
  const [showLinuxDropdown, setShowLinuxDropdown] = useState(false);

  const handleDownload = (platform, format) => {
    // Track ALL downloads (total count - always increases)
    trackEvent("total_download", { platform, format, location: "download_section" });
    
    // Track unique downloads (first download only)
    if (!localStorage.getItem("vugy_downloaded")) {
      trackEvent("unique_download", { platform, format, location: "download_section" });
      localStorage.setItem("vugy_downloaded", "true");
    }
  };

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
          <div className="flex flex-row gap-4 justify-center items-center w-full max-w-[576px] mb-8">
            {/* Windows Download */}
            <div className="w-full max-w-[280px]">
              <a
                href="https://github.com/Mansi-126/vugyvugy-web/releases/download/v1.0.0/VugyVugy.Setup.1.0.0.exe"
                download
                onClick={() => handleDownload("windows", "exe")}
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

            {/* Linux Download with Dropdown */}
            <div className="w-full max-w-[280px] relative">
              <div className="flex gap-1">
                {/* Primary Linux Download (DEB) */}
                <a
                  href="https://github.com/Mansi-126/vugyvugy-web/releases/download/v1.0.0/vugyvugy-electron_1.0.0_amd64.deb"
                  download
                  onClick={() => handleDownload("linux", "deb")}
                  className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-l-xl bg-white text-vugy-primary hover:bg-[#FAFBF9] font-bold transition-all shadow-md hover:-translate-y-0.5 active:translate-y-0"
                >
                  <img src="/tux.svg" className="w-5 h-5 object-contain" alt="Linux Logo" />
                  <div className="text-left leading-tight">
                    <span className="block text-[9px] font-medium opacity-85 uppercase font-sans">Download for</span>
                    <span className="text-sm font-extrabold">Linux .deb</span>
                  </div>
                </a>

                {/* Dropdown Toggle */}
                <button
                  onClick={() => setShowLinuxDropdown(!showLinuxDropdown)}
                  className="px-3 rounded-r-xl bg-white text-vugy-primary hover:bg-[#FAFBF9] font-bold transition-all shadow-md hover:-translate-y-0.5 active:translate-y-0 border-l border-vugy-primary/10"
                  aria-label="More Linux formats"
                >
                  <ChevronDown className={`w-5 h-5 transition-transform ${showLinuxDropdown ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Dropdown Menu */}
              {showLinuxDropdown && (
                <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-xl overflow-hidden z-20">
                  <a
                    href="https://github.com/Mansi-126/vugyvugy-web/releases/download/v1.0.0/vugyvugy-electron_1.0.0_amd64.deb"
                    download
                    onClick={() => {
                      handleDownload("linux", "deb");
                      setShowLinuxDropdown(false);
                    }}
                    className="flex items-center gap-3 px-4 py-3 text-vugy-primary hover:bg-vugy-primary/5 transition-colors"
                  >
                    <img src="/tux.svg" className="w-4 h-4 object-contain" alt="Linux Logo" />
                    <div className="text-left text-sm">
                      <div className="font-bold">Debian Package</div>
                      <div className="text-xs text-vugy-primary/60">Ubuntu, Debian, Mint</div>
                    </div>
                  </a>
                  <a
                    href="https://github.com/Mansi-126/vugyvugy-web/releases/download/v1.0.0/VugyVugy-1.0.0.AppImage"
                    download
                    onClick={() => {
                      handleDownload("linux", "appimage");
                      setShowLinuxDropdown(false);
                    }}
                    className="flex items-center gap-3 px-4 py-3 text-vugy-primary hover:bg-vugy-primary/5 transition-colors border-t border-vugy-primary/10"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l8 4v8.82c0 4.52-3.19 8.75-8 9.82-4.81-1.07-8-5.3-8-9.82V8.18l8-4zM11 7v8h2V7h-2zm0 10v2h2v-2h-2z"/>
                    </svg>
                    <div className="text-left text-sm">
                      <div className="font-bold">AppImage</div>
                      <div className="text-xs text-vugy-primary/60">Universal Linux</div>
                    </div>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Under Info */}
          <div className="text-xs text-white/60 space-y-2 mt-4 font-mono font-medium">
            <p>Works on Windows & Linux · Free · No account needed</p>
            <p className="text-white/50 text-[11px]">
              <span className="font-bold">Linux:</span> DEB for Ubuntu/Debian · AppImage for all distros
            </p>
            <p className="italic text-white/50 text-[10px]">
              Works best when your manager isn't watching 😅
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
