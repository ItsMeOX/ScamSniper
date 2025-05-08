'use client';
import styles from './bubble.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Bubble = ({
  src,
  alt,
  targetRoute,
  left,
  top,
}: {
  src: string;
  alt: string;
  targetRoute: string;
  left: number;
  top: number;
}) => {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleMouseClick = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setTimeout(() => {
      router.push(targetRoute);
    }, 1200);
  };

  return (
    <motion.div
      className={styles.container}
      style={{ left, top }}
      onClick={handleMouseClick}
      animate={isTransitioning ? { scale: 50 } : { scale: 1 }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
    >
      <img
        className={styles.image}
        src={src}
        alt={alt}
        draggable={false}
      />
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={isTransitioning ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />
    </motion.div>
  );
};

export default Bubble;