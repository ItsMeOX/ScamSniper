import Image from 'next/image';
import styles from './searchbar.module.css';

export default function SearchBar() {
  return (
    <div className={styles.container}>
      <Image
        src="/searchbar/magnifier.svg"
        alt="search icon"
        width={20}
        height={20}
      />
      <input className={styles.search_box} placeholder="Search for forums" />
    </div>
  );
}
