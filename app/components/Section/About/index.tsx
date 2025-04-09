import { FC } from 'react'
import Image from 'next/image'
import profileImage from '@/public/profile.png'
import * as styles from './about.css'

export const About: FC = () => {
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
            2000年4月17日生まれ <br />
            東京都練馬区出身
            <br />
            <br />
            中央大学大学院理工学研究科情報工学専攻1年生です。
            <br />
            バックエンドとフロントエンドの開発経験がちょっとあります。
            <br />
            <br />
            大学時代はゲームのチーム開発に熱中していました。
            <br />
            研究では医用工学の分野に注力しています。
            <br />
            <br />
            趣味: カラオケ・Valorant・登山(初心者)
            <br />
            保有資格: 応用情報技術者試験
          </p>
        </div>
      </div>
    </div>
  )
}