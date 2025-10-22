// src/components/FeaturedProperties.js
import React from "react";

// Same regions array as the popular regions, split into two for two columns because the footer needs it like this
// Separated from the main PopularRegions component
const regionsLeft = [
  { name: "Rhovanion", img: "/images/patterns/pattern1.jpg", link: "#" },
  { name: "Eriador", img: "/images/patterns/pattern2.jpg", link: "#" },
  { name: "Bay of Belfalas", img: "/images/patterns/pattern3.jpg", link: "#" },
];

const regionsRight = [
  { name: "Mordor", img: "/images/patterns/pattern4.jpg", link: "#" },
  { name: "Arnor", img: "/images/patterns/pattern5.jpg", link: "#" },
  { name: "Forlindon", img: "/images/patterns/pattern6.jpg", link: "#" },
];

const FooterPopularRegions = () => (
  <div className="row">
    {/* Left column */}
    <div className="col-sm-6">
      <ul className="footer-listings">
        {regionsLeft.map((region, i) => (
          <li key={i}>
            <div className="image">
              <a href={region.link}>
                <img src={region.img} alt={region.name} />
              </a>
            </div>
            <p><a href={region.link}>{region.name}</a></p>
          </li>
        ))}
      </ul>
    </div>
    
    {/* Right column */}
    <div className="col-sm-6">
      <ul className="footer-listings">
        {regionsRight.map((region, i) => (
          <li key={i}>
            <div className="image">
              <a href={region.link}>
                <img src={region.img} alt={region.name} />
              </a>
            </div>
            <p><a href={region.link}>{region.name}</a></p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default FooterPopularRegions;
