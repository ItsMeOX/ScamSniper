'use client';

import styles from './forum.module.css';
import SearchBar from '@/components/forum/SearchBar';
import ForumBox from '@/components/forum/ForumBox';
import Category from '@/components/forum/Category';
import { useEffect, useState } from 'react';
import ForumCreatePopup from '@/components/forum/ForumCreatePopup';
import ForumCreateButton from '@/components/forum/ForumCreateButton';
import fetchForum, {
  ForumWithRelations,
} from '@/app/lib/requests/forum/fetchForum';

export default function Forum({
  initialForums,
}: {
  initialForums: ForumWithRelations;
}) {
  const [showCreatePopup, setShowCreatePopup] = useState(false);
  const [forums, setForums] = useState(initialForums);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    async function refetchForum() {
      setForums(await fetchForum());
    }
    refetchForum();
  }, [refetch]);

  return (
    <main className={styles.container}>
      {showCreatePopup && (
        <ForumCreatePopup
          setRefetch={setRefetch}
          setShowCreatePopup={setShowCreatePopup}
        />
      )}
      <div className={styles.box}>
        <div className={styles.main_content_container}>
          <SearchBar />
          <div className={styles.main_content_box}>
            {forums &&
              forums.map((forum, idx) => (
                <ForumBox
                  setRefetch={setRefetch}
                  key={`forum-${idx}`}
                  forum={forum}
                />
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
