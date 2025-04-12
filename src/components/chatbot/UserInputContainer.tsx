import styles from './userinputcontainer.module.css';
import { useState } from 'react';

export default function UserInputContainer({onSendMessage} : {onSendMessage: (userInput: string) => Promise<string>}) {
    const [userInput, setUserInput] = useState<string>('');
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onSendMessage(userInput);
            setUserInput("");
        }
    }
    const handleSendMessage = (event: React.MouseEvent<HTMLButtonElement>) => {
        onSendMessage(userInput);
        setUserInput("");
    }

  return <div className={styles.chatContainer}>
            <div className={styles.chatBox}>
                <input 
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={handleKeyDown}
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
                        <button className={styles.sendButton} onClick={handleSendMessage}/>
                    </div> 
                </div>
            </div>
        </div>;
}
