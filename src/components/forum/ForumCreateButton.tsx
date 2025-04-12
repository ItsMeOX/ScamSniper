'use client';

import { Dispatch, SetStateAction } from 'react';
import styles from './forumcreatebutton.module.css';

export default function ForumCreateButton({
  setShowCreatePopup,
}: {
  setShowCreatePopup: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className={styles.container}>
      <button
        className={styles.create_forum_button}
        onClick={() => setShowCreatePopup(true)}>
        Create forum
      </button>
    </div>
  );
}
