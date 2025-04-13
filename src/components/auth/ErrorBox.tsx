import styles from './errorbox.module.css';

export default function ErrorBox({ errorText }: { errorText: string }) {
  return (
    <div>
      <div className={styles.error_box}>
        <span className={styles.error_text}>{errorText}</span>
      </div>
    </div>
  );
}
