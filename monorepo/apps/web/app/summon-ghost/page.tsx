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
    </div>
  );
}