import { Dispatch, SetStateAction } from 'react';
import styles from './formtextinput.module.css';

export default function FormTextInput({
  input,
  setInput,
  title,
  hint,
  multiline = false,
}: {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  title: string;
  hint?: string;
  multiline?: boolean;
}) {
  return (
    <div className={styles.container}>
      <label className={styles.title_label}>{title}</label>
      {multiline && (
        <textarea
          className={styles.input}
          placeholder={hint}
          onChange={(ev) => setInput(ev.target.value)}
        />
      )}

      {!multiline && (
        <input
          className={styles.input}
          placeholder={hint}
          type="text"
          onChange={(ev) => setInput(ev.target.value)}
        />
      )}
    </div>
  );
}
