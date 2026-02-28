import Layout from '@/app/components/layout/Layout'
import "../lib/styles/App.scss"
import type { AppProps } from 'next/app'
import { SessionContext } from '@/app/components/context/SessionContext'
import { auth } from '@/auth'
import { useContext, useEffect, useState } from 'react'
import { type User } from '@/lib/types/User'
import { Session } from 'next-auth'
import { SessionProvider, useSession } from 'next-auth/react'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}