import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring';
import { getAllProjectIds, getProjectData } from '../../lib/projects'
import type { ReactElement } from 'react'
import { getLayout } from '../../components/postPageLayout'
import utilStyles from '../../styles/utils.module.sass'
import { GetStaticProps, GetStaticPaths } from 'next'
import ReactMarkdown from 'react-markdown'

interface projectProps {
  projectData: {
    title: string
    content: string
  }
}

export default function Page({
  projectData
 }: projectProps) {
  // Render the page
  return (
    <div className={`${utilStyles.card}`}>
      <Head>
        <title>{projectData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{projectData.title}</h1>
        <div className={utilStyles.lightText}>
        </div>
        <ReactMarkdown className={utilStyles.markdown}>{projectData.content}</ReactMarkdown>
      </article>
    </div>
  )
}

Page.getLayout = getLayout

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