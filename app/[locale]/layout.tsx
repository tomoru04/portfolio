import type { Metadata } from 'next'
import * as styles from './layout.css'
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

export const metadata: Metadata = {
  title: 'Tomoya | Portfolio',
  description:
    'Tomoyaのポートフォリオサイトです。',
  icons: {
    icon: '/favicon.png'
  }
}

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  
  return (
    <html lang='ja'>
      <body className={styles.body}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}