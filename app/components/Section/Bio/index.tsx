import React, { FC } from 'react'
import * as styles from './bio.css'

const timelineData = [
  {
    title: '一般企業の業務効率化',
    date: '2024.12～2025.3',
    description: `・営業部の細かいタスクを自動化
・技術スタック: Python / GAS`
  },
  {
    title: '研究・Web制作',
    date: '2023.12〜',
    description: `・医用工学分野における研究
・LP制作の業務委託
・技術スタック: C / FFmpeg / Next.js / TypeScript`
  },
  {
    title: 'スタートアップ企業にてFE/BE開発',
    date: '2023.8〜12',
    description: `・サーバレスアーキテクチャの営業DXプロダクトを開発
・フロントエンド、バックエンドを担当
・技術スタック: Next.js / TypeScript / Python / MySQL / Docker / AWS`
  },
  {
    title: 'ゲーム開発',
    date: '2022.4〜2023.8',
    description: `・数か月間に渡るランダムチームでのゲーム開発を複数回経験
・賞金100万円の大学対抗ゲーム大会にてグランプリを受賞
・技術スタック: Unity / C# / blender / Azure Kinect`
  },
  {
    title: '競技プログラミング',
    date: '2021.6〜',
    description: `・AtCoder水色帯
・国際大学対抗プログラミングコンテスト(ICPC)国内予選通過
・技術スタック: C++`
  },
]

const TimelineEntry: FC<{ title: string; date: string; description: string }> = ({
  title,
  date,
  description
}) => (
  <div className={styles.timelineContainer}>
    <div className={styles.timeline}>
      <p className={styles.timelineContentTitle}>{title}</p>
      <p className={styles.timelineContentDate}>{date}</p>
      <p className={styles.timelineContentDescription}>{description}</p>
    </div>
  </div>
)

export const Bio: FC = () => {
  return (
    <div>
      {timelineData.map((entry, index) => (
        <TimelineEntry
          key={index}
          title={entry.title}
          date={entry.date}
          description={entry.description}
        />
      ))}
    </div>
  )
}