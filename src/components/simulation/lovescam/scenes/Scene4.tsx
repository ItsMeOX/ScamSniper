import styles from './scene4.module.css';
import {
  forwardRef,
  Ref,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import gsap from 'gsap';

export type Scene4Ref = {
  tlScene4: gsap.core.Timeline | null;
};
type Scene4Props = {
  callback: () => void;
};

function Scene4(props: Scene4Props, ref: Ref<Scene4Ref>) {
  const tlMain = useRef<gsap.core.Timeline | null>(null);
  const scene4Ref = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const text4Ref = useRef(null);
  const text5Ref = useRef(null);

  const [showComponent, setShowComponent] = useState({
    text1: true,
    text2: true,
    text3: true,
    text4: true,
    text5: true,
    button: false,
  });

  useImperativeHandle(ref, () => ({
    tlScene4: tlMain.current,
  }));

  useEffect(() => {
    tlMain.current = gsap.timeline();
    tlMain.current
      .play()
      .fromTo(
        text1Ref.current,
        {
          opacity: 0,
        },
        { opacity: 1, duration: 1 }
      )
      .fromTo(
        text2Ref.current,
        {
          opacity: 0,
        },
        { opacity: 1, duration: 1, delay: 1 }
      )
      .fromTo(
        text3Ref.current,
        {
          opacity: 0,
        },
        { opacity: 1, duration: 1, delay: 1 }
      )
      .fromTo(
        text4Ref.current,
        {
          opacity: 0,
        },
        { opacity: 1, duration: 1, delay: 2 }
      )
      .fromTo(
        text5Ref.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          delay: 2,
          onComplete: () =>
            setShowComponent((prev) => ({ ...prev, button: true })),
        }
      );
  }, []);

  return (
    <div className={styles.container} ref={scene4Ref}>
      {showComponent.text1 && (
        <div ref={text1Ref} className={styles.text}>
          Over the next few weeks
        </div>
      )}
      {showComponent.text2 && (
        <div ref={text2Ref} className={styles.text}>
          Jimmy and Yuki chatted daily
        </div>
      )}
      {showComponent.text3 && (
        <div ref={text3Ref} className={styles.text}>
          They bonded over work, anime, dreams of travel, and what love meant to
          them.
        </div>
      )}
      {showComponent.text4 && (
        <div ref={text4Ref} className={styles.text}>
          Yuki always knew what to say, and Jimmy fell in love deeper each day.
        </div>
      )}
      {showComponent.text5 && (
        <div ref={text5Ref} className={styles.text}>
          Eventually, they planned a trip to Langkawi, Malaysia together.
        </div>
      )}
      {showComponent.button && (
        <button className={styles.button} onClick={props.callback}>
          Continue
        </button>
      )}
    </div>
  );
}

export default forwardRef(Scene4);
