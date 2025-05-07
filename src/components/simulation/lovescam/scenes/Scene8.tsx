import styles from './scene8.module.css';
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
import ChatBox from '../whatsapp/ChatBox';

export type Scene8Ref = {
  tlScene8: gsap.core.Timeline | null;
};
type Scene8Props = {
  callback: () => void;
};

function Scene8(props: Scene8Props, ref: Ref<Scene8Ref>) {
  const [typingText, setTypingText] = useState('');
  const tlMain = useRef<gsap.core.Timeline | null>(null);
  const tlEnd = useRef<gsap.core.Timeline | null>(null);
  const tlMessage3 = useRef<gsap.core.Timeline | null>(null);
  const scene3Ref = useRef(null);
  const message1Ref = useRef(null);
  const message2Ref = useRef(null);
  const message3Ref = useRef(null);
  const message4Ref = useRef(null);
  const { callback } = props;

  useImperativeHandle(ref, () => ({
    tlScene8: tlMain.current,
  }));

  const [showMessage, setShowMessage] = useState({
    message1: true,
    message2: false,
    message3: false,
    message4: false,
  });

  useEffect(() => {
    tlMain.current = gsap.timeline();
    tlMessage3.current = gsap.timeline({ paused: true });
    tlEnd.current = gsap.timeline({ paused: true });
    tlMain.current.fromTo(
      message1Ref.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        delay: 1,
        onComplete: () => {
          setTimeout(() => {
            setTypingText(
              'Haha yeah, mechanical engineer. I build stuff that spins and moves 😅 What about you?'
            );
          }, 1000);
        },
      }
    );
  }, [callback]);

  return (
    <div className={styles.container} ref={scene3Ref}>
      <Whatsapp
        typingText={typingText}
        sendButtonCallback={() => {
          setShowMessage((prev) => {
            setTypingText('');
            if (!prev.message2) {
              tlMessage3.current?.play();
              return { ...prev, message2: true, message3: true };
            } else {
              setTimeout(() => {
                tlEnd.current?.play();
              }, 3000);
              return { ...prev, message4: true };
            }
          });
        }}>
        {showMessage.message1 && (
          <ChatBox
            ref={message1Ref}
            isMyMessage={false}
            messageText="Hi Jimmy 👋 I saw your profile. You’re an engineer? That’s so cool!"
            timeText="14:04"
          />
        )}
      </Whatsapp>
    </div>
  );
}

export default forwardRef(Scene8);
