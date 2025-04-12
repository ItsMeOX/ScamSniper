'use client';

import FormTextInput from '../base/FormTextInput';
import PopupWrapper from '../base/PopupWrapper';
import styles from './forumcreatepopup.module.css';
import { Dispatch, SetStateAction, useState } from 'react';
import FormImageInput from '../base/FormImageInput';
import FormMultipleOptions from '../base/FormMultipleOptions';
import { COLORED_FORUM_TAGS } from '@/app/constants/forumTags';
import createForumWithImage from '@/app/lib/requests/forum/createForumWithImage';
import createFullForum from '@/app/lib/requests/forum/createForumWithImage';

export default function ForumCreatePopup({
  setShowCreatePopup,
}: {
  setShowCreatePopup: Dispatch<SetStateAction<boolean>>;
}) {
  const [image, setImage] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedTagIds, setSelectedTagIds] = useState<number[]>([]);

  async function onSubmit() {
    try {
      await createFullForum({
        title,
        description,
        image,
        userId: 1,
        tagIds: selectedTagIds,
      });
      setShowCreatePopup(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <PopupWrapper>
      <div className={styles.container}>
        <div className={styles.box}>
          <button
            className={styles.close_button}
            onClick={() => setShowCreatePopup(false)}
          />
          <span className={styles.title}>Create new forum</span>
          <FormTextInput
            title="Forum title"
            hint="Title"
            input={title}
            setInput={setTitle}
          />
          <FormTextInput
            title="Forum description"
            multiline={true}
            hint="Description"
            input={description}
            setInput={setDescription}
          />
          <FormImageInput input={image} setInput={setImage} />
          <FormMultipleOptions
            options={COLORED_FORUM_TAGS}
            selectedTagIds={selectedTagIds}
            setSelectedTagIds={setSelectedTagIds}
          />
          <button className={styles.submit_button} onClick={onSubmit}>
            Submit
          </button>
        </div>
      </div>
    </PopupWrapper>
  );
}
