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

export type Scene5Ref = {
  tlScene5: gsap.core.Timeline | null;
};
type Scene5Props = {
  callback: () => void;
};

function Scene5(props: Scene5Props, ref: Ref<Scene5Ref>) {
  const tlMain = useRef<gsap.core.Timeline | null>(null);
  const scene5Ref = useRef(null);

  const [showComponent, setShowComponent] = useState({});

  useImperativeHandle(ref, () => ({
    tlScene5: tlMain.current,
  }));

  useEffect(() => {
    tlMain.current = gsap.timeline();
  }, []);

  return (
    <div className={styles.container} ref={scene5Ref}>
      scene5
    </div>
  );
}

export default forwardRef(Scene5);
