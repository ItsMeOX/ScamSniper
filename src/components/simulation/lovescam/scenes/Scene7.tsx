import styles from './scene7.module.css';
import {
  forwardRef,
  Ref,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import gsap from 'gsap';
import Phone from '../phone/Phone';
import SceneBankKeyboard from '../phone/SceneBankKeyboard';
import SceneBankTransfer from '../phone/SceneBankTransfer';
import StickyNote from '../phone/StickyNote';

export type Scene7Ref = {
  tlScene7: gsap.core.Timeline | null;
};
type Scene7Props = {
  callback: () => void;
};

function Scene7(props: Scene7Props, ref: Ref<Scene7Ref>) {
  const tlMain = useRef<gsap.core.Timeline | null>(null);
  const tlEnd = useRef<gsap.core.Timeline | null>(null);
  const scene7Ref = useRef(null);
  const phoneRef = useRef(null);
  const { callback } = props;

  const [showFirstPage, setShowFirstPage] = useState(true);
  const [showSecondPage, setShowSecondPage] = useState(false);

  useImperativeHandle(ref, () => ({
    tlScene7: tlMain.current,
  }));

  useEffect(() => {
    tlMain.current = gsap.timeline();
    tlEnd.current = gsap.timeline({ paused: true });
    tlMain.current.fromTo(
      scene7Ref.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
      }
    );

    tlEnd.current.fromTo(
      scene7Ref.current,
      {
        opacity: 1,
      },
      {
        opacity: 0,
        delay: 3,
        duration: 1,
        onComplete: callback,
      }
    );
  }, [callback]);

  return (
    <div className={styles.container} ref={scene7Ref}>
      <StickyNote initialpos={{ x: 100, y: 100 }} />
      <div className={styles.phone_wrapper} ref={phoneRef}>
        <Phone>
          {showFirstPage && (
            <SceneBankKeyboard
              showSecondPage={showSecondPage}
              setShowFirstPage={setShowFirstPage}
              setShowSecondPage={setShowSecondPage}
            />
          )}
          {showSecondPage && (
            <SceneBankTransfer callback={() => tlEnd.current?.play()} />
          )}
        </Phone>
      </div>
    </div>
  );
}

export default forwardRef(Scene7);
