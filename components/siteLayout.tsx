import type { ReactElement } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from './siteLayout.module.sass'
import utilStyles from '../styles/utils.module.sass'
import Link from 'next/link'
import Footer from './footer'

export const siteTitle = 'Egg Waffle'

export const getLayout = (page: ReactElement) => (
  <SiteLayout>
    {page}
  </SiteLayout>
)

export default function SiteLayout({
  children
 }: {
    children: React.ReactNode
 }) {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Egg Waffle is a self-motivated developer, who is willing to learn and create outstanding web applications."
        />
        <link rel="apple-touch-icon" sizes="180x180" href="https://eggwaffle.github.io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://eggwaffle.github.io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://eggwaffle.github.io/favicon-16x16.png" />
        <link rel="manifest" href="https://eggwaffle.github.io/site.webmanifest" />
        <link rel="mask-icon" href="https://eggwaffle.github.io/safari-pinned-tab.svg" color="#ffdd55" />
        <meta name="msapplication-TileColor" content="#fff6c4" />
        <meta name="theme-color" content="#fff6c4" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fremojansen%2Flogo.ts%40master%2Fts.svg&images=https%3A%2F%2Ftailwindcss.com%2F_next%2Fstatic%2Fmedia%2Ftailwindcss-mark.79614a5f61617ba49a0891494521226b.svg&images=https%3A%2F%2Feggwaffle.github.io%2Fimages%2Fprofile.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={styles.banner}>
        <div className={styles.topBanner}>
          <h2 className={styles.bannerText}>
            Russia has invaded Ukraine
          </h2>
        </div>
        <div className={styles.bottomBanner}>
          <a
            href="https://war.ukraine.ua"
            target="_blank"
            rel="noreferrer"
            className={styles.bannerButton}
          >
            Support Ukraine
          </a>
        </div>
      </div>
      <main className={styles.container}>
        {children}
      </main>
      <Footer />
    </div>
  )
}