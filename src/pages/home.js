// src/pages/home.js
import React from "react";
import FeaturedProperties from "../components/FeaturedProperties";
import PopularRegions from "../components/PopularRegions";
import RecentArticles from "../components/RecentArticles";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="home-page">
      <FeaturedProperties />
      <PopularRegions />
      <RecentArticles />
      <Sidebar />
    </div>
  );
};

export default Home;
