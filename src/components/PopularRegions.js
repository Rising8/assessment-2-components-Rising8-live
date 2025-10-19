import React from "react";

// Displays array of popular regions, can be easily updated
const regions = [
  { name: "Rhovanion", img: "/images/patterns/pattern1.jpg", link: "#" },
  { name: "Eriador", img: "/images/patterns/pattern2.jpg", link: "#" },
  { name: "Bay of Belfalas", img: "/images/patterns/pattern3.jpg", link: "#" },
  { name: "Mordor", img: "/images/patterns/pattern4.jpg", link: "#" },
  { name: "The Southwest", img: "/images/patterns/pattern5.jpg", link: "#" },
  { name: "Arnor", img: "/images/patterns/pattern6.jpg", link: "#" },
];

// Component for a single region card
const RegionCard = ({ region }) => (
  <div className="col-sm-4 text-center" style={{ marginBottom: "30px" }}>
    <a href={region.link}>
      <img
        src={region.img}
        alt={region.name}
        style={{
          width: "100%",
          maxWidth: "194px",
          height: "194px",
          objectFit: "cover",
        }}
      />
      <h3>{region.name}</h3>
    </a>
  </div>
);

// Main component for popular regions
// Maps over the region array and renders a region card for each region
const PopularRegions = () => (
  <div className="row">
    <div className="col-sm-12">
      <h1 className="section-title">Popular Regions</h1>
      <div id="regions">
        {regions.map((region, index) => (
          <RegionCard key={index} region={region} />
        ))}
      </div>
    </div>
  </div>
);

export default PopularRegions;