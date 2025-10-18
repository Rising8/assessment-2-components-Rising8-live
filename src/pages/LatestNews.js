// src/components/LatestNews.js
import React from "react";

// Array of latest news items, follow same format to easily add a new item
const newsItems = [
  {
    title: "New Rental Regulations Announced",
    text: "The government has announced new rental regulations effective from next month. Find out how this impacts you.",
    author: "Admin",
    date: "2024-08-08",
    link: "#",
    icon: "fa-file-text",
  },
  {
    title: "Top 10 Rental Properties in Sydney",
    text: "Explore our list of the top 10 rental properties in Sydney for the month of August.",
    author: "Admin",
    date: "2024-08-07",
    link: "#",
    icon: "fa-file-text",
  },
  {
    title: "Customer Stories: Finding the Perfect Home",
    text: "Read our customer stories about their journey to finding the perfect home through One Ring Rentals.",
    author: "Admin",
    date: "2024-08-06",
    link: "#",
    icon: "fa-file-text",
  },
];

// Component for a single news card
const NewsCard = ({ news }) => (
  <div className="item col-md-4">
    <div className="image">
      <a href={news.link}>
        <span className="btn btn-default">
          <i className="fa fa-file-o"></i> Read More
        </span>
      </a>
      {/* <img src="http://placehold.it/766x515" alt={news.title} /> */} {/* remove the image */}
    </div>
    <div className="tag">
      <i className={`fa ${news.icon}`}></i>
    </div>
    <div className="info-blog">
      <span className="title">{news.title}</span>
      <span className="text">{news.text}</span>
      <span className="meta">
        <span className="author">
          <i className="fa fa-user"></i> {news.author}
        </span>
        <span className="date">
          <i className="fa fa-clock-o"></i> {news.date}
        </span>
      </span>
    </div>
  </div>
);

// Main Latest News component
const LatestNews = () => (
  <div className="content">
    <div className="container">
      <div className="row">
        <div className="main col-sm-12">
          <h1 className="section-title">Latest News</h1>
          <div className="grid-style1 clearfix">
            {newsItems.map((news, index) => (
              <NewsCard key={index} news={news} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LatestNews;
