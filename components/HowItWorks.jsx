"use client";

import { motion } from "framer-motion";
import { Keyboard, Volume2, Zap, Play, Check } from "lucide-react";

export default function HowItWorks() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const keys = [
    { label: "Space", size: "px-4" },
    { label: "Enter", size: "px-3" },
    { label: "A", size: "px-2.5" },
    { label: "S", size: "px-2.5" },
    { label: "D", size: "px-2.5" },
    { label: "↑", size: "px-3" },
    { label: "↓", size: "px-3" },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#F0F4F0] relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-vugy-text-primary mb-4">
            How It Works
          </h2>
          <p className="text-vugy-text-secondary max-w-xl mx-auto">
            Three simple steps to transform your keyboard into a motivation station.
          </p>
        </div>

        {/* Stepper Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {/* Step 1 */}
          <motion.div
            variants={itemVariants}
            className="bg-white border border-vugy-border rounded-2xl p-6 shadow-sm flex flex-col justify-between"
          >
            <div>
              {/* Header Icon + Number */}
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 rounded-xl bg-vugy-active-bg text-vugy-primary flex items-center justify-center">
                  <Keyboard className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs font-bold text-vugy-text-muted">STEP 01</span>
              </div>

              {/* Title & Desc */}
              <h3 className="text-xl font-bold text-vugy-text-primary mb-3">
                Pick Your Trigger Key
              </h3>
              <p className="text-sm text-vugy-text-secondary mb-6 leading-relaxed">
                Choose from Space, Enter, A, S, D, or Arrow keys. Whatever key your fingers love most.
              </p>
            </div>

            {/* Visual: Row of keycaps */}
            <div className="bg-[#F9FAF8] border border-vugy-border rounded-xl p-4 flex flex-wrap gap-2.5 justify-center items-center">
              {keys.map((key, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: 2, boxShadow: "0 1px 2px rgba(0,0,0,0.15)" }}
                  className={`bg-white border border-gray-300 rounded-lg py-1.5 ${key.size} font-mono font-semibold text-xs text-vugy-text-primary shadow-[0_3px_0_rgba(0,0,0,0.1)] cursor-pointer select-none transition-shadow`}
                >
                  {key.label}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            variants={itemVariants}
            className="bg-white border border-vugy-border rounded-2xl p-6 shadow-sm flex flex-col justify-between"
          >
            <div>
              {/* Header Icon + Number */}
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 rounded-xl bg-vugy-active-bg text-vugy-primary flex items-center justify-center">
                  <Volume2 className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs font-bold text-vugy-text-muted">STEP 02</span>
              </div>

              {/* Title & Desc */}
              <h3 className="text-xl font-bold text-vugy-text-primary mb-3">
                Choose Your Sound
              </h3>
              <p className="text-sm text-vugy-text-secondary mb-6 leading-relaxed">
                Pick from our curated library of funny, satisfying meme sounds. No uploads needed.
              </p>
            </div>

            {/* Visual: Sound rows mockup */}
            <div className="bg-[#F9FAF8] border border-vugy-border rounded-xl p-4 flex flex-col gap-2.5">
              {/* Row 1 */}
              <div className="bg-white border border-gray-200 rounded-xl px-3 py-2 flex justify-between items-center text-xs">
                <div className="flex items-center gap-2">
                  <Play className="w-3.5 h-3.5 text-vugy-primary" />
                  <span className="font-semibold text-vugy-text-primary">Faaahh</span>
                </div>
                <button className="border border-vugy-border rounded px-2.5 py-1 text-[10px] text-vugy-text-secondary font-bold hover:bg-[#FAFBF9]">
                  Use
                </button>
              </div>

              {/* Row 2: Selected */}
              <div className="bg-vugy-active-bg border border-vugy-primary rounded-xl px-3 py-2 flex justify-between items-center text-xs shadow-sm">
                <div className="flex items-center gap-2">
                  <Play className="w-3.5 h-3.5 text-vugy-primary fill-current" />
                  <span className="font-bold text-vugy-primary">Aauuu</span>
                </div>
                <span className="bg-vugy-primary text-white rounded px-2 py-0.5 text-[9px] font-extrabold flex items-center gap-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3px]" />
                  Selected
                </span>
              </div>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            variants={itemVariants}
            className="bg-white border border-vugy-border rounded-2xl p-6 shadow-sm flex flex-col justify-between"
          >
            <div>
              {/* Header Icon + Number */}
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 rounded-xl bg-vugy-active-bg text-vugy-primary flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs font-bold text-vugy-text-muted">STEP 03</span>
              </div>

              {/* Title & Desc */}
              <h3 className="text-xl font-bold text-vugy-text-primary mb-3">
                Press & Vibe
              </h3>
              <p className="text-sm text-vugy-text-secondary mb-6 leading-relaxed">
                Single press plays your sound. Double press jumps to the next one. That's it.
              </p>
            </div>

            {/* Visual: Trigger actions visualizer */}
            <div className="bg-[#F9FAF8] border border-vugy-border rounded-xl p-4 flex flex-col gap-2.5">
              <div className="flex gap-2 w-full justify-center">
                {/* Single Press button badge */}
                <div className="flex-1 bg-vugy-primary text-white text-[10px] font-bold py-2.5 px-2 rounded-lg text-center shadow-sm select-none">
                  Single Press → Play
                </div>
                
                {/* Double Press button badge */}
                <div className="flex-1 border-2 border-vugy-primary bg-white text-vugy-primary text-[10px] font-bold py-2 px-2 rounded-lg text-center select-none">
                  Double Press → Next
                </div>
              </div>
              <div className="text-center text-[9px] font-semibold text-vugy-text-muted">
                🔄 Playlist cycles automatically
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
