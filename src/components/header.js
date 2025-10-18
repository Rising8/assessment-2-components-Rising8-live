import React from "react";

const Header = ({ setPage }) => {
  return (
    <header id="header">
      {/* TOP BAR */}
      <div id="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <ul id="top-buttons">
                <li>
                  <a href="#" onClick={(e) => { e.preventDefault(); alert("Login clicked"); }}>
                    <i className="fa fa-sign-in"></i> Login
                  </a>
                </li>
                <li>
                  <a href="#" onClick={(e) => { e.preventDefault(); alert("Register clicked"); }}>
                    <i className="fa fa-pencil-square-o"></i> Register
                  </a>
                </li>
                <li className="divider"></li>
                <li>
                  <div className="language-switcher">
                    <span><i className="fa fa-globe"></i> English</span>
                    <ul>
                      <li><a href="#" onClick={(e) => e.preventDefault()}>Deutsch</a></li>
                      <li><a href="#" onClick={(e) => e.preventDefault()}>Español</a></li>
                      <li><a href="#" onClick={(e) => e.preventDefault()}>Français</a></li>
                      <li><a href="#" onClick={(e) => e.preventDefault()}>Português</a></li>
                    </ul>
                  </div>
                </li>

                {/* Optional search box (kept commented out for now because its commented out on the original code)
                <li>
                  <form id="site-search">
                    <span><i className="fa fa-search"></i></span>
                    <input type="text" name="q" placeholder="Search" />
                  </form>
                </li>
                */}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="nav-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              {/* Logo */}
              <a href="index.html" className="nav-logo">
                <img src="images/logo.png" alt="One Ring Rentals" />
              </a>

              {/* Search Bar */}
              <div id="sb-search" className="sb-search">
                <form>
                  <input
                    className="sb-search-input"
                    placeholder="Search..."
                    type="text"
                    name="search"
                    id="search"
                  />
                  <input className="sb-search-submit" type="submit" value="" />
                  <i className="fa fa-search sb-icon-search"></i>
                </form>
              </div>

              {/* MAIN MENU */}
              <nav className="navbar">
                <button id="nav-mobile-btn">
                  <i className="fa fa-bars"></i>
                </button>

                <ul className="nav navbar-nav">
                  <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); setPage("home"); }}>
                      Find a Rental
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => e.preventDefault() && setPage("list")}>
                      List your rental
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => e.preventDefault() && setPage("guides")}>
                      Travel Guides
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); setPage("regions"); }}>
                      Regions
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); setPage("news"); }}>
                      News
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); setPage("contact"); }}>
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
