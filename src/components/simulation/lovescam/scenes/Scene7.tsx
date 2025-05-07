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
import Image from 'next/image';
import Phone from '../phone/Phone';

export type Scene7Ref = {
  tlScene7: gsap.core.Timeline | null;
};
type Scene7Props = {
  callback: () => void;
};

function Scene7(props: Scene7Props, ref: Ref<Scene7Ref>) {
  const tlMain = useRef<gsap.core.Timeline | null>(null);
  const scene7Ref = useRef(null);
  const { callback } = props;

  const [showComponent, setShowComponent] = useState({});

  useImperativeHandle(ref, () => ({
    tlScene7: tlMain.current,
  }));

  useEffect(() => {
    tlMain.current = gsap.timeline();
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
  }, [callback]);

  return (
    <div className={styles.container} ref={scene7Ref}>
      Scene 7
    </div>
  );
}

export default forwardRef(Scene7);
