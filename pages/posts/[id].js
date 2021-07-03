import Head from 'next/head';

import utilStyles from '../../styles/utils.module.scss';
import Layout from '../../components/layout';
import Date from '../../components/date';
import Meta from '../../components/meta';

import { getAllPostsIds, getPostData } from '../../lib/posts';

export async function getStaticPaths() {
  const paths = getAllPostsIds();
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData
    }
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Meta 
        title={postData.title}
        description='teste'
        canonical={`https://isarubim.com/posts/${postData.id}`}
      />
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>   
    </Layout>
  )
}