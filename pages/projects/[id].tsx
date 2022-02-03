import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring';
import { getAllProjectIds, getProjectData } from '../../lib/projects'
import type { ReactElement } from 'react'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.sass'
import { GetStaticProps, GetStaticPaths } from 'next'
import { HtmlCompiler } from '../../lib/helperFunctions'

interface projectProps {
  projectData: {
    title: string
    contentHtml: string
  }
}

export default function Page({
  projectData
 }: projectProps) {
  // Render the page
  return (
    <div>
      <Head>
        <title>{projectData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{projectData.title}</h1>
        <div className={utilStyles.lightText}>
        </div>
        <div>
          {HtmlCompiler(projectData.contentHtml)}
        </div>
      </article>
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

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