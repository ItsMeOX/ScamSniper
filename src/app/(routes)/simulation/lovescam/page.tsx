'use client';

import { useEffect, useRef } from 'react';
import styles from './lovescam.module.css';
import { gsap } from 'gsap';
import Image from 'next/image';
import Scene3 from '@/components/simulation/lovescam/Scene3';
import Phone from '@/components/simulation/lovescam/phone/Phone';

export default function LoveScam() {
  const tl = useRef<gsap.core.Timeline | null>(null);
  const scene0Ref = useRef(null);
  const scene1Ref = useRef(null);
  const scene2Ref = useRef(null);
  const scene2PhoneRef = useRef(null);
  const scene2Girl1ProfileRef = useRef(null);
  const scene2Girl2ProfileRef = useRef(null);
  const scene2Girl3ProfileRef = useRef(null);
  const scene3Ref = useRef(null);

  useEffect(() => {
    // tl.current = gsap.timeline();
    // tl.current
    //   .fromTo(scene0Ref.current, { opacity: 1 }, { opacity: 0, duration: 1 })
    //   .fromTo(scene1Ref.current, { opacity: 0 }, { opacity: 1, duration: 1 })
    //   .to(scene1Ref.current, { opacity: 0 }, 'scene_transition_1_2')
    //   .fromTo(
    //     scene2Ref.current,
    //     { opacity: 0 },
    //     { opacity: 1, duration: 0.5 },
    //     'scene_transition_1_2'
    //   )
    //   .fromTo(scene2PhoneRef.current, { y: '100vh' }, { y: 0, duration: 1 })
    //   .addPause()
    //   .fromTo(
    //     scene2Girl1ProfileRef.current,
    //     { y: '0vh' },
    //     {
    //       x: '-100px',
    //       y: '0vh',
    //       opacity: 0,
    //       duration: 1.5,
    //     },
    //     'girl_transition_1'
    //   )
    //   .fromTo(
    //     scene2Girl2ProfileRef.current,
    //     {
    //       opacity: 0,
    //       x: '150px',
    //       y: '0vh',
    //     },
    //     {
    //       opacity: 1,
    //       x: '0',
    //       y: '0vh',
    //       duration: 1.5,
    //     },
    //     'girl_transition_1'
    //   )
    //   .addPause()
    //   .fromTo(
    //     scene2Girl2ProfileRef.current,
    //     { y: '0vh' },
    //     {
    //       x: '-100px',
    //       y: '0vh',
    //       opacity: 0,
    //       duration: 1.5,
    //     },
    //     'girl_transition_2'
    //   )
    //   .fromTo(
    //     scene2Girl3ProfileRef.current,
    //     {
    //       opacity: 0,
    //       x: '150px',
    //       y: '0vh',
    //     },
    //     {
    //       opacity: 1,
    //       x: '0',
    //       y: '0vh',
    //       duration: 1.5,
    //     },
    //     'girl_transition_2'
    //   )
    //   .addPause()
    //   .fromTo(
    //     scene2Girl3ProfileRef.current,
    //     {
    //       scale: 1,
    //     },
    //     {
    //       y: '100px',
    //       scale: 1.5,
    //       duration: 1,
    //     }
    //   )
    //   .to(scene2Ref.current, {
    //     opacity: 0,
    //   });
  }, []);

  return (
    <div className={styles.container}>
      {/* <div className={styles.scene0} ref={scene0Ref} /> */}
      <div className={`${styles.scene1}`} ref={scene1Ref}>
        <Phone>Phone</Phone>
        {/* <div className={styles.scene1_bgholder}>
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
          <div
            className={styles.scene2_girl1_profile}
            ref={scene2Girl1ProfileRef}>
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
          </div>
          <div
            className={styles.scene2_girl1_profile}
            ref={scene2Girl2ProfileRef}>
            <Image
              className={styles.scene2_girl2}
              src="/simulation/lovescam/girl2.png"
              alt="girl1"
              width={500}
              height={500}
              quality={100}
              unoptimized={true}
            />
            <span
              className={`${styles.scene2_girl_name} ${styles.app_girl_name}`}>
              Ada
            </span>
          </div>
          <div
            className={styles.scene2_girl1_profile}
            ref={scene2Girl3ProfileRef}>
            <Image
              className={styles.scene2_girl3}
              src="/simulation/lovescam/girl3.png"
              alt="girl1"
              width={500}
              height={500}
              quality={100}
              unoptimized={true}
            />
            <span
              className={`${styles.scene2_girl_name} ${styles.app_girl_name}`}>
              Yuki
            </span>
          </div>
          <button
            onClick={() => tl.current?.play()}
            className={`${styles.scene2_accept_button} ${styles.scene2_button}`}>
            <Image
              src="/simulation/lovescam/tick.svg"
              alt="/"
              width={20}
              height={20}
            />
          </button>
          <button
            onClick={() => tl.current?.play()}
            className={`${styles.scene2_next_button} ${styles.scene2_button}`}>
            <Image
              src="/simulation/lovescam/skip.svg"
              alt="x"
              width={20}
              height={20}
            />
          </button>
        </div> */}
      </div>
      {/* <div className={styles.scene3}>
        <Scene3 />
      </div> */}
    </div>
  );
}
