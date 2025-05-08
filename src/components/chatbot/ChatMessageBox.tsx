import Carousel from '../base/Carousel';
import styles from './chatmessagebox.module.css';
import { useEffect, useState,  useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { Lock } from 'lucide-react';

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
        <div>
        {username === undefined
          ? 
          <div className={styles.empty_1}>
            <Lock size={48} color="#585454"/>
            <div style={{ marginTop: '1rem' }}>Please login to proceed</div>
          </div>
          : <div className={styles.empty_2}>
            <div>Hi {username}, what can I help with?</div>
            </div>
            }
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
                  content.type === 'text' &&  content.text === "loading" ? <div key={idx} ref={scroller} className={styles.txt_loader}/> : content.type === 'text' && <div key={idx}><ReactMarkdown key={idx+"a"}>{content.text}</ReactMarkdown></div>
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
