import React from "react";
import FeaturedProperties from "../components/FeaturedProperties";
import PopularRegions from "../components/PopularRegions";
import RecentArticles from "../components/RecentArticles";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="home-page container">
      <div className="row">
        {/* Main Content Area */}
        <div className="main col-sm-8">
          <FeaturedProperties />
          <PopularRegions />
          <RecentArticles />
        </div>

        {/* Sidebar Area */}
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
