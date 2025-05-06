'use client';

import React, { useEffect, useState } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number; // Optional, milliseconds per character
  typingDoneCallback: () => void;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 50, typingDoneCallback }) => {
  const [displayedText, setDisplayedText] = useState('');
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.substring(0, index));
      console.log(index)
      index++;
      if (index === text.length + 1) {
        clearInterval(interval);
        typingDoneCallback()
      }
    }, speed);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [text, speed]);

  return <span>{displayedText}</span>;
};

export default TypingEffect;
