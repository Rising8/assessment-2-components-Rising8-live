import React from "react";

// Array of data for each region - for some reason on both the static site and react, the regions are not showing
const regions = [
  { name: "Sydney", location: "New South Wales", link: "#" },
  { name: "Melbourne", location: "Victoria", link: "#" },
  { name: "Brisbane", location: "Queensland", link: "#" },
  { name: "Perth", location: "Western Australia", link: "#" },
  { name: "Adelaide", location: "South Australia", link: "#" },
  { name: "Hobart", location: "Tasmania", link: "#" },
];

// Component for a single region card
const RegionCard = ({ region }) => (
  <div className="item col-md-4">
    <div className="image">
      <a href={region.link}>
        <h3>{region.name}</h3>
        <span className="location">{region.location}</span>
      </a>
    </div>
  </div>
);

// Main regions page
const Regions = () => (
  <div className="main col-sm-12">
    <h1 className="section-title">Regions in Australia</h1>
    <div className="grid-style1 clearfix">
      {regions.map((region, index) => (
        <RegionCard key={index} region={region} />
      ))}
    </div>
  </div>
);

export default Regions;
