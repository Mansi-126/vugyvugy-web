"use client";

import { Heart, Laptop, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-[#EBEFEA] py-12 relative overflow-hidden">

      {/* Decorative ambient background glows */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#2D6A4F]/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-48 h-48 bg-emerald-400/5 rounded-full blur-[60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Section: Branding & Platform Info */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 pb-8 border-b border-slate-100">

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

          {/* Middle: Contact Info */}
          <div id="contact" className="flex flex-col items-start text-left gap-2.5 scroll-mt-20">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Contact & Support
            </span>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:contact@vugyvugy.site"
                className="group flex items-center gap-2.5 text-xs font-semibold text-slate-600 hover:text-[#2D6A4F] transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-slate-50 border border-slate-200/50 flex items-center justify-center group-hover:bg-[#2D6A4F]/10 group-hover:border-[#2D6A4F]/20 transition-all">
                  <Mail className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#2D6A4F] transition-colors" />
                </div>
                <span>contact@vugyvugy.site</span>
              </a>
              <a
                href="mailto:support@vugyvugy.site"
                className="group flex items-center gap-2.5 text-xs font-semibold text-slate-600 hover:text-[#2D6A4F] transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-slate-50 border border-slate-200/50 flex items-center justify-center group-hover:bg-[#2D6A4F]/10 group-hover:border-[#2D6A4F]/20 transition-all">
                  <Mail className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#2D6A4F] transition-colors" />
                </div>
                <span>support@vugyvugy.site</span>
              </a>
            </div>

            {/* Social Media Links */}
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-4">
              Follow Us
            </span>
            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/just_build._?igsh=MXd0aHR6cW0xOHN5eg=="
                target="_blank"
                rel="noopener noreferrer"
                className="group w-9 h-9 rounded-lg bg-slate-50 border border-slate-200/50 flex items-center justify-center hover:bg-[#2D6A4F]/10 hover:border-[#2D6A4F]/20 transition-all"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-4 h-4 text-slate-500 group-hover:text-[#2D6A4F] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/1A517aDche/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-9 h-9 rounded-lg bg-slate-50 border border-slate-200/50 flex items-center justify-center hover:bg-[#2D6A4F]/10 hover:border-[#2D6A4F]/20 transition-all"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-4 h-4 text-slate-500 group-hover:text-[#2D6A4F] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Platform Badge */}
          <div className="flex items-center shrink-0 self-start select-none">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200/60 rounded-xl text-xs text-slate-600 font-bold shadow-sm">
              <Laptop className="w-4 h-4 text-[#2D6A4F]" />
              Available for Windows & Linux
            </span>
          </div>

        </div>

        {/* Bottom Section: Copyright and Version info */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left select-none">
          <p className="text-xs text-slate-400 font-medium flex items-center gap-1 justify-center sm:justify-start">
            &copy; 2026 VugyVugy. Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-current" /> for developers who vibe.
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-4 gap-y-2 text-xs font-semibold text-slate-400">
            <Link href="/terms" className="hover:text-[#2D6A4F] transition-colors">
              Terms
            </Link>
            <span className="text-slate-200 select-none">•</span>
            <Link href="/privacy" className="hover:text-[#2D6A4F] transition-colors">
              Privacy
            </Link>
            <span className="text-slate-200 select-none">•</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider bg-slate-50 border border-slate-200/50 px-2.5 py-1 rounded">
              v1.0.0
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
