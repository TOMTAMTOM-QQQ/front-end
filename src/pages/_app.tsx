import type { AppProps } from 'next/app';
import './globals.css';
import Head from 'next/head';
import { Layout } from '@/components/layout';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <Head>
        <title>Index</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
