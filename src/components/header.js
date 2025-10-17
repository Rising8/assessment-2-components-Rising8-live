// src/components/header.js
import React from "react";

const Header = ({ setPage }) => {
  return (
    <header>
      <h1>One Ring Rentals</h1>
      <nav>
        <ul>
          {/* Each button calls setPage with the corresponding page name */}
          <li>
            <button onClick={() => setPage("home")}>Find a Rental</button>
          </li>
          <li>
            <button onClick={() => setPage("")}>List your rental</button>
          </li>
          <li>
            <button onClick={() => setPage("")}>Travel Guides</button>
          </li>
          <li>
            <button onClick={() => setPage("regions")}>Regions</button>
          </li>
          <li>
            <button onClick={() => setPage("news")}>News</button>
          </li>
          <li>
            <button onClick={() => setPage("contact")}>Contact</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
