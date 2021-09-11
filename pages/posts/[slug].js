import Head from "next/head";

import { gqlClient } from "../../lib/graphql-client";
import { GET_ALL_POSTS, GET_POST } from "../../graphql/queries";

import utilStyles from "../../styles/utils.module.scss";
import Layout from "../../components/layout";
import Date from "../../components/date";
import Meta from "../../components/meta";
import Markdown from "../../components/markdown";
import BuyMeACoffee from "../../components/buyMeACoffee";

export default function Post({ post }) {
  const { title, content, publishedAt, id } = post;

  return (
    <Layout>
      <Meta
        title={title}
        description="teste"
        canonical={`https://isarubim.com/posts/${id}`}
      />
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.title}>{title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={publishedAt} />
        </div>
        <Markdown content={content} />
        <BuyMeACoffee />
      </article>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const { data } = await gqlClient.query({
    query: GET_POST,
    variables: {
      where: {
        slug: params?.slug || "",
      },
    },
  });

  return {
    props: { post: data.blogs[0] },
  };
};

export const getStaticPaths = async () => {
  const { data } = await gqlClient.query({ query: GET_ALL_POSTS });
  const posts = data.blogs;

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
};
