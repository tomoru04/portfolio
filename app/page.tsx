import { Sidebar } from './components/Sidebar'
import { MobileHeader } from './components/MobileHeader'
import * as styles from './page.css'
import { Section } from './components/Section'
import { About } from './components/Section/About'
import { Skills } from './components/Section/Skills'
import { SECTION_LIST } from '@/constants'
import { Bio } from './components/Section/Bio'
import { Links } from './components/Section/Links'
import { Achievements } from './components/Section/Achievements'
import { getAchievementsData } from './hooks/getAchievementsData'

export default async function Home() {
  // console.log(styles.pink)

  const { achievementsData } = await getAchievementsData()
  return (
    <div className={styles.container}>
      <div className={styles.sidebarContainer}>
        <Sidebar />
      </div>
      <div className={styles.mobileHeaderContainer}>
        <MobileHeader />
      </div>
      <div className={styles.mainContainer}>
        <Section
          title={SECTION_LIST['ABOUT'].title}
          sectionLabel={SECTION_LIST['ABOUT'].sectionLabel}
        >
          <About />
        </Section>
        <Section title={SECTION_LIST['BIO'].title} sectionLabel={SECTION_LIST['BIO'].sectionLabel}>
          <Bio />
        </Section>
        <Section
          title={SECTION_LIST['SKILLS'].title}
          sectionLabel={SECTION_LIST['SKILLS'].sectionLabel}
        >
          <Skills />
        </Section>
        <Section
          title={SECTION_LIST['ACHIEVEMENTS'].title}
          sectionLabel={SECTION_LIST['ACHIEVEMENTS'].sectionLabel}
        >
          <Achievements achievementsData={achievementsData} />
        </Section>
        <Section
          title={SECTION_LIST['LINKS'].title}
          sectionLabel={SECTION_LIST['LINKS'].sectionLabel}
        >
          <div className={styles.workContainer}>
            <Links/>
          </div>
        </Section>
      </div>
    </div>
  )
}