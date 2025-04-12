"use client";
import UserInputContainer from "@/components/chatbot/UserInputContainer";
import HistoryTab from "@/components/chatbot/HistoryTab";
import ChatMessageBox from "@/components/chatbot/ChatMessageBox";
import Report from "@/components/chatbot/Report";
import styles from "./chatbot.module.css";
import { useState } from "react";

type MessageType = {
    role: string;
    content: string;
  };

export default function ChatBot() {
const [historyChats, setHistoryChats] = useState<string[]>(["New Chat", "Chat 1", "Chat 2"]);
const [messages, setMessages] = useState<MessageType[]>([])

const sendText = async (userInput : string) => {
  setMessages([...messages, { role: "user", content: userInput }]);
  const res= await fetch("/api/openai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      messages: [{ role: "user", content: userInput }],
      model: "gpt-4o",
      temperature: 0.7,
    }),
  });

  const data = await res.json();
  setMessages([...messages, { role: "user", content: userInput }, { role: "assistant", content: data.response.content }]);
  return data.response.content;
};
  

  return (
    <div className={styles.container}>
      {/* <HistoryTab historyChats={historyChats}/>
      <div className={styles.chat_container}>
        <ChatMessageBox messages={messages} />
        <UserInputContainer onSendMessage={sendText}/>
      </div> */}
      <Report params={{
        images: ["https://picsum.photos/200/300"],
        sign: {
          emotioanalAppeal: { evidence: ["lol"], chances: 8 },
          monetaryAppeal: { evidence: ["lololo", "hehe"], chances: 9 },
          urgencyAppeal: { evidence: [], chances: 1 },
          unsolicitedAppeal: { evidence: [], chances: 2 },
          sensitiveInformation: { evidence: [], chances: 3 },
        },
        validation: {
          timestamp: { evidence: [], chances: 4 },
          number: { evidence: [], chances: 5 },
          email: { evidence: [], chances: 6 },
          location: { evidence: [], chances: 7 },
        },
        summary:
          'This is a summary of the report. It provides an overview of the findings and conclusions drawn from the analysis.',
      }}/>
    </div>
  );
}

