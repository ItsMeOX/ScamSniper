import React, { Dispatch, SetStateAction } from 'react';
import styles from './formmultipleoptions.module.css';
import Image from 'next/image';

export default function FormMultipleOptions({
  options,
  selectedTagIds,
  setSelectedTagIds,
}: {
  options: {
    tagId: number;
    tagText: string;
    primaryColor: string;
    secondaryColor: string;
  }[];
  selectedTagIds: number[];
  setSelectedTagIds: Dispatch<SetStateAction<number[]>>;
}) {
  const onToggleTag = (tagId: number) => {
    setSelectedTagIds((prev) =>
      prev.includes(tagId)
        ? prev.filter((id) => id !== tagId)
        : [...prev, tagId]
    );
  };

  return (
    <div className={styles.container}>
      <span className={styles.title_label}>Forum tags</span>
      {options.map((tag, index) => (
        <div
          className={styles.item_box}
          key={`category_tag-${index}`}
          style={
            {
              '--border-color': tag.secondaryColor,
              '--text-color': tag.primaryColor,
            } as React.CSSProperties
          }>
          <label>
            <input
              type="checkbox"
              checked={selectedTagIds.includes(tag.tagId)}
              onClick={() => onToggleTag(tag.tagId)}
              readOnly
            />
            {tag.tagText}
          </label>
        </div>
      ))}
    </div>
  );
}
