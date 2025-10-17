import React from "react";
import FeaturedProperties from "../components/FeaturedProperties";
import PopularRegions from "../components/PopularRegions";
import RecentArticles from "../components/RecentArticles";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div id="content">
      {/* === BEGIN HOME SLIDER SECTION === */}
      <div
        id="carousel-example-generic"
        className="carousel slide"
        data-ride="carousel"
      >
        {/* Wrapper for slides */}
        <div className="carousel-inner" role="listbox">
          <div
            className="item active"
            id="slide1"
            style={{
              background:
                "url(http://placehold.it/1920x605) no-repeat left center",
              backgroundSize: "cover",
            }}
          >
            <div className="carousel-caption">
              <div className="caption sfr slider-title">Breathtaking views</div>
              <div className="caption sfl slider-subtitle">
                Relaxation in the Bay of Belfalas
              </div>
              <a href="#" className="caption sfb btn btn-default btn-lg">
                Learn More
              </a>
            </div>
          </div>

          <div
            className="item"
            id="slide2"
            style={{
              background:
                "url(http://placehold.it/1920x605) no-repeat left center",
              backgroundSize: "cover",
            }}
          >
            <div className="carousel-caption">
              <div className="caption sfr slider-title">The simple life</div>
              <div className="caption sfl slider-subtitle">
                Lush gardens in Mordor
              </div>
              <a href="#" className="caption sfb btn btn-default btn-lg">
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Blue Filter */}
        <div id="home-search-section"></div>

        {/* Controls */}
        <a
          className="left carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="prev"
        >
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="next"
        >
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      {/* === END HOME SLIDER SECTION === */}

      {/* === BEGIN HOME ADVANCED SEARCH === */}
      <div id="home-advanced-search" className="open">
        <div id="opensearch"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <form>
                {/* Arrive On */}
                <div className="form-group">
                  <div className="form-control-small">
                    <div
                      className="input-group date chzn-container"
                      data-datepicker
                    >
                      <input
                        placeholder="Arrive on..."
                        type="text"
                        className="form-control"
                        data-date-format="DD/MM/YYYY"
                      />
                      <span className="input-group-addon">
                        <span className="glyphicon glyphicon-calendar"></span>
                      </span>
                    </div>
                  </div>

                  {/* Stay */}
                  <div className="form-control-small">
                    <select
                      id="search_status"
                      name="search_status"
                      data-placeholder="Stay..."
                    >
                      <option value=""></option>
                      {Array.from({ length: 14 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} Night{i + 1 > 1 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Bedroom */}
                  <div className="form-control-small">
                    <select
                      id="search_bedrooms"
                      name="search_bedrooms"
                      data-placeholder="Bedrooms"
                    >
                      <option value=""></option>
                      {[0, 1, 2, 3, 4, 5].map((n) => (
                        <option key={n} value={n}>
                          {n === 5 ? "5+" : n}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-control-large">
                    <input
                      type="text"
                      className="form-control"
                      name="location"
                      placeholder="City, State, Country, etc..."
                    />
                  </div>

                  <button type="submit" className="btn btn-fullcolor">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* === END HOME ADVANCED SEARCH === */}

      {/* === MAIN CONTENT AREA === */}
      <div className="container">
        <div className="row">
          <div className="main col-sm-8">
            <FeaturedProperties />
            <PopularRegions />
            <RecentArticles />
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;
