"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import PlaylistBuilder from "@/components/PlaylistBuilder";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
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
  );
}
