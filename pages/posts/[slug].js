import Head from "next/head";

import { getSinglePost, getAllPublished } from "../../lib/notion";

import Layout from "../../components/layout";
import Date from "../../components/date";
import Markdown from "../../components/markdown";
import Comments from "../../components/comments";
import Header from "../../components/header";

import utilStyles from "../../styles/utils.module.scss";

export default function Post({ post }) {
  const { title, description, content, publishedAt, slug, image } = post;

  return (
    <Layout
      image={image}
      description={description}
      canonical={`https://isarubim.com/posts/${slug}`}
    >
      <Header />
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.title}>{title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={publishedAt} />
        </div>
        <Markdown content={content} />
      </article>
      <Comments />
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params?.slug);

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const posts = await getAllPublished();
  const paths = posts.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: "blocking",
  };
};
