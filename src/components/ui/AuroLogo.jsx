import React from 'react';

const AuroLogo = ({ className = "w-12 h-12" }) => {
  return (
    <svg 
      viewBox="0 0 500 500" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <defs>
        {/* Globe Gradient */}
        <radialGradient id="globeGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#0369a1" />
        </radialGradient>
        
        {/* Chrome/Metal Gradient for Buildings */}
        <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>
      </defs>

      {/* 1. The Globe */}
      <circle cx="250" cy="250" r="180" fill="url(#globeGrad)" stroke="#0ea5e9" strokeWidth="2" />
      
      {/* 2. The Ring (Background Part) */}
      <path 
        d="M80 300 Q 150 450 420 280" 
        stroke="#cbd5e1" 
        strokeWidth="25" 
        fill="none" 
        strokeLinecap="round"
        className="opacity-80"
      />

      {/* 3. The Buildings (Central Group) */}
      <g transform="translate(180, 120)">
        {/* Left Building */}
        <path d="M0 240 L0 180 L40 150 L40 240 Z" fill="url(#metalGrad)" stroke="#1e293b" />
        {/* Middle Building (Tallest) */}
        <path d="M45 240 L45 50 L95 10 L95 240 Z" fill="url(#metalGrad)" stroke="#1e293b" />
        {/* Right Building */}
        <path d="M100 240 L100 120 L140 160 L140 240 Z" fill="url(#metalGrad)" stroke="#1e293b" />
      </g>

      {/* 4. The Ring (Foreground Part) */}
      <path 
        d="M50 320 Q 150 500 450 250" 
        stroke="white" 
        strokeWidth="15" 
        fill="none" 
        strokeLinecap="round" 
      />
      
      {/* 5. Sparkles */}
      <path d="M380 80 L390 110 L420 120 L390 130 L380 160 L370 130 L340 120 L370 110 Z" fill="#22d3ee" />
      <path d="M440 140 L445 155 L460 160 L445 165 L440 180 L435 165 L420 160 L435 155 Z" fill="#22d3ee" />
    </svg>
  );
};

export default AuroLogo;