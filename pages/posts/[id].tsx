import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring';
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import type { ReactElement } from 'react'
import { getLayout } from '../../components/postPageLayout'
import utilStyles from '../../styles/utils.module.sass'
import { GetStaticProps, GetStaticPaths } from 'next'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { PostProps } from '../../components/postCard'

interface postPageProps {
  postData: PostProps
}

export default function Page({
  postData
 }: postPageProps) {
  // Render the page
  return (
    <div className={`${utilStyles.card}`}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <ReactMarkdown className={utilStyles.markdown} remarkPlugins={[remarkGfm]}>{postData.content}</ReactMarkdown>
      </article>
    </div>
  )
}

Page.getLayout = getLayout

export const getStaticPaths: GetStaticPaths = async () => {
  // Return a list of possible value for id
  const paths = getAllPostIds()
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
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData
    }
  }
}