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
        <ChatBox
          isMyMessage={false}
          messageText="Hi Jimmy 👋 I saw your profile. You’re an engineer? That’s so cool!"
          timeText="14:04"
        />
        <ChatBox
          isMyMessage={true}
          messageText="Haha yeah, mechanical engineer. I build stuff that spins and moves 😅 What about you?"
          timeText="14:05"
        />
        <ChatBox
          isMyMessage={false}
          messageText="I’m an interior designer~ I love beautiful things. Maybe one day you’ll build a house and I’ll design it 😄"
          timeText="14:05"
        />
        <ChatBox
          isMyMessage={true}
          messageText="Deal. As long as you promise to make my future kitchen awesome."
          timeText="14:06"
        />
      </Whatsapp>
    </div>
  );
}

export default forwardRef(Scene3);
