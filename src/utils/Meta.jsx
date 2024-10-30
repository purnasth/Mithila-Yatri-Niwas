import React from "react";
import { Helmet } from "react-helmet-async";

const Meta = ({ title, meta_description, meta_keywords, favicon }) => {
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
      <meta name="twitter:image" content={favicon} />
    </Helmet>
  );
};

export default Meta;
