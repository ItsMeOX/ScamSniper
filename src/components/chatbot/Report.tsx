import React from "react";
import styles from "./report.module.css";

interface EvidenceSection {
  evidence: string[];
  chances: number;
}

interface ReportParamsType {
  images: string[];
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

const EvidenceBox = ({ title, section }: { title: string; section: EvidenceSection }) => {
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
      <div className={`${styles.chancesCircle} ${getCircleColor(section.chances)}`}>
        {section.chances}
      </div>
    </div>
  );
};

export default function Report({ params }: { params: ReportParamsType }) {
  const { sign, validation } = params;

  return (
    <div className={styles.container}>
        <div className={styles.otherInfo_container}>
            {/* make the low be green, medium be yellow, and high be red */}
            <div className={styles.colorInfo_container}>
                <div className="text-2xl font-bold text-center">Chances:</div>
                <div className={`${styles.chancesCircle} ${getCircleColor(3)}`}>Low</div>
                <div className={`${styles.chancesCircle} ${getCircleColor(6)}`}>Mid</div>
                <div className={`${styles.chancesCircle} ${getCircleColor(10)}`}>High</div>

            </div> 
            <button className={styles.shareButton}>Share to Forum</button>
        </div>
     <div className={styles.title}>
        <h1 className="text-2xl font-bold ">Report</h1>
      </div>
        <div className={styles.image_container}>
            {params.images.map((image, index) => (
            <img key={index} src={image} alt={`Evidence ${index}`} className={styles.image} />
            ))}
        </div>
      <div className={styles.section_container}>
        <h2 className={styles.sectionTitle}>Telltale Signs</h2>
        <EvidenceBox title="Emotional Appeal" section={sign.emotioanalAppeal} />
        <EvidenceBox title="Monetary Appeal" section={sign.monetaryAppeal} />
        <EvidenceBox title="Urgency Appeal" section={sign.urgencyAppeal} />
        <EvidenceBox title="Unsolicited Appeal" section={sign.unsolicitedAppeal} />
        <EvidenceBox title="Sensitive Information" section={sign.sensitiveInformation} />
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
    </div>
  );
}