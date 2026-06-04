"use client";

import { Heart, Laptop } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-[#EBEFEA] py-12 relative overflow-hidden">

      {/* Decorative ambient background glows */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#2D6A4F]/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-48 h-48 bg-emerald-400/5 rounded-full blur-[60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Section: Branding & Platform Info */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-100">

          {/* Left: Brand Info */}
          <div className="flex flex-col items-start text-left">

            {/* Logo Group */}
            <div className="flex items-center gap-3 select-none">

              {/* Brand Mascot SVG */}
              <div className="w-9 h-9 shrink-0 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                  {/* Headband */}
                  <path d="M22 48 C22 18, 78 18, 78 48" stroke="#1A1A1A" strokeWidth="5" strokeLinecap="round" fill="none" />

                  {/* Left Earphone Cup */}
                  <rect x="12" y="38" width="10" height="24" rx="5" fill="#2D6A4F" stroke="#1A1A1A" strokeWidth="3" />

                  {/* Right Earphone Cup */}
                  <rect x="78" y="38" width="10" height="24" rx="5" fill="#2D6A4F" stroke="#1A1A1A" strokeWidth="3" />

                  {/* Body (Keycap) */}
                  <rect x="25" y="33" width="50" height="42" rx="12" fill="#E2E8F0" />
                  <rect x="25" y="30" width="50" height="42" rx="12" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="3.5" />

                  {/* Eyes */}
                  <circle cx="38" cy="48" r="3.5" fill="#1A1A1A" />
                  <circle cx="62" cy="48" r="3.5" fill="#1A1A1A" />

                  {/* Blushing cheeks */}
                  <ellipse cx="33" cy="56" rx="4" ry="2" fill="#86EFAC" />
                  <ellipse cx="67" cy="56" rx="4" ry="2" fill="#86EFAC" />

                  {/* Smiling mouth */}
                  <path d="M44 56 C46 59, 54 59, 56 56" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" fill="none" />

                  {/* Letter V on keycap */}
                  <path d="M47 38 L50 43 L53 38" stroke="#2D6A4F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>

              {/* Logo Brand Text */}
              <div className="flex flex-col justify-center">
                <div className="flex items-baseline leading-none">
                  <span className="font-extrabold text-[17px] text-[#1A1A1A] tracking-tight">
                    Vugy
                  </span>
                  <span className="font-extrabold text-[17px] text-[#2D6A4F] tracking-tight">
                    Vugy
                  </span>
                </div>
                {/* Wavy Underline */}
                <svg className="w-14 h-1 text-[#2D6A4F] opacity-80 mt-0.5" viewBox="0 0 100 10" fill="none">
                  <path d="M2 5 Q25 0, 50 5 T98 5" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                </svg>
              </div>

            </div>

            <p className="text-xs text-slate-500 mt-4 leading-relaxed max-w-[320px]">
              Make every keypress a vibe. Assign hilarious meme sound effects to keyboard actions and bring serotonin to your coding loops.
            </p>

          </div>

          {/* Right: Platform Badge */}
          <div className="flex items-center shrink-0 self-start md:self-auto mt-4 md:mt-0 select-none">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200/60 rounded-xl text-xs text-slate-600 font-bold shadow-sm">
              <Laptop className="w-4 h-4 text-[#2D6A4F]" />
              Available for macOS & Windows
            </span>
          </div>

        </div>

        {/* Bottom Section: Copyright and Version info */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left select-none">
          <p className="text-xs text-slate-400 font-medium flex items-center gap-1 justify-center sm:justify-start">
            &copy; 2026 VugyVugy. Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-current" /> for developers who vibe.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider bg-slate-50 border border-slate-200/50 px-2.5 py-1 rounded">
              v1.0.0
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
