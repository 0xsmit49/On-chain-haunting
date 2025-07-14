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