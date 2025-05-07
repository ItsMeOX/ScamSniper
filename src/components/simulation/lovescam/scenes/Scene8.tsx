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
  const scene8Ref = useRef(null);
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
    message2: true,
    message3: false,
    message4: false,
  });

  useEffect(() => {
    setTimeout(() => {
      setTypingText('Have u received?');
    }, 1000);

    tlMain.current = gsap.timeline();
    tlEnd.current = gsap.timeline({ paused: true });
    tlEnd.current.fromTo(
      scene8Ref.current,
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

  return (
    <div className={styles.container} ref={scene8Ref}>
      <Whatsapp
        typingText={typingText}
        sendButtonCallback={() => {
          setShowMessage((prev) => {
            setTypingText('');
            if (!prev.message3) {
              setTimeout(() => {
                setTypingText(':(');
              }, 1000);
              return { ...prev, message3: true };
            } else {
              setTimeout(() => {
                tlEnd.current?.play();
              }, 2000);
              return { ...prev, message4: true };
            }
          });
        }}>
        <ChatBox
          ref={message1Ref}
          isMyMessage={true}
          messageText="Sure, your health matters more. Let me transfer you the money."
          timeText="14:06"
        />
        <ChatBox
          ref={message2Ref}
          isMyMessage={false}
          messageText="I promise to pay you back soon. 🥺💖"
          timeText="14:06"
        />
        {showMessage.message3 && (
          <ChatBox
            ref={message3Ref}
            isMyMessage={true}
            messageText="Have u received?"
            timeText="14:15"
            hasError={true}
          />
        )}
        {showMessage.message4 && (
          <ChatBox
            ref={message4Ref}
            isMyMessage={true}
            messageText=":("
            timeText="14:15"
            hasError={true}
          />
        )}
      </Whatsapp>
    </div>
  );
}

export default forwardRef(Scene8);
