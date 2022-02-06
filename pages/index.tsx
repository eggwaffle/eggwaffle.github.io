import { getLayout as getSiteLayout} from '../components/siteLayout'
import utilStyles from '../styles/utils.module.sass'
import { getSortedPostsData } from '../lib/posts'
import { getSortedProjectsData } from '../lib/projects'
import { GetStaticProps } from 'next'
import Profile from '../components/profile'
import Skills, { skillProps } from '../components/skills'
import Hobbies from '../components/hobbies'
import {hobbyProps} from '../components/hobby'
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
  skillData: skillProps[],
  hobbyData: hobbyProps[]
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
          <h3 className={`${utilStyles.card} ${utilStyles.cardHeading}`}>Blog ({allPostsData.length})</h3>
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
          <h3 className={`${utilStyles.card} ${utilStyles.cardHeading}`}>Projects ({allProjectsData.length})</h3>
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