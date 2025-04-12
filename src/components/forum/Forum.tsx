'use client';

import styles from './forum.module.css';
import SearchBar from '@/components/forum/SearchBar';
import ForumBox from '@/components/forum/ForumBox';
import Category from '@/components/forum/Category';
import { useState } from 'react';
import ForumCreatePopup from '@/components/forum/ForumCreatePopup';
import ForumCreateButton from '@/components/forum/ForumCreateButton';
import { ForumWithRelations } from '@/app/lib/requests/forum/fetchForum';

export default function Forum({ forums }: { forums: ForumWithRelations }) {
  const [showCreatePopup, setShowCreatePopup] = useState(false);

  return (
    <main className={styles.container}>
      {showCreatePopup && (
        <ForumCreatePopup setShowCreatePopup={setShowCreatePopup} />
      )}
      <div className={styles.box}>
        <div className={styles.main_content_container}>
          <SearchBar />
          <div className={styles.main_content_box}>
            {forums.map((forum, idx) => (
              <ForumBox key={`forum-${idx}`} forum={forum} />
            ))}
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
