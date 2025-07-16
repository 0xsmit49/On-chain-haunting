'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import MyCustomComponent from '../../components/FLoatingDock';

interface GhostMetadata {
  id: string;
  name: string;
  type: 'Whisper' | 'Poltergeist' | 'Banshee' | 'Wraith';
  emoji: string;
  haunting: number;
  mischief: number;
  charisma: number;
  backstory: string;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  timestamp: number;
  txHash: string;
}

export default function SummonGhost() {
  const [step, setStep] = useState<'ready' | 'summoning' | 'minting' | 'naming' | 'complete' | 'collection'>('ready');
  const [summonedGhost, setSummonedGhost] = useState<GhostMetadata | null>(null);
  const [ghostName, setGhostName] = useState('');

  // Add animation states
  const [isAnimating, setIsAnimating] = useState(false);
  const [ritualCircleRotation, setRitualCircleRotation] = useState(0);
  // Add ghost types with weighted rarity
const ghostTypes = [
  { 
    type: 'Whisper', 
    emoji: '👻', 
    color: 'text-blue-300',
    backstory: 'A silent spirit that whispers secrets through the blockchain',
    rarityWeight: 40
  },
  { 
    type: 'Poltergeist', 
    emoji: '🔮', 
    color: 'text-purple-300',
    backstory: 'A mischievous entity that disrupts smart contracts',
    rarityWeight: 30
  },
  { 
    type: 'Banshee', 
    emoji: '💀', 
    color: 'text-red-300',
    backstory: 'A wailing spirit that haunts entire DAOs',
    rarityWeight: 20
  },
  { 
    type: 'Wraith', 
    emoji: '🌫️', 
    color: 'text-green-300',
    backstory: 'An ancient soul that binds wallets together',
    rarityWeight: 10
  }
];

// Add ghost generation function
const generateRandomGhost = (): GhostMetadata => {
  // Weighted random selection
  const random = Math.random() * 100;
  let cumulativeWeight = 0;
  let selectedType = ghostTypes[0];
  
  for (const ghostType of ghostTypes) {
    cumulativeWeight += ghostType.rarityWeight;
    if (random <= cumulativeWeight) {
      selectedType = ghostType;
      break;
    }
  }

  const rarity = 
    selectedType.rarityWeight <= 10 ? 'Legendary' :
    selectedType.rarityWeight <= 20 ? 'Epic' :
    selectedType.rarityWeight <= 30 ? 'Rare' : 'Common';


  // Add ritual circle animation
  useEffect(() => {
    if (step === 'summoning') {
      const interval = setInterval(() => {
        setRitualCircleRotation(prev => prev + 2);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [step]);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <MyCustomComponent/>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 
              className="text-4xl md:text-6xl text-white font-bold mb-4"
              style={{ fontFamily: "Holtwood One SC, serif" }}
            >
              Summon Your Ghost
            </h1>
            <p 
              className="text-xl text-gray-400"
              style={{ fontFamily: "Holtwood One SC, serif" }}
            >
              Perform the ancient ritual to mint your supernatural NFT
            </p>
          </div>
        </div>
      </div>

      {/* Add floating particles during summoning */}
      {step === 'summoning' && (
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl opacity-60"
              initial={{ 
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 50,
                rotate: 0 
              }}
              animate={{ 
                y: -50, 
                rotate: 360,
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200)
              }}
              transition={{ 
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            >
              ✨
            </motion.div>
          ))}
        </div>
      )}

      {/* Add summoning animation step */}
      {step === 'summoning' && (
        <motion.div
          key="summoning"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-center"
        >
          <div className="relative max-w-2xl mx-auto">
            {/* Ritual Circle */}
            <div className="relative w-96 h-96 mx-auto mb-8">
              <motion.div
                className="absolute inset-0 border-4 border-purple-500 rounded-full opacity-60"
                animate={{ rotate: ritualCircleRotation }}
                style={{ transformOrigin: 'center' }}
              />
              <motion.div
                className="absolute inset-4 border-2 border-blue-400 rounded-full opacity-40"
                animate={{ rotate: -ritualCircleRotation * 1.5 }}
                style={{ transformOrigin: 'center' }}
              />
              <motion.div
                className="absolute inset-8 border border-white rounded-full opacity-30"
                animate={{ rotate: ritualCircleRotation * 2 }}
                style={{ transformOrigin: 'center' }}
              />
              
              {/* Center ghost */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="text-8xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  👻
                </motion.div>
              </div>
            </div>

            <h2 
              className="text-3xl text-white mb-4 font-bold"
              style={{ fontFamily: "Holtwood One SC, serif" }}
            >
              Summoning in Progress...
            </h2>
            <p className="text-gray-400 text-lg">
              The spirits are gathering from the blockchain depths
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}