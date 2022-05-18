import Link from 'next/link'
import { useRouter } from 'next/router'
import { ActiveLink } from '../ActiveLink'

import { SignInButton } from '../SignInButton'
import styles from './styles.module.scss'

import logo from '../../../public/images/logo.svg'
import Image from 'next/image'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logo} alt="ig.news" />
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts" prefetch>
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  )
}