import Image from 'next/image';
import styles from './whatsapp.module.css';

export default function Whatsapp() {
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
            <span className={styles.profile_box_status}>online</span>
          </div>
        </div>
      </div>
      <div className={styles.main_box}></div>
      <div className={styles.bottom_box}>
        <div className={styles.chat_input_box}>Type a message</div>
      </div>
    </div>
  );
}
