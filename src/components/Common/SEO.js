import { Helmet } from 'react-helmet-async';
import everflowImage from "img/everflow-logo.png";

function SEO(props) {
  const { children, ...customMeta } = props;
  const meta = {
    title: `Everflow | Decentralized Perpetual Exchange`,
    description: `Trade spot or perpetual BTC, ETH and other top cryptocurrencies with up to 20x leverage directly from your wallet on Blast L2.`,
    image: everflowImage,
    type: "exchange",
    ...customMeta,
  };
  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="EVERFLOW" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@everflow_official" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Helmet>
      {children}
    </>
  );
}

export default SEO;
