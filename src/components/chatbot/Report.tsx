'use client';

import React, { useState } from 'react';
import styles from './report.module.css';
import Carousel from '../base/Carousel'; // Adjust the path as needed
import createFullForum from '@/app/lib/requests/forum/createForumWithImage';
import { useRouter } from 'next/navigation';
import ForumCreatePopup from '../forum/ForumCreatePopup';
import ReportForumCreatePopup from '../forum/ReportForumCreatePopup';

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

const getCircleColor = (chances: number) => {
  if (chances <= 3) return styles.green;
  if (chances <= 7) return styles.yellow;
  return styles.red;
};

const EvidenceBox = ({
  title,
  section,
}: {
  title: string;
  section: EvidenceSection;
}) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <div className={styles.evidenceBox}>
        {section.evidence.length > 0 ? (
          section.evidence.map((item, index) => (
            <span key={index} className={styles.evidenceTag}>
              {item}
            </span>
          ))
        ) : (
          <span className={styles.noEvidence}>No evidence</span>
        )}
      </div>
      <div
        className={`${styles.chancesCircle} ${getCircleColor(
          section.chances
        )}`}>
        {section.chances}
      </div>
    </div>
  );
};

export default function Report({
  loading,
  params,
  toggleShowReport,
  chatId,
} : {
  loading: boolean;
  params: ReportParamsType;
  toggleShowReport: () => void;
  chatId: number;
}) {
  const { sign, validation } = params;
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  return (
    <div className={styles.container}>
      {showPopup && (
        <ReportForumCreatePopup
          callback={() => {
            router.push('/forum');
          }}
          setShowCreatePopup={setShowPopup}
          images={params.images ?? []}
          chatId={chatId}
        />
      )}
      <div className={styles.otherInfo_container}>
        <div className={styles.colorInfo_container}>
          <div className="text-2xl font-bold text-center">Chances:</div>
          <div className={`${styles.chancesCircle} ${getCircleColor(3)}`}>
            Low
          </div>
          <div className={`${styles.chancesCircle} ${getCircleColor(6)}`}>
            Mid
          </div>
          <div className={`${styles.chancesCircle} ${getCircleColor(10)}`}>
            High
          </div>
        </div>
        <div>
          <button
            className={styles.shareButton}
            onClick={() => setShowPopup(true)}>
            Share to Forum
          </button>
          <button className={styles.returnButton} onClick={toggleShowReport}>
            Back to Chat
          </button>
        </div>
      </div>
      <div className={styles.title}>
        <h1 className="text-3xl font-bold ">Report</h1>
      </div>
      <div className={styles.image_container}>
        {params.images ? <Carousel images={params.images} /> : <></>}
      </div>
      {loading ? <div className={styles.loader_container}><div className={styles.loader}/></div>:<>
      <div className={styles.section_container}>
        <h2 className={styles.sectionTitle}>Telltale Signs</h2>
        <EvidenceBox title="Emotional Appeal" section={sign.emotioanalAppeal} />
        <EvidenceBox title="Monetary Appeal" section={sign.monetaryAppeal} />
        <EvidenceBox title="Urgency Appeal" section={sign.urgencyAppeal} />
        <EvidenceBox
          title="Unsolicited Appeal"
          section={sign.unsolicitedAppeal}
        />
        <EvidenceBox
          title="Sensitive Information"
          section={sign.sensitiveInformation}
        />
      </div>

      <div className={styles.section_container}>
        <h2 className={styles.sectionTitle}>4 Validation</h2>
        <EvidenceBox title="Timestamp" section={validation.timestamp} />
        <EvidenceBox title="Number" section={validation.number} />
        <EvidenceBox title="Email" section={validation.email} />
        <EvidenceBox title="Location" section={validation.location} />
      </div>

      <div className={styles.summaryBox}>
        <h2 className={styles.sectionTitle}>Summary</h2>
        <p>{params.summary}</p>
      </div>
      </>}
    </div>
  );
}
