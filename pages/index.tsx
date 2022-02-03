import Date from '../components/date'
import Head from 'next/head'
import Link from 'next/link'
import type { ReactElement } from 'react'
import ReactMarkdown from 'react-markdown'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.sass'
import { getSortedPostsData } from '../lib/posts'
import { getSortedProjectsData } from '../lib/projects'
import { GetStaticProps } from 'next'
import Profile from '../components/profile'

export default function Page( {
  allPostsData,
  allProjectsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
    excerpt: string
  }[],
  allProjectsData: {
    title: string
    id: string
    tags: [
      tag: string
    ]
  }[]
}) {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          (This website is built powered by{' '}
          <a href="https://nextjs.org/learn">Next.js</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, excerpt}) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <ReactMarkdown>{excerpt}</ReactMarkdown>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <ul className={utilStyles.list}>
          {allProjectsData.map(({ id, title, tags }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/projects/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
                {tags.map(tag => (
                  <small key={tag} className={utilStyles.lightText}>{tag}</small>
                ))}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout home>
      <Profile />
      {page}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  const allProjectsData = getSortedProjectsData()
  return {
    props: {
      allPostsData,
      allProjectsData
    }
  }
}