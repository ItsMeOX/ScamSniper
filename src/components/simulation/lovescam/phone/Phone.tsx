import React from 'react';
import styles from './phone.module.css';

export default function Phone({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.camera}>
          <div className={styles.camera_compo1} />
          <div className={styles.camera_compo2} />
        </div>
        <div className={styles.content_box}>{children}</div>
      </div>
      <div className={styles.button_power} />
      <div className={`${styles.button_volume} ${styles.volume_up} `} />
      <div className={`${styles.button_volume} ${styles.volume_down} `} />
    </div>
  );
}
