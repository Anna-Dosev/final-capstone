import Route from "../../components/route";
// import React from "react";
import Gallery from "../../components/gallery";
import heroPic from "../../assets/photos/hero.jpg";
import heroPic2 from "../../assets/photos/moab1.JPG";
import heroPic3 from "../../assets/photos/moab2.jpg";
import logo from "../../assets/photos/logo2.png";
import pnw5 from "../../assets/photos/pnw/pnw5.png";
import "../../styles/routeStyles.css";
import "../../styles/aboutStyles/aboutStyles.css";

const About = () => {
  return (
    <div>
      <div className="about-hero-container-image">
        <img className="about-heroPic" src={heroPic2} alt="" />
        <div className="blog-hero-text-container">
          <h1 className="blog-siteName">My Story</h1>
          <p className="blog-subtitle">Subtitle TBD</p>
        </div>
      </div>
      <div className="main-content-container">
        <div className="text-blurb-content-container">
          <p className="blurb-about">
            Eventually I will write something here. Was mainly focused on
            layout.
            <br></br>
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <br></br>
          </p>
          <div className="explore-text-container">
            <h1 className="explore-title">How it all Began</h1>
          </div>
          <p className="remaining-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p className="remaining-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <Route />
      <Gallery />
    </div>
  );
};

export { About };
