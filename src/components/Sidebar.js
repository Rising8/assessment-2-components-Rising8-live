// src/components/Sidebar.js
import React from "react";

// Array of last minute deals to display in the sidebar
const deals = [
  {
    title: "Private Beach",
    location: "Lossarnach, Eriado",
    availability: "Available Now",
    img: "/images/patterns/pattern1.jpg",
    link: "blog-detail.html",
  },
  {
    title: "Mountain views",
    location: "Hyarnustar, Rhovanion",
    availability: "Available on 24 July",
    img: "/images/patterns/pattern2.jpg",
    link: "blog-detail.html",
  },
  {
    title: "Heart of the village",
    location: "Minhiriath, Eriador",
    availability: "Available 5 July",
    img: "/images/patterns/pattern3.jpg",
    link: "blog-detail.html",
  },
  {
    title: "The city life",
    location: "West Beleriand, Mordor",
    availability: "Available 6 July",
    img: "/images/patterns/pattern4.jpg",
    link: "blog-detail.html",
  },
];

// Array of recent activities to display in the sidebar below the deals
const activities = [
  {
    user: "Sam Minnée",
    action: "reviewed",
    target: "The House With No Windows",
    message: "Awesome solitary confinement, mate. Spot on. Sweet as.",
    time: "Just now",
    img: "/images/patterns/pattern5.jpg",
  },
  {
    user: "Ingo Schoomer",
    action: "asked a question about",
    target: "The Mistake by the Lake",
    message: "Has this house been unit tested?",
    time: "37 minutes ago",
    img: "/images/patterns/pattern6.jpg",
  },
];

// Sidebar component that displays 2 main sections -
// 1) Last Minute Deals
// 2) Recent User Activities
const Sidebar = () => (
  <div className="sidebar col-sm-4">
    {/* Last Minute Deals Section */}
    <div className="col-sm-12">
      <h2 className="section-title">Last minute deals</h2>

      {/* List of all current deals */}
      <ul className="latest-news">
        {deals.map((deal, index) => (
          <li key={index} className="col-md-12">
            {/* Deal image with link */}
            <div className="image">
              <a href={deal.link}></a>
              <img src={deal.img} alt={deal.title} />
            </div>
            {/* Availability info */}
            <ul className="top-info">
              <li>
                <i className="fa fa-calendar"></i> {deal.availability}
              </li>
            </ul>

            {/* Deal title and location */}
            <h4>
              <a href={deal.link}>{deal.title}</a>
              <p>{deal.location}</p>
            </h4>
          </li>
        ))}
      </ul>
      {/* "More deals" button at the bottom */}
      <p className="center">
        <a className="btn btn-fullcolor" href="#">
          More deals
        </a>
      </p>
    </div>

    {/* Recent User Activities Section */}
    <div className="col-sm-12">
      <h2 className="section-title">Activity</h2>
      {/* List of recent activities */}
      <ul className="activity">
        {activities.map((act, index) => (
          <li key={index} className="col-lg-12">
            {/* User avatar */}
            <a href="#">
              <img src={act.img} alt={act.target} />
            </a>
            {/* Activity details: who, what, when */}
            <div className="info">
              <h5>
                {act.user} {act.action} <a href="#">{act.target}</a>
              </h5>
              <p>{act.message}</p>
              <h6>{act.time}</h6>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Sidebar;
