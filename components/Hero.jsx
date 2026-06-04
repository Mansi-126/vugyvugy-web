"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, SkipForward, ChevronDown } from "lucide-react";

export default function Hero() {
  // App Mockup Interactive States
  const [systemOn, setSystemOn] = useState(true);
  const [selectedKey, setSelectedKey] = useState("Spacebar");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedSound, setSelectedSound] = useState("Aauuu 😩");
  const [isPlayingMock, setIsPlayingMock] = useState(false);

  // Giant Spacebar Interaction States
  const [spacebarPressed, setSpacebarPressed] = useState(false);
  const [speechBubble, setSpeechBubble] = useState("");
  const [bubbleActive, setBubbleActive] = useState(false);
  const [rippleActive, setRippleActive] = useState(false);

  // Interactive Hero Mascot States
  const [logoRotation, setLogoRotation] = useState(0);
  const [faceState, setFaceState] = useState("normal"); // "normal" | "hover" | "click"
  const [particles, setParticles] = useState([]);

  // Audio system reference
  const audioRef = useRef(null);

  const soundsList = [
    "Aauuu 😩",
    "Gajab Bejjati 😅",
    "Mera Mazak 😜",
    "Rom Rom Bhaiyo 🙏"
  ];

  const getSoundFile = (soundName) => {
    switch (soundName) {
      case "Aauuu 😩": return "Aauuu.mp3";
      case "Gajab Bejjati 😅": return "gajab-bejjati-hai-yaar.mp3";
      case "Mera Mazak 😜": return "kaisa-laga-mera-mazak.mp3";
      case "Rom Rom Bhaiyo 🙏": return "rom-rom-bhaiyo.mp3";
      default: return "Aauuu.mp3";
    }
  };

  const playAudio = (fileName) => {
    if (!systemOn) return;

    // Stop current audio if any
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const audio = new Audio(`/sounds/${fileName}`);
    audioRef.current = audio;

    setIsPlayingMock(true);

    audio.play().catch((err) => {
      console.error("Mock audio playback failed:", err);
      setIsPlayingMock(false);
    });

    audio.onended = () => {
      setIsPlayingMock(false);
      audioRef.current = null;
    };
  };

  // Cleanup audio when component unmounts
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  // Visual simulation on first page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setSpacebarPressed(true);
      setRippleActive(true);
      setLogoRotation((prev) => prev + 360);
      setFaceState("click");

      const phrases = [
        { text: "Aauuu 😩", targetSound: "Aauuu 😩" },
        { text: "Gajab Bejjati 😅", targetSound: "Gajab Bejjati 😅" },
        { text: "Mera Mazak 😜", targetSound: "Mera Mazak 😜" },
        { text: "Rom Rom Bhaiyo 🙏", targetSound: "Rom Rom Bhaiyo 🙏" }
      ];
      const selectedPhrase = phrases[Math.floor(Math.random() * phrases.length)];
      setSpeechBubble(selectedPhrase.text);
      setBubbleActive(true);

      setTimeout(() => {
        setFaceState("normal");
      }, 800);

      if (systemOn) {
        const audio = new Audio(`/sounds/${getSoundFile(selectedPhrase.targetSound)}`);
        audioRef.current = audio;
        setIsPlayingMock(true);
        audio.play().catch(() => {
          setIsPlayingMock(false);
        });
        audio.onended = () => {
          setIsPlayingMock(false);
          audioRef.current = null;
        };
      }

      setTimeout(() => {
        setSpacebarPressed(false);
      }, 120);

      setTimeout(() => {
        setRippleActive(false);
      }, 600);

      setTimeout(() => {
        setBubbleActive(false);
      }, 1600);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleHeroMascotClick = () => {
    setLogoRotation((prev) => prev + 360);
    setFaceState("click");

    // Also trigger sound board audio ripple in the mock card!
    if (systemOn) {
      playAudio(getSoundFile(selectedSound));
    }

    setTimeout(() => {
      setFaceState("normal");
    }, 800);

    const emojis = ["🎵", "🎶", "✨", "🔊", "💥", "🔥", "😂", "🎹", "👽", "🤪"];
    const angleOffset = Math.random() * Math.PI * 2;
    const newParticles = Array.from({ length: 12 }).map((_, i) => {
      const angle = (i / 12) * Math.PI * 2 + angleOffset;
      const distance = 70 + Math.random() * 50;
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

  const keysList = [
    "Spacebar",
    "Enter",
    "Key A",
    "Key S",
    "Key D",
    "Arrow Up",
    "Arrow Down"
  ];

  const handlePlaySelect = () => {
    if (!systemOn) return;
    playAudio(getSoundFile(selectedSound));
  };

  const handleNextPlay = () => {
    if (!systemOn) return;
    const currentIndex = soundsList.indexOf(selectedSound);
    const nextIndex = (currentIndex + 1) % soundsList.length;
    const nextSound = soundsList[nextIndex];
    setSelectedSound(nextSound);
    playAudio(getSoundFile(nextSound));
  };

  const handleSelectSound = (soundName) => {
    if (!systemOn) return;
    setSelectedSound(soundName);
    playAudio(getSoundFile(soundName));
  };

  const getCleanKeyLabel = (key) => {
    switch (key) {
      case "Spacebar": return "Spacebar";
      case "Enter": return "Enter";
      case "Key A": return "A";
      case "Key S": return "S";
      case "Key D": return "D";
      case "Arrow Up": return "Arrow Up";
      case "Arrow Down": return "Arrow Down";
      default: return key;
    }
  };

  const getKeycapStyles = () => {
    switch (selectedKey) {
      case "Spacebar":
        return {
          wrapperClass: "max-w-[240px] w-full",
          buttonLabel: "[ SPACEBAR ]",
          buttonClass: "py-3 px-5 text-xs font-mono"
        };
      case "Enter":
        return {
          wrapperClass: "max-w-[150px] w-full",
          buttonLabel: "[ ENTER ↵ ]",
          buttonClass: "py-3 px-4 text-xs font-mono"
        };
      case "Key A":
        return {
          wrapperClass: "w-14 h-14",
          buttonLabel: "A",
          buttonClass: "w-full h-full flex items-center justify-center text-sm font-bold font-sans"
        };
      case "Key S":
        return {
          wrapperClass: "w-14 h-14",
          buttonLabel: "S",
          buttonClass: "w-full h-full flex items-center justify-center text-sm font-bold font-sans"
        };
      case "Key D":
        return {
          wrapperClass: "w-14 h-14",
          buttonLabel: "D",
          buttonClass: "w-full h-full flex items-center justify-center text-sm font-bold font-sans"
        };
      case "Arrow Up":
        return {
          wrapperClass: "w-14 h-14",
          buttonLabel: "↑",
          buttonClass: "w-full h-full flex items-center justify-center text-base font-bold font-sans"
        };
      case "Arrow Down":
        return {
          wrapperClass: "w-14 h-14",
          buttonLabel: "↓",
          buttonClass: "w-full h-full flex items-center justify-center text-base font-bold font-sans"
        };
      default:
        return {
          wrapperClass: "max-w-[240px] w-full",
          buttonLabel: "[ SPACEBAR ]",
          buttonClass: "py-3 px-5 text-xs font-mono"
        };
    }
  };

  const keyStyles = getKeycapStyles();

  // Click handler for the Giant virtual keycap
  const handleSpacebarClick = () => {
    setSpacebarPressed(true);
    setRippleActive(true);

    // Spin mascot head and show clicking expression
    setLogoRotation((prev) => prev + 360);
    setFaceState("click");
    setTimeout(() => {
      setFaceState("normal");
    }, 800);

    // Choose a random meme phrase to shout back
    const phrases = [
      { text: "Aauuu 😩", targetSound: "Aauuu 😩" },
      { text: "Gajab Bejjati 😅", targetSound: "Gajab Bejjati 😅" },
      { text: "Mera Mazak 😜", targetSound: "Mera Mazak 😜" },
      { text: "Rom Rom Bhaiyo 🙏", targetSound: "Rom Rom Bhaiyo 🙏" },
      { text: "OOF! 💀", targetSound: "Gajab Bejjati 😅" },
      { text: "YEET! 🚀", targetSound: "Mera Mazak 😜" }
    ];

    const selectedPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    setSpeechBubble(selectedPhrase.text);
    setBubbleActive(true);

    // Sync selected sound to the right mockup panel
    if (systemOn) {
      setSelectedSound(selectedPhrase.targetSound);
      playAudio(getSoundFile(selectedPhrase.targetSound));
    }

    // Reset animations
    setTimeout(() => {
      setSpacebarPressed(false);
    }, 120);

    setTimeout(() => {
      setRippleActive(false);
    }, 600);

    setTimeout(() => {
      setBubbleActive(false);
    }, 1600);
  };

  // Global Keyboard Keypress Listener to match the mockup's "ON" state
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if (!systemOn) return;

      // Ignore if user is typing in form inputs, textareas, or editable elements
      const activeEl = document.activeElement;
      if (
        activeEl &&
        (activeEl.tagName === "INPUT" ||
          activeEl.tagName === "TEXTAREA" ||
          activeEl.isContentEditable)
      ) {
        return;
      }

      let matches = false;
      const pressedKey = e.key;

      if (selectedKey === "Spacebar" && pressedKey === " ") {
        e.preventDefault(); // Prevent page scroll when spacebar is pressed
        matches = true;
      } else if (selectedKey === "Enter" && pressedKey === "Enter") {
        matches = true;
      } else if (selectedKey === "Key A" && pressedKey.toLowerCase() === "a") {
        matches = true;
      } else if (selectedKey === "Key S" && pressedKey.toLowerCase() === "s") {
        matches = true;
      } else if (selectedKey === "Key D" && pressedKey.toLowerCase() === "d") {
        matches = true;
      } else if (selectedKey === "Arrow Up" && pressedKey === "ArrowUp") {
        e.preventDefault();
        matches = true;
      } else if (selectedKey === "Arrow Down" && pressedKey === "ArrowDown") {
        e.preventDefault();
        matches = true;
      }

      if (matches) {
        // Trigger full virtual keycap click animation & audio
        handleSpacebarClick();
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => {
      window.removeEventListener("keydown", handleGlobalKeyDown);
    };
  }, [systemOn, selectedKey, selectedSound]);

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-16 bg-[#F0F4F0] overflow-hidden">
      {/* Decorative subtle ambient light */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-vugy-active-bg/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side: Copy and Interactive Keycap */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* Large Floating Mascot Character */}
          <div className="relative mb-6 select-none w-24 h-24 flex items-center justify-center">
            {/* Particles Container */}
            <AnimatePresence>
              {particles.map((p) => (
                <motion.span
                  key={p.id}
                  initial={{ opacity: 1, scale: 0, x: 0, y: 0, rotate: 0 }}
                  animate={{ opacity: 0, scale: 2, x: p.x, y: p.y, rotate: p.rotate }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute pointer-events-none text-xl select-none z-50 flex items-center justify-center w-6 h-6"
                  style={{
                    left: "36px", // (96 - 24) / 2 = 36px
                    top: "36px",  // (96 - 24) / 2 = 36px
                  }}
                >
                  {p.emoji}
                </motion.span>
              ))}
            </AnimatePresence>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <motion.div
                onClick={handleHeroMascotClick}
                onMouseEnter={() => setFaceState(faceState === "click" ? "click" : "hover")}
                onMouseLeave={() => setFaceState(faceState === "click" ? "click" : "normal")}
                animate={{
                  rotate: logoRotation,
                  scale: faceState === "hover" ? 1.08 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
                className="w-full h-full flex items-center justify-center cursor-pointer"
              >
                <svg className="w-full h-full filter drop-shadow-md" viewBox="0 0 100 100" fill="none">
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
            </motion.div>
          </div>

          {/* Unhinged Badges Pill */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-vugy-active-bg text-vugy-primary text-xs font-bold uppercase tracking-wider mb-5 border border-vugy-primary/20">
            <span>Free Desktop App for Mac & Windows</span>
          </div>

          {/* SlapMac Copycat Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-vugy-text-primary leading-[1.2] mb-4">
            Your keyboard just <br />
            got a <span className="text-vugy-primary">sense of humor.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-base text-vugy-text-secondary mb-5 max-w-lg leading-relaxed">
            VugyVugy sits quietly in your menu bar. Every time you press Space, Enter, or Arrow keys, it triggers a hilarious meme sound effect. Instant serotonin between pull request reviews.
          </p>

          {/* Interactive Giant Spacebar Keycap */}
          <div className={`relative mb-6 flex justify-center ${keyStyles.wrapperClass}`}>
            {/* Pop-up Speech Bubble */}
            <AnimatePresence>
              {bubbleActive && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: -45, scale: 1.1 }}
                  exit={{ opacity: 0, y: -65, scale: 0.9 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 px-4 py-2 bg-vugy-primary text-white text-xs font-extrabold font-mono rounded-xl shadow-lg border-2 border-white select-none whitespace-nowrap z-30"
                >
                  {speechBubble}
                  <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-vugy-primary" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Spacebar Button */}
            <button
              onClick={handleSpacebarClick}
              className={`w-full bg-white border-2 border-gray-300 rounded-xl text-center font-extrabold text-vugy-primary select-none relative transition-all duration-75 cursor-pointer shadow-[0_5px_0_#c4c8c2] hover:bg-[#fafafa] focus:outline-none ${keyStyles.buttonClass
                } ${spacebarPressed ? "translate-y-1 shadow-[0_1px_0_#c4c8c2]" : ""
                }`}
            >
              {keyStyles.buttonLabel}
            </button>

            {/* Ripple expand rings */}
            <AnimatePresence>
              {rippleActive && (
                <motion.span
                  initial={{ opacity: 0.6, scale: 0.95 }}
                  animate={{ opacity: 0, scale: 1.4 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0 rounded-xl border-4 border-vugy-primary/40 pointer-events-none"
                />
              )}
            </AnimatePresence>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-4">
            {/* Windows CTA */}
            <a
              href="https://github.com/Mansi-126/vugyvugy-web/releases/download/v1.0.0/VugyVugy.Setup.1.0.0.exe"
              download
              className="flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-vugy-primary hover:bg-vugy-primary-hover text-white text-sm font-bold transition-all shadow-md hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M0 3.449L9.75 2.1v9.45H0V3.449zM0 12.45h9.75v9.45L0 20.551v-8.1zM11.25 1.9L24 0v11.55H11.25V1.9zM11.25 12.45H24v11.55l-12.75-1.9v-9.65z" />
              </svg>
              Download for Windows
            </a>

            {/* Mac CTA */}
            <a
              href="https://github.com/Mansi-126/vugyvugy-web/releases/download/v1.0.0/VugyVugy-1.0.0-arm64.dmg"
              download
              className="flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl border-2 border-vugy-primary bg-white text-vugy-primary text-sm font-bold hover:bg-vugy-active-bg transition-all shadow-sm hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.2.67-2.92 1.49-.62.71-1.16 1.85-1.01 2.96 1.12.09 2.27-.57 2.94-1.39z" />
              </svg>
              Download for Mac
            </a>
          </div>

          {/* Under Note */}
          <div className="flex items-center gap-2 text-sm text-vugy-text-muted">
            <span className="text-vugy-primary font-bold text-base leading-none">✓</span>
            <span>Free. Works best when your manager is on mute.</span>
          </div>
        </motion.div>

        {/* Right Side: Pixel-Perfect actual app UI card mockup */}
        <div className="flex items-center justify-center w-full overflow-visible">
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
            className="w-full max-w-[500px] bg-white border border-vugy-border rounded-2xl shadow-xl overflow-visible relative"
          >
            {/* Mock Windows Header */}
            <div className="bg-[#FAFBF9] border-b border-vugy-border px-4 py-3 flex items-center justify-between select-none">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
              </div>
              <div className="text-[11px] font-semibold text-vugy-text-muted font-mono tracking-wider">
                VUGYVUGY PANEL
              </div>
              <div className="w-12" /> {/* spacing placeholder */}
            </div>

            {/* Mock App Banner / Brand Info */}
            <div className="px-5 py-4 bg-white flex items-center justify-between border-b border-[#F0F2EE]">
              <div className="flex items-center gap-2.5">
                {/* Mini Mascot SVG */}
                <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none">
                  <path d="M22 48 C22 18, 78 18, 78 48" stroke="#1A1A1A" strokeWidth="5" strokeLinecap="round" fill="none" />
                  <rect x="12" y="38" width="10" height="24" rx="5" fill="#2D6A4F" stroke="#1A1A1A" strokeWidth="3" />
                  <rect x="78" y="38" width="10" height="24" rx="5" fill="#2D6A4F" stroke="#1A1A1A" strokeWidth="3" />
                  <rect x="25" y="33" width="50" height="42" rx="12" fill="#E2E8F0" />
                  <rect x="25" y="30" width="50" height="42" rx="12" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="3.5" />
                  <path d="M35 48 C37 44, 41 44, 43 48" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" fill="none" />
                  <path d="M56 48 L64 48" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" fill="none" />
                  <ellipse cx="33" cy="56" rx="4" ry="2" fill="#86EFAC" />
                  <ellipse cx="67" cy="56" rx="4" ry="2" fill="#86EFAC" />
                  <path d="M42 56 C42 56, 50 66, 58 56 Z" fill="#1A1A1A" />
                  <path d="M46 59 C46 59, 50 63, 54 59 Z" fill="#FF8A8A" />
                  <path d="M47 38 L50 43 L53 38" stroke="#2D6A4F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
                <div>
                  <div className="flex items-baseline leading-none">
                    <span className="font-extrabold text-sm text-[#1A1A1A] tracking-tight">Vugy</span>
                    <span className="font-extrabold text-sm text-[#2D6A4F] tracking-tight">Vugy</span>
                  </div>
                  <p className="text-[8px] text-vugy-text-muted font-bold uppercase tracking-wider mt-0.5">Desktop Soundboard</p>
                </div>
              </div>

              {/* ON/OFF Switch */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-vugy-text-secondary">SYSTEM:</span>
                <div
                  onClick={() => {
                    setSystemOn(!systemOn);
                    setDropdownOpen(false);
                    setIsPlayingMock(false);
                  }}
                  className={`rounded-full px-3 py-1 font-extrabold text-[10px] tracking-widest shadow-inner flex items-center gap-1.5 cursor-pointer transition-all ${systemOn
                    ? "bg-[#2D6A4F] text-white"
                    : "bg-gray-300 text-gray-600"
                    }`}
                >
                  {systemOn && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                  {systemOn ? "ON" : "OFF"}
                </div>
              </div>
            </div>

            {/* Mock App Core Dashboard content: 2 Columns */}
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-5 bg-white overflow-visible">

              {/* Col 1: Controls Panel */}
              <div className="flex flex-col gap-4 overflow-visible relative">
                {/* Trigger Key Select Mock */}
                <div className="relative">
                  <label className="block text-[10px] font-bold text-vugy-text-muted uppercase tracking-wider mb-1.5">
                    Trigger Key
                  </label>
                  <div
                    onClick={() => systemOn && setDropdownOpen(!dropdownOpen)}
                    className={`w-full border border-vugy-border rounded-lg px-3 py-2 flex items-center justify-between bg-[#FAFBF9] text-xs font-semibold text-vugy-text-primary hover:border-vugy-primary cursor-pointer transition-all ${!systemOn ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                  >
                    <span>{selectedKey}</span>
                    <ChevronDown className={`w-4 h-4 text-vugy-text-muted transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                  </div>

                  {/* Dropdown Options List */}
                  <AnimatePresence>
                    {dropdownOpen && systemOn && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="absolute left-0 right-0 mt-1 bg-white border border-vugy-border rounded-lg shadow-lg z-20 max-h-36 overflow-y-auto py-1 text-xs"
                      >
                        {keysList.map((keyOpt) => (
                          <div
                            key={keyOpt}
                            onClick={() => {
                              setSelectedKey(keyOpt);
                              setDropdownOpen(false);
                              setTimeout(() => {
                                handleSpacebarClick();
                              }, 50);
                            }}
                            className={`px-3 py-2 hover:bg-vugy-active-bg hover:text-vugy-primary cursor-pointer font-medium transition-colors ${selectedKey === keyOpt
                              ? "text-vugy-primary bg-vugy-active-bg/50 font-bold"
                              : "text-vugy-text-primary"
                              }`}
                          >
                            {keyOpt}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Selected Sound card (mint bg, green border) */}
                <div className={`border rounded-xl p-3.5 flex flex-col gap-1.5 transition-all duration-300 ${systemOn
                  ? "bg-vugy-active-bg border-vugy-primary"
                  : "bg-gray-50 border-vugy-border"
                  }`}>
                  <span className={`text-[9px] font-extrabold uppercase tracking-widest ${systemOn ? "text-vugy-primary" : "text-vugy-text-muted"
                    }`}>
                    Selected Sound
                  </span>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-extrabold ${systemOn ? "text-vugy-text-primary" : "text-vugy-text-secondary"}`}>
                        {selectedSound}
                      </span>
                      <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-bold ${systemOn
                        ? (isPlayingMock ? "bg-vugy-primary text-white" : "bg-vugy-primary/10 text-vugy-primary")
                        : "bg-gray-200 text-gray-400"
                        }`}>
                        {systemOn ? (isPlayingMock ? "PLAYING" : "ACTIVE") : "DISABLED"}
                      </span>
                    </div>

                    {/* Miniature waveform inside Selected Sound box when playing */}
                    {isPlayingMock && systemOn && (
                      <div className="flex items-end gap-0.5 h-3">
                        <motion.div animate={{ height: [3, 11, 3] }} transition={{ repeat: Infinity, duration: 0.3 }} className="w-0.5 bg-vugy-primary" />
                        <motion.div animate={{ height: [8, 3, 8] }} transition={{ repeat: Infinity, duration: 0.25 }} className="w-0.5 bg-vugy-primary" />
                        <motion.div animate={{ height: [4, 9, 4] }} transition={{ repeat: Infinity, duration: 0.35 }} className="w-0.5 bg-vugy-primary" />
                        <motion.div animate={{ height: [7, 3, 7] }} transition={{ repeat: Infinity, duration: 0.2 }} className="w-0.5 bg-vugy-primary" />
                      </div>
                    )}
                  </div>
                  <p className="text-[10px] text-vugy-text-secondary leading-snug">
                    Single action plays selected sound. Double press skips key.
                  </p>
                </div>

                {/* Controls Action buttons */}
                <div className="grid grid-cols-2 gap-2.5 mt-1">
                  <button
                    onClick={handlePlaySelect}
                    disabled={!systemOn}
                    className={`flex items-center justify-center gap-1.5 text-[11px] font-bold py-2 px-3 rounded-lg shadow-sm transition-colors ${systemOn
                      ? "bg-vugy-primary hover:bg-vugy-primary-hover text-white cursor-pointer"
                      : "bg-gray-100 border border-gray-200 text-gray-400 cursor-not-allowed"
                      }`}
                  >
                    <Play className="w-3 h-3 fill-current" />
                    Play Select
                  </button>
                  <button
                    onClick={handleNextPlay}
                    disabled={!systemOn}
                    className={`flex items-center justify-center gap-1.5 border text-[11px] font-bold py-2 px-3 rounded-lg transition-colors ${systemOn
                      ? "border-vugy-primary text-vugy-primary hover:bg-vugy-active-bg cursor-pointer"
                      : "border-gray-200 text-gray-400 cursor-not-allowed bg-transparent"
                      }`}
                  >
                    <SkipForward className="w-3 h-3" />
                    Next + Play
                  </button>
                </div>
              </div>

              {/* Col 2: Sound Library Panel */}
              <div className="flex flex-col">
                <span className="block text-[10px] font-bold text-vugy-text-muted uppercase tracking-wider mb-2.5">
                  Sound Library
                </span>

                {/* List mockup */}
                <div className="flex flex-col gap-2">
                  {soundsList.map((soundName) => {
                    const isSelected = selectedSound === soundName;
                    return (
                      <div
                        key={soundName}
                        onClick={() => handleSelectSound(soundName)}
                        className={`border rounded-xl px-3 py-2.5 flex justify-between items-center transition-all duration-200 cursor-pointer ${!systemOn
                          ? "opacity-50 border-vugy-border bg-[#FAFBF9] cursor-not-allowed"
                          : isSelected
                            ? "border-vugy-primary bg-vugy-active-bg shadow-sm"
                            : "border-vugy-border bg-[#FAFBF9] hover:border-vugy-primary/60"
                          }`}
                      >
                        <span className={`text-xs ${isSelected && systemOn
                          ? "font-bold text-vugy-primary"
                          : "font-semibold text-vugy-text-primary"
                          }`}>
                          {soundName}{isSelected && systemOn ? " (Selected)" : ""}
                        </span>

                        {isSelected && systemOn ? (
                          <span className="w-1.5 h-1.5 rounded-full bg-vugy-primary" />
                        ) : (
                          <span className="text-[9px] font-bold text-vugy-primary hover:underline">
                            Play Demo
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 flex items-center justify-center gap-1.5 text-[9px] text-vugy-text-muted font-semibold bg-[#FAFBF9] border border-vugy-border/50 rounded-lg p-2">
                  <span>🔊 4 sounds loaded in stack</span>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
