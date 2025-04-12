import { Dispatch, SetStateAction } from 'react';
import styles from './categorylabel.module.css';
import { ColoredForumTag } from '@/app/types/ForumTag';

export default function CategoryLabel({
  category,
  selectedLabelId,
  setSelectedLabelId,
}: {
  category: ColoredForumTag;
  selectedLabelId: number;
  setSelectedLabelId: Dispatch<SetStateAction<number>>;
}) {
  const isSelected = selectedLabelId === category.tagId;

  return (
    <div className={styles.container}>
      <button
        className={styles.box}
        onClick={() => setSelectedLabelId(category.tagId)}>
        <svg
          width="25"
          height="18"
          viewBox="0 0 22 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.16 0H0V13H17.16L22 6.19048L17.16 0Z"
            fill={category.primaryColor}
          />
        </svg>

        <span style={{ fontWeight: isSelected ? '600' : '400' }}>
          {category.tagText}
        </span>
      </button>
    </div>
  );
}
