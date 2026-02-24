import Layout from '@/app/components/layout/Layout'
import "../lib/styles/App.scss"
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}