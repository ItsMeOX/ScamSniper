import styles from './scene3.module.css';
import Whatsapp from '../whatsapp/Whatsapp';
import { forwardRef, Ref, useEffect, useImperativeHandle, useRef } from 'react';
import gsap from 'gsap';
import ChatBox from '../whatsapp/ChatBox';

export type Scene3Ref = {
  tlScene3: gsap.core.Timeline | null;
};
type Scene3Props = {
  callback: () => void;
};

function Scene3(props: Scene3Props, ref: Ref<Scene3Ref>) {
  const tlMain = useRef<gsap.core.Timeline | null>(null);
  const scene3Ref = useRef(null);

  useImperativeHandle(ref, () => ({
    tlScene3: tlMain.current,
  }));

  useEffect(() => {
    tlMain.current = gsap.timeline({ paused: true });
  }, []);

  return (
    <div className={styles.container} ref={scene3Ref}>
      <Whatsapp>
        <ChatBox isMyMessage={false} />
        <ChatBox isMyMessage={true} />
      </Whatsapp>
    </div>
  );
}

export default forwardRef(Scene3);
