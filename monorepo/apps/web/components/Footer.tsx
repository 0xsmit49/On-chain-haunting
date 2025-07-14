import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  // Add email handler
const handleSubscribe = () => {
  if (email.trim()) {
    console.log('Subscribing email:', email);
    setEmail('');
    alert('Subscribed to ghostly updates!');
  }
};



  return (
    <footer className="relative border-t border-purple-500/20 bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white overflow-hidden">
      // Add newsletter section
<div>
  <h4 
    className="text-lg font-semibold text-white mb-6"
    style={{ fontFamily: "Holtwood One SC, serif" }}
  >
    Supernatural Updates
  </h4>
  <p 
    className="text-gray-300 mb-4 leading-relaxed"
    style={{ fontFamily: "Holtwood One SC, serif" }}
  >
    Get haunted with the latest ghost drops, breeding events, and supernatural rewards.
  </p>
  <div className="space-y-3">
    <div className="flex">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email..."
        className="flex-1 px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
        style={{ fontFamily: "Holtwood One SC, serif" }}
      />
      <button 
        onClick={handleSubscribe}
        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold rounded-r-lg hover:from-purple-700 hover:to-violet-700 transition-all duration-300"
        style={{ fontFamily: "Holtwood One SC, serif" }}
      >
        Subscribe
      </button>
    </div>
  </div>
</div>
// Add Ghost Features section
<div>
  <h4 
    className="text-lg font-semibold text-white mb-6"
    style={{ fontFamily: "Holtwood One SC, serif" }}
  >
    Ghost Features
  </h4>
  <ul className="space-y-3">
    <li>
      <a 
        href="/summon-ghost" 
        className="text-gray-300 hover:text-purple-300 transition-colors flex items-center gap-2 group"
        style={{ fontFamily: "Holtwood One SC, serif" }}
      >
        <span className="group-hover:animate-bounce">👻</span>
        Summon Ghosts
      </a>
    </li>
    <li>
      <a 
        href="/map" 
        className="text-gray-300 hover:text-purple-300 transition-colors flex items-center gap-2 group"
        style={{ fontFamily: "Holtwood One SC, serif" }}
      >
        <span className="group-hover:animate-spin">🗺️</span>
        Haunting Map
      </a>
    </li>
    <li>
      <a 
        href="/meme-mating" 
        className="text-gray-300 hover:text-purple-300 transition-colors flex items-center gap-2 group"
        style={{ fontFamily: "Holtwood One SC, serif" }}
      >
        <span className="group-hover:animate-pulse">💞</span>
        Meme Mating
      </a>
    </li>
  </ul>
</div>

// Add Ghost Types section
<div>
  <h4 
    className="text-lg font-semibold text-white mb-6"
    style={{ fontFamily: "Holtwood One SC, serif" }}
  >
    Ghost Types
  </h4>
  <ul className="space-y-3">
    <li className="flex items-center gap-3">
      <span className="text-2xl">👻</span>
      <div>
        <div 
          className="text-blue-300 font-medium"
          style={{ fontFamily: "Holtwood One SC, serif" }}
        >
          Whisper
        </div>
        <div 
          className="text-xs text-gray-400"
          style={{ fontFamily: "Holtwood One SC, serif" }}
        >
          Silent Possession
        </div>
      </div>
    </li>
    <li className="flex items-center gap-3">
      <span className="text-2xl">🔮</span>
      <div>
        <div 
          className="text-purple-300 font-medium"
          style={{ fontFamily: "Holtwood One SC, serif" }}
        >
          Poltergeist
        </div>
        <div 
          className="text-xs text-gray-400"
          style={{ fontFamily: "Holtwood One SC, serif" }}
        >
          Asset Disruption
        </div>
      </div>
    </li>
  </ul>
</div>
      <div className="relative z-10 container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: "Holtwood One SC, serif" }}
            >
              Ghost NFTs
            </h3>
            <p 
              className="text-gray-300 mb-6 leading-relaxed"
              style={{ fontFamily: "Holtwood One SC, serif" }}
            >
              Enter the supernatural realm where ghosts possess wallets and create blockchain chaos.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;