import React from "react";
import FeaturedProperties from "../components/FeaturedProperties";
import PopularRegions from "../components/PopularRegions";
import RecentArticles from "../components/RecentArticles";
import Sidebar from "../components/Sidebar";
import DatePicker from "../components/DatePicker";

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
                <div className="form-group">
                  {/* Arrive On */}
                  <div className="form-control-small">
                    <DatePicker placeholder="Arrive on..." />
                  </div>

                  {/* Stay - I changed the design up because for some reason the functionality was not working with the static html code */}
                  <div className="form-control-small">
                    <select
                      id="search_status"
                      name="search_status"
                      className="form-control"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Stay...
                      </option>
                      {Array.from({ length: 15 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} Night{i + 1 > 1 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Bedroom - Similar to the stay section, functionality wasn't working so I had to find other alternatives */}
                  <div className="form-control-small">
                    <select
                      id="search_bedrooms"
                      name="search_bedrooms"
                      className="form-control"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Bedrooms
                      </option>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="5+">5+</option>
                    </select>
                  </div>

                  {/* Location*/}
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
