import Route from "../../components/route";
// import React from "react";
import Gallery from "../../components/gallery";
import heroPic from "../../assets/photos/hero.jpg";
import "../../styles/routeStyles.css";

const About = () => {
  return (
    <div>
      <div className="blog-welcome-container-image">
        <img className="blog-heroPic" src={heroPic} alt="" />
        <div className="blog-siteName-container">
          <h1 className="blog-siteName">My Way Around the USA</h1>
        </div>
      </div>
      <Route />
      <Gallery />
    </div>
  );
};

export { About };
