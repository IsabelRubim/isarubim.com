import Head from "next/head";

import Layout from "../../components/layout";
import Date from "../../components/date";
import RandomColor from "../../components/randomColor";
import Header from "../../components/header";

import { getAllPublished } from "../../lib/notion";

import { siteTitle } from "../../utils";

import utilStyles from "../../styles/utils.module.scss";

export default function Blog({ posts }) {
  
  return (
    <Layout>
      <Header />
      <Head>
        <title>{siteTitle} - Blog</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>📝 Blog</h2>
        <ul className={utilStyles.list}>
          {posts.map(({ id, publishedAt, slug, title }) => (
            <li
              className={`${utilStyles.listItem} ${utilStyles.postTitle}`}
              key={id}
            >
              <RandomColor
                label={title}
                linkExternal={false}
                link={`/blog/posts/${slug}`}
              />
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
