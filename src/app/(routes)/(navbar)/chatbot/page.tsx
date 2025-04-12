'use client';
import UserInputContainer from '@/components/chatbot/UserInputContainer';
import ChatMessageBox from '@/components/chatbot/ChatMessageBox';
import Report from '@/components/chatbot/Report';
import styles from './chatbot.module.css';
import { useState } from 'react';
import HistoryTab from '@/components/chatbot/HIstoryTab';

type MessageType = {
  role: string;
  content: string;
  image?: string;
};

interface EvidenceSection {
  evidence: string[];
  chances: number;
}

interface ReportParamsType {
  images?: string[];
  sign: {
    emotioanalAppeal: EvidenceSection;
    monetaryAppeal: EvidenceSection;
    urgencyAppeal: EvidenceSection;
    unsolicitedAppeal: EvidenceSection;
    sensitiveInformation: EvidenceSection;
  };
  validation: {
    timestamp: EvidenceSection;
    number: EvidenceSection;
    email: EvidenceSection;
    location: EvidenceSection;
  };
  summary: string;
}
export default function ChatBot() {
  const [historyChats, setHistoryChats] = useState<string[]>([
    'New Chat',
    'Chat 1',
    'Chat 2',
  ]);
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [showReport, setShowReport] = useState(false);
  const [reportParams, setReportParams] = useState<ReportParamsType>({
    sign: {
      emotioanalAppeal: { evidence: [], chances: 0 },
      monetaryAppeal: { evidence: [], chances: 0 },
      urgencyAppeal: { evidence: [], chances: 0 },
      unsolicitedAppeal: { evidence: [], chances: 0 },
      sensitiveInformation: { evidence: [], chances: 0 },
    },
    validation: {
      timestamp: { evidence: [], chances: 0 },
      number: { evidence: [], chances: 0 },
      email: { evidence: [], chances: 0 },
      location: { evidence: [], chances: 0 },
    },
    summary: '',
  });

  const sendText = async (userInput: string) => {
    setMessages([...messages, { role: 'user', content: userInput }]);
    const res = await fetch('/api/openai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [
          ...messages,
          {
            role: 'user',
            content:
              ' You are an AI scam detector called VerifyAI, base on all the chat messages, help me answer this:' +
              userInput,
          },
        ],
        model: 'gpt-4o',
        temperature: 0.7,
      }),
    });

    const data = await res.json();
    setMessages([
      ...messages,
      { role: 'user', content: userInput },
      { role: 'assistant', content: data.response.content },
    ]);
    return data.response.content;
  };

  const handleToggleShowReport = async () => {
    if (reportParams.summary === '') {
      const res = await fetch('/api/openai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            ...messages,
            {
              role: 'user',
              content:
                'You are a scam ai detector, generate a scam detection report base on all the chat messages above and return a string json object in this format interface ReportParamsType {sign: {emotioanalAppeal: {evidence: string[];    chances: number;  };      monetaryAppeal: {evidence: string[];    chances: number;  };      urgencyAppeal: {evidence: string[];    chances: number;  };      unsolicitedAppeal: {evidence: string[];    chances: number;  };      sensitiveInformation: {evidence: string[];    chances: number;  };    };    validation: {timestamp: {evidence: string[];    chances: number;  };      number: {evidence: string[];chances: number;};email: {evidence: string[];chances: number;};location: {evidence: string[];chances: number;};};summary: string;}, the chances is number between 0 and 10 inclusive, try to fill as much evidence as possible, and leave the chances as 0 and evidence as empty array if no evidence found, ONLY RETURN THE STRING OF THIS JSON OBJECT',
            },
          ],
          model: 'gpt-4o',
          temperature: 0.7,
        }),
      });

      const data = await res.json();
      const content = data.response.content
        .replace(/```json\n?/, '')
        .replace(/```/, '');
      console.log(content);
      const jsonContent = JSON.parse(content);
      setReportParams({ ...reportParams, ...jsonContent });
    }
    setShowReport(!showReport);
  };

  return (
    <div className={styles.container}>
      {showReport ? (
        <Report
          params={reportParams}
          toggleShowReport={handleToggleShowReport}
        />
      ) : (
        <>
          <HistoryTab historyChats={historyChats} />
          <div className={styles.chat_container}>
            <ChatMessageBox messages={messages} />
            <UserInputContainer
              onSendMessage={sendText}
              toggleShowReport={handleToggleShowReport}
            />
          </div>
        </>
      )}
    </div>
  );
}
