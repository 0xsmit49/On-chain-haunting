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

  const features = [
    {
      id: 1,
      title: "Summon Ghosts",
      subtitle: "Mint Supernatural NFTs", 
      description: "Create unique ghost NFTs by solving cryptic riddles and blockchain puzzles.",
      emoji: "👻",
      color: "blue",
      cta: "Start Summoning",
      link: "/summon-ghost"
    },
    {
      id: 2,
      title: "Haunting Map",
      subtitle: "Explore the Spirit Realm",
      description: "Navigate a live map showing active ghosts, haunted areas, and supernatural hotspots.",
      emoji: "🗺️", 
      color: "purple",
      cta: "View Map",
      link: "/map"
    }
  ];

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