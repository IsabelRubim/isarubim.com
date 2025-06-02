import Head from 'next/head';

import Layout from '../components/layout';

import Header from '../components/header';

import { siteTitle } from '../utils';
import Projects from '../components/projects';

export default function Home() {
  return (
    <Layout>
      <Header />
      <Projects />
      <Head>
        <title>{siteTitle} - Home</title>
      </Head>
    </Layout>
  );
}
