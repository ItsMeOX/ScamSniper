import Image from 'next/image';
import Label from '../base/Label';
import styles from './forumbox.module.css';
import UserLabel from './UserLabel';
import Comment from './Comment';
import { ForumWithRelations } from '@/app/lib/requests/forum/fetchForum';
import { Dispatch, SetStateAction } from 'react';

export default function Forum({
  forum,
  setRefetch,
}: {
  forum: ForumWithRelations[number];
  setRefetch: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.header_box}>
        <h2 className={styles.title}>{forum.title}</h2>
        {forum.ForumTag.map((tag) => (
          <Label tag={tag} key={`label-${tag.tag_id}`} />
        ))}
      </div>
      <div className={styles.user_box}>
        <UserLabel user={forum.User} />
      </div>
      {forum.ForumImage.length > 0 && (
        <div className={styles.image_box}>
          <div className={styles.image_holder}>
            <Image
              src={forum.ForumImage[0].url}
              alt="forum image"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      )}
      <div className={styles.description_box}>
        <p>{forum.description}</p>
      </div>
      <hr className={styles.separation_line} />
      <div className={styles.comment_section_box}>
        <label className={styles.comment_section_title}>Comment Section</label>
        <Comment
          setRefetch={setRefetch}
          forumId={forum.id}
          comments={forum.ForumComment}
        />
      </div>
    </div>
  );
}
