import '../styles/globals.css'
import Layout from '../component/Layout'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Budget</title>
        <meta name="description" content="Budget" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>

  )
}

export default MyApp
