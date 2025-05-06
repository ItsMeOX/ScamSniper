import Carousel from '../base/Carousel';
import styles from './chatmessagebox.module.css';
import { useEffect, useState,  useRef } from 'react';

type MessageType = {
  role: string;
  content: (
    | {
        type: 'text';
        text: string;
      }
    | {
        type: 'image_url';
        image_url: {
          url: string;
        };
      }
  )[];
};

export default function ChatMessageBox({
  messages,
  username,
}: {
  messages: MessageType[];
  username: string | null | undefined;
}) {
  const scroller = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scrollToElement = () => {
    if (scroller.current) {
      scroller.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  scrollToElement();
    }, [scroller, messages]); // Add messages as a dependency to trigger scroll on new messages

  return (
    <div className={styles.container}>
      {messages.length === 0 ? (
        <div className={styles.empty}>
          <div>
            {username === undefined
              ? 'Please login to proceed'
              : 'Hi ' + username + ', What can I help with?'}
          </div>
        </div>
      ) : (
        messages.map((msg, index) => (
          <div
            key={index}
            className={`${styles.message} ${
              msg.role === 'user' ? styles.user : styles.ai
            }`}>
            <div className={styles.icon}>
              {msg.role === 'user' ? <span>🧑</span> : <span>🤖</span>}
            </div>
            <div className={styles.content}>
              {msg.content.map(
                (content, idx) =>
                  content.type === 'text' &&  content.text === "loading" ? <div key={idx} ref={scroller} className={styles.txt_loader}/> : content.type === 'text' && <div key={idx}>{content.text}</div>
              )}
              <Carousel
                images={msg.content
                  .filter((item) => item.type === 'image_url')
                  .map((item) => (item as any).image_url.url)}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
}
