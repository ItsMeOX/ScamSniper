import Image from 'next/image';
import Label from '../base/Label';
import styles from './forum.module.css';
import UserLabel from './UserLabel';
import Comment from './Comment';

export default function Forum() {
  return (
    <div className={styles.container}>
      <div className={styles.header_box}>
        <h2 className={styles.title}>Impersonating LadyBoy</h2>
        <Label />
      </div>
      <div className={styles.user_box}>
        <UserLabel />
      </div>
      <div className={styles.image_box}>
        <div className={styles.image_holder}>
          <Image
            src="/forum/nengyi.png"
            alt="nengyi"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.description_box}>
        <p>
          I never thought Id be the type to fall for an online love scam. I
          mean, Ive read all the warnings—dont send money, dont trust people too
          quickly
        </p>
      </div>
      <hr className={styles.separation_line} />
      <div className={styles.comment_section_box}>
        <label className={styles.comment_section_title}>Comment Section</label>
        <Comment />
      </div>
    </div>
  );
}
