'use client';

import React, { useRef, useState, useEffect } from 'react';
import styles from './stickynote.module.css';

export default function StickyNote({initialpos} : {initialpos : {x:number, y:number}}) {
  const noteRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(initialpos);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - offset.x,
          y: e.clientY - offset.y,
        });
      }
    };

    const handleMouseUp = () => setIsDragging(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, offset]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (noteRef.current) {
      const rect = noteRef.current.getBoundingClientRect();
      setOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
    setIsDragging(true);
  };

  return (
    <div
        style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        cursor: isDragging ? 'grabbing' : 'grab',
        userSelect: 'none',
        zIndex: 999,
        rotate: "15deg"
        }}>
      <div className={styles.tape} />
      <div
        ref={noteRef}
        className={styles.note}
        onMouseDown={handleMouseDown}
      >
        <div className={styles.text}>
          <p className={styles.name}>Yuki</p>
          <p className={styles.phone}>+65 1234 5678</p>
        </div>
      </div>
    </div>
  );
};
