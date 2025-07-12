import React, { useState, useEffect } from "react";
import MyCustomComponent from './FLoatingDock';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 z-20">
        <MyCustomComponent />
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