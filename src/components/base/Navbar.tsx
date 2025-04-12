'use client';

import Image from 'next/image';
import styles from './navbar.module.css';
import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';

export default function NavBar() {
  const router = useRouter();
  const session = useSession();
  const userName = session.data?.user.name;
  const userImageUrl = session.data?.user.image_url;
  console.log(userName);
  console.log(session);
  console.log(userImageUrl);

  async function handleSignout() {
    await signOut({ callbackUrl: '/' });
  }

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
          <button
            className={styles.button}
            onClick={() => router.push('/forum')}>
            Forum
          </button>
          <button
            className={styles.button}
            onClick={() => router.push('/chatbot')}>
            VerifyAI
          </button>
        </div>
        <div className={styles.right_box}>
          {session.status !== 'authenticated' && (
            <>
              <button
                className={styles.button}
                onClick={() => router.push('/account/login')}>
                Login
              </button>
              <button
                className={`${styles.button} ${styles.register_button}`}
                onClick={() => router.push('/account/register')}>
                Register
              </button>
            </>
          )}
          {session.status === 'authenticated' && (
            <div className={styles.user_box}>
              <Image
                src={userImageUrl ?? '/default_profile_picture.png'}
                alt="profile picture"
                width={40}
                height={40}
              />
              <button onClick={handleSignout}>{userName}</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
