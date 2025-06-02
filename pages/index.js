import Head from 'next/head';

import Layout from '../components/layout';
import Header from '../components/header';
import Projects from '../components/projects';

import { siteTitle } from '../utils';

import LinkColor from '../components/link-color';
import utilStyles from '../styles/utils.module.scss';
import styles from '../components/header/style.module.scss';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Home</title>
      </Head>

      <Header />
      <Projects />

      <section className={`${utilStyles.headingMd} ${styles.contactMe}`}>
        You can get in touch with me via{' '}
        <LinkColor
          label='LinkedIn'
          link='https://www.linkedin.com/in/isabelrubim/'
          linkExternal={true}
        />
      </section>
    </Layout>
  );
}
