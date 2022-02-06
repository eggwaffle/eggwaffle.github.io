import Head from 'next/head'
import { getAllProjectIds, getProjectData } from '../../lib/projects'
import { getLayout } from '../../components/postPageLayout'
import utilStyles from '../../styles/utils.module.sass'
import { GetStaticProps, GetStaticPaths } from 'next'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { ProjectProps } from '../../components/projectCard'

interface projectPageProps {
  projectData: ProjectProps
}

const ProjectPage = ({
  projectData
}: projectPageProps
 ) => {
  // Render the page
  return (
    <div className={`${utilStyles.card}`}>
      <Head>
        <title>{projectData.title}</title>
      </Head>
      <article>
        <h1>{projectData.title}</h1>
        <div className={utilStyles.infoBar}>
          <div className={utilStyles.tagList}>
            {projectData.tags.map(tag => (
              <small key={tag} className={utilStyles.lightText}>#{tag}</small>
            ))}
          </div>
          <div className={utilStyles.projectLinkDrawer}>
            <a
              className={utilStyles.demoButton}
              href={projectData.demo}
            >
              Demo
            </a>
            <a
              className={utilStyles.codeButton}
              href={projectData.code}
            >
              Code
            </a>
            <a
              className={utilStyles.commentButton}
              href={projectData.feedback}
            >
              Find me
            </a>
          </div>
        </div>
        <ReactMarkdown
          className={utilStyles.markdown}
          remarkPlugins={[remarkGfm]}
        >{projectData.content}</ReactMarkdown>
      </article>
    </div>
  )
}

export default ProjectPage
ProjectPage.getLayout = getLayout

export const getStaticPaths: GetStaticPaths = async () => {
  // Return a list of possible value for id
  const paths = getAllProjectIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  // Fetch necessary data for the blog post using params.id
  // `params.id` from getStaticProps({ params }) know the key is named `id`
  // based on the value from the file name
  const params = context.params!   // ! is a non-null assertion
  const projectData = await getProjectData(params.id as string)
  return {
    props: {
      projectData
    }
  }
}