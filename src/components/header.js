// src/components/header.js
import React from "react";

const Header = ({ setPage }) => {
  return (
    <header>
      {/* Top Bar */}
      <div id="top-bar">
        <ul id="top-buttons">
          <li>
            <button onClick={() => alert("Login clicked")}>
              <i className="fa fa-sign-in"></i> Login
            </button>
          </li>
          <li>
            <button onClick={() => alert("Register clicked")}>
              <i className="fa fa-pencil-square-o"></i> Register
            </button>
          </li>
          <li className="divider"></li>
          <li>
            <div className="language-switcher">
              <span><i className="fa fa-globe"></i> English</span>
              <ul>
                <li><button>Deutsch</button></li>
                <li><button>Español</button></li>
                <li><button>Français</button></li>
                <li><button>Português</button></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      {/* Main Header */}
      <h1>One Ring Rentals</h1>
      <nav>
        <ul>
          <li>
            <button onClick={() => setPage("home")}>Find a Rental</button>
          </li>
          <li>
            <button onClick={() => setPage("list")}>List your rental</button>
          </li>
          <li>
            <button onClick={() => setPage("guides")}>Travel Guides</button>
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
