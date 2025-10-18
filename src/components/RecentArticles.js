// src/components/RecentArticles.js
import React from "react";

// Array of recent articles, can be easily updated
const articles = [
  {
    title: "How to get your dream property for the best price?",
    date: "July 30, 2014",
    comments: 2,
    tags: "Properties, Prices, best deals",
    link: "#",
    icon: "fa-file-text",
    description:
      "Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero condimen.",
  },
  {
    title: "7 tips to get the best mortgage.",
    date: "July 24, 2014",
    comments: 4,
    tags: "Tips, Mortgage",
    link: "#",
    icon: "fa-film",
    description:
      "Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero condimen.",
  },
  {
    title: "House, location or price: What's the most important factor?",
    date: "July 05, 2014",
    comments: 1,
    tags: "Location, Price, House",
    link: "#",
    icon: "fa-file-text",
    description:
      "Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero condimen.",
  },
];

// Component for a single article card
const ArticleCard = ({ article }) => (
  <div className="item col-md-4">
    <div className="image">
      {/* "Read More" button */}
      <a href={article.link}>
        <span className="btn btn-default">
          <i className={`fa ${article.icon}`}></i> Read More
        </span>
      </a>
      {/* Image removed */}
    </div>

    {/* Tag icon */}
    <div className="tag">
      <i className={`fa ${article.icon}`}></i>
    </div>

    {/* Article information */}
    <div className="info-blog">
      <ul className="top-info">
        <li>
          <i className="fa fa-calendar"></i> {article.date}
        </li>
        <li>
          <i className="fa fa-comments-o"></i> {article.comments}
        </li>
        <li>
          <i className="fa fa-tags"></i> {article.tags}
        </li>
      </ul>

      {/* Article title */}
      <h3>
        <a href={article.link}>{article.title}</a>
      </h3>

      {/* Short description */}
      <p>{article.description}</p>
    </div>
  </div>
);

// Main RecentArticles component
const RecentArticles = () => (
  <div>
    <h1 className="section-title">Recent Articles</h1>
    <div className="grid-style1">
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
    <div className="center">
      <a href="#" className="btn btn-default-color">
        View All News
      </a>
    </div>
  </div>
);

export default RecentArticles;
