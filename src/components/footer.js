import React from "react";
import FooterPopularRegions from "./FooterPopularRegions"; // Added separate component for footer popular regions section

const Footer = () => (
  <footer id="footer">
    <div id="footer-top" className="container">
      <div className="row">
        <div className="block col-sm-3">
          <a href="#"><img src="images/logo.png" alt="One Ring Rentals" /></a>
          <br /><br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo eros nibh, et dictum elit tincidunt eget. Pellentesque volutpat quam dignissim, convallis elit id, efficitur sem. Vivamus ac scelerisque sem. Aliquam sed enim rutrum nibh gravida pellentesque nec at metus.
          </p>
        </div>
        <div className="block col-sm-3">
          <h3>Helpful Links</h3>
          <ul className="footer-links">
            <li><a href="#">All rentals</a></li>
            <li><a href="#">List your rental</a></li>
            <li><a href="#">Read our FAQs</a></li>
          </ul>
        </div>
        <div className="block col-sm-6">
          <h3>Popular regions</h3>
          <FooterPopularRegions />
          {/* I changed from inline region cards to a separate component named FooterPopularRegions.
              This change basically splits the list into two columns to match the original 
              stattic HTML layout for the footer and it make the component reusable  */}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
