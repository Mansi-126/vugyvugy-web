"use client";

import { motion } from "framer-motion";
import { BrainCog, Music } from "lucide-react";

export default function ProblemSolution() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Card: The Problem */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="border border-vugy-border bg-white p-6 sm:p-8 rounded-2xl flex flex-col items-start gap-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-vugy-text-secondary">
              <BrainCog className="w-6 h-6" />
            </div>
            
            <h3 className="text-2xl font-bold text-vugy-text-primary mt-2">
              Hour 4 of debugging.
            </h3>
            
            <p className="text-base text-vugy-text-secondary leading-relaxed">
              The bug is still there. Your coffee is cold. Your soul is leaving your body. Staring blankly at red compilation logs only leads to burnout and stress.
            </p>
            
            <div className="mt-4 flex items-center gap-2 text-xs font-mono font-semibold text-vugy-text-muted">
              <span>😩 STATUS: CRITICAL BOREDOM</span>
            </div>
          </motion.div>

          {/* Right Card: The Solution */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="border-2 border-vugy-primary bg-vugy-active-bg p-6 sm:p-8 rounded-2xl flex flex-col items-start gap-4 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-vugy-primary shadow-sm border border-vugy-primary/20">
              <Music className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold text-vugy-primary mt-2">
              One keypress. Instant serotonin.
            </h3>

            <p className="text-base text-vugy-text-secondary leading-relaxed">
              VugyVugy plays a meme sound the moment you need it. No alt-tab. No YouTube. Just pure vibe. Instantly refresh your mind and make coding fun again.
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs font-mono font-bold text-vugy-primary">
              <span>🎵 STATUS: 100% SEROTONIN</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
