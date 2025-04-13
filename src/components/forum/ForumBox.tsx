'use client';

import Label from '../base/Label';
import styles from './forumbox.module.css';
import UserLabel from './UserLabel';
import Comment from './Comment';
import { ForumWithRelations } from '@/app/lib/requests/forum/fetchForum';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Carousel from '../base/Carousel';
import Report from '../chatbot/Report';
import PopupWrapper from '../base/PopupWrapper';

export default function Forum({
  forum,
  setRefetch,
}: {
  forum: ForumWithRelations[number];
  setRefetch: Dispatch<SetStateAction<boolean>>;
}) {
  const reportData = forum.ChatSession?.report_data;
  const jsonReportData = reportData ? JSON.parse(reportData) : null;
  const [reportDataRaw, setReportDataRaw] = useState('');
  const [reportDataJson, setReportDataJson] = useState(null);

  useEffect(() => {
    if (reportDataRaw) {
      setReportDataJson(JSON.parse(reportDataRaw));
    }
  }, [reportDataRaw]);

  return (
    <div className={styles.container}>
      {reportDataJson && (
        <PopupWrapper>
          <div className={styles.report_popup_container}>
            <button
              className={styles.report_popup_close_button}
              onClick={() => {
                setReportDataRaw('');
                setReportDataJson(null);
              }}></button>
            <div className={styles.report_popup_box}>
              <Report
                params={jsonReportData}
                chatId={-1}
                toggleShowReport={() => {}}
              />
            </div>
          </div>
        </PopupWrapper>
      )}
      <div className={styles.header_box}>
        <h2 className={styles.title}>{forum.title}</h2>
        {forum.ForumTag.map((tag) => (
          <Label tag={tag} key={`label-${tag.tag_id}`} />
        ))}
      </div>
      <div className={styles.user_box}>
        <UserLabel user={forum.User} />
      </div>
      {forum.ForumImage.length > 0 && (
        <div className={styles.image_box}>
          <div className={styles.image_holder}>
            <Carousel images={forum.ForumImage.map((forum) => forum.url)} />
          </div>
        </div>
      )}

      {forum.ChatSession && (
        <button
          className={styles.show_report_button}
          onClick={() => setReportDataRaw(forum.ChatSession!.report_data!)}>
          Show report
        </button>
      )}
      <div className={styles.description_box}>
        <p>{forum.description}</p>
      </div>
      <hr className={styles.separation_line} />
      <div className={styles.comment_section_box}>
        <label className={styles.comment_section_title}>Comment Section</label>
        <Comment
          setRefetch={setRefetch}
          forumId={forum.id}
          comments={forum.ForumComment}
        />
      </div>
    </div>
  );
}
