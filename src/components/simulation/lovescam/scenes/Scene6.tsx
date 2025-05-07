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

export type Scene6Ref = {
  tlScene6: gsap.core.Timeline | null;
};
type Scene6Props = {
  callback: () => void;
};

function Scene6(props: Scene6Props, ref: Ref<Scene6Ref>) {
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
    tlScene6: tlMain.current,
  }));

  const [showMessage, setShowMessage] = useState({
    message1: true,
    message2: false,
    message3: false,
    message4: false,
  });

  useEffect(() => {
    tlMain.current = gsap.timeline();
    tlEnd.current = gsap.timeline({ paused: true });
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
              return { ...prev, message4: true };
            }
          });
        }}>
        {showMessage.message1 && (
          <ChatBox
            ref={message1Ref}
            isMyMessage={false}
            messageText=""
            timeText=""
          />
        )}
      </Whatsapp>
    </div>
  );
}

export default forwardRef(Scene6);
