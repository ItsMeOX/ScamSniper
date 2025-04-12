import styles from './category.module.css';
import CategoryLabel from './CategoryLabel';

export default function Category() {
  return (
    <div className={styles.container}>
      <div className={styles.category_picker_box}>
        <span className={styles.category_picker_title}>Choose a category</span>
        <hr />
        <div className={styles.category_label_box}>
          <CategoryLabel />
          <CategoryLabel />
          <CategoryLabel />
          <CategoryLabel />
          <CategoryLabel />
        </div>
      </div>
    </div>
  );
}
