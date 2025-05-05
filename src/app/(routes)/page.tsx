'use client';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { Roboto_Mono } from 'next/font/google';
import Link from 'next/link';
import HoverImageWithTransition from '@/components/hoverImgTransition';
import { signOut, useSession } from 'next-auth/react';

const robotoMono = Roboto_Mono({ subsets: ['latin'] });

export default function Home() {
  const router = useRouter();
  const session = useSession();
  const userName = session.data?.user.name;
  const userImageUrl = session.data?.user.image_url;
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    // Set a delay before triggering the transition
    const timeout = setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        router.push('/forum'); // Redirect after animation
      }, 1200);
    }, 1000); // 1-second delay before activation

    setHoverTimeout(timeout);
  };

  const handleMouseLeave = () => {
    // Cancel the transition if the user leaves early
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };
  async function handleSignout() {
    await signOut({ callbackUrl: '/' });
  }

  return (
    <div className={styles.container}>
      <Image
        src="/landingcorner.svg"
        alt="corner"
        width="800"
        height="600"
        className="absolute bottom-0 right-0 h-[60vh] max-w-none w-auto"
      />
      <div>
        <Image
          src="/landingcomputer.svg"
          alt="Computer"
          width="750"
          height="800"
          className="absolute bottom-0 right-0 h-[60vh] max-w-none w-auto"
        />
        <HoverImageWithTransition
          src="/sim_love.svg"
          width={200}
          height={200}
          alt="Love Sim"
          targetRoute="/forum"
          left={850} // Use pixels for better accuracy in positioning
          top={120} // Adjust top positioning as needed
        />
        {/* <HoverImageWithTransition
        src="/sim_call.svg"
        width={200}
        height={200}
        alt="Love Sim"
        targetRoute="/forum"
        left={600} // Use pixels for better accuracy in positioning
        top={370} // Adjust top positioning as needed
      />
      <HoverImageWithTransition
        src="/sim_phishing.svg"
        width={200}
        height={200}
        alt="Love Sim"
        targetRoute="/forum"
        left={1270} // Use pixels for better accuracy in positioning
        top={10} // Adjust top positioning as needed
      /> */}
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
