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
import ChatBox from '../whatsapp/ChatBox';

export type Scene3Ref = {
  tlScene3: gsap.core.Timeline | null;
};
type Scene3Props = {
  callback: () => void;
};

type Message = {
  text: string;
  time: string;
  isMyMessage: boolean;
};

function Scene3(props: Scene3Props, ref: Ref<Scene3Ref>) {
  const messages: Message[] = [
    {
      text: 'Hi Jimmy 👋 I saw your profile. You’re an engineer? That’s so cool!',
      time: '14:04',
      isMyMessage: false,
    },
    {
      text: 'Haha yeah, mechanical engineer. I build stuff that spins and moves 😅 What about you?',
      time: '14:05',
      isMyMessage: true,
    },
    {
      text: 'I’m an interior designer~ I love beautiful things. Maybe one day you’ll build a house and I’ll design it 😄',
      time: '14:05',
      isMyMessage: false,
    },
    {
      text: 'Deal. As long as you promise to make my future kitchen awesome.',
      time: '14:06',
      isMyMessage: true,
    },
  ];

  const tlMain = useRef<gsap.core.Timeline | null>(null);
  const tlMessage3 = useRef<gsap.core.Timeline | null>(null);
  const scene3Ref = useRef(null);
  const message1Ref = useRef(null);
  const message2Ref = useRef(null);
  const message3Ref = useRef(null);
  const message4Ref = useRef(null);

  useImperativeHandle(ref, () => ({
    tlScene3: tlMain.current,
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
    tlMain.current.fromTo(
      message1Ref.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        delay: 1,
      }
    );

    tlMessage3.current.fromTo(
      message3Ref.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        delay: 2,
      }
    );
  }, []);

  return (
    <div className={styles.container} ref={scene3Ref}>
      <Whatsapp
        sendButtonCallback={() => {
          setShowMessage((prev) => {
            if (!prev.message2) {
              tlMessage3.current?.play();
              return { ...prev, message2: true, message3: true };
            } else {
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
        {showMessage.message2 && (
          <ChatBox
            ref={message2Ref}
            isMyMessage={true}
            messageText="Haha yeah, mechanical engineer. I build stuff that spins and moves 😅 What about you?"
            timeText="14:05"
          />
        )}
        <ChatBox
          ref={message3Ref}
          isMyMessage={false}
          messageText="I’m an interior designer~ I love beautiful things. Maybe one day you’ll build a house and I’ll design it 😄"
          timeText="14:05"
        />
        {showMessage.message4 && (
          <ChatBox
            ref={message4Ref}
            isMyMessage={true}
            messageText="Deal. As long as you promise to make my future kitchen awesome."
            timeText="14:06"
          />
        )}
      </Whatsapp>
    </div>
  );
}

export default forwardRef(Scene3);
