"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Music, ChevronDown, Play, Pause } from "lucide-react";

export default function SoundPreview() {
  const [selectedSoundId, setSelectedSoundId] = useState("sound-1");
  const [playingId, setPlayingId] = useState(null);
  const audioRef = useRef(null);

  const sounds = [
    {
      id: "sound-1",
      name: "Aauuu",
      file: "Aauuu.mp3",
      emoji: "😩",
      description: "Your spacebar gets... expressive. Use headphones.",
    },
    {
      id: "sound-2",
      name: "Acha Ji Aisa Hai Kya",
      file: "acha-ji-aisa-hai-kya.mp3",
      emoji: "🤔",
      description: "Perfect for moments of sudden realization. Or total confusion.",
    },
    {
      id: "sound-3",
      name: "Are Kehna Kya Chahte Ho",
      file: "are-kehna-kya-chahte-ho-.mp3",
      emoji: "🧐",
      description: "Use this when reading poorly documented APIs.",
    },
    {
      id: "sound-4",
      name: "Chaloo",
      file: "chaloo.mp3",
      emoji: "🏃‍♂️",
      description: "Keep moving! Instant energy boost for late-night deploys.",
    },
    {
      id: "sound-5",
      name: "Gajab Bejjati Hai Yaar",
      file: "gajab-bejjati-hai-yaar.mp3",
      emoji: "😅",
      description: "For when your manager comments 'needs refactoring' on your PR.",
    },
    {
      id: "sound-6",
      name: "Kaisa Laga Mera Mazak",
      file: "kaisa-laga-mera-mazak.mp3",
      emoji: "😜",
      description: "To be played right after you accidentally drop a database table.",
    },
    {
      id: "sound-7",
      name: "Kaun Hai Ye Log",
      file: "kaun-hai-ye-log.mp3",
      emoji: "👽",
      description: "When reviewing git blame on some truly baffling legacy code.",
    },
    {
      id: "sound-8",
      name: "Kitne Tejaswi Log",
      file: "kitne-tejaswi-log-hai-hamare-pass.mp3",
      emoji: "✨",
      description: "Sarcastic praise for the 'galaxy brain' architects in your team.",
    },
    {
      id: "sound-9",
      name: "Pehchana Mujhe",
      file: "pehchana-mujhe.mp3",
      emoji: "😎",
      description: "Play this when you return from vacation and push to production.",
    },
    {
      id: "sound-10",
      name: "Rom Rom Bhaiyo",
      file: "rom-rom-bhaiyo.mp3",
      emoji: "🙏",
      description: "Systummm! The ultimate high-energy greeting for your morning standups.",
    },
  ];

  const currentSound = sounds.find((s) => s.id === selectedSoundId) || sounds[0];

  const handlePlayClick = (sound) => {
    // If clicking the currently playing sound, stop it
    if (playingId === sound.id) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      setPlayingId(null);
      return;
    }

    // Stop currently playing audio if any
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // Instantiate and play new audio
    const audio = new Audio(`/sounds/${sound.file}`);
    audioRef.current = audio;

    setPlayingId(sound.id);

    audio.play().catch((err) => {
      console.error("Audio playback failed:", err);
      setPlayingId(null);
    });

    audio.onended = () => {
      setPlayingId(null);
      audioRef.current = null;
    };
  };

  const handleSelectChange = (e) => {
    // Stop currently playing audio on sound change
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setPlayingId(null);
    setSelectedSoundId(e.target.value);
  };

  // Cleanup audio when component unmounts
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const isPlaying = playingId === currentSound.id;

  return (
    <section id="sound-preview" className="py-24 bg-[#F0F4F0] relative scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Reference Card */}
        <div className="bg-white border border-vugy-border rounded-2xl p-6 sm:p-10 max-w-2xl mx-auto shadow-sm">
          
          {/* Card Header (Music Icon on Left, Title/Subtitle on Right) */}
          <div className="flex items-start gap-4 mb-8">
            <div className="w-10 h-10 rounded-lg bg-vugy-active-bg flex items-center justify-center text-vugy-primary shrink-0 mt-0.5">
              <Music className="w-5 h-5 stroke-[2.5px]" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-vugy-text-primary tracking-tight">
                50+ moods of protest
              </h3>
              <p className="text-sm text-vugy-text-secondary mt-1 leading-relaxed">
                50+ viral meme sounds available. Your open-plan office will have questions.
              </p>
            </div>
          </div>

          {/* Sound Dropdown Selector */}
          <div className="relative w-full sm:w-72 mx-auto mb-8">
            <select
              value={selectedSoundId}
              onChange={handleSelectChange}
              className="w-full pl-6 pr-10 py-3 bg-white border border-gray-300 rounded-full text-center text-sm font-semibold text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-vugy-primary/20 cursor-pointer appearance-none transition-all hover:border-gray-400"
            >
              {sounds.map((sound) => (
                <option key={sound.id} value={sound.id}>
                  {sound.name.toLowerCase()}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5 text-gray-500">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>

          {/* Styled Sound Preview Block */}
          <div className="bg-[#FAFBF9] border border-vugy-border/40 rounded-xl p-4 sm:p-5 flex items-center gap-4 sm:gap-5 max-w-lg mx-auto transition-all duration-300">
            
            {/* Circular Play/Pause Button */}
            <button
              onClick={() => handlePlayClick(currentSound)}
              className="w-12 h-12 rounded-full bg-[#E2ECE2] hover:bg-[#D5E4D5] flex items-center justify-center transition-all cursor-pointer select-none shrink-0"
              title={isPlaying ? "Pause Sound" : "Play Sound"}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-vugy-primary fill-vugy-primary" />
              ) : (
                <Play className="w-5 h-5 text-vugy-primary fill-vugy-primary ml-0.5" />
              )}
            </button>

            {/* Sound Info Text */}
            <div className="text-left min-w-0">
              <div className="font-extrabold text-sm sm:text-base text-vugy-text-primary flex items-center gap-1.5 truncate">
                <span className="shrink-0">{currentSound.emoji}</span>
                <span className="truncate">{currentSound.name}</span>
              </div>
              <p className="text-xs text-vugy-text-secondary mt-0.5 leading-relaxed">
                {currentSound.description}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}


