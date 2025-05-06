'use client';

import React, { useEffect, useState } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number; // Optional, milliseconds per character
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(prev => prev + text.charAt(index));
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [text, speed]);

  return <span>{displayedText}</span>;
};

export default TypingEffect;
