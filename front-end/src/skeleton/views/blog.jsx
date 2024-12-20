import { useNavigate } from "react-router-dom";
import heroPic2 from "../../assets/photos/monValley.png";
import lakeColchuck from "../../assets/photos//pnw/pnw10.png";
import devilsCastle from "../../assets/photos//utah/castle.png";
import hiddenFL from "../../assets/photos/hiddenFLBlog.png";
import sunriseZion from "../../assets/photos/sunriseZionBlog.png";
import oregonCoastBlog from "../../assets/photos/oregonCoastBlog.png";
import highway395 from "../../assets/photos/highway395Blog.png";
import logo from "../../assets/photos/logo2.png";
import altaBlog from "../../assets/photos/altaBlog.png";
import "../../styles/blogStyles/blogHeroStyles.css";
import "../../styles/blogStyles/blogSignUpStyles.css";

const Blog = () => {
  const navigate = useNavigate();

  const navToBlog = (destination) => {
    navigate(`/${destination}`);
  };

  return (
    <div>
      <div className="blog-hero-container-image">
        <img className="blog-heroPic" src={heroPic2} alt="" />
        <div className="blog-hero-text-container">
          <h1 className="blog-siteName">The Blog</h1>
          <p className="blog-subtitle">Words from the Road</p>
        </div>
      </div>
      <div className="blog-container">
        <div className="blog-item-container">
          <div className="blog-item">
            <img
              className="blog-image"
              onClick={() => navToBlog("blogA")}
              src={oregonCoastBlog}
              alt=""
            />
            <h3 className="blog-item-text">The Oregon Coast</h3>
          </div>
          <div className="blog-item">
            <img
              className="blog-image"
              onClick={() => navToBlog("blogB")}
              src={lakeColchuck}
              alt=""
            />
            <h3 className="blog-item-text">Lake Colchuck</h3>
          </div>
          <div className="blog-item">
            <img
              className="blog-image"
              onClick={() => navToBlog("blogC")}
              src={devilsCastle}
              alt=""
            />
            <h3 className="blog-item-text">Devil's Castle</h3>
          </div>
        </div>
        <div className="sign-up-container">
          <p className="sign-up-text">
            Ready to explore? Sign up for email alerts and unlock access to our
            newest travel guides.
          </p>
          <div className="sign-up-form">
            <input type="text" placeholder="Name" className="sign-up-input" />
            <input type="email" placeholder="Email" className="sign-up-input" />
            <button className="sign-up-button">Sign Up</button>
          </div>
        </div>
        <div className="blog-item-container">
          <div className="blog-item">
            <img
              className="blog-image"
              onClick={() => navToBlog("blogD")}
              src={hiddenFL}
              alt=""
            />
            <h3 className="blog-item-text">Hidden Florida</h3>
          </div>
          <div className="blog-item">
            <img
              className="blog-image"
              onClick={() => navToBlog("blogE")}
              src={sunriseZion}
              alt=""
            />
            <h3 className="blog-item-text">Zion</h3>
          </div>
          <div className="blog-item">
            <img
              className="blog-image"
              onClick={() => navToBlog("blogF")}
              src={highway395}
              alt=""
            />
            <h3 className="blog-item-text">395 North</h3>
          </div>
        </div>
        <div className="blog-logo-banner">
          <img className="logo" src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
