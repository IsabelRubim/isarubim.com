import Head from 'next/head';
import Link from 'next/link';

import Layout from '../../components/layout';
import Date from '../../components/date';
import BackButton from '../../components/back-button';

import { getAllPublished } from '../../lib/notion';

import { siteTitle } from '../../utils';

import utilStyles from '../../styles/utils.module.scss';

export default function Blog({ posts }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Blog</title>
      </Head>
      <BackButton path='/' label='Home' />
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>📝 Blog</h2>
        <p className={utilStyles.tag}>PT-BR</p>
        <ul className={utilStyles.list}>
          {posts.map(({ id, publishedAt, slug, title }) => (
            <li
              className={`${utilStyles.listItem} ${utilStyles.postTitle}`}
              key={id}
            >
              <Link href={`/blog/posts/${slug}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={publishedAt} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const data = await getAllPublished();

  return {
    props: {
      posts: data,
    },
    revalidate: 60,
  };
};
