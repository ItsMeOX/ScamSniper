import Image from 'next/image';
import styles from './userlabel.module.css';
import { formatDistanceToNow } from 'date-fns';
import { User } from '@prisma/client';

export default function UserLabel({ user, createdAt }: { user: User; createdAt: Date }) {
  const timeAgo = formatDistanceToNow(new Date(createdAt), { addSuffix: true });
  return (
    <div className={styles.container}>
      <Image
        className={styles.pfp_image}
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
          {timeAgo}
        </span>
      </div>
    </div>
  );
}
