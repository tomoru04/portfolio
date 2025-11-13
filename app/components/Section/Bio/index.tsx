"use client";

import React, { FC, ReactNode } from 'react'
import * as styles from './bio.css'
import {useTranslations} from 'next-intl';

const TimelineEntry: FC<{ title: string; period: string; description: ReactNode }> = ({
  title,
  period,
  description
}) => (
  <div className={styles.timelineContainer}>
    <div className={styles.timeline}>
      <p className={styles.timelineContentTitle}>{title}</p>
      <p className={styles.timelineContentPeriod}>{period}</p>
      <p className={styles.timelineContentDescription}>{description}</p>
    </div>
  </div>
)

export const Bio: FC = () => {
  const t = useTranslations('Bio.timeline');
  const eventCount = 5;
  const timelineData = [...Array(eventCount)].map((_, i) => ({
      title: t(`event${i}.title`),
      period: t(`event${i}.period`),
      description: t.rich(`event${i}.description`, { br: () => <br/> })
  }));

  return (
    <div>
      {timelineData.map((entry, index) => (
        <TimelineEntry
          key={index}
          title={entry.title}
          period={entry.period}
          description={entry.description}
        />
      ))}
    </div>
  )
}