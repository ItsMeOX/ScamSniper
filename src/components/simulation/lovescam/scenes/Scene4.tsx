import styles from './scene3.module.css';
import Whatsapp from '../whatsapp/Whatsapp';
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

  useImperativeHandle(ref, () => ({
    tlScene4: tlMain.current,
  }));

  useEffect(() => {
    tlMain.current = gsap.timeline();
  }, []);

  return (
    <div className={styles.container} ref={scene4Ref}>
      wassup bitch
    </div>
  );
}

export default forwardRef(Scene4);
