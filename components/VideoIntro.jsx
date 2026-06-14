"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState, useRef } from "react";

export default function VideoIntro() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoClick = () => {
    handlePlayPause();
  };

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Section Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-vugy-active-bg text-vugy-primary text-xs font-bold uppercase tracking-wider mb-6 border border-vugy-primary/10">
            <Play className="w-3.5 h-3.5" />
            <span>Watch Demo</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-vugy-text-primary tracking-tight mb-4">
            See VugyVugy in Action
          </h2>
          
          {/* Subheading */}
          <p className="text-base sm:text-lg text-vugy-text-secondary max-w-2xl mx-auto leading-relaxed">
            Watch how easy it is to turn your keyboard into a meme machine. 
            Just press a key and let the chaos begin.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Video Wrapper with Shadow and Border */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-vugy-border bg-slate-900 group">
            
            {/* Video Element */}
            <video
              ref={videoRef}
              className="w-full aspect-video object-cover cursor-pointer"
              poster="/Thumnails.png"
              onClick={handleVideoClick}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              controls={isPlaying}
            >
              <source src="/Intro_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play Button Overlay (shows when video is paused) */}
            {!isPlaying && (
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                onClick={handlePlayPause}
                className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all"
                aria-label="Play video"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/95 hover:bg-white flex items-center justify-center shadow-2xl transform transition-transform group-hover:scale-110 active:scale-95">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 text-vugy-primary fill-vugy-primary ml-1" />
                </div>
              </motion.button>
            )}

            {/* Decorative Gradient Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-vugy-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -top-4 -left-4 w-32 h-32 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
        </motion.div>

        {/* Optional Caption Below Video */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-vugy-text-secondary font-medium">
            🎧 Headphone users: You're about to get entertained. 
            <span className="text-vugy-primary font-bold ml-1">Volume up!</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
