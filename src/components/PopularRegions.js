import React from "react";

// Displays array of popular regions, can be easily updated
const regions = [
  { name: "Rhovanion", img: "http://placehold.it/194x194", link: "#" },
  { name: "Eriador", img: "http://placehold.it/194x194", link: "#" },
  { name: "Bay of Belfalas", img: "http://placehold.it/194x194", link: "#" },
  { name: "Mordor", img: "http://placehold.it/194x194", link: "#" },
  { name: "The Southwest", img: "http://placehold.it/194x194", link: "#" },
  { name: "Arnor", img: "http://placehold.it/194x194", link: "#" },
];

// Component for a single region card
const RegionCard = ({ region }) => (
  <div className="item">
    <a href={region.link}>
      {/* Region image */}
      <img src={region.img} alt={region.name} />
      {/* Region name */}
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