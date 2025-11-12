import { FC } from 'react'
import Image from 'next/image'
import profileImage from '@/public/profile.png'
import * as styles from './about.css'
import {useTranslations} from 'next-intl';

export const About: FC = () => {
  const t = useTranslations('About');

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={profileImage}
            alt='profile image'
            width={1280}
            height={852}
            className={styles.image}
          />
        </div>
        <div className={styles.introductionContainer}>
          <p>
            {t.rich('profile', {
              br: (chunks) => <br/>
            })}
          </p>
        </div>
      </div>
    </div>
  )
}