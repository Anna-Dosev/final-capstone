import { useNavigate } from "react-router-dom";
import React from "react";
import heroPic3 from "../../../assets/photos/utah/castle3.jpg";
import castle from "../../../assets/photos/utah/castle.png";
import logo from "../../../assets/photos/logo2.png";
import "../../../styles/blogStyles/blogCStyles.css";
import "../../../styles/blogStyles/blogHeroStyles.css";
// import "../../../styles/blogStyles/blogSignUpStyles.css";

const BlogB = () => {
  const navigate = useNavigate();

  return (
    <div className="parent-container">
      <div className="blog-hero-container-image">
        <img className="blogC-heroPic" src={heroPic3} alt="" />
        <div className="blog-hero-text-container">
          <h1 className="blog-siteName">Devil's Castle</h1>
          <p className="blog-subtitle">Alta's Ridgeline Fortress</p>
        </div>
      </div>
      <div className="main-content-container">
        <div className="image-content-container">
          <img className="blogCImage" src={castle} alt="" />
        </div>
        <div className="text-blurb-content-container">
          <p className="blurb">
            Perched above the stunning Albion Basin, Devil’s Castle is one of
            the Wasatch’s most iconic ridgelines—and a rite of passage for
            advanced hikers and scramblers. The journey begins at the Cecret
            Lake trailhead, where a well-worn path quickly leads to alpine
            vistas and the glassy surface of Cecret Lake before the real ascent
            begins.
          </p>
          <p className="remaining-text">
            Alta Ski Area, nestled high in Utah's Wasatch Mountains, is a
            skiers-only paradise renowned for its powder and challenging
            terrain. In the off-season, Alta still offers a serene escape for
            hikers, climbers, and it was my ultimate "happy place" while living
            in Salt Lake.
          </p>
          <p className="remaining-text">
            There are four main sections of this hike if starting from Albion
            Basin:
            <br></br>
            <br></br>• Basin to the lower meadow
            <br></br>• Lower meadow to Cecret Lake
            <br></br>• Cecret Lake to the upper meadow
            <br></br>• Upper meadow to Devil's Castle
            <br></br>
            <br></br>
          </p>
          <p className="remaining-text"></p>
          <p className="remaining-text">
            From the lake, the route turns steep and demanding: over a thousand
            vertical feet of elevation through switchbacks, rock, and scree,
            ultimately delivering you to the saddle between Devil’s Castle and
            Sugarloaf Mountain. Here, novices often turn back, but those
            pressing on are rewarded with exposed Class 3–4 scrambling,
            panoramic views, and the satisfaction of traversing three limestone
            summits along the ridge.
          </p>
          <p className="remaining-text">
            Unless you have super-human knees and super-glue grip on your boots,
            don't plan on a leisurely trek back down—at least on the portion
            between the upper meadow and Cecret Lake. The gravel and grade of
            the trail make even the most steady hikers prone to slipping. Take
            your time and consider bringing hiking poles for additional support.
          </p>
          <p className="remaining-text">
            One of the most incredible facets of this hike is seeing how far
            your legs can take you. From the base, the ridge looks so distant
            and daunting, and you feel a true sense of accomplishment knowing
            you were able to push yourself to reach the summit and conquer such
            a challenging route. Make sure to commemorate the accomplishment
            with a celebratory sunset beer from Goldminer's Daughter, a cozy
            lodge just steps from Alta’s main lifts.
            <br></br>
            <br></br>Disclaimer: The hike to Devil's Castle requires some
            class-4 scrambling, hand-over-hand climbing and a 500-ft cliff
            exposure, making it unsuitable for novices or those afraid of
            heights.
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
export default BlogB;
