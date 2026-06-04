"use client";

import { motion } from "framer-motion";
import { Keyboard, Volume2, SkipForward, ToggleRight, Smile, Zap } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Keyboard,
      title: "Custom Trigger Key",
      description: "Pick any key that fits your muscle memory.",
    },
    {
      icon: Volume2,
      title: "Instant Playback",
      description: "Zero delay. Press key → hear sound. That's the whole app.",
    },
    {
      icon: SkipForward,
      title: "Double Press to Switch",
      description: "Double press jumps to the next sound automatically.",
    },
    {
      icon: ToggleRight,
      title: "ON/OFF Toggle",
      description: "Mute everything instantly when your standup starts.",
    },
    {
      icon: Smile,
      title: "Curated Meme Sounds",
      description: "Handpicked sounds. No random YouTube clips.",
    },
    {
      icon: Zap,
      title: "Lightweight & Fast",
      description: "Electron app. Low memory. Always running quietly.",
    },
  ];

  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
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

  return (
    <section id="features" className="py-24 bg-white relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-vugy-text-primary mb-4">
            Everything You Need to Vibe
          </h2>
          <p className="text-vugy-text-secondary max-w-xl mx-auto">
            Minimal setup. Maximum enjoyment. Designed to fit natively into your dev workflow.
          </p>
        </div>

        {/* Grid layout */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{
                  y: -4,
                  boxShadow: "0 8px 30px rgba(45,106,79,0.15)",
                }}
                className="bg-vugy-card border border-vugy-border rounded-2xl p-6 transition-colors duration-200 hover:border-vugy-primary flex flex-col items-start"
              >
                {/* Mint Green Circle Bg for Icon */}
                <div className="w-12 h-12 rounded-xl bg-vugy-active-bg text-vugy-primary flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Feature Title */}
                <h3 className="text-lg font-bold text-vugy-text-primary mb-2">
                  {feature.title}
                </h3>

                {/* Feature Description */}
                <p className="text-sm text-vugy-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
