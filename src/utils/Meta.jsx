import React from "react";
import { Helmet } from "react-helmet-async";

const Meta = ({
  title,
  meta_description,
  meta_keywords,
  favicon,
  fb_upload,
  twitter_upload,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={meta_description} />
      <meta name="keywords" content={meta_keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={meta_description} />
      <meta property="og:image" content={favicon} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={meta_description} />
      <meta name="twitter:image" content={twitter_upload} />
      <link rel="icon" href={favicon} />
      <link rel="apple-touch-icon" href={favicon} />
      <link rel="image_src" href={favicon} />
      <meta property="og:image" content={fb_upload} />
      <meta property="og:image:secure_url" content={fb_upload} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
    </Helmet>
  );
};

export default Meta;
