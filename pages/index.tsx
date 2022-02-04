import Date from '../components/date'
import Head from 'next/head'
import Link from 'next/link'
import type { ReactElement } from 'react'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.sass'
import { getSortedPostsData } from '../lib/posts'
import { getSortedProjectsData } from '../lib/projects'
import { GetStaticProps } from 'next'
import Profile from '../components/profile'
import Hobbies from '../components/hobbies'
import BlogCard from '../components/blogCard'
import ProjectCard from '../components/projectCard'

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
    tags: string[]
    coverImage: string
    excerpt: string
  }[]
}) {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h3 className={utilStyles.card}>Blog ({allPostsData.length})</h3>
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
        <h3 className={utilStyles.card}>Projects ({allProjectsData.length})</h3>
        <ul className={utilStyles.list}>
          {allProjectsData.map(({ id, title, tags, coverImage, excerpt }) => (
            <ProjectCard
            key={id}
            id={id}
            title={title}
            tags={tags}
            coverImage={coverImage}
            excerpt={excerpt}
          />
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
      <div className={utilStyles.layout}>
        <Hobbies />
        {page}
      </div>
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