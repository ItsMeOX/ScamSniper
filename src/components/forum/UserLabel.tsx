import Image from 'next/image';
import styles from './userlabel.module.css';
import { User } from '@prisma/client';

export default function UserLabel({ user }: { user: User }) {
  return (
    <div className={styles.container}>
      <Image
        src={user.user_image_url ?? '/default_profile_picture.png'}
        alt="profile pic"
        width={30}
        height={30}
      />
      <div className={styles.box}>
        <span className={`${styles.title} ${styles.name_label}`}>
          {user.user_name}
        </span>
        <span className={`${styles.title} ${styles.time_label}`}>
          a few seconds ago
        </span>
      </div>
    </div>
  );
}
