import { useNavigate } from "react-router-dom";
import React from "react";
import heroPic2 from "../../../assets/photos/pnw/pnw6.png";
import pnw5 from "../../../assets/photos/pnw/pnw5.png";
import logo from "../../../assets/photos/logo2.png";
import "../../../styles/blogStyles/blogAStyles.css";
import "../../../styles/blogStyles/blogHeroStyles.css";
import "../../../styles/blogStyles/blogSignUpStyles.css";

const BlogA = () => {
  const navigate = useNavigate();

  return (
    <div className="parent-container">
      <div className="blog-hero-container-image">
        <img className="blog-heroPic" src={heroPic2} alt="" />
        <div className="blog-hero-text-container">
          <h1 className="blog-siteName">The Oregon Coast</h1>
          <p className="blog-subtitle">363 Miles on Highway 101</p>
        </div>
      </div>
      <div className="main-content-container">
        <div className="image-content-container">
          <img className="blogAImage" src={pnw5} alt="" />
        </div>
        <div className="text-blurb-content-container">
          <p className="blurb">
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
      <div className="pre-footer"></div>
      <div className="blogA-logo-banner">
        <img className="blogAlogo" src={logo} alt="" />
      </div>
    </div>
  );
};
export default BlogA;
