import { RefObject } from 'react';
import styles from './scenereject.module.css';
import Image from 'next/image';

export default function SceneReject({
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
      <div className={styles.heartbroken_box}>
        <span className={styles.you_text}>You</span>
        <span className={styles.three_dots}>. . .</span>
        <Image
          className={styles.heart_image}
          src="/simulation/lovescam/broken_heart.svg"
          alt="broken_heart"
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
        <span className={styles.sorry_text}>We&apos;re sorry!</span>
        <span className={styles.matchfail_text}>Match failed</span>
      </div>
      <button className={styles.button} onClick={buttonCallback}>
        Continue
      </button>
    </div>
  );
}
