import { ForumTag } from '@prisma/client';
import styles from './label.module.css';
import { COLORED_FORUM_TAGS } from '@/app/constants/forumTags';

export default function Label({ tag }: { tag: ForumTag }) {
  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: COLORED_FORUM_TAGS[tag.tag_id].primaryColor,
        color: COLORED_FORUM_TAGS[tag.tag_id].secondaryColor,
      }}>
      <label className={styles.text}>
        {COLORED_FORUM_TAGS[tag.tag_id].tagText}
      </label>
    </div>
  );
}
