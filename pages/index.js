import Head from 'next/head';

import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.scss';
import Date from '../components/date';
import RandomColor from '../components/randomColor';

import * as gtag from '../lib/gtag';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}

export default function Home({ allPostsData }) {
  const socials = [
    {
      id: 1,
      label: 'GitHub',
      link: 'https://github.com/IsabelRubim'
    }, 
    {
      id: 2,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/isabelrubim/'
    }, 
    {
      id: 3,
      label: 'Twitter',
      link: 'https://twitter.com/belrubim'
    }
  ];

  const goToSocial = ({ label, link }) => {
    gtag.event({
      action: 'go_to_social',
      category: 'social media',
      label,
      value: link
    });
  };

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.social}`} >
        {socials.map(({ id, label, link }) => (
          <RandomColor key={id} label={label} linkExternal={true} link={link} onClick={() => goToSocial({ label, link })}/>
        ))}  
      </section>    
           
      <section className={utilStyles.headingMd}>
        <p>
          Sou Engenheira de Software, tentando ser escritora e entusiasta da tecnologia.
          Tenho uma grande paixão por criar coisas que envolvam 
          as pessoas e possam impactá-las de uma forma positiva.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>📝 Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
          <li className={`${utilStyles.listItem} ${utilStyles.postTitle}`} key={id}>
              <RandomColor label={title} linkExternal={false} link={`/posts/${id}`} />
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
