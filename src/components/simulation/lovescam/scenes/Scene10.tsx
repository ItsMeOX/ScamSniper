import styles from './scene10.module.css';
import {
  forwardRef,
  Ref,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import gsap from 'gsap';

export type Scene10Ref = {
  tlScene10: gsap.core.Timeline | null;
};
type Scene10Props = {
  callback: () => void;
};

function Scene10(props: Scene10Props, ref: Ref<Scene10Ref>) {
  const tlMain = useRef<gsap.core.Timeline | null>(null);
  const tlEnd = useRef<gsap.core.Timeline | null>(null);
  const scene10Ref = useRef(null);
  const message1Ref = useRef(null);
  const message2Ref = useRef(null);
  const message3Ref = useRef(null);
  const message4Ref = useRef(null);
  const message5Ref = useRef(null);
  const message6Ref = useRef(null);
  const { callback } = props;

  useImperativeHandle(ref, () => ({
    tlScene10: tlMain.current,
  }));

  const [showMessage, setShowMessage] = useState({
    button: false,
  });

  useEffect(() => {
    tlMain.current = gsap.timeline();
    tlEnd.current = gsap.timeline({ paused: true });

    tlMain.current
      .fromTo(
        scene10Ref.current,
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
          delay: 2,
        }
      )
      .fromTo(
        message5Ref.current,
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
        message6Ref.current,
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
      scene10Ref.current,
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
    <div className={styles.container} ref={scene10Ref}>
      <div className={styles.text_box}>
        <span ref={message1Ref} style={{ fontWeight: 600 }}>
          Jimmy has been scammed!
        </span>
        <span ref={message2Ref}>
          Love blinded him. <br />
          Trust cost him everything.
        </span>
        <span ref={message3Ref}>
          Not all who say I love &apos;you&apos; mean it.
        </span>
        <span ref={message4Ref}>
          Romance scammers often gain trust over weeks or months before asking
          for money.
        </span>
        <div className={styles.message_56_box}>
          <span ref={message5Ref}>If someone you met online asks for help</span>
          <span ref={message6Ref} style={{ fontWeight: 600 }}>
            pause and think before helping!
          </span>
        </div>
      </div>
      {showMessage.button && (
        <button onClick={() => tlEnd.current?.play()} className={styles.button}>
          End simulation
        </button>
      )}
    </div>
  );
}

export default forwardRef(Scene10);
