'use client';

import { useEffect, useRef } from 'react';
import styles from './lovescam.module.css';
import { gsap } from 'gsap';

export default function LoveScam() {
  const sceneRef = useRef(null);

  useEffect(() => {
    // gsap.fromTo()
  });

  return (
    <div className={styles.container}>
      <div className={`${styles.scene1}`} />
    </div>
  );
}
