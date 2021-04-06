import React, { useEffect, useState } from "react";
import News from "../News/News";

const TopHeadline = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url =
      "https://newsapi.org/v2/everything?q=tesla&from=2021-03-06&sortBy=publishedAt&apiKey=5d02341651aa48b69ed59a0c8b90d961";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }, []);

  return (
    <div>
      <h1>Top Headlines: {articles.length}</h1>
      {articles.map((article) => (
        <News article={article}></News>
      ))}
    </div>
  );
};

export default TopHeadline;
