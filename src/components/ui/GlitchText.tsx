
import React from 'react';
import { cn } from '@/lib/utils';

interface GlitchTextProps {
  text: string;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  color?: 'cyan' | 'blue' | 'red' | 'green';
}

const GlitchText = ({ 
  text, 
  className, 
  intensity = 'medium',
  color = 'cyan'
}: GlitchTextProps) => {
  const colorMap = {
    cyan: 'text-ctos-cyan',
    blue: 'text-ctos-blue',
    red: 'text-ctos-red',
    green: 'text-ctos-green'
  };

  const intensityMap = {
    low: 'animate-glitch-slow',
    medium: 'animate-glitch',
    high: 'animate-[glitch_0.3s_ease-in-out_infinite]'
  };
  
  return (
    <span 
      className={cn(
        'glitch-container inline-block relative font-orbitron',
        colorMap[color],
        intensityMap[intensity],
        className
      )}
      data-text={text}
    >
      {text}
    </span>
  );
};

export default GlitchText;
