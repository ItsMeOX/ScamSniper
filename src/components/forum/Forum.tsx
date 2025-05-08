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
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function refetchForum() {
      setForums(await fetchForum());
    }
    refetchForum();
  }, [refetch]);

  const filteredForums = forums.filter(forum => forum.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <main className={styles.container}>
      {showCreatePopup && (
        <ForumCreatePopup
          callback={() => setRefetch((prev) => !prev)}
          setShowCreatePopup={setShowCreatePopup}
        />
      )}
      <div className={styles.box}>
        <div className={styles.main_content_container}>
          <SearchBar onSearch={setSearchQuery} />
          <div className={styles.main_content_box}>
            {filteredForums.length > 0 ? (
              filteredForums.map((forum, idx) => (
                <ForumBox
                  setRefetch={setRefetch}
                  key={`forum-${idx}`}
                  forum={forum}
                />
              ))
            ) : (
              <div className={styles.noResultContainer}>
              <img
                src="/forum/empty_state.svg"
                alt="no results"
                className={styles.noResultIcon}
              />
              <p className={styles.noResultText}>No forums found matching your search.</p>
            </div>
            )}
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
