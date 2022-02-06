import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import SiteLayout from '../components/siteLayout'
import '../styles/global.sass'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  // eslint-disable-next-line react/no-children-prop
  const getLayout = Component.getLayout || (page => <SiteLayout children={page} />)

  return getLayout(<Component {...pageProps} />)
}