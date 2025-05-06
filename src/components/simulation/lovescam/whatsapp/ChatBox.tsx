import Image from 'next/image';
import styles from './chatbox.module.css';
import { RefObject } from 'react';

export default function ChatBox({
  isMyMessage,
  messageText,
  timeText,
  ref,
}: {
  isMyMessage: boolean;
  messageText: string;
  timeText: string;
  ref: RefObject<null>;
}) {
  return (
    <div className={styles.container} ref={ref}>
      <div
        className={styles.box}
        style={{
          color: isMyMessage ? '#c3e1df' : '#e6e6e6',
          alignSelf: isMyMessage ? 'flex-end' : 'flex-start',
          backgroundColor: isMyMessage ? '#04403b' : '#222e35',
        }}>
        <p className={styles.text}>{messageText}</p>
        <div className={styles.status_box}>
          <span>{timeText}</span>
          {isMyMessage && (
            <Image
              className={styles.read_icon}
              src="/simulation/lovescam/whatsapp_read.svg"
              alt="read"
              width={50}
              height={50}
            />
          )}
        </div>
      </div>
    </div>
  );
}
