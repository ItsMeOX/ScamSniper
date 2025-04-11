import styles from './label.module.css';

export default function Label() {
  return (
    <div className={styles.container}>
      <label className={styles.text}>Love</label>
    </div>
  );
}
