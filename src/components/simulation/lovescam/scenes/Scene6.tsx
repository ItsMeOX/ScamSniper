import styles from './scene6.module.css';
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
  const tlMessage5 = useRef<gsap.core.Timeline | null>(null);
  const scene6Ref = useRef(null);
  const introRef = useRef(null);
  const mainRef = useRef(null);
  const message1Ref = useRef(null);
  const message2Ref = useRef(null);
  const message3Ref = useRef(null);
  const message4Ref = useRef(null);
  const message5Ref = useRef(null);
  const { callback } = props;

  useImperativeHandle(ref, () => ({
    tlScene6: tlMain.current,
  }));

  const [showComponent, setShowComponent] = useState({
    intro: true,
    main: false,
    message1: true,
    message2: false,
    message3: false,
    message4: false,
    message5: false,
  });

  useEffect(() => {
    tlMain.current = gsap.timeline();
    tlMessage3.current = gsap.timeline({ paused: true });
    tlMessage5.current = gsap.timeline({ paused: true });
    tlEnd.current = gsap.timeline({ paused: true });

    tlMain.current
      .fromTo(
        introRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          onComplete: () => {
            setShowComponent((prev) => ({ ...prev, main: true }));
          },
        }
      )
      .fromTo(
        introRef.current,
        {
          opacity: 1,
        },
        {
          opacity: 0,
          delay: 1,
          onComplete: () => {
            setShowComponent((prev) => ({ ...prev, intro: false }));
          },
        }
      )
      .fromTo(
        message1Ref.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          delay: 1,

          onComplete: () => {
            setTimeout(() => setTypingText('Oh noo, what happened?'), 2700);
          },
        }
      )
      .fromTo(
        message2Ref.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          delay: 0.5,
        }
      );

    tlMessage3.current.fromTo(
      message3Ref.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        delay: 2,
        onComplete: () => {
          setTimeout(() => {
            setTypingText(
              'Sure, your health matters more. Let me transfer you the money.'
            );
          }, 2500);
        },
      }
    );

    tlMessage5.current.fromTo(
      message5Ref.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        delay: 2,
        onComplete: () => {
          tlEnd.current?.play();
        },
      }
    );

    tlEnd.current.to(scene6Ref.current, {
      opacity: 0,
      duration: 0.5,
      delay: 2,
      onComplete: callback,
    });
  }, [callback]);

  return (
    <div className={styles.container} ref={scene6Ref}>
      {showComponent.intro && (
        <div className={styles.intro_box} ref={introRef}>
          <span>
            After the trip, one day, Yuki asked Jimmy for $10,000, saying she
            urgently needed it to cover medical expenses.
          </span>
        </div>
      )}
      <div ref={mainRef}>
        <Whatsapp
          typingText={typingText}
          sendButtonCallback={() => {
            setShowComponent((prev) => {
              setTypingText('');
              if (!prev.message2) {
                tlMessage3.current?.play();
                return { ...prev, message2: true };
              } else {
                tlMessage5.current?.play();
                return { ...prev, message4: true, message5: true };
              }
            });
          }}>
          {showComponent.message1 && (
            <ChatBox
              ref={message1Ref}
              isMyMessage={false}
              messageText="Hi Jimmy.. Sorry to ask you this but recently I fell ill and I have to pay 
$10,000 for my medical bill... "
              timeText="20:02"
            />
          )}
          {showComponent.message2 && (
            <ChatBox
              ref={message2Ref}
              isMyMessage={true}
              messageText="Oh noo, what happened?"
              timeText="20:02"
            />
          )}
          <ChatBox
            ref={message3Ref}
            isMyMessage={false}
            messageText="After our trip, I fell really ill. I do not have enough money to pay
            for my medical bill. Can I borrow $10,000 from you?"
            timeText="20:05"
          />
          {showComponent.message4 && (
            <ChatBox
              ref={message4Ref}
              isMyMessage={true}
              messageText="Sure, your health matters more. Let me transfer you the money."
              timeText="20:06"
            />
          )}
          <ChatBox
            ref={message5Ref}
            isMyMessage={false}
            messageText="I promise to pay you back soon. 🥺💖"
            timeText="20:06"
          />
        </Whatsapp>
      </div>
    </div>
  );
}

export default forwardRef(Scene6);
