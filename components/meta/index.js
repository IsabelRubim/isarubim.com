import Head from "next/head";

const Meta = ({ title, description, canonical, image }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={title} />
    <meta
      name="og:description"
      property="og:description"
      content={description}
    />
    <meta property="og:site_name" content="Isabel Rubim" />
    <meta property="og:url" content={canonical} />
    <meta name="author" content="Isabel Rubim" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:site" content="@belrubim" />
    <meta name="twitter:creator" content="@belrubim" />
    <link rel="icon" type="image/png" href="/bee.png" />
    <link rel="apple-touch-icon" href="/bee.png" />
    {image ? (
      <>
        <meta property="og:image" content={image} />
        <meta property="og:image:secure_url" content={image} />
        <meta property="twitter:image" content={image} />
      </>
    ) : (
      <>
        <meta property="og:image" content="/images/profile.jpg" />
        <meta property="og:image:secure_url" content="/images/profile.jpg" />
        <meta name="twitter:image" content="/images/profile.jpg" />
      </>
    )}
    {canonical && <link rel="canonical" href={canonical} />}
  </Head>
);

export default Meta;
