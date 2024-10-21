import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "./404";
import { withDataFetching } from "../constants/data";

const ArticlePage = ({ data: articlePageContents }) => {
  const { slug } = useParams();
  const article = articlePageContents[slug];

  if (!article) {
    return <NotFound />;
  }

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: article.html }} />
    </>
  );
};

const transformArticlePageContents = (data) => {
  const safeData = (code) => {
    const func = new Function(code + "return articlePageContents;");
    return func();
  };
  return safeData(data);
};

export default withDataFetching(
  "https://mithilayatriniwas.com/api/api_article.php",
  transformArticlePageContents
)(ArticlePage);
