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
      onClick={() => {
        setIsTransitioning(true);
        handleMouseClick();
      }}
      animate={
        isTransitioning ? { scale: 50, opacity: 0 } : { scale: 1, opacity: 1 }
      }
      transition={{ duration: isTransitioning ? 1.5 : 0, ease: 'easeInOut' }} // 0 duration on early leave
    >
      <Image
        className={styles.image}
        src={src}
        alt={alt}
        width={200}
        height={200}
        quality={100}
        unoptimized={true}
      />
      {isTransitioning && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
      )}
    </motion.div>
  );
};

export default Bubble;
