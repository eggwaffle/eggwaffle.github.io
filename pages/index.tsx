import Date from '../components/date'
import Head from 'next/head'
import Link from 'next/link'
import type { ReactElement } from 'react'
import { getLayout as getSiteLayout } from '../components/siteLayout'
import utilStyles from '../styles/utils.module.sass'
import { getSortedPostsData } from '../lib/posts'
import { getSortedProjectsData } from '../lib/projects'
import { GetStaticProps } from 'next'
import Profile from '../components/profile'
import Skills from '../components/skills'
import Hobbies from '../components/hobbies'
import BlogCard from '../components/blogCard'
import ProjectCard from '../components/projectCard'
import skillDataset from '../json/skills.json'
import hobbyDataset from '../json/hobbies.json'


export default function Page( {
  allPostsData,
  allProjectsData,
  skillData,
  hobbyData
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
  }[],
  skillData: {
    skillsCategory: string
    skills: []
  }[],
  hobbyData: {
    hobby: string
    description: string
    src: string
    alt: string
  }[]
}) {
  return (
    <>
      <Profile />
      <section className={utilStyles.layout}>
        <section>
          {skillData.map(({skillsCategory, skills}) => (
            <Skills
              key={skillsCategory}
              skillsCategory={skillsCategory}
              skills={skills}
            />
          ))}
            <Hobbies
              hobbyData={hobbyData}
            />
        </section>
        <section>
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
        </section>
      </section>
    </>
  )
}

Page.getLayout = getSiteLayout

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  const allProjectsData = getSortedProjectsData()
  const skillData = skillDataset
  const hobbyData = hobbyDataset
  return {
    props: {
      allPostsData,
      allProjectsData,
      skillData,
      hobbyData
    }
  }
}