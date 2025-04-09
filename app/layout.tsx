import type { Metadata } from 'next'
import * as styles from './layout.css'

export const metadata: Metadata = {
  title: 'Tomoya | Portfolio',
  description:
    'Tomoyaのポートフォリオサイトです。',
  icons: {
    icon: '/favicon.png'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body className={styles.body}>
        <main> {children}</main>
      </body>
    </html>
  )
}