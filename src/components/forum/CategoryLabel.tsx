import Image from 'next/image';
import styles from './categorylabel.module.css';

export default function CategoryLabel() {
  return (
    <div className={styles.container}>
      <button className={styles.box}>
        <Image
          src="/forum/category_label.svg"
          alt="category_label"
          width={25}
          height={18}
        />
        <span>All categories</span>
      </button>
    </div>
  );
}
