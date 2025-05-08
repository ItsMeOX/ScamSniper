import { RefObject, useState } from 'react';
import styles from './scenecamera.module.css';
import Image from 'next/image';

export default function SceneCamera({
  ref,
  buttonCallback,
  photoImgSrc,
}: {
  ref: RefObject<null>;
  buttonCallback: () => void;
  photoImgSrc: string;
}) {
  const [focused, setFocused] = useState(false);
  const FocusImage = () => {
    setFocused(true);
  };
  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.top_box}></div>
      <div className={styles.main_box}>
        <Image
          className={`${styles.photo_img} ${focused ? styles.focused : ''}`}
          src={photoImgSrc}
          alt="photo_img"
          width={1000}
          height={1000}
          quality={100}
          unoptimized={true}
        />
        <div className={styles.camera_grid}>
          <div className={`${styles.line} ${styles.v1}`}></div>
          <div className={`${styles.line} ${styles.v2}`}></div>
          <div className={`${styles.line} ${styles.h1}`}></div>
          <div className={`${styles.line} ${styles.h2}`}></div>
        </div>
      </div>
      <div className={styles.bottom_box}>
        <div className={styles.photo_button_outer}>
          <button onClick={buttonCallback} className={styles.photo_button} onMouseEnter={FocusImage}/>
        </div>
      </div>
    </div>
  );
}
