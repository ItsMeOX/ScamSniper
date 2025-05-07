import styles from './scene9.module.css';
import {
  forwardRef,
  Ref,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import gsap from 'gsap';

export type Scene9Ref = {
  tlScene9: gsap.core.Timeline | null;
};
type Scene9Props = {
  callback: () => void;
};

function Scene9(props: Scene9Props, ref: Ref<Scene9Ref>) {
  const tlMain = useRef<gsap.core.Timeline | null>(null);
  const tlEnd = useRef<gsap.core.Timeline | null>(null);
  const scene9Ref = useRef(null);
  const message1Ref = useRef(null);
  const message2Ref = useRef(null);
  const message3Ref = useRef(null);
  const message4Ref = useRef(null);
  const { callback } = props;

  useImperativeHandle(ref, () => ({
    tlScene9: tlMain.current,
  }));

  const [showMessage, setShowMessage] = useState({
    button: false,
  });

  useEffect(() => {
    tlMain.current = gsap.timeline();
    tlEnd.current = gsap.timeline({ paused: true });

    tlMain.current
      .fromTo(
        scene9Ref.current,
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
          delay: 1,
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
          delay: 1,
        }
      )
      .fromTo(
        message4Ref.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          delay: 1,
          onComplete: () => {
            setShowMessage((prev) => ({ ...prev, button: true }));
          },
        }
      );

    tlEnd.current.fromTo(
      scene9Ref.current,
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
    <div className={styles.container} ref={scene9Ref}>
      <div className={styles.text_box}>
        <span ref={message1Ref}>After receiving the money from Jimmy, </span>
        <span ref={message2Ref}>Yuki became more distant from Jimmy. </span>
        <span ref={message3Ref}>One day, Yuki stopped replying Jimmy. </span>
        <span ref={message4Ref}>
          Jimmy felt cheated as Yuki did not return him the $10,000 that she
          borrowed.
        </span>
      </div>
      {showMessage.button && (
        <button onClick={() => tlEnd.current?.play()} className={styles.button}>
          Continue
        </button>
      )}
    </div>
  );
}

export default forwardRef(Scene9);
