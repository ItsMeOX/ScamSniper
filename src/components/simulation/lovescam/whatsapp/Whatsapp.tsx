import Image from 'next/image';
import styles from './whatsapp.module.css';
import React from 'react';
import TypingEffect from './TypingEffect';

export default function Whatsapp({ children }: { children: React.ReactNode }) {
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
      <div className={styles.main_box}>{children}</div>
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
        <div className={styles.chat_input_box}><TypingEffect text={"Lorem I"} typingDoneCallback={()=>{}}/></div>
        <Image
          src="/simulation/lovescam/whatsapp_send.svg"
          alt="send"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
}
