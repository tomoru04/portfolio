'use client'

import { FC } from 'react'
import { useLocale } from 'next-intl'
import * as Tabs from '@radix-ui/react-tabs'
import * as styles from './achievements.css'
import { AchievementCard } from './AchievementCard'
import { AchievementsData } from '@/scripts/index'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import {useTranslations} from 'next-intl'
dayjs.extend(utc)
dayjs.extend(timezone)

type AchievementsProps = {
  achievementsData: Record<'notion', AchievementsData[]>
}

export const Achievements: FC<AchievementsProps> = ({ achievementsData }) => {
  const locale = useLocale()
  const t = useTranslations('Achievements')

  const sortedAchievements = [...achievementsData['notion']]
    .filter(i => i.language === locale)
    .sort((a, b) => b.eventDate > a.eventDate ?  1 : -1)

  return (
    <Tabs.Root defaultValue='book' className={styles.root}>
      <Tabs.List className={styles.tabList}>
        <Tabs.Trigger value='book' className={styles.tabTrigger}>
          {t("title")}
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value='book'>
        <ul className={styles.achievementCardLinkContainers}>
          {sortedAchievements.map((i, index) => (
            <li key={i.link + String(index)} className={styles.achievementCardContainer}>
              <AchievementCard
                title={i.title ?? 'no title'}
                publishedAt={i.eventDate.replace(/-/g, '/') ?? 'no date'}
                url={i.link ?? 'no link'}
                favicon={i.favicon ?? 'no favicon'}
                site={i.site}
                thumbnail={i.image}
              />
            </li>
          ))}
        </ul>
      </Tabs.Content>
    </Tabs.Root>
  )
}