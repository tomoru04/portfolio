'use client'
import { FC } from 'react'
import * as styles from './mobileHeader.css'
import { NavigationItems } from '../NavigationItems'
import React from 'react'
import Link from 'next/link'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
export const MobileHeader: FC = () => {
  const [open, setOpen] = React.useState(false)
  const toggleNavigationBarOpen = () => {
    setOpen((prevOpen) => !prevOpen)
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href='/' className={styles.name}>
          Tomoya Shoda
        </Link>
        <button onClick={toggleNavigationBarOpen} className={styles.button}>
          <HamburgerMenuIcon width={'30px'} height={'30px'} className={styles.icon} />
        </button>
      </div>
      {open && <NavigationItems toggleNavigationBarOpen={toggleNavigationBarOpen} />}
    </div>
  )
}