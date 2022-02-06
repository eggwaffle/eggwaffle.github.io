import Date from '../components/date'
import Head from 'next/head'
import Link from 'next/link'
import type { ReactElement } from 'react'
import { getLayout as getSiteLayout, siteTitle } from '../components/siteLayout'
import utilStyles from '../styles/utils.module.sass'
import { getSortedPostsData } from '../lib/posts'
import { getSortedProjectsData } from '../lib/projects'
import { GetStaticProps } from 'next'
import Profile from '../components/profile'
import Skills from '../components/skills'
import Hobbies, { hobbyCardProps } from '../components/hobbies'
import PostCard, { PostProps } from '../components/postCard'
import ProjectCard, { ProjectProps } from '../components/projectCard'
import skillDataset from '../json/skills.json'
import hobbyDataset from '../json/hobbies.json'


export default function Page( {
  allPostsData,
  allProjectsData,
  skillData,
  hobbyData
}: {
  allPostsData: PostProps[],
  allProjectsData: ProjectProps[],
  skillData: {
    skillsCategory: string
    skills: []
  }[],
  hobbyData: hobbyCardProps[]
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
              hobbyDataset={hobbyData}
            />
        </section>
        <section>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h3 className={utilStyles.card}>Blog ({allPostsData.length})</h3>
            <ul className={utilStyles.list}>
              {allPostsData.map(({ id, title, date, coverImage, excerpt, content}) => (
                <PostCard
                  key={id}
                  id={id}
                  title={title}
                  date={date}
                  coverImage={coverImage}
                  excerpt={excerpt}
                  content={content}
                />
              ))}
            </ul>
          </section>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h3 className={utilStyles.card}>Projects ({allProjectsData.length})</h3>
            <ul className={utilStyles.list}>
              {allProjectsData.map(({ id, title, tags, coverImage, excerpt, demo, code, feedback, content }) => (
                <ProjectCard
                key={id}
                id={id}
                title={title}
                tags={tags}
                coverImage={coverImage}
                excerpt={excerpt}
                demo={demo}
                code={code}
                feedback={feedback}
                content={content}
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