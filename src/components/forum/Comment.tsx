import Image from 'next/image';
import styles from './comment.module.css';

export default function Comment() {
  return (
    <div className={styles.container}>
      <div className={styles.comment_input_container}>
        <div className={styles.user_box}>
          <Image
            src="/forum/user_profile_pic.png"
            alt="profile pic"
            width={30}
            height={30}
          />
          <label>ItsMeZH</label>
        </div>
        <div className={styles.comment_input_box}>
          <input type="text" placeholder="Comment here" />
          <button>Comment</button>
        </div>
      </div>

      <div className={styles.comment_display_box}>
        <div className={styles.user_box}>
          <Image
            src="/forum/user_profile_pic.png"
            alt="profile pic"
            width={30}
            height={30}
          />
          <label>John Doe</label>
        </div>
        <div className={styles.comment_content_box}>
          <p className={styles.comment_display_text}>
            I really appreciate idk what the hell am i typing i dadawdoawawo I
            really appreciate idk what the hell am i typing i dadawdoawawo I
            really appreciate idk what the hell am i typing i dadawdoawawo
          </p>
          <div className={styles.comment_display_footer}>
            <button className={`${styles.vote_button} ${styles.upvote_button}`}>
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
            <label className={styles.comment_time}>5 min ago</label>
          </div>
        </div>
      </div>
    </div>
  );
}
