'use client';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Roboto_Mono } from 'next/font/google';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import Bubble from '@/components/home/Bubble';

const robotoMono = Roboto_Mono({ subsets: ['latin'] });

export default function Home() {
  const router = useRouter();
  const session = useSession();
  const userName = session.data?.user.name;
  const userImageUrl = session.data?.user.image_url;

  async function handleSignout() {
    await signOut({ callbackUrl: '/' });
  }

  return (
      <div className={styles.container}>
        <div className={styles.corner_box}>
          <Image
            src="/landingcorner.svg"
            alt="corner"
            width="800"
            height="600"
            className="relative h-[60vh] max-w-none w-auto"
          />
          <Image
            src="/landingcomputer.svg"
            alt="Computer"
            width="750"
            height="800"
            className="absolute bottom-0 right-0 h-[60vh] max-w-none w-auto"
          />
          <Bubble
            src="/home/sim_love.svg"
            alt="Love Sim"
            targetRoute="/simulation/lovescam"
            left={50}
            top={-60}
          />
        </div>

        <header className={styles.header}>
          <div className={styles.logo_box}>
            <Image src="/scamsniper.svg" alt="Logo" width={60} height={60} />
            <span>ScamSniper</span>
          </div>
          <div className={styles.navigator_box}>
            <Link href="/" className="font-bold " style={{ color: '#021668' }}>
              Home
            </Link>
            <Link href="/forum" style={{ color: '#021668' }}>
              Forum
            </Link>
            <Link
              href="/chatbot"
              style={{
                background: 'linear-gradient(to right, #1B4599, #51C2FF)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}>
              VerifyAI
            </Link>
          </div>
          <div className={styles.account_box}>
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
                  className={styles.pfp_image}
                  src={userImageUrl ?? '/default_profile_picture.png'}
                  alt="profile picture"
                  width={40}
                  height={40}
                />
                <button onClick={handleSignout}>{userName}</button>
              </div>
            )}
          </div>
        </header>

        <div className={styles.title_box}>
          <h1
            className={`${styles.title} ${styles.title_top}`}
            style={{
              background: 'linear-gradient(to top, #0A2F79, #0453F0)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              marginBottom: '-20px',
            }}>
            Defence
          </h1>
          <h1 className={`${styles.title}`}>Against Deception</h1>
          <div className={styles.typing_paragraph_box}>
            <span className={`${robotoMono.className} ${styles.typing_text}`}>
              Love Scams, Fake Jobs, and Phishing Emails,
            </span>
            <span className={`${robotoMono.className} ${styles.typing_text}`}>
              Think You Can Tell What&apos;s Real?
            </span>
          </div>
        </div>
      </div>
  );
}