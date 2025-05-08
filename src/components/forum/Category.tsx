'use client';

import { COLORED_FORUM_TAGS } from '@/app/constants/forumTags';
import styles from './category.module.css';
import CategoryLabel from './CategoryLabel';
import { Dispatch } from 'react';
import { SetStateAction } from 'react';

export default function Category({
  selectedLabelId,
  setSelectedLabelId,
}: {
  selectedLabelId: number;
  setSelectedLabelId: Dispatch<SetStateAction<number>>;
}) {
  // const [selectedLabelId, setSelectedLabelId] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.category_picker_box}>
        <span className={styles.category_picker_title}>Choose a category</span>
        <hr />
        <div className={styles.category_label_box}>
          {COLORED_FORUM_TAGS.map((tag) => (
            <CategoryLabel
              selectedLabelId={selectedLabelId}
              setSelectedLabelId={setSelectedLabelId}
              key={`category-label-${tag.tagId}`}
              category={tag}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
