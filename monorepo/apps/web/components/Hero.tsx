import React, { useState, useEffect } from "react";
import MyCustomComponent from './FLoatingDock';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  // Add state for ghost interactions
const [ghostHovered, setGhostHovered] = useState(false);
const [activeGhostType, setActiveGhostType] = useState(0);

// Add ghost types data
const ghostTypes = [
  { name: "Whisper", power: "Silent Possession", effect: "Sends cryptic messages", emoji: "👻", color: "text-blue-300" },
  { name: "Poltergeist", power: "Asset Disruption", effect: "Temporarily locks tokens", emoji: "🔮", color: "text-purple-300" },
  { name: "Banshee", power: "Network Haunting", effect: "Spreads across DAOs", emoji: "💀", color: "text-red-300" },
  { name: "Wraith", power: "Soul Binding", effect: "Creates permanent bonds", emoji: "🌫️", color: "text-green-300" }
];

// Add animation states
const [ghostMoving, setGhostMoving] = useState(false);

// Add ghost rotation effect in useEffect
const ghostInterval = setInterval(() => {
  setGhostMoving(true);
  setTimeout(() => {
    setActiveGhostType((prev) => (prev + 1) % ghostTypes.length);
    setGhostMoving(false);
  }, 300);
}, 4000);

return () => {
  clearInterval(ghostInterval);
};



  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 z-20">
        <MyCustomComponent />
      </div>
      // Add subtitle and grid layout
      
<p 
  className="text-lg md:text-xl text-gray-400 mt-6 max-w-3xl mx-auto leading-relaxed"
  style={{ fontFamily: "Holtwood One SC, serif" }}
>
  Solve riddles to exorcise or befriend the spirits
</p>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
  // Ghost animation and properties will go here
</div>
// Add left column with ghost animation
<div className="flex justify-center lg:justify-end">
  <div className="relative max-w-sm">
    <div 
      className={`relative transition-all duration-500 ${ghostHovered ? 'transform scale-110' : ''}`}
      onMouseEnter={() => setGhostHovered(true)}
      onMouseLeave={() => setGhostHovered(false)}
    >
      <div className={`relative transition-all duration-300 ${
        ghostMoving ? 'transform -translate-y-2 rotate-6' : 'transform translate-y-0 rotate-0'
      }`}>
        <div className={`text-[8rem] md:text-[10rem] transition-all duration-500 ${
          ghostHovered ? 'animate-bounce' : ''
        }`}>
          {ghostTypes[activeGhostType].emoji}
        </div>
      </div>
    </div>
  </div>
</div>

// Add background grid and glow effects
<div className="absolute inset-0 opacity-10">
  <div className="h-full w-full" style={{
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
    `,
    backgroundSize: '50px 50px'
  }} />
</div>

// Add ghost aura effect
<div className="absolute inset-0 opacity-20">
  <div className={`w-full h-full rounded-full blur-2xl transition-all duration-700 ${
    activeGhostType === 0 ? 'bg-blue-500' :
    activeGhostType === 1 ? 'bg-purple-500' :
    activeGhostType === 2 ? 'bg-red-500' : 'bg-green-500'
  }`} />
</div>

// Add progress indicators
<div className="flex justify-center gap-3 mt-6">
  {ghostTypes.map((_, index) => (
    <div
      key={index}
      className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
        index === activeGhostType ? 'bg-white scale-125' : 'bg-gray-600 hover:bg-gray-400'
      }`}
      onClick={() => setActiveGhostType(index)}
    />
  ))}
</div>

      <div className="container mx-auto px-6 pt-60 pb-20 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h1 
              className="text-2xl md:text-4xl lg:text-5xl text-white max-w-5xl mx-auto leading-tight tracking-wide"
              style={{ fontFamily: "Holtwood One SC, serif" }}
            >
              Mint ghosts that possess wallets and create blockchain chaos
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}