'use client';

import Image from 'next/image';
import styles from './comment.module.css';
import { Prisma } from '@prisma/client';
import { Dispatch, SetStateAction, useState } from 'react';
import createForumComment from '@/app/lib/requests/forum/createForumComment';
import { useSession } from 'next-auth/react';

export default function Comment({
  setRefetch,
  forumId,
  comments,
}: {
  setRefetch: Dispatch<SetStateAction<boolean>>;
  forumId: number;
  comments: Prisma.ForumCommentGetPayload<{
    include: {
      User: true;
    };
  }>[];
}) {
  const [commentText, setCommentText] = useState('');
  const session = useSession();
  const userImageUrl = session.data?.user.image_url;
  const username = session.data?.user.name;

  async function handleSubmitComment() {
    try {
      await createForumComment({
        forumId,
        commentText,
        userId: parseInt(session.data?.user.id || '0'),
      });
      setCommentText('');
      setRefetch((prev) => !prev);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.comment_input_container}>
        <div className={styles.user_box}>
          <Image
            className={styles.pfp_image}
            src={userImageUrl ?? '/default_profile_picture.png'}
            alt="profile pic"
            width={30}
            height={30}
          />
          <label>{username}</label>
        </div>
        <div className={styles.comment_input_box}>
          <input
            type="text"
            placeholder="Comment here"
            onChange={(ev) => {
              setCommentText(ev.target.value);
            }}
            value={commentText}
          />
          <button onClick={handleSubmitComment}>Comment</button>
        </div>
      </div>

      <div className={styles.comment_display_box}>
        {comments.map((comment) => (
          <div key={`comment-${comment.id}`}>
            <div className={styles.user_box}>
              <Image
                src={
                  comment.User.user_image_url ?? '/default_profile_picture.png'
                }
                alt="comment profile pic"
                width={30}
                height={30}
              />
              <label>{comment.User.user_name}</label>
            </div>
            <div className={styles.comment_content_box}>
              <p className={styles.comment_display_text}>{comment.text}</p>
              <div className={styles.comment_display_footer}>
                <button
                  className={`${styles.vote_button} ${styles.upvote_button}`}>
                  <Image
                    src="/forum/upvote.svg"
                    alt="upvote"
                    width={12}
                    height={12}
                  />
                </button>
                <button
                  className={`${styles.vote_button} ${styles.downvote_button}`}>
                  <Image
                    src="/forum/downvote.svg"
                    alt="upvote"
                    width={12}
                    height={12}
                  />
                </button>
                <label className={styles.comment_time}>
                  {new Date(comment.created_at).toLocaleString([], {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
                  })}
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
