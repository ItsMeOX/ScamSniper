import { RefObject } from 'react';
import styles from './scenematch.module.css';
import Image from 'next/image';

export default function SceneMatch({
  ref,
  buttonCallback,
  profileImgSrc,
  profileBgColor,
}: {
  ref: RefObject<null>;
  buttonCallback: () => void;
  profileImgSrc: string;
  profileBgColor: string;
}) {
  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.heart_box}>
        <span className={styles.you_text}>You</span>
        <span className={styles.three_dots}>. . .</span>
        <Image
          className={styles.heart_image}
          src="/simulation/lovescam/heart_red.svg"
          alt="heart"
          width={100}
          height={100}
        />
        <span className={styles.three_dots}>. . .</span>
        <Image
          className={`${styles.profile_picture} ${styles.profile_picture_girl}`}
          style={{ backgroundColor: profileBgColor }}
          src={profileImgSrc}
          alt="girl"
          width={200}
          height={200}
          quality={100}
          unoptimized={true}
        />
      </div>
      <div className={styles.text_box}>
        <span className={styles.sorry_text}>It&apos;s a match!</span>
        <span className={styles.matchfail_text}>You both like each other!</span>
      </div>
      <button className={styles.button} onClick={buttonCallback}>
        Chat
      </button>
    </div>
  );
}
