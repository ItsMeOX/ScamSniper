import styles from "./chatmessagebox.module.css";

export default function ChatMessageBox() {
    const messages = [
    ];
  return (
    <div className={styles.container}>
      {messages.length === 0 ? (
        <div className={styles.empty}>
            <div>
            What can I help with?
            </div>
        </div>
      ) : (
        messages.map((msg, index) => (
          <div
            key={index}
            className={`${styles.message} ${
              msg.role === "user" ? styles.user : styles.ai
            }`}
          >
            <div className={styles.icon}>
              {msg.role === "user" ? <span>🧑</span> : <span>🤖</span>}
            </div>
            <div className={styles.content}>{msg.content}</div>
          </div>
        ))
      )}
    </div>
  );
}