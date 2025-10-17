// src/components/FeaturedProperties.js
import React from "react";

// Add or remove properties by updating this properties array
// Array is currently filled with data from the static index.html 
const properties = [
  {
    title: "Luxury Apartment with great views",
    location: "Upper East Side, New York",
    img: "http://placehold.it/760x670",
    price: 950,
    bedrooms: 4,
    bathrooms: 3,
    link: "properties-detail.html",
  },
  {
    title: "Stunning Villa with 5 bedrooms",
    location: "Miami Beach, Florida",
    img: "http://placehold.it/760x670",
    price: 1300,
    bedrooms: 5,
    bathrooms: 2,
    link: "properties-detail.html",
  },
  {
    title: "Recent construction with 3 bedrooms",
    location: "Park Slope, New York",
    img: "http://placehold.it/760x670",
    price: 560,
    bedrooms: 3,
    bathrooms: 2,
    link: "properties-detail.html",
  },
  {
    title: "Modern construction with parking space",
    location: "Midtown, New York",
    img: "http://placehold.it/760x670",
    price: 85,
    bedrooms: 1,
    bathrooms: 2,
    link: "properties-detail.html",
  },
  {
    title: "Single Family Townhouse",
    location: "Cobble Hill, New York",
    img: "http://placehold.it/760x670",
    price: 840,
    bedrooms: 2,
    bathrooms: 2,
    link: "properties-detail.html",
  },
  {
    title: "3 bedroom villa with garage for rent",
    location: "Bal Harbour, Florida",
    img: "http://placehold.it/760x670",
    price: 150,
    bedrooms: 3,
    bathrooms: 2,
    link: "properties-detail.html",
  },
];

// Component for diplaying a property card
const PropertyCard = ({ property }) => (
  <div className="item col-md-4">
    <div className="image">
      <a href={property.link}>
        <h3>{property.title}</h3>
        <span className="location">{property.location}</span>
      </a>
      {/* Property image */}
      <img src={property.img} alt={property.title} />
    </div>
    <div className="price">
      <span>${property.price}</span>
      <p>per night</p>
    </div>
    <ul className="amenities">
      <li><i className="icon-bedrooms"></i> {property.bedrooms}</li>
      <li><i className="icon-bathrooms"></i> {property.bathrooms}</li>
    </ul>
  </div>
);

const FeaturedProperties = () => (
  <div className="main col-sm-8">
    <h1 className="section-title">Featured Properties</h1>
    <div className="grid-style1 clearfix">
      {properties.map((property, index) => (
        <PropertyCard key={index} property={property} />
      ))}
    </div>
  </div>
);

export default FeaturedProperties;