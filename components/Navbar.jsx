"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Interactive Mascot Logo States
  const [logoRotation, setLogoRotation] = useState(0);
  const [faceState, setFaceState] = useState("normal"); // "normal" | "hover" | "click"
  const [particles, setParticles] = useState([]);

  const handleLogoClick = (e) => {
    e.preventDefault();
    setLogoRotation((prev) => prev + 360);
    setFaceState("click");

    // Reset face expression after click spin ends
    setTimeout(() => {
      setFaceState("normal");
    }, 800);

    const emojis = ["🎵", "🎶", "✨", "🔊", "💥", "🔥", "😂", "🎹", "👽", "🤪"];
    const angleOffset = Math.random() * Math.PI * 2;
    const newParticles = Array.from({ length: 8 }).map((_, i) => {
      const angle = (i / 8) * Math.PI * 2 + angleOffset;
      const distance = 45 + Math.random() * 35;
      return {
        id: Math.random(),
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        rotate: Math.random() * 360 - 180,
      };
    });

    setParticles((prev) => [...prev, ...newParticles]);

    // Clean up particles
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.find((np) => np.id === p.id)));
    }, 900);
  };




  const navLinks = [
    { label: "Sandbox", href: "#playlist-builder" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Download", href: "#download" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-vugy-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Slogan Group */}
          <div className="flex items-center gap-3 select-none">
            <a
              href="#"
              onClick={handleLogoClick}
              onMouseEnter={() => setFaceState(faceState === "click" ? "click" : "hover")}
              onMouseLeave={() => setFaceState(faceState === "click" ? "click" : "normal")}
              className="flex items-center gap-2.5 group focus:outline-none"
            >
              {/* Mascot SVG Logo Container */}
              <div className="relative w-10 h-10 flex items-center justify-center">
                {/* Particles Container */}
                <AnimatePresence>
                  {particles.map((p) => (
                    <motion.span
                      key={p.id}
                      initial={{ opacity: 1, scale: 0, x: 0, y: 0, rotate: 0 }}
                      animate={{ opacity: 0, scale: 1.8, x: p.x, y: p.y, rotate: p.rotate }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="absolute pointer-events-none text-base select-none z-50 flex items-center justify-center w-5 h-5"
                      style={{
                        left: "10px",
                        top: "10px",
                      }}
                    >
                      {p.emoji}
                    </motion.span>
                  ))}
                </AnimatePresence>

                <motion.div
                  animate={{
                    rotate: logoRotation,
                    scale: faceState === "hover" ? 1.08 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }}
                  className="w-10 h-10 flex items-center justify-center"
                >
                  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                    {/* Headband */}
                    <path d="M22 48 C22 18, 78 18, 78 48" stroke="#1A1A1A" strokeWidth="5" strokeLinecap="round" fill="none" />

                    {/* Left Earphone Cup */}
                    <rect x="12" y="38" width="10" height="24" rx="5" fill="#2D6A4F" stroke="#1A1A1A" strokeWidth="3" />

                    {/* Right Earphone Cup */}
                    <rect x="78" y="38" width="10" height="24" rx="5" fill="#2D6A4F" stroke="#1A1A1A" strokeWidth="3" />

                    {/* Body (Keycap) with 3D bottom shadow */}
                    <rect x="25" y="33" width="50" height="42" rx="12" fill="#E2E8F0" />
                    <rect x="25" y="30" width="50" height="42" rx="12" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="3.5" />

                    {/* Dynamic Happy Face Details */}
                    {/* Left Eye */}
                    {faceState === "normal" && (
                      <circle cx="38" cy="48" r="3.5" fill="#1A1A1A" />
                    )}
                    {faceState === "hover" && (
                      <path d="M33 49 C35 45, 39 45, 41 49" stroke="#1A1A1A" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                    )}
                    {faceState === "click" && (
                      <path d="M34 44 L40 50 M40 44 L34 50" stroke="#1A1A1A" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                    )}

                    {/* Right Eye */}
                    {faceState === "normal" && (
                      <circle cx="62" cy="48" r="3.5" fill="#1A1A1A" />
                    )}
                    {faceState === "hover" && (
                      <path d="M57 48 L65 48" stroke="#1A1A1A" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                    )}
                    {faceState === "click" && (
                      <path d="M58 44 L66 50 M66 44 L58 50" stroke="#1A1A1A" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                    )}

                    {/* Blushing cheeks */}
                    <ellipse cx="33" cy="56" rx="4" ry="2" fill="#86EFAC" />
                    <ellipse cx="67" cy="56" rx="4" ry="2" fill="#86EFAC" />

                    {/* Smiling mouth */}
                    {faceState === "normal" && (
                      <path d="M44 56 C46 59, 54 59, 56 56" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" fill="none" />
                    )}
                    {faceState === "hover" && (
                      <>
                        <path d="M42 56 C42 56, 50 66, 58 56 Z" fill="#1A1A1A" />
                        <path d="M46 59 C46 59, 50 63, 54 59 Z" fill="#FF8A8A" />
                      </>
                    )}
                    {faceState === "click" && (
                      <>
                        <circle cx="50" cy="57" r="5.5" fill="#1A1A1A" />
                        <path d="M47 59 C47 59, 50 63, 53 59 Z" fill="#FF8A8A" />
                      </>
                    )}

                    {/* Letter V on keycap */}
                    <path d="M47 38 L50 43 L53 38" stroke="#2D6A4F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

                    {/* Staggered Symmetrical Sound Waves */}
                    {/* Right side waves */}
                    <path d="M91 42 A 6 6 0 0 1 91 54" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" className="wave-pulse-1" fill="none" />
                    <path d="M95 38 A 10 10 0 0 1 95 58" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" className="wave-pulse-2" fill="none" />
                    <path d="M99 34 A 14 14 0 0 1 99 62" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" className="wave-pulse-3" fill="none" />

                    {/* Left side waves */}
                    <path d="M9 42 A 6 6 0 0 0 9 54" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" className="wave-pulse-1" fill="none" />
                    <path d="M5 38 A 10 10 0 0 0 5 58" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" className="wave-pulse-2" fill="none" />
                    <path d="M1 34 A 14 14 0 0 0 1 62" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" className="wave-pulse-3" fill="none" />
                  </svg>
                </motion.div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="flex items-baseline leading-none">
                  <span className="font-extrabold text-xl text-[#1A1A1A] tracking-tight">
                    Vugy
                  </span>
                  <span className="font-extrabold text-xl text-[#2D6A4F] tracking-tight">
                    Vugy
                  </span>
                </div>
                {/* Wavy Underline */}
                <svg className="w-16 h-1.5 text-[#2D6A4F] opacity-80" viewBox="0 0 100 10" fill="none">
                  <path d="M2 5 Q25 0, 50 5 T98 5" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                </svg>
              </div>
            </a>

            {/* Small tagline next to logo */}
            <span className="hidden lg:inline text-[9px] font-bold text-vugy-text-muted border-l border-vugy-border pl-3 self-center uppercase tracking-wider">
              Windows & Linux• PRESS ONCE. LAUGH TWICE.
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-bold uppercase tracking-wider text-vugy-text-secondary hover:text-vugy-primary transition-colors py-2 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-vugy-primary transition-all group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-vugy-text-secondary hover:text-vugy-primary focus:outline-none p-2"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-vugy-card border-t border-vugy-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-bold uppercase tracking-wider text-vugy-text-secondary hover:text-vugy-primary transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="text-[9px] font-bold text-vugy-text-muted pt-4 border-t border-vugy-border uppercase tracking-widest">
                Windows & Linux • PRESS ONCE. LAUGH TWICE.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
