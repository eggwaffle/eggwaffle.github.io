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
import BlogCard from '../components/blogCard'

export default function Page( {
  allPostsData,
  allProjectsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
    coverImage: string
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
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h3 className={utilStyles.card}>Blog</h3>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, title, date, coverImage, excerpt}) => (
            <BlogCard
              key={id}
              id={id}
              title={title}
              date={date}
              coverImage={coverImage}
              excerpt={excerpt}
            />
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