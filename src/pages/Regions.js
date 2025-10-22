// src/components/Regions.js
import React from "react";

// Array of data for each region
const regions = [
  {
    name: "Sydney",
    location: "New South Wales",
    img: "/images/patterns/pattern1.jpg",
    link: "#",
  },
  {
    name: "Melbourne",
    location: "Victoria",
    img: "/images/patterns/pattern2.jpg",
    link: "#",
  },
  {
    name: "Brisbane",
    location: "Queensland",
    img: "/images/patterns/pattern3.jpg",
    link: "#",
  },
  {
    name: "Perth",
    location: "Western Australia",
    img: "/images/patterns/pattern4.jpg",
    link: "#",
  },
  {
    name: "Adelaide",
    location: "South Australia",
    img: "/images/patterns/pattern5.jpg",
    link: "#",
  },
  {
    name: "Hobart",
    location: "Tasmania",
    img: "/images/patterns/pattern6.jpg",
    link: "#",
  },
];

// Component for a single region card
const RegionCard = ({ region }) => (
  <div className="item col-md-4">
    <a href={region.link}>
      <img
        src={region.img}
        alt={region.name}
        style={{
          width: "100%",
          height: "200px", // fixed height (all images)
          objectFit: "cover", 
          display: "block",
        }}
      />
      <h3>{region.name}</h3>
      <span>{region.location}</span>
    </a>
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
