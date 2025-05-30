'use client';

import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from './login.module.css';
import { useRouter } from 'next/navigation';
import crendentialLogin from '@/app/lib/requests/auth/credentialLogin';
import { useState } from 'react';
import ErrorBox from '@/components/auth/ErrorBox';


export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  async function login(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    setLoading(true);

    const formData = new FormData(ev.currentTarget);

    try {
      await crendentialLogin(formData);
      router.push('/');
    } catch (err) {
      console.error(err);
      if (err instanceof Error) {
        setError(err.message);
        console.error(error);
      } else {
        setError('Something went wrong, please try again.');
      }
      console.error(error);
      setLoading(false);
    }
  }

  return (
    <>
    <Head>
      <title>ScamSniper - Login</title>
      <link rel="icon" href="./app_logo.ico"/>
    </Head>
    <div className={styles.container}>
      <form className={styles.box} onSubmit={login}>
        <div className={styles.input_section}>
          <Link href = '/'>
            <Image
              className={styles.logo}
              src='/scamsniper.svg'
              alt='logo'
              width={40}
              height={40}
              priority
            />
          </Link>
          <div>
            <h1 className={styles.title}>Welcome back!</h1>
            <span className={styles.subtitle}>Glad to see you again at ScamSniper.</span>
          </div>
          <div className={styles.inputs_box}>
            <div className={styles.input_box}>
              <label>Email</label>
              <input type='email' name='email' />
            </div>
            <div className={styles.input_box}>
              <label>Password</label>
              <input type='password' name='password' />
            </div>
          </div>
          <button
            disabled={loading}
            className={styles.submit_button}
            type='submit'
          >
            Login
          </button>
          <div>{error && <ErrorBox errorText={error} />}</div>
          <span className={styles.no_account}>
            Don&apos;t have an account?{' '}
            <button onClick={() => router.push('/account/register')}>
              Register here
            </button>
          </span>
        </div>
        <div className={styles.art_section}></div>
      </form>
    </div>
    </>
  );
}