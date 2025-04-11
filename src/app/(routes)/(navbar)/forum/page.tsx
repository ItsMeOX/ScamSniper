import NavBar from '@/components/base/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import styles from './forum.module.css';
import SearchBar from '@/components/forum/SearchBar';
import Forum from '@/components/forum/Forum';

export default function ForumPage() {
  return (
    <main className={styles.container}>
      <div className={styles.box}>
        <div className={styles.main_content_container}>
          <SearchBar />
          <div className={styles.main_content_box}>
            <Forum />
            <Forum />
            <Forum />
          </div>
        </div>
        <div className={styles.category_container}>
          <button className={styles.create_forum_button}>Create forum</button>
        </div>
      </div>
    </main>
  );
}
