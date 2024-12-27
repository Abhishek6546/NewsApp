import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsComponent from "../components/NewsComponent";

function News() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getNews = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/articles");
        setNews(res.data); // Set news articles
      } catch (err) {
        setError("Failed to fetch news. Please try again later.");
        console.error("Error fetching news:", err);
      }
    };
    getNews();
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto p-4 mt-20">
      <h1 className="text-2xl font-bold mb-4">Latest News</h1>

      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {news.map((article) => (
          <NewsComponent key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
}

export default News;
