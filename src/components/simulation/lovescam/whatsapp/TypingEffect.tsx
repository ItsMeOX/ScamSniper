'use client';

import React, { useEffect, useState } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number; // Optional, milliseconds per character
  typingDoneCallback: () => void;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  text,
  speed = 40,
  typingDoneCallback,
}) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index === text.length) {
        clearInterval(interval);
        typingDoneCallback();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, typingDoneCallback]);

  return <span style={{ color: '#cfcece' }}>{displayedText}</span>;
};

export default TypingEffect;
