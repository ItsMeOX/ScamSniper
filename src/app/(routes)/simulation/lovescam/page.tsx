'use client';

import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import styles from './lovescam.module.css';
import { gsap } from 'gsap';
import Scene0, {
  Scene0Ref,
} from '@/components/simulation/lovescam/scenes/Scene0';
import Scene1, {
  Scene1Ref,
} from '@/components/simulation/lovescam/scenes/Scene1';
import Scene2, {
  Scene2Ref,
} from '@/components/simulation/lovescam/scenes/Scene2';
import Scene3, {
  Scene3Ref,
} from '@/components/simulation/lovescam/scenes/Scene3';
import Scene4, {
  Scene4Ref,
} from '@/components/simulation/lovescam/scenes/Scene4';
import Scene5, {
  Scene5Ref,
} from '@/components/simulation/lovescam/scenes/Scene5';
import Scene6, {
  Scene6Ref,
} from '@/components/simulation/lovescam/scenes/Scene6';
import Scene7, {
  Scene7Ref,
} from '@/components/simulation/lovescam/scenes/Scene7';
import Scene8, {
  Scene8Ref,
} from '@/components/simulation/lovescam/scenes/Scene8';
import Scene9, {
  Scene9Ref,
} from '@/components/simulation/lovescam/scenes/Scene9';
import Scene10, {
  Scene10Ref,
} from '@/components/simulation/lovescam/scenes/Scene10';
import { useRouter } from 'next/navigation';

export default function LoveScam() {
  const router = useRouter();
  const tl = useRef<gsap.core.Timeline>(null);
  const scene0Ref = useRef<Scene0Ref>(null);
  const scene1Ref = useRef<Scene1Ref>(null);
  const scene2Ref = useRef<Scene2Ref>(null);
  const scene3Ref = useRef<Scene3Ref>(null);
  const scene4Ref = useRef<Scene4Ref>(null);
  const scene5Ref = useRef<Scene5Ref>(null);
  const scene6Ref = useRef<Scene6Ref>(null);
  const scene7Ref = useRef<Scene7Ref>(null);
  const scene8Ref = useRef<Scene8Ref>(null);
  const scene9Ref = useRef<Scene9Ref>(null);
  const scene10Ref = useRef<Scene10Ref>(null);

  const [showScene, setShowScene] = useState({
    scene0: true,
    scene1: false,
    scene2: false,
    scene3: false,
    scene4: false,
    scene5: false,
    scene6: false,
    scene7: false,
    scene8: false,
    scene9: false,
    scene10: false,
  });

  useEffect(() => {
    tl.current = gsap.timeline();
    tl.current
      .fromTo(
        scene0Ref.current!.container,
        { opacity: 1 },
        {
          opacity: 0,
          duration: 1,
          onComplete: () =>
            setShowScene((prev) => ({ ...prev, scene0: false, scene1: true })),
        }
      )
      .call(() => {
        if (scene1Ref.current) {
          scene1Ref.current.tlScene1?.play();
        }
        tl.current?.pause();
      })
      .call(() => {
        if (scene2Ref.current?.tlScene2) {
          scene2Ref.current.tlScene2.play();
        }
        tl.current?.pause();
      })
      .call(() => {
        if (scene3Ref.current) {
          scene3Ref.current.tlScene3?.play();
        }
        tl.current?.pause();
      })
      .call(() => {
        if (scene4Ref.current) {
          scene4Ref.current.tlScene4?.play();
        }
        tl.current?.pause();
      })
      .call(() => {
        if (scene5Ref.current) {
          scene5Ref.current.tlScene5?.play();
        }
        tl.current?.pause();
      })
      .call(() => {
        if (scene6Ref.current) {
          scene6Ref.current.tlScene6?.play();
        }
        tl.current?.pause();
      })
      .call(() => {
        if (scene7Ref.current) {
          scene7Ref.current.tlScene7?.play();
        }
        tl.current?.pause();
      })
      .call(() => {
        if (scene8Ref.current) {
          scene8Ref.current.tlScene8?.play();
        }
        tl.current?.pause();
      })
      .call(() => {
        if (scene9Ref.current) {
          scene9Ref.current.tlScene9?.play();
        }
        tl.current?.pause();
      })
      .call(() => {
        if (scene10Ref.current) {
          scene10Ref.current.tlScene10?.play();
        }
      });
  }, []);

  return (
    <>
      <Head>
        <title>ScamSniper - Love Scam Simulation</title>
        <link rel="icon" href="./app_logo.ico" />
      </Head>
      <div className={styles.container}>
        {showScene.scene0 && <Scene0 ref={scene0Ref} />}
        {showScene.scene1 && (
          <Scene1
            ref={scene1Ref}
            callback={() => {
              tl.current?.play();
              setShowScene((prev) => ({
                ...prev,
                scene1: false,
                scene2: true,
              }));
            }}
          />
        )}
        {showScene.scene2 && (
          <Scene2
            ref={scene2Ref}
            callback={() => {
              tl.current?.play();
              setShowScene((prev) => ({
                ...prev,
                scene2: false,
                scene3: true,
              }));
            }}
          />
        )}
        {showScene.scene3 && (
          <Scene3
            ref={scene3Ref}
            callback={() => {
              tl.current?.play();
              setShowScene((prev) => ({
                ...prev,
                scene3: false,
                scene4: true,
              }));
            }}
          />
        )}
        {showScene.scene4 && (
          <Scene4
            ref={scene4Ref}
            callback={() => {
              tl.current?.play();
              setShowScene((prev) => ({
                ...prev,
                scene4: false,
                scene5: true,
              }));
            }}
          />
        )}
        {showScene.scene5 && (
          <Scene5
            ref={scene5Ref}
            callback={() => {
              tl.current?.play();
              setShowScene((prev) => ({
                ...prev,
                scene5: false,
                scene6: true,
              }));
            }}
          />
        )}
        {showScene.scene6 && (
          <Scene6
            ref={scene6Ref}
            callback={() => {
              tl.current?.play();
              setShowScene((prev) => ({
                ...prev,
                scene6: false,
                scene7: true,
              }));
            }}
          />
        )}
        {showScene.scene7 && (
          <Scene7
            ref={scene7Ref}
            callback={() => {
              tl.current?.play();
              setShowScene((prev) => ({
                ...prev,
                scene7: false,
                scene8: true,
              }));
            }}
          />
        )}
        {showScene.scene8 && (
          <Scene8
            ref={scene8Ref}
            callback={() => {
              tl.current?.play();
              setShowScene((prev) => ({
                ...prev,
                scene8: false,
                scene9: true,
              }));
            }}
          />
        )}
        {showScene.scene9 && (
          <Scene9
            ref={scene9Ref}
            callback={() => {
              tl.current?.play();
              setShowScene((prev) => ({
                ...prev,
                scene9: false,
                scene10: true,
              }));
            }}
          />
        )}
        {showScene.scene10 && (
          <Scene10
            ref={scene10Ref}
            callback={() => {
              router.push('/');
            }}
          />
        )}
      </div>
    </>
  );
}
