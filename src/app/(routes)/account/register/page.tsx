'use client';

import Image from 'next/image';
import styles from './register.module.css';
import { useRouter } from 'next/navigation';
import registerUser from '@/app/lib/requests/auth/createUser';
import crendentialLogin from '@/app/lib/requests/auth/credentialLogin';
import { useState } from 'react';
import ErrorBox from '@/components/auth/ErrorBox';
import Head from 'next/head';

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  async function register(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    setLoading(true);
    const formdata = new FormData(ev.currentTarget);

    try {
      await registerUser(formdata);
      await crendentialLogin(formdata);
      router.push('/');
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
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
      <title>ScamSniper - Register</title>
      <link rel="icon" href="./app_logo.ico"/>
    </Head>
    <div className={styles.container}>
      <form className={styles.box} onSubmit={register}>
        <div className={styles.input_section}>
          <Image
            className={styles.logo}
            src='/scamsniper.svg'
            alt='logo'
            width={40}
            height={40}
          />
          <div>
            <h1 className={styles.title}>Welcome!</h1>
            <span className={styles.subtitle}>glad we have a new member!</span>
          </div>
          <div className={styles.inputs_box}>
            <div className={styles.input_box}>
              <label>Name</label>
              <input type='text' name='name' />
            </div>
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
            Register
          </button>
          <div className={styles.error_box}>
            {error && <ErrorBox errorText={error} />}
          </div>
        </div>
        <div className={styles.art_section}></div>
      </form>
    </div>
    </>
  );
}
