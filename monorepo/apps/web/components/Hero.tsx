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