import '../styles/globals.css'
import Navbar from '../component/Navbar'
import Layout from '../component/Layout'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return ( 
    <Layout>
      <Head>
        <title>Budget</title>
        <link rel="shortcut icon" href="../static/plugin-icon-1(1).ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
    
  )
}

export default MyApp
