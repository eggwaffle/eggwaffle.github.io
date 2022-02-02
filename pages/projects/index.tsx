import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'

export default function Me() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Layout>
      <p>Sample Project</p>
      </Layout>
    </>
  )
}