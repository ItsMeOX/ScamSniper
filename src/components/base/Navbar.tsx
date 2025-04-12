'use client';

import Image from 'next/image';
import styles from './navbar.module.css';
import { useRouter } from 'next/navigation';

export default function NavBar() {
  const router = useRouter();

  return (
    <header className={styles.container}>
      <div className={styles.box}>
        <div className={styles.left_box}>
          <Image
            className={styles.logo}
            src={'scamsniper.svg'}
            alt="logo"
            width="200"
            height="200"
          />
          <p className={styles.title}>ScamSniper</p>
        </div>
        <div className={styles.middle_box}>
          <button className={styles.button} onClick={() => router.push('/')}>
            Home
          </button>
          <button className={styles.button}>Forum</button>
          <button className={styles.button}>VerifyAI</button>
        </div>
        <div className={styles.right_box}>
          <button className={styles.button}>Login</button>
          <button className={`${styles.button} ${styles.register_button}`}>
            Register
          </button>
        </div>
      </div>
    </header>
  );
}
