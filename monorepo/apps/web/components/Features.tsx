import React, { useState, useEffect } from 'react';

const FeaturesSection = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCardClick = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

 // Add complete features array
const features = [
  {
    id: 1,
    title: "Summon Ghosts",
    subtitle: "Mint Supernatural NFTs",
    description: "Create unique ghost NFTs by solving cryptic riddles and blockchain puzzles. Each ghost has distinct powers, personalities, and haunting abilities.",
    emoji: "👻",
    color: "blue",
    details: [
      "4 unique ghost types: Whisper, Poltergeist, Banshee, Wraith",
      "Dynamic stats: Haunting, Mischief, Charisma",
      "Puzzle-based summoning with riddles and challenges",
      "Rarity system: Common, Rare, Epic, Legendary"
    ],
    cta: "Start Summoning",
    link: "/summon-ghost"
  },
  {
    id: 2,
    title: "Haunting Map",
    subtitle: "Explore the Spirit Realm",
    description: "Navigate a live map showing active ghosts, haunted areas, and supernatural hotspots. Battle, exorcise, or befriend other spirits.",
    emoji: "🗺️",
    color: "purple", 
    details: [
      "Real-time ghost locations and activities",
      "Interactive haunted areas with chaos metrics", 
      "Battle system for ghost vs ghost combat",
      "Leaderboards showing top performing spirits"
    ],
    cta: "View Map",
    link: "/map"
  },
  {
    id: 3,
    title: "Exorcism Challenges",
    subtitle: "Puzzle-Based Ghost Removal",
    description: "Solve timed riddles, pattern puzzles, and memory games to exorcise hostile ghosts and claim rewards.",
    emoji: "🔥",
    color: "red",
    details: [
      "Ghost-specific puzzle types and difficulties",
      "Timed challenges with multiple attempts",
      "Success rates based on your ghost's charisma",
      "Rewards: XP, tokens, and special badges"
    ],
    cta: "Start Exorcising",
    link: "/map"
  },
  {
    id: 4,
    title: "Meme Mating",
    subtitle: "Breed Hilarious Hybrids",
    description: "Combine two of your ghosts to create bizarre supernatural offspring with mashup names and fusion powers.",
    emoji: "💞",
    color: "pink",
    details: [
      "Breed any 2 ghosts you own for unique offspring",
      "Mashup names like 'Banspirit' and 'Wrailtergeist'", 
      "New stats: Chaos, Cuteness, Weirdness levels",
      "Share your creations on social media"
    ],
    cta: "Start Breeding",
    link: "/meme-mating"
  },
  {
    id: 5,
    title: "Ghost Battles",
    subtitle: "Strategic Spirit Combat",
    description: "Challenge other players' ghosts in turn-based battles using unique powers and supernatural abilities.",
    emoji: "⚔️",
    color: "green",
    details: [
      "Turn-based combat with ghost powers",
      "Ability matchups: Silent Possession vs Soul Binding",
      "Mischief Points and Ghost Fragment rewards",
      "Climb the battle leaderboards"
    ],
    cta: "Enter Battle",
    link: "/map"
  },
  {
    id: 6,
    title: "Achievements",
    subtitle: "Unlock Supernatural Badges",
    description: "Complete challenges, reach milestones, and unlock special achievements in your ghostly journey.",
    emoji: "🏆",
    color: "yellow",
    details: [
      "Achievement system with rare badges",
      "Milestone rewards for summoning, battles, exorcisms",
      "Special titles like 'Legendary Exorcist'",
      "XP progression and token rewards"
    ],
    cta: "View Progress",
    link: "/achievements"
  }
];

// Add color system
const getColorClasses = (color) => {
  const colors = {
    blue: {
      bg: "bg-blue-600/20",
      border: "border-blue-500/30",
      text: "text-blue-300",
      glow: "shadow-blue-500/20",
      hover: "hover:border-blue-400"
    },
    purple: {
      bg: "bg-purple-600/20", 
      border: "border-purple-500/30",
      text: "text-purple-300",
      glow: "shadow-purple-500/20",
      hover: "hover:border-purple-400"
    },
    red: {
      bg: "bg-red-600/20",
      border: "border-red-500/30", 
      text: "text-red-300",
      glow: "shadow-red-500/20",
      hover: "hover:border-red-400"
    },
    pink: {
      bg: "bg-pink-600/20",
      border: "border-pink-500/30",
      text: "text-pink-300", 
      glow: "shadow-pink-500/20",
      hover: "hover:border-pink-400"
    },
    green: {
      bg: "bg-green-600/20",
      border: "border-green-500/30",
      text: "text-green-300",
      glow: "shadow-green-500/20", 
      hover: "hover:border-green-400"
    },
    yellow: {
      bg: "bg-yellow-600/20",
      border: "border-yellow-500/30",
      text: "text-yellow-300",
      glow: "shadow-yellow-500/20",
      hover: "hover:border-yellow-400"
    }
  };
  return colors[color] || colors.blue;
};

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6"
            style={{ fontFamily: "Holtwood One SC, serif" }}
          >
            Supernatural Features
          </h2>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;