import styles from './userinputcontainer.module.css';
import { useState } from 'react';
import {uploadImage} from '@/app/lib/requests/image/uploadImage';

export default function UserInputContainer({onSendMessage, toggleShowReport} : {onSendMessage: (userInput: string, fileUrls : string[]) => Promise<string>, toggleShowReport: () => void}) {
    const [userInput, setUserInput] = useState<string>('');
    const [fileUrls, setFileUrls] = useState<string[]>([]);
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && (userInput.trim() !== '' || fileUrls.length !== 0)) {
            onSendMessage(userInput, fileUrls);
            setFileUrls([]);
            setUserInput("");
        }
    }
    const handleSendMessage = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (userInput.trim() === '' && fileUrls.length === 0) return;
        onSendMessage(userInput, fileUrls);
        setFileUrls([]);
        setUserInput("");
    }
    const handleFiles = async (newFile: FileList | null) => {
        if (!newFile) return;
        const fileArray = Array.from(newFile);
        const fileUrls = await Promise.all(
            fileArray.map((file) => uploadImage(file))
          );
        setFileUrls((prev) => [...prev, ...fileUrls]);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        handleFiles(e.dataTransfer.files);
    };

  return <div className={styles.chatContainer}>
            <div className={styles.previewContainer} onDrop={handleDrop}>
            {fileUrls.map((url, index) => (
                <div key={index} className={styles.previewBox}>
                <img
                    src={url}
                    alt={`preview-${index}`}
                    className={styles.previewImage}
                />
                <button
                    onClick={() => setFileUrls(fileUrls.filter((_, i) => i !== index))}
                    className={styles.removeButton}
                >
                    ×
                </button>
                </div>
            ))}
            </div>
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
                        onChange={(e) => handleFiles(e.target.files)}
                        />
                    </div> 
                    <button className={styles.reportButton} onClick={toggleShowReport}>Report</button>
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
