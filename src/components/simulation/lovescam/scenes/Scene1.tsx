import {
  forwardRef,
  Ref,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import styles from './scene1.module.css';
import gsap from 'gsap';

export type Scene1Ref = {
  tlScene1: gsap.core.Timeline | null;
};
type Scene1Props = {
  callback: () => void;
};

function Scene1(props: Scene1Props, ref: Ref<Scene1Ref>) {
  const tlMain = useRef<gsap.core.Timeline | null>(null);
  const tlEnd = useRef<gsap.core.Timeline | null>(null);
  const scene1Ref = useRef(null);
  const message1Ref = useRef(null);
  const message2Ref = useRef(null);
  const message3Ref = useRef(null);
  const { callback } = props;

  useImperativeHandle(ref, () => ({
    tlScene1: tlMain.current,
  }));

  const [showMessage, setShowMessage] = useState({
    button: false,
  });

  useEffect(() => {
    tlMain.current = gsap.timeline();
    tlEnd.current = gsap.timeline({ paused: true });

    tlMain.current
      .fromTo(
        scene1Ref.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
        }
      )
      .fromTo(
        message1Ref.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          delay: 1,
        }
      )
      .fromTo(
        message2Ref.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          delay: 2,
        }
      )
      .fromTo(
        message3Ref.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          delay: 2,
          onComplete: () => {
            setShowMessage((prev) => ({ ...prev, button: true }));
          },
        }
      );

    tlEnd.current.fromTo(
      scene1Ref.current,
      {
        opacity: 1,
      },
      {
        opacity: 0,
        duration: 1,
        onComplete: callback,
      }
    );
  }, [callback]);

  return (
    <div className={styles.scene1} ref={scene1Ref}>
      <div className={styles.text_box}>
        <span ref={message1Ref}>
          Jimmy, a 23-year-old independent mechanical engineer, has been single
          for years.{' '}
        </span>
        <span ref={message2Ref}>
          Encouraged by his best friend, he decides to try online dating.{' '}
        </span>
        <span ref={message3Ref}>
          He joins an exclusive dating site for professionals, hoping to find
          someone serious about love.{' '}
        </span>
      </div>
      <p className={styles.scene1_text}></p>
      {showMessage.button && (
        <button onClick={() => tlEnd.current?.play()} className={styles.button}>
          Continue
        </button>
      )}
    </div>
  );
}

export default forwardRef(Scene1);
