import Head from "next/head";

import Layout from "../components/layout";
import Date from "../components/date";
import RandomColor from "../components/randomColor";

import * as gtag from "../lib/gtag";
import { gqlClient } from "../lib/graphql-client";
import { GET_ALL_POSTS } from "../graphql/queries";

import { SOCIALS, siteTitle } from "../utils";
import utilStyles from "../styles/utils.module.scss";

export default function Home({ posts }) {
  const goToSocial = ({ label, link }) => {
    gtag.event({
      action: "go_to_social",
      category: "social media",
      label,
      value: link,
    });
  };

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.social}`}>
        {SOCIALS.map(({ id, label, link }) => (
          <RandomColor
            key={id}
            label={label}
            linkExternal={true}
            link={link}
            onClick={() => goToSocial({ label, link })}
          />
        ))}
      </section>

      <section className={utilStyles.headingMd}>
        <p>
          Sou Engenheira de Software, tentando ser escritora e entusiasta da
          tecnologia. Tenho uma grande paixão por criar coisas que envolvam as
          pessoas e possam impactá-las de uma forma positiva.
        </p>
      </section>
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
                link={`/posts/${slug}`}
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
  const { data } = await gqlClient.query({ query: GET_ALL_POSTS });
  const posts = data.blogs;

  return {
    props: {
      posts,
    },
  };
};
