import Image from 'next/image';
import styles from './chatbox.module.css';

export default function ChatBox({ isMyMessage }: { isMyMessage: boolean }) {
  return (
    <div className={styles.container}>
      <div
        className={styles.box}
        style={{
          color: isMyMessage ? '#c3e1df' : '#e6e6e6',
          alignSelf: isMyMessage ? 'flex-end' : 'flex-start',
          backgroundColor: isMyMessage ? '#04403b' : '#222e35',
        }}>
        <p className={styles.text}>
          wad wadwa dwa wadwadwadwa aawdawda dwa dw dwad wa dwaa wad wadwa dwa
          wadwadwadwa aawdawda dwa dw dwad wa dwaa
        </p>
        <div className={styles.status_box}>
          <span>14:04</span>
          <Image
            className={styles.read_icon}
            src="/simulation/lovescam/whatsapp_read.svg"
            alt="read"
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
}
