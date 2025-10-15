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
          <p className="blog-subtitle">Coding my way around the U.S.A.</p>
        </div>
      </div>
      <div className="main-content-container">
        <div className="text-blurb-content-container">
          <p className="blurb-about">
            During the uncertainty of the 2020 COVID-19 pandemic, I made the
            decision to pursue a career change—a choice that ultimately led me
            to discover a path I am truly passionate about. I joined a tech team
            with no prior technical experience and immersed myself in learning
            both on the job and through continuous self-study. Embracing the
            remote work lifestyle enabled me to travel extensively across the
            United States while growing professionally and personally.
            <br></br>
          </p>
          <div className="float-text-container">
            <div className="began-text-container">
              <h1 className="how-it-began">How it all Began</h1>
            </div>
            <p className="began-remaining-text">
              After several years working as a writer and editor, I realized my
              passion for learning technical skills was growing stronger. After
              a bit of luck, opportunity, and preparation, I was able to
              transfer internally into our tech department, starting as a manual
              QA tester. Within a year and a half, I completed a full-stack
              development course, which provided the foundation I needed to
              begin writing automated tests.
            </p>
          </div>
          <p className="remaining-text">
            During the course, the stars aligned for my best friend and me to
            hop into my little Hyundai Elantra and embark on a cross-country
            road trip. What was planned as a two-week journey turned into four
            months on the road, covering 19 states and creating countless
            memories. We worked, studied, and explored full-time, seizing every
            adventure that came our way.
          </p>

          <p className="remaining-text">
            While my interest in technical skills grew stronger, so did my love
            for the western United States. After safely returning home from the
            road trip—and a few promotions—I made the permanent move west as an
            SDET. I spent a year in Utah, followed by an extended stay in
            Washington, and now I proudly call San Diego home. Of course, the
            road ahead is full of possibilities—who knows where the next
            adventure will take me!
          </p>
        </div>
      </div>
      <Route />
      <Gallery />
    </div>
  );
};

export { About };
