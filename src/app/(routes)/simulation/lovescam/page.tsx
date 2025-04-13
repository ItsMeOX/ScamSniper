'use client';

import { useEffect, useRef } from 'react';
import styles from './lovescam.module.css';
import { gsap } from 'gsap';
import Image from 'next/image';

export default function LoveScam() {
  const scene0Ref = useRef(null);
  const scene1Ref = useRef(null);
  const scene2Ref = useRef(null);
  const scene2PhoneRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(scene0Ref.current, { opacity: 1 }, { opacity: 0, duration: 1 })
      .fromTo(scene1Ref.current, { opacity: 0 }, { opacity: 1, duration: 1 })
      .fromTo(scene2Ref.current, { opacity: 0 }, { opacity: 1, duration: 0.5 })
      .fromTo(scene2PhoneRef.current, { y: '100vh' }, { y: 0, duration: 1 });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.scene0} />
      <div className={`${styles.scene1}`} ref={scene1Ref}>
        <div className={styles.scene1_bgholder}>
          <Image
            src="/simulation/lovescam/scene1.png"
            alt="scene1"
            width={1200}
            height={1200}
            quality={100}
            unoptimized={true}
          />
        </div>
        <p className={styles.scene1_text}>
          Jimmy, a 23-year-old independent mechanical engineer, has been single
          for years. Encouraged by his best friend, he decides to try online
          dating. He joins an exclusive dating site for professionals, hoping to
          find someone serious about love.
        </p>
      </div>
      <div className={styles.scene2} ref={scene2Ref}>
        <div className={styles.scene2_phone_wrapper} ref={scene2PhoneRef}>
          <Image
            className={styles.scene2_phone}
            src="/simulation/lovescam/phone.png"
            alt="phone"
            width={1000}
            height={700}
            quality={100}
            unoptimized={true}
          />
          <Image
            className={styles.scene2_girl1}
            src="/simulation/lovescam/girl1.png"
            alt="girl1"
            width={500}
            height={500}
            quality={100}
            unoptimized={true}
          />
          <span
            className={`${styles.scene2_girl_name} ${styles.app_girl_name}`}>
            Emily
          </span>
          <button className={styles.scene2_next_button}></button>
        </div>
      </div>
    </div>
  );
}
