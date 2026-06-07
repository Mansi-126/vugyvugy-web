"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import PlaylistBuilder from "@/components/PlaylistBuilder";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";
import { useAptabase } from "@aptabase/react";
import { useEffect } from "react";

export default function Home() {
  const { trackEvent } = useAptabase();

  useEffect(() => {
    // Track unique visitor (only first time)
    if (!localStorage.getItem("vugy_visited")) {
      trackEvent("visit");
      localStorage.setItem("vugy_visited", "true");
    }
    
    // Performance monitoring for Core Web Vitals
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // Report Web Vitals to analytics
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            trackEvent("page_load", { 
              loadTime: entry.loadEventEnd - entry.loadEventStart 
            });
          }
        }
      });
      observer.observe({ entryTypes: ['navigation'] });
    }
  }, [trackEvent]);

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-vugy-accent focus:text-white">
        Skip to main content
      </a>
      
      <div className="flex flex-col min-h-screen">
        {/* Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main id="main-content" className="flex-grow" role="main">
          <Hero />
          <ProblemSolution />
          <PlaylistBuilder />
          <Features />
          <HowItWorks />
          <DownloadSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
