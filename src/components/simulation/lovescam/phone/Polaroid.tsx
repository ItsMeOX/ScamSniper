'use client';

import React from 'react';
import Image from 'next/image';
import styles from './polaroid.module.css';

interface PolaroidProps {
  imageUrl: string;
  caption: string;
}

const Polaroid: React.FC<PolaroidProps> = ({ imageUrl, caption }) => {
  return (
    <div className={styles.polaroid}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageUrl}
          alt={caption}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles.caption}>
        <span>{caption}</span>
      </div>
    </div>
  );
};

export default Polaroid;
