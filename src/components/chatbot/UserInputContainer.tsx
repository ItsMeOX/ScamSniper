import styles from './userinputcontainer.module.css';

export default function UserInputContainer() {
  return <div className={styles.chatContainer}>
            <div className={styles.chatBox}>
                <input 
                    type="text"
                    placeholder="Message VerifyAI"
                    className={`${styles.placeholderText} ${styles.chatInput}`}
                />

            </div>
            <div className={styles.button_container}>
                <div className={styles.button_group}>
                    <div className={`${styles.circle_box} ${styles.file_uploader_box}`}>
                        <input
                            type="file"
                            multiple
                        />
                    </div> 
                    <button className={styles.reportButton}>Report</button>
                </div>
                <div className={styles.button_group}>
                    <button className={styles.iconButton}>
                        <div className={styles.micIcon}></div>
                    </button>
                    <div className={`${styles.circle_box}`}>
                        <button className={styles.sendButton}/>
                    </div> 
                </div>
            </div>
        </div>;
}
