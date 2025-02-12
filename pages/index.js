import Head from "next/head";

import Layout from "../components/layout";

import Header from "../components/header";

import { siteTitle } from "../utils";

export default function Home() {
  return (
    <Layout>
      <Header />
      <Head>
        <title>{siteTitle} - Home</title>
      </Head>
    </Layout>
  );
}

