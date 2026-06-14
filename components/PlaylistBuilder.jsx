"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, 
  Trash2, 
  Play, 
  Pause, 
  Sparkles, 
  Music, 
  Settings, 
  Folder, 
  GripVertical, 
  ChevronRight, 
  Edit2, 
  Check, 
  X, 
  FolderPlus, 
  LayoutDashboard, 
  ListMusic, 
  ListPlus, 
  PlayCircle, 
  Star, 
  Search,
  Minus,
  Square
} from "lucide-react";

// List of all available meme sounds
const ALL_SOUNDS = [
  { id: "s1", name: "Aauuu", file: "Aauuu.mp3", emoji: "😩", category: "Effects", duration: "00:02", avatarBg: "bg-red-100 text-red-600" },
  { id: "s2", name: "Acha Ji", file: "acha-ji-aisa-hai-kya.mp3", emoji: "🤔", category: "Funny", duration: "00:03", avatarBg: "bg-yellow-100 text-yellow-600" },
  { id: "s3", name: "Kehna Kya", file: "are-kehna-kya-chahte-ho-.mp3", emoji: "🧐", category: "Memes", duration: "00:04", avatarBg: "bg-blue-100 text-blue-600" },
  { id: "s4", name: "Chaloo", file: "chaloo.mp3", emoji: "🏃‍♂️", category: "Effects", duration: "00:01", avatarBg: "bg-green-100 text-green-600" },
  { id: "s5", name: "Gajab Bejjati", file: "gajab-bejjati-hai-yaar.mp3", emoji: "😅", category: "Funny", duration: "00:03", avatarBg: "bg-pink-100 text-pink-600" },
  { id: "s6", name: "Mera Mazak", file: "kaisa-laga-mera-mazak.mp3", emoji: "😜", category: "Memes", duration: "00:02", avatarBg: "bg-orange-100 text-orange-600" },
  { id: "s7", name: "Kaun Hai Ye", file: "kaun-hai-ye-log.mp3", emoji: "👽", category: "Memes", duration: "00:03", avatarBg: "bg-purple-100 text-purple-600" },
  { id: "s8", name: "Rom Rom", file: "rom-rom-bhaiyo.mp3", emoji: "🙏", category: "Effects", duration: "00:02", avatarBg: "bg-emerald-100 text-emerald-600" }
];

export default function PlaylistBuilder() {
  // State for playlists
  const [playlists, setPlaylists] = useState([
    {
      id: "p-1",
      name: "Work Vibes",
      soundIds: ["s8", "s4", "s1", "s5"],
    },
    {
      id: "p-2",
      name: "Chill Mode",
      soundIds: ["s2", "s3", "s7", "s6"],
    },
    {
      id: "p-3",
      name: "Funny Breaks",
      soundIds: ["s5", "s6", "s1"],
    },
    {
      id: "p-4",
      name: "Late Night Coding",
      soundIds: ["s4", "s8", "s3"],
    }
  ]);

  const [activePlaylistId, setActivePlaylistId] = useState("p-1");
  const [newPlaylistName, setNewPlaylistName] = useState("");
  const [isCreatingPlaylist, setIsCreatingPlaylist] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [editingTitleText, setEditingTitleText] = useState("");
  
  // Library filters & search
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  // Playback System States
  const [playingSoundId, setPlayingSoundId] = useState(null);
  const [isPlayingAll, setIsPlayingAll] = useState(false);
  const [currentPlayIndex, setCurrentPlayIndex] = useState(0);
  const [audioSource, setAudioSource] = useState("library"); // "library" or "editor"
  const audioRef = useRef(null);

  // Drag and Drop ordering state
  const [draggedIndex, setDraggedIndex] = useState(null);

  const activePlaylist = playlists.find((p) => p.id === activePlaylistId) || playlists[0] || { name: "", soundIds: [] };
  const activeSounds = activePlaylist.soundIds
    .map((id) => ALL_SOUNDS.find((s) => s.id === id))
    .filter(Boolean);

  // Filtered sounds for the library panel
  const filteredLibrarySounds = ALL_SOUNDS.filter((sound) => {
    const matchesSearch = sound.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeFilter === "All" || sound.category === activeFilter;
    return matchesSearch && matchesCategory;
  });

  // Audio play function
  const playAudioFile = (soundId, source, onEndCallback = null) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const sound = ALL_SOUNDS.find((s) => s.id === soundId);
    if (!sound) return;

    const audio = new Audio(`/sounds/${sound.file}`);
    audioRef.current = audio;
    setPlayingSoundId(soundId);
    setAudioSource(source);

    audio.play().catch((err) => {
      console.error("Audio playback error:", err);
      setPlayingSoundId(null);
      if (onEndCallback) onEndCallback();
    });

    audio.onended = () => {
      setPlayingSoundId(null);
      audioRef.current = null;
      if (onEndCallback) {
        onEndCallback();
      }
    };
  };

  // Play single preview sound
  const handlePlaySound = (soundId, source) => {
    // Stop sequential play if running
    if (isPlayingAll) {
      setIsPlayingAll(false);
    }

    if (playingSoundId === soundId && audioSource === source) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      setPlayingSoundId(null);
      return;
    }

    playAudioFile(soundId, source);
  };

  // Play playlist sequential loop
  const handlePlayAll = () => {
    if (isPlayingAll) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      setPlayingSoundId(null);
      setIsPlayingAll(false);
      return;
    }

    if (activePlaylist.soundIds.length === 0) return;

    setIsPlayingAll(true);
    playStep(0);
  };

  const playStep = (index) => {
    if (index >= activePlaylist.soundIds.length) {
      setIsPlayingAll(false);
      setPlayingSoundId(null);
      return;
    }

    setCurrentPlayIndex(index);
    const soundId = activePlaylist.soundIds[index];
    playAudioFile(soundId, "editor", () => {
      // Trigger next step
      playStep(index + 1);
    });
  };

  // Add sound to active playlist
  const handleAddSoundToPlaylist = (soundId) => {
    setPlaylists((prev) =>
      prev.map((p) => {
        if (p.id === activePlaylistId) {
          return { ...p, soundIds: [...p.soundIds, soundId] };
        }
        return p;
      })
    );
  };

  // Remove sound from active playlist
  const handleRemoveSoundFromPlaylist = (indexToRemove) => {
    // If playing all, stop playback
    if (isPlayingAll) {
      setIsPlayingAll(false);
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setPlayingSoundId(null);
    }

    setPlaylists((prev) =>
      prev.map((p) => {
        if (p.id === activePlaylistId) {
          const newIds = [...p.soundIds];
          newIds.splice(indexToRemove, 1);
          return { ...p, soundIds: newIds };
        }
        return p;
      })
    );
  };

  // Create playlist
  const handleCreatePlaylist = () => {
    if (!newPlaylistName.trim()) {
      setIsCreatingPlaylist(false);
      return;
    }
    const newId = `p-${Date.now()}`;
    const newP = {
      id: newId,
      name: newPlaylistName.trim(),
      soundIds: []
    };
    setPlaylists([...playlists, newP]);
    setActivePlaylistId(newId);
    setNewPlaylistName("");
    setIsCreatingPlaylist(false);
  };

  // Delete playlist
  const handleDeletePlaylist = (id) => {
    if (playlists.length <= 1) return;
    // Stop playback if playing
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setPlayingSoundId(null);
    setIsPlayingAll(false);

    const filtered = playlists.filter((p) => p.id !== id);
    setPlaylists(filtered);
    setActivePlaylistId(filtered[0].id);
  };

  // Inline rename playlist
  const handleSaveTitle = () => {
    if (!editingTitleText.trim()) {
      setIsEditingTitle(false);
      return;
    }
    setPlaylists((prev) =>
      prev.map((p) => {
        if (p.id === activePlaylistId) {
          return { ...p, name: editingTitleText.trim() };
        }
        return p;
      })
    );
    setIsEditingTitle(false);
  };

  // Drag and drop handlers
  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;

    const reorderedIds = [...activePlaylist.soundIds];
    const draggedId = reorderedIds[draggedIndex];
    reorderedIds.splice(draggedIndex, 1);
    reorderedIds.splice(index, 0, draggedId);

    setPlaylists((prev) =>
      prev.map((p) => {
        if (p.id === activePlaylistId) {
          return { ...p, soundIds: reorderedIds };
        }
        return p;
      })
    );

    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  // Sidebar styling icons mapping
  const getSidebarIcon = (index, isActive) => {
    const iconClass = "w-4 h-4";
    if (index === 0) {
      return (
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isActive ? 'bg-vugy-primary/20 text-vugy-primary' : 'bg-emerald-50 text-emerald-600'}`}>
          <Star className={iconClass} />
        </div>
      );
    }
    const colors = [
      "bg-purple-100 text-purple-600",
      "bg-orange-100 text-orange-600",
      "bg-sky-100 text-sky-600",
      "bg-pink-100 text-pink-600"
    ];
    const colorClass = colors[(index - 1) % colors.length];
    return (
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isActive ? 'bg-vugy-primary/20 text-vugy-primary' : colorClass}`}>
        <Music className={iconClass} />
      </div>
    );
  };

  // Cleanup audio
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <section id="playlist-builder" className="py-16 sm:py-24 bg-[#EBEFEA] scroll-mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-center mb-16 sm:mb-24">
          
          {/* Left Column: Copy and Info */}
          <div className="xl:col-span-4 flex flex-col justify-center items-center xl:items-start text-center xl:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-vugy-active-bg text-[#2D6A4F] text-xs font-bold uppercase tracking-wider mb-6 border border-vugy-primary/10 w-fit">
              <span>PLAYLISTS & COLLECTIONS</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-6 leading-[1.1]">
              Create. Organize.<br />
              <span className="text-[#2D6A4F]">Play Your Way.</span>
            </h2>
            
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-10 max-w-md">
              Build your own playlists, add your favorite sounds, and switch between them anytime. 
              Your vibes, your collection.
            </p>

            {/* List of Features */}
            <div className="space-y-6 text-left w-full max-w-md">
              
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#D0DFD0]/40 flex items-center justify-center text-[#2D6A4F] shrink-0 shadow-sm">
                  <FolderPlus className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-slate-800">Create Multiple Playlists</h4>
                  <p className="text-xs text-slate-500 mt-1 max-w-sm">
                    Make as many playlists as you want for different moods and moments.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#D0DFD0]/40 flex items-center justify-center text-[#2D6A4F] shrink-0 shadow-sm">
                  <ListPlus className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-slate-800">Add & Select Sounds</h4>
                  <p className="text-xs text-slate-500 mt-1 max-w-sm">
                    Pick your favorite sounds from the library and add them to any playlist.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#D0DFD0]/40 flex items-center justify-center text-[#2D6A4F] shrink-0 shadow-sm">
                  <PlayCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-slate-800">Play from Your Collection</h4>
                  <p className="text-xs text-slate-500 mt-1 max-w-sm">
                    Select a playlist and enjoy seamless playback with a single key press.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: App Window Mockup */}
          <div className="xl:col-span-8 relative">
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-[0_25px_60px_-15px_rgba(45,106,79,0.12)] overflow-hidden">
              
              {/* Window Bar Header */}
              <div className="bg-slate-50/50 border-b border-slate-100 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-slate-300" />
                  <span className="w-3 h-3 rounded-full bg-slate-300" />
                  <span className="w-3 h-3 rounded-full bg-slate-300" />
                </div>
                
                {/* Windows Window Controls Mockup */}
                <div className="flex items-center gap-4 text-slate-400">
                  <Minus className="w-4 h-4 cursor-default hover:text-slate-600" />
                  <Square className="w-3.5 h-3.5 cursor-default hover:text-slate-600" />
                  <X className="w-4 h-4 cursor-default hover:text-red-500" />
                </div>
              </div>

              {/* Three-Column Application Console */}
              <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
                
                {/* PANEL 1: SIDEBAR (Col span 3) */}
                <div className="lg:col-span-3 bg-slate-50/40 border-b lg:border-b-0 lg:border-r border-slate-100 p-5 flex flex-col justify-between min-w-0">
                  <div>
                    {/* Brand Logo */}
                    <div className="flex items-center gap-3 mb-8 select-none">
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

                          {/* Sound Waves */}
                          <path d="M91 42 A 6 6 0 0 1 91 54" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" fill="none" />
                          <path d="M9 42 A 6 6 0 0 0 9 54" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" fill="none" />
                        </svg>
                      </div>
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

                    {/* App Links List */}
                    <div className="space-y-1 mb-8">
                      <button className="w-full flex items-center gap-3 px-3 py-2 text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors">
                        <LayoutDashboard className="w-4 h-4" />
                        Dashboard
                      </button>
                      <button className="w-full flex items-center gap-3 px-3 py-2 text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors">
                        <Music className="w-4 h-4" />
                        Sound Library
                      </button>
                      <button className="w-full flex items-center gap-3 px-3 py-2 bg-[#E8F5E9] text-[#2D6A4F] rounded-lg px-3 py-2.5 text-xs font-extrabold transition-all border border-emerald-100/50">
                        <ListMusic className="w-4 h-4 text-[#2D6A4F]" />
                        Playlists
                      </button>
                      <button className="w-full flex items-center gap-3 px-3 py-2 text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors">
                        <Settings className="w-4 h-4" />
                        Settings
                      </button>
                    </div>

                    {/* Playlists Title & List */}
                    <div className="mt-8">
                      <div className="flex items-center justify-between px-2 mb-3">
                        <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">My Playlists</span>
                        <button 
                          onClick={() => setIsCreatingPlaylist(true)}
                          className="text-slate-400 hover:text-[#2D6A4F] hover:bg-slate-100 p-1 rounded transition-colors"
                          title="Add playlist"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Playlist items */}
                      <div className="space-y-1.5 max-h-[220px] overflow-y-auto pr-1">
                        {playlists.map((playlist, idx) => {
                          const isActive = playlist.id === activePlaylistId;
                          return (
                            <div
                              key={playlist.id}
                              onClick={() => {
                                setActivePlaylistId(playlist.id);
                                setIsEditingTitle(false);
                              }}
                              className={`flex items-center justify-between p-2 rounded-xl border transition-all cursor-pointer ${
                                isActive
                                  ? "bg-white border-[#2D6A4F]/20 shadow-sm"
                                  : "bg-transparent border-transparent hover:bg-slate-50"
                              }`}
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                {getSidebarIcon(idx, isActive)}
                                <div className="text-left min-w-0">
                                  <div className="text-xs font-extrabold text-slate-700 truncate leading-tight">
                                    {playlist.name}
                                  </div>
                                  <div className="text-[10px] text-slate-400 font-semibold mt-0.5">
                                    {playlist.soundIds.length} sounds
                                  </div>
                                </div>
                              </div>

                              {isActive && (
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handlePlayAll();
                                  }}
                                  className="w-6 h-6 rounded-full bg-[#2D6A4F] flex items-center justify-center text-white shrink-0 hover:bg-[#1B4332] active:scale-95 transition-all"
                                >
                                  {isPlayingAll ? (
                                    <Pause className="w-3 h-3 fill-current" />
                                  ) : (
                                    <Play className="w-3 h-3 fill-current ml-0.5" />
                                  )}
                                </button>
                              )}
                            </div>
                          );
                        })}

                        {/* Inline Create Playlist input */}
                        {isCreatingPlaylist && (
                          <div className="p-2 border border-dashed border-emerald-300 rounded-xl bg-emerald-50/20">
                            <input
                              type="text"
                              autoFocus
                              placeholder="Playlist name..."
                              value={newPlaylistName}
                              onChange={(e) => setNewPlaylistName(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") handleCreatePlaylist();
                                if (e.key === "Escape") setIsCreatingPlaylist(false);
                              }}
                              className="w-full text-xs font-semibold px-2 py-1.5 border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-[#2D6A4F] bg-white text-slate-700"
                            />
                            <div className="flex justify-end gap-1.5 mt-2">
                              <button 
                                onClick={() => setIsCreatingPlaylist(false)}
                                className="p-1 rounded hover:bg-slate-100 text-slate-400 hover:text-slate-600"
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                              <button 
                                onClick={handleCreatePlaylist}
                                className="p-1 rounded hover:bg-[#E8F5E9] text-[#2D6A4F] font-bold"
                              >
                                <Check className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* New playlist action button at bottom */}
                      {!isCreatingPlaylist && (
                        <button
                          onClick={() => setIsCreatingPlaylist(true)}
                          className="w-full mt-3 py-2 bg-slate-50 border border-slate-200/60 rounded-xl text-slate-600 font-bold text-xs flex items-center justify-center gap-1 hover:bg-slate-100 hover:border-slate-300 transition-all active:scale-98"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          New Playlist
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* PANEL 2: PLAYLIST EDITOR (Col span 6) */}
                <div className="lg:col-span-6 border-b lg:border-b-0 lg:border-r border-slate-100 p-5 flex flex-col justify-between bg-white min-w-0">
                  <div>
                    {/* Header info */}
                    <div className="flex items-start justify-between gap-2 mb-6">
                      <div className="text-left flex-grow min-w-0">
                        {isEditingTitle ? (
                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              value={editingTitleText}
                              onChange={(e) => setEditingTitleText(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") handleSaveTitle();
                                if (e.key === "Escape") setIsEditingTitle(false);
                              }}
                              className="text-lg font-extrabold text-slate-800 border-b border-[#2D6A4F] focus:outline-none py-0.5 max-w-[150px]"
                              autoFocus
                            />
                            <button onClick={handleSaveTitle} className="p-1 hover:bg-slate-50 rounded text-[#2D6A4F]">
                              <Check className="w-4 h-4" />
                            </button>
                            <button onClick={() => setIsEditingTitle(false)} className="p-1 hover:bg-slate-50 rounded text-slate-400">
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1.5 group min-w-0">
                            <h3 className="text-lg font-black text-slate-800 truncate">
                              {activePlaylist.name}
                            </h3>
                            <button
                              onClick={() => {
                                setEditingTitleText(activePlaylist.name);
                                setIsEditingTitle(true);
                              }}
                              className="text-slate-400 hover:text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity p-0.5"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}
                        <p className="text-[11px] text-slate-400 font-semibold mt-0.5">
                          {activePlaylist.soundIds.length} sounds
                        </p>
                      </div>

                      {/* Header controls */}
                      <div className="flex items-center gap-2 shrink-0">
                        {playlists.length > 1 && (
                          <button
                            onClick={() => handleDeletePlaylist(activePlaylist.id)}
                            className="p-2 border border-slate-200 rounded-xl text-slate-400 hover:text-red-500 hover:border-red-100 transition-colors"
                            title="Delete playlist"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}

                        <button
                          onClick={handlePlayAll}
                          className="bg-[#2D6A4F] hover:bg-[#1B4332] text-white rounded-full px-4 py-2 text-xs font-black flex items-center gap-1.5 transition-all shadow-sm active:scale-95"
                        >
                          {isPlayingAll ? (
                            <>
                              <Pause className="w-3.5 h-3.5 fill-current" />
                              Pause All
                            </>
                          ) : (
                            <>
                              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                              Play All
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Playlist item rows with reorder logic */}
                    <div className="space-y-2 max-h-[350px] overflow-y-auto pr-1">
                      {activeSounds.length === 0 ? (
                        <div className="border-2 border-dashed border-slate-100 rounded-2xl p-10 text-center flex flex-col items-center justify-center">
                          <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-300 mb-3 border border-slate-100">
                            <Music className="w-5 h-5" />
                          </div>
                          <p className="text-xs font-extrabold text-slate-700">Empty Playlist</p>
                          <p className="text-[10px] text-slate-400 mt-1 max-w-[180px] mx-auto leading-relaxed">
                            Click the "+" buttons on the Sound Library panel to populate your tracks.
                          </p>
                        </div>
                      ) : (
                        activeSounds.map((sound, idx) => {
                          const isCurrentlyPlaying = playingSoundId === sound.id && audioSource === "editor";
                          const isDragTarget = draggedIndex === idx;

                          return (
                            <div
                              key={`${sound.id}-${idx}`}
                              draggable
                              onDragStart={(e) => handleDragStart(e, idx)}
                              onDragOver={(e) => handleDragOver(e, idx)}
                              onDragEnd={handleDragEnd}
                              className={`flex items-center justify-between p-2.5 rounded-2xl border transition-all select-none group bg-white ${
                                isCurrentlyPlaying
                                  ? "border-emerald-200 ring-2 ring-emerald-50/50 shadow-sm"
                                  : isDragTarget 
                                  ? "border-dashed border-emerald-400 bg-emerald-50/20 opacity-50"
                                  : "border-slate-100 hover:border-slate-200 hover:shadow-sm"
                              }`}
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                {/* Grip Drag Handle */}
                                <div className="text-slate-300 cursor-grab active:cursor-grabbing hover:text-slate-500 shrink-0">
                                  <GripVertical className="w-4 h-4" />
                                </div>

                                {/* Emoji Avatar Box */}
                                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-lg ${sound.avatarBg}`}>
                                  {sound.emoji}
                                </div>

                                {/* Sound metadata info */}
                                <div className="text-left min-w-0">
                                  <div className="text-xs font-extrabold text-slate-800 truncate">
                                    {sound.name}
                                  </div>
                                  <div className="text-[10px] text-slate-400 font-semibold mt-0.5">
                                    {sound.duration}
                                  </div>
                                </div>
                              </div>

                              {/* Play / Action controls */}
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => handlePlaySound(sound.id, "editor")}
                                  className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all ${
                                    isCurrentlyPlaying
                                      ? "bg-emerald-50 border-emerald-100 text-[#2D6A4F]"
                                      : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50 hover:border-slate-300"
                                  }`}
                                >
                                  {isCurrentlyPlaying ? (
                                    <Pause className="w-3.5 h-3.5 fill-current" />
                                  ) : (
                                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                                  )}
                                </button>

                                <button
                                  onClick={() => handleRemoveSoundFromPlaylist(idx)}
                                  className="w-7 h-7 rounded-full flex items-center justify-center bg-white border border-slate-200 text-slate-400 hover:text-red-500 hover:border-red-100 hover:bg-red-50/20 transition-all opacity-0 group-hover:opacity-100"
                                  title="Remove sound"
                                >
                                  <X className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          );
                        })
                      )}

                      {/* Empty guide card placeholder */}
                      <div className="border border-dashed border-slate-100 bg-slate-50/30 rounded-2xl p-4 flex items-center justify-center text-slate-400 text-[11px] font-bold">
                        <Plus className="w-3.5 h-3.5 mr-1" />
                        Add sounds here
                      </div>
                    </div>
                  </div>
                </div>

                {/* PANEL 3: SOUND LIBRARY (Col span 3) */}
                <div className="lg:col-span-3 bg-slate-50/30 p-5 flex flex-col justify-between min-w-0">
                  <div>
                    <h3 className="text-xs font-black tracking-widest text-slate-400 uppercase mb-4 text-left">
                      Sound Library
                    </h3>

                    {/* Search Field */}
                    <div className="relative mb-4">
                      <input
                        type="text"
                        placeholder="Search sounds..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-8 pr-4 py-2 border border-slate-200/80 rounded-xl text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-[#2D6A4F] bg-white text-slate-700 shadow-sm"
                      />
                      <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                      {searchQuery && (
                        <button 
                          onClick={() => setSearchQuery("")}
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                    {/* Filter Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5 select-none">
                      {["All", "Funny", "Memes", "Effects"].map((category) => {
                        const isPillActive = activeFilter === category;
                        return (
                          <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-3 py-1.5 rounded-full text-[10px] font-bold transition-all ${
                              isPillActive
                                ? "bg-[#2D6A4F] text-white"
                                : "bg-white border border-slate-200 text-slate-500 hover:bg-slate-50"
                            }`}
                          >
                            {category}
                          </button>
                        );
                      })}
                    </div>

                    {/* Library tracks list */}
                    <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
                      {filteredLibrarySounds.length === 0 ? (
                        <div className="text-center p-6 text-slate-400 italic text-[11px]">
                          No sounds match the query.
                        </div>
                      ) : (
                        filteredLibrarySounds.map((sound) => {
                          const isCurrentlyPlaying = playingSoundId === sound.id && audioSource === "library";
                          return (
                            <div
                              key={sound.id}
                              className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-100 hover:border-slate-200/80 transition-all shadow-sm"
                            >
                              <div className="flex items-center gap-2 min-w-0">
                                <span className="text-base shrink-0">{sound.emoji}</span>
                                <div className="text-left min-w-0">
                                  <div className="text-xs font-extrabold text-slate-700 truncate leading-tight">
                                    {sound.name}
                                  </div>
                                  <div className="text-[9px] text-slate-400 font-semibold mt-0.5">
                                    {sound.duration}
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center gap-1.5">
                                <button
                                  onClick={() => handlePlaySound(sound.id, "library")}
                                  className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all ${
                                    isCurrentlyPlaying
                                      ? "bg-emerald-50 border-emerald-100 text-[#2D6A4F]"
                                      : "bg-white border-slate-200 text-slate-400 hover:text-slate-600"
                                  }`}
                                >
                                  {isCurrentlyPlaying ? (
                                    <Pause className="w-3 h-3 fill-current" />
                                  ) : (
                                    <Play className="w-3 h-3 fill-current ml-0.5" />
                                  )}
                                </button>

                                <button
                                  onClick={() => handleAddSoundToPlaylist(sound.id)}
                                  className="w-6 h-6 rounded-full flex items-center justify-center bg-white border border-slate-200 text-slate-400 hover:text-[#2D6A4F] hover:border-[#2D6A4F] hover:bg-emerald-50/10 transition-all"
                                  title="Add to active playlist"
                                >
                                  <Plus className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/40 text-left">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Total {ALL_SOUNDS.length} sounds
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* Floating Mascot Badge on bottom right */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 3, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-7 -right-7 w-20 h-20 bg-[#FAFBF9] border border-slate-200/85 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.06)] flex items-center justify-center p-2.5 z-30 select-none pointer-events-none sm:pointer-events-auto"
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

                {/* Sound Waves */}
                <path d="M91 42 A 6 6 0 0 1 91 54" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" fill="none" className="animate-pulse" />
                <path d="M95 38 A 10 10 0 0 1 95 58" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" fill="none" className="animate-pulse" />
                <path d="M9 42 A 6 6 0 0 0 9 54" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" fill="none" className="animate-pulse" />
                <path d="M5 38 A 10 10 0 0 0 5 58" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" fill="none" className="animate-pulse" />
              </svg>
            </motion.div>
          </div>

        </div>

        {/* Bottom Section: How It Works */}
        <div className="pt-8 border-t border-[#D0DFD0]/40 max-w-5xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-black text-slate-800 text-center mb-10 tracking-tight">
            How It Works
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 relative">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center px-4 relative group">
              <div className="w-16 h-16 rounded-2xl bg-white border border-[#D0DFD0]/40 flex items-center justify-center text-[#2D6A4F] mb-4 shadow-sm group-hover:scale-105 transition-all">
                <FolderPlus className="w-8 h-8 stroke-[1.5px]" />
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase text-[#2D6A4F] tracking-wide mb-1">
                <span className="w-4 h-4 rounded-full bg-emerald-50 flex items-center justify-center text-[10px] border border-emerald-200">1</span>
                Create Playlist
              </span>
              <p className="text-xs text-slate-500 max-w-[160px] leading-relaxed">
                Click &ldquo;New Playlist&rdquo; and give it a name.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center px-4 relative group">
              <div className="w-16 h-16 rounded-2xl bg-white border border-[#D0DFD0]/40 flex items-center justify-center text-[#2D6A4F] mb-4 shadow-sm group-hover:scale-105 transition-all">
                <Music className="w-8 h-8 stroke-[1.5px]" />
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase text-[#2D6A4F] tracking-wide mb-1">
                <span className="w-4 h-4 rounded-full bg-emerald-50 flex items-center justify-center text-[10px] border border-emerald-200">2</span>
                Add Sounds
              </span>
              <p className="text-xs text-slate-500 max-w-[160px] leading-relaxed">
                Choose your favorite sounds from the library and add them.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center px-4 relative group">
              <div className="w-16 h-16 rounded-2xl bg-white border border-[#D0DFD0]/40 flex items-center justify-center text-[#2D6A4F] mb-4 shadow-sm group-hover:scale-105 transition-all">
                <ListPlus className="w-8 h-8 stroke-[1.5px]" />
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase text-[#2D6A4F] tracking-wide mb-1">
                <span className="w-4 h-4 rounded-full bg-emerald-50 flex items-center justify-center text-[10px] border border-emerald-200">3</span>
                Arrange & Customize
              </span>
              <p className="text-xs text-slate-500 max-w-[160px] leading-relaxed">
                Reorder sounds, preview them, and make your playlist perfect.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center px-4 relative group">
              <div className="w-16 h-16 rounded-2xl bg-white border border-[#D0DFD0]/40 flex items-center justify-center text-[#2D6A4F] mb-4 shadow-sm group-hover:scale-105 transition-all">
                <PlayCircle className="w-8 h-8 stroke-[1.5px]" />
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase text-[#2D6A4F] tracking-wide mb-1">
                <span className="w-4 h-4 rounded-full bg-emerald-50 flex items-center justify-center text-[10px] border border-emerald-200">4</span>
                Play & Enjoy
              </span>
              <p className="text-xs text-slate-500 max-w-[160px] leading-relaxed">
                Select your playlist and let the fun begin with a single press!
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
