'use client'
import { FC } from 'react'
import Link from 'next/link'
import * as styles from './sidebar.css'
import { NavigationItems } from '../NavigationItems'

export const Sidebar: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <Link href='/' className={styles.name}>
          Tomoya Shoda
        </Link>
      </div>
      <NavigationItems />
      <p className={styles.copyrights}>© 2025 Tomoya Shoda. All rights reserved.</p>
    </div>
  )
}