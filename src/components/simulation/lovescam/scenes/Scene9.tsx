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
    message1: true,
    message2: true,
    message3: false,
    message4: false,
  });

  useEffect(() => {
    tlMain.current = gsap.timeline();
    tlEnd.current = gsap.timeline({ paused: true });
    tlEnd.current.fromTo(
      scene9Ref.current,
      {
        opacity: 1,
      },
      {
        opacity: 0,
        duration: 0.5,
        delay: 1,
        onComplete: callback,
      }
    );
  }, [callback]);

  return <div>Scene9</div>;
}

export default forwardRef(Scene9);
