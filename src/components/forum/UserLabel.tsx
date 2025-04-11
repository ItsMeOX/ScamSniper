import Image from 'next/image';
import styles from './userlabel.module.css';

export default function UserLabel() {
  return (
    <div className={styles.container}>
      <Image
        src="/forum/user_profile_pic.png"
        alt="profile pic"
        width={30}
        height={30}
      />
      <div className={styles.box}>
        <span className={`${styles.title} ${styles.name_label}`}>ItsMeZH</span>
        <span className={`${styles.title} ${styles.time_label}`}>
          a few seconds ago
        </span>
      </div>
    </div>
  );
}
