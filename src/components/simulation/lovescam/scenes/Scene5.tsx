import styles from './scene5.module.css';
import {
  forwardRef,
  Ref,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import Phone from '../phone/Phone';
import SceneCamera from '../phone/SceneCamera';
import Polaroid from '../phone/Polaroid';

export type Scene5Ref = {
  tlScene5: gsap.core.Timeline | null;
};
type Scene5Props = {
  callback: () => void;
};

function Scene5(props: Scene5Props, ref: Ref<Scene5Ref>) {
  const tlMain = useRef<gsap.core.Timeline | null>(null);
  const tlPhoto3 = useRef<gsap.core.Timeline | null>(null);
  const tlEnd = useRef<gsap.core.Timeline | null>(null);
  const scene5Ref = useRef(null);
  const maskRef = useRef(null);
  const langkawi1Ref = useRef(null);
  const langkawi2Ref = useRef(null);
  const langkawi3Ref = useRef(null);
  const { callback } = props;

  const [showComponent, setShowComponent] = useState({
    whiteMask: true,
    langkawi1: true,
    langkawi2: false,
    langkawi2Photo: false,
    langkawi3: false,
    langkawi3Photo: false,
  });

  useImperativeHandle(ref, () => ({
    tlScene5: tlMain.current,
  }));

  useEffect(() => {
    tlMain.current = gsap.timeline();
    tlPhoto3.current = gsap.timeline({ paused: true });
    tlEnd.current = gsap.timeline({ paused: true });

    tlMain.current
      .fromTo(
        maskRef.current,
        {
          opacity: 1,
        },
        {
          opacity: 0,
          duration: 1,
        }
      )
      .fromTo(
        maskRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          delay: 2,
          onComplete: () =>
            setShowComponent((prev) => ({
              ...prev,
              langkawi1: false,
              langkawi2: true,
            })),
        }
      )
      .fromTo(
        maskRef.current,
        {
          opacity: 1,
        },
        {
          opacity: 0,
          duration: 0.5,
          delay: 1,
        }
      );

    tlPhoto3.current
      .fromTo(
        maskRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.2,
          onComplete: () => {
            setShowComponent((prev) => ({
              ...prev,
              langkawi2: false,
              langkawi2Photo: true,
              langkawi3: true,
            }));
          },
        }
      )
      .fromTo(maskRef.current, { opacity: 1 }, { opacity: 0, duration: 0.2 });

    tlEnd.current
      .fromTo(
        maskRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.2,
          onComplete: () => {
            setShowComponent((prev) => ({
              ...prev,
              langkawi3Photo: true,
            }));
          },
        }
      )
      .fromTo(maskRef.current, { opacity: 1 }, { opacity: 0, duration: 0.2 })
      .to(
        {},
        {
          duration: 3,
          onComplete: () => {
            callback();
          },
        }
      );
  }, [callback]);

  return (
    <div className={styles.container} ref={scene5Ref}>
      {showComponent.whiteMask && (
        <div ref={maskRef} className={styles.white_mask} />
      )}
      {showComponent.langkawi1 && (
        <div ref={langkawi1Ref} className={styles.box}>
          <Image
            className={styles.langkawi1_bg}
            src="/simulation/lovescam/langkawi_1.png"
            alt="langkawi1_bg"
            width={1000}
            height={1000}
            quality={100}
            unoptimized={true}
          />
          <Image
            className={styles.langkawi1_couple}
            src="/simulation/lovescam/langkawi_couple.svg"
            alt="langkawi_couple"
            width={800}
            height={800}
            quality={100}
            unoptimized={true}
          />
        </div>
      )}
      <div className={`${styles.box} ${styles.langkawi2_box}`}>
        {showComponent.langkawi2 && (
          <Image
            ref={langkawi2Ref}
            src="/simulation/lovescam/langkawi_2_blur.png"
            alt="langkawi_2_blur"
            width={1000}
            height={1000}
            quality={100}
            unoptimized={true}
          />
        )}
        {showComponent.langkawi3 && (
          <Image
            ref={langkawi3Ref}
            src="/simulation/lovescam/langkawi_3_blur.png"
            alt="langkawi_3_blur"
            width={1000}
            height={1000}
            quality={100}
            unoptimized={true}
          />
        )}
        <Phone>
          {showComponent.langkawi2 && (
            <SceneCamera
              ref={langkawi2Ref}
              buttonCallback={() => {
                tlPhoto3.current?.play();
              }}
              photoImgSrc="/simulation/lovescam/langkawi_2.png"
            />
          )}
          {showComponent.langkawi2Photo && (
            <div className={styles.langkawi2_photo_box}>
              <Polaroid
                caption="Best dinner ever!"
                imageUrl="/simulation/lovescam/langkawi_2.png"
              />
            </div>
          )}

          {showComponent.langkawi3 && (
            <SceneCamera
              ref={langkawi3Ref}
              buttonCallback={() => {
                tlEnd.current?.play();
              }}
              photoImgSrc="/simulation/lovescam/langkawi_3.png"
            />
          )}
          {showComponent.langkawi3Photo && (
            <div className={styles.langkawi3_photo_box}>
              <Polaroid
                caption="The warmest sunset"
                imageUrl="/simulation/lovescam/langkawi_3.png"
              />
            </div>
          )}
        </Phone>
      </div>
    </div>
  );
}

export default forwardRef(Scene5);
