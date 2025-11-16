'use client'

import React, { FC } from 'react'
import * as styles from './achievementCard.css'
import Link from 'next/link'
import Image from 'next/image'

type AchievementCardProps = {
  title: string
  publishedAt: string
  url: string
  favicon: string
  site: string
  thumbnail?: string
}

export const AchievementCard: FC<AchievementCardProps> = ({
  title,
  publishedAt,
  url,
  favicon,
  site,
  thumbnail
}) => {
  return (
    <Link className={styles.container} href={url} target='_blank' rel='noopener noreferrer'>
      <div className={styles.achievementContent}>
        <p className={styles.title}>{title}</p>
        <p className={styles.publishedAt}>{publishedAt}</p>
        <div className={styles.siteContainer}>
          <Image src={favicon} alt={site} width={100} height={100} className={styles.image} priority />
          <p className={styles.site}>{site}</p>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image 
          src={thumbnail || favicon} 
          alt={site} 
          width={300} 
          height={300} 
          className={styles.thumbnail}
          priority
        />
      </div>
    </Link>
  )
}