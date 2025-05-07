import Image from 'next/image';
import styles from './whatsapp.module.css';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import TypingEffect from './TypingEffect';

export default function Whatsapp({
  children,
  typingText,
  sendButtonCallback,
}: {
  children: React.ReactNode;
  typingText: string;
  sendButtonCallback: () => void;
}) {
  const mainBoxRef = useRef<HTMLDivElement>(null);
  const [sendable, setSendable] = useState(false);
  useEffect(() => {
    if (mainBoxRef.current) {
      mainBoxRef.current.scrollTop = mainBoxRef.current.scrollHeight;
    }
  }, [children]);

  const handleTypingDone = useCallback(() => {
    setSendable(true);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.top_box}>
        <div className={styles.profile_box}>
          <div className={styles.profile_pic_box}>
            <Image
              src="/simulation/lovescam/girl3.png"
              alt="profile"
              width={50}
              height={50}
            />
          </div>
          <div className={styles.profile_box_namestatus_box}>
            <span className={styles.profile_box_name}>Yuki</span>
            <span className={styles.profile_box_status}>online now</span>
          </div>
        </div>
      </div>
      <div className={styles.main_box} ref={mainBoxRef}>
        {children}
      </div>
      <div className={styles.bottom_box}>
        <Image
          src="/simulation/lovescam/whatsapp_emoji.svg"
          alt="emoji"
          width={50}
          height={50}
          style={{ scale: 1.55 }}
        />
        <Image
          src="/simulation/lovescam/whatsapp_paperclip.svg"
          alt="paperclip"
          width={50}
          height={50}
        />
        <div className={styles.chat_input_box}>
          {typingText ? (
            <TypingEffect
              text={typingText}
              typingDoneCallback={handleTypingDone}
            />
          ) : (
            'Your message here'
          )}
        </div>
        <svg
          onClick={
            sendable
              ? () => {
                  sendButtonCallback();
                  setSendable(false);
                }
              : () => {}
          }
          style={{ cursor: 'pointer' }}
          fill={sendable ? '#FFFFFF' : '#7A7A7A'}
          width="36px"
          height="36px"
          viewBox="0 0 28 28"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg">
          <g
            id="🔍-Product-Icons"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd">
            <g id="ic_fluent_send_28_filled" fillRule="nonzero">
              <path
                fill={sendable ? '#FFFFFF' : '#7A7A7A'}
                d="M3.78963301,2.77233335 L24.8609339,12.8499121 C25.4837277,13.1477699 25.7471402,13.8941055 25.4492823,14.5168992 C25.326107,14.7744476 25.1184823,14.9820723 24.8609339,15.1052476 L3.78963301,25.1828263 C3.16683929,25.4806842 2.42050372,25.2172716 2.12264586,24.5944779 C1.99321184,24.3238431 1.96542524,24.015685 2.04435886,23.7262618 L4.15190935,15.9983421 C4.204709,15.8047375 4.36814355,15.6614577 4.56699265,15.634447 L14.7775879,14.2474874 C14.8655834,14.2349166 14.938494,14.177091 14.9721837,14.0981464 L14.9897199,14.0353553 C15.0064567,13.9181981 14.9390703,13.8084248 14.8334007,13.7671556 L14.7775879,13.7525126 L4.57894108,12.3655968 C4.38011873,12.3385589 4.21671819,12.1952832 4.16392965,12.0016992 L2.04435886,4.22889788 C1.8627142,3.56286745 2.25538645,2.87569101 2.92141688,2.69404635 C3.21084015,2.61511273 3.51899823,2.64289932 3.78963301,2.77233335 Z"
                id="🎨-Color"></path>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
