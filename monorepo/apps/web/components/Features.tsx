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
// Add mouse tracking in useEffect
useEffect(() => {
  setIsVisible(true);
  
  const handleMouseMove = (e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100,
    });
  };

  window.addEventListener('mousemove', handleMouseMove);
  return () => window.removeEventListener('mousemove', handleMouseMove);
}, []);


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
    // Add background effects
<div className="absolute inset-0 opacity-5">
  <div className="h-full w-full" style={{
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
    `,
    backgroundSize: '100px 100px'
  }} />
</div>

{/* Floating Ghost Particles */}
<div className="absolute inset-0 pointer-events-none">
  {[...Array(6)].map((_, i) => (
    <div
      key={i}
      className="absolute text-4xl opacity-10 animate-pulse"
      style={{
        left: `${20 + (i * 15)}%`,
        top: `${10 + (i % 3) * 30}%`,
        animationDelay: `${i * 0.5}s`,
        animationDuration: `${3 + (i % 3)}s`
      }}
    >
      {['👻', '🔮', '💀', '🌫️', '⚡', '🔥'][i]}
    </div>
  ))}
</div>

// Add complete features grid with expandable details
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
  {features.map((feature, index) => {
    const colorClasses = getColorClasses(feature.color);
    const isActive = activeCard === feature.id;
    
    return (
      <div
        key={feature.id}
        className={`relative group cursor-pointer transition-all duration-500 transform ${
          isActive ? 'scale-105 z-10' : 'hover:scale-102'
        } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ transitionDelay: `${index * 100}ms` }}
        onClick={() => handleCardClick(feature.id)}
      >
        <div className={`
          relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 
          border-2 ${colorClasses.border} ${colorClasses.hover}
          transition-all duration-500 h-full
          ${isActive ? `${colorClasses.bg} shadow-2xl ${colorClasses.glow}` : 'hover:bg-gray-800/50'}
        `}>
          
          <div className="text-6xl mb-6 text-center transform transition-all duration-300 group-hover:scale-110">
            {feature.emoji}
          </div>

          <h3 
            className={`text-2xl font-bold mb-3 text-center ${colorClasses.text}`}
            style={{ fontFamily: "Holtwood One SC, serif" }}
          >
            {feature.title}
          </h3>

          <h4 
            className="text-lg text-white mb-4 text-center font-medium"
            style={{ fontFamily: "Holtwood One SC, serif" }}
          >
            {feature.subtitle}
          </h4>

          <p 
            className="text-gray-300 text-center mb-6 leading-relaxed"
            style={{ fontFamily: "Holtwood One SC, serif" }}
          >
            {feature.description}
          </p>

          {/* Expandable Details */}
          <div className={`transition-all duration-500 overflow-hidden ${
            isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="border-t border-gray-700 pt-6 mb-6">
              <h5 className="text-white font-bold mb-4 text-center" style={{ fontFamily: "Holtwood One SC, serif" }}>
                Key Features:
              </h5>
              <ul className="space-y-3">
                {feature.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className={`${colorClasses.text} text-sm mt-1`}>▪</span>
                    <span 
                      className="text-gray-300 text-sm leading-relaxed"
                      style={{ fontFamily: "Holtwood One SC, serif" }}
                    >
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.location.href = feature.link;
              }}
              className={`
                px-6 py-3 rounded-xl font-bold transition-all duration-300 
                transform hover:scale-105 border-2 ${colorClasses.border} 
                ${colorClasses.text} hover:bg-white hover:text-black
                ${isActive ? 'animate-pulse' : ''}
              `}
              style={{ fontFamily: "Holtwood One SC, serif" }}
            >
              {feature.cta} →
            </button>
          </div>
        </div>
      </div>
    );
  })}
</div>

// Add bottom CTA
<div className={`text-center mt-16 transition-all duration-1000 delay-500 ${
  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
}`}>
  <p 
    className="text-gray-400 text-lg mb-8"
    style={{ fontFamily: "Holtwood One SC, serif" }}
  >
    Ready to enter the supernatural realm?
  </p>
  <button
    onClick={() => window.location.href = '/summon-ghost'}
    className="px-12 py-4 bg-white text-black font-bold rounded-xl text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
    style={{ fontFamily: "Holtwood One SC, serif" }}
  >
    Start Your Ghostly Journey
  </button>
</div>

<style jsx>{`
  @import url('https://fonts.googleapis.com/css2?family=Holtwood+One+SC&display=swap');
`}</style>
  );
};

export default FeaturesSection;