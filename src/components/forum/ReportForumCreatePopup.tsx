'use client';

import FormTextInput from '../base/FormTextInput';
import PopupWrapper from '../base/PopupWrapper';
import styles from './forumcreatepopup.module.css';
import { Dispatch, SetStateAction, useState } from 'react';
import FormImageInput from '../base/FormImageInput';
import FormMultipleOptions from '../base/FormMultipleOptions';
import { COLORED_FORUM_TAGS } from '@/app/constants/forumTags';
import createFullForum from '@/app/lib/requests/forum/createForumWithImage';
import { useSession } from 'next-auth/react';
import Carousel from '../base/Carousel';
import createFullForumWithImages from '@/app/lib/requests/forum/createForumWithImages';

export default function ReportForumCreatePopup({
  setShowCreatePopup,
  callback,
  images,
  chatId,
}: {
  setShowCreatePopup: Dispatch<SetStateAction<boolean>>;
  callback: () => void;
  images: string[];
  chatId: number;
}) {
  const [imageUrls, setImageUrls] = useState<string[]>(images ?? []);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedTagIds, setSelectedTagIds] = useState<number[]>([]);
  const session = useSession();

  async function onSubmit() {
    try {
      await createFullForumWithImages({
        title,
        description,
        imageUrls,
        userId: parseInt(session.data?.user.id ?? '0'),
        tagIds: selectedTagIds,
        chatSessionId: chatId,
      });
      setShowCreatePopup(false);
      callback();
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
          <Carousel images={imageUrls} />
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
