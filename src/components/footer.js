// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      {/* Footer Top */}
      <div id="footer-top" className="container">
        <div className="row">
          {/* About / Logo */}
          <div className="block col-sm-3">
            <a href="#">
              <img src="images/logo.png" alt="One Ring Rentals" />
            </a>
            <br /><br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              commodo eros nibh, et dictum elit tincidunt eget. Pellentesque
              volutpat quam dignissim, convallis elit id, efficitur sem.
              Vivamus ac scelerisque sem. Aliquam sed enim rutrum nibh gravida
              pellentesque nec at metus.
            </p>
          </div>

          {/* Helpful Links */}
          <div className="block col-sm-3">
            <h3>Helpful Links</h3>
            <ul className="footer-links">
              <li><a href="#">All rentals</a></li>
              <li><a href="#">List your rental</a></li>
              <li><a href="#">Read our FAQs</a></li>
            </ul>
          </div>

          {/* Popular Regions
          <div className="block col-sm-6">
            <h3>Popular regions</h3>
            <div className="row">
              <div className="col-sm-6">
                <ul className="footer-listings">
                  {[
                    { name: "Rhovanion", img: "http://placehold.it/760x670" },
                    { name: "Eriador", img: "http://placehold.it/760x670" },
                    { name: "Bay of Belfalas", img: "http://placehold.it/760x670" },
                  ].map((region, i) => (
                    <li key={i}>
                      <div className="image">
                        <a href="properties-detail.html">
                          <img src={region.img} alt={region.name} />
                        </a>
                      </div>
                      <p>
                        <a href="properties-detail.html">{region.name}</a>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="footer-listings">
                  {[
                    { name: "Mordor", img: "http://placehold.it/760x670" },
                    { name: "Arnor", img: "http://placehold.it/760x670" },
                    { name: "Forlindon", img: "http://placehold.it/760x670" },
                  ].map((region, i) => (
                    <li key={i}>
                      <div className="image">
                        <a href="properties-detail.html">
                          <img src={region.img} alt={region.name} />
                        </a>
                      </div>
                      <p>
                        <a href="properties-detail.html">{region.name}</a>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}

          {/* Popular Regions */}
          <div className="block col-sm-6">
            <h3>Popular regions</h3>
            <div className="row">
              <div className="col-sm-6">
                <ul className="footer-listings">
                  {["Rhovanion", "Eriador", "Bay of Belfalas"].map((region, i) => (
                    <li key={i}>
                      {/* Images removed because we don't have images and if we keep the images the design looks different */}
                      <p>
                        <a href="properties-detail.html">{region}</a>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="footer-listings">
                  {["Mordor", "Arnor", "Forlindon"].map((region, i) => (
                    <li key={i}>
                      {/* Images removed because we don't have images */}
                      <p>
                        <a href="properties-detail.html">{region}</a>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div id="copyright">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              &copy; 2014 One Ring Rentals

              {/* Social Networks */}
              <ul className="social-networks">
                {["facebook", "twitter", "google", "pinterest", "youtube", "rss"].map((network, i) => (
                  <li key={i}>
                    <a href="#"><i className={`fa fa-${network}`}></i></a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
