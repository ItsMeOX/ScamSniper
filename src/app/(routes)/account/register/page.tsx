'use client';

import Image from 'next/image';
import styles from './register.module.css';
import { useRouter } from 'next/navigation';
import registerUser from '@/app/lib/requests/auth/createUser';
import crendentialLogin from '@/app/lib/requests/auth/credentialLogin';

export default function Register() {
  const router = useRouter();
  async function register(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    const formdata = new FormData(ev.currentTarget);

    try {
      await registerUser(formdata);
      await crendentialLogin(formdata);
      router.push('/');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.box} onSubmit={register}>
        <div className={styles.input_section}>
          <Image
            className={styles.logo}
            src="/scamsniper.svg"
            alt="logo"
            width={40}
            height={40}
          />
          <div>
            <h1 className={styles.title}>Welcome!</h1>
            <span className={styles.subtitle}>glad we have a new member!</span>
          </div>
          <div className={styles.inputs_box}>
            <div className={styles.input_box}>
              <label>Email</label>
              <input type="email" name="email" />
            </div>
            <div className={styles.input_box}>
              <label>Password</label>
              <input type="password" name="password" />
            </div>
          </div>
          <button className={styles.submit_button} type="submit">
            Register
          </button>
          <span className={styles.no_account}>
            Don&apos;t have an account? <button>Register here</button>
          </span>
        </div>
        <div className={styles.art_section}></div>
      </form>
    </div>
  );
}
