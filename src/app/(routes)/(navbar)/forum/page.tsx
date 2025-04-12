'use client';

import styles from './forum.module.css';
import SearchBar from '@/components/forum/SearchBar';
import Forum from '@/components/forum/Forum';
import Category from '@/components/forum/Category';
import { useState } from 'react';
import ForumCreatePopup from '@/components/forum/ForumCreatePopup';
import ForumCreateButton from '@/components/forum/ForumCreateButton';

export default function ForumPage() {
  const [showCreatePopup, setShowCreatePopup] = useState(true);

  return (
    <main className={styles.container}>
      {showCreatePopup && (
        <ForumCreatePopup setShowCreatePopup={setShowCreatePopup} />
      )}
      <div className={styles.box}>
        <div className={styles.main_content_container}>
          <SearchBar />
          <div className={styles.main_content_box}>
            <Forum />
            <Forum />
            <Forum />
          </div>
        </div>
        <div className={styles.right_container}>
          <ForumCreateButton setShowCreatePopup={setShowCreatePopup} />
          <Category />
        </div>
      </div>
    </main>
  );
}
