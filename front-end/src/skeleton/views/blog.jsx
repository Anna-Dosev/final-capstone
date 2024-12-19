import { useNavigate } from "react-router-dom";
import heroPic2 from "../../assets/photos/monValley.png";
import Blog1 from "../../components/blog-content/blog1";
import Blog2 from "../../components/blog-content/blog2";
import Blog3 from "../../components/blog-content/blog3";
import Blog4 from "../../components/blog-content/blog4";
import Blog5 from "../../components/blog-content/blog5";
import lakeColchuck from "../../assets/photos//pnw/pnw10.png";
import devilsCastle from "../../assets/photos//utah/castle.png";
import hiddenFLBlog from "../../assets/photos/hiddenFLBlog.png";
import sunriseZionBlog from "../../assets/photos/sunriseZionBlog.png";
import oregonCoastBlog from "../../assets/photos/oregonCoastBlog.png";
import highway395Blog from "../../assets/photos/highway395Blog.png";
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
              src={oregonCoastBlog}
              alt=""
            />
            <h3 className="blog-item-text">Hidden Florida</h3>
          </div>
          <div className="blog-item">
            <img
              className="blog-image"
              onClick={() => navToBlog("blogE")}
              src={lakeColchuck}
              alt=""
            />
            <h3 className="blog-item-text">Zion</h3>
          </div>
          <div className="blog-item">
            <img
              className="blog-image"
              onClick={() => navToBlog("blogF")}
              src={devilsCastle}
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

// OLD BLOG FORMAT
{
  /* <div className="blog-item-container">
          <div className="blog-item">
            <div className="blog-item-visual">
              <img className="blog-image" src={oregonCoastBlog} alt="" />
              <h3 className="blog-title-text">The Oregon Coast</h3>
            </div>
          </div>
          <div className="blog-item-text">
            <p className="blog-subtitle-text">Graced with sunny days ...</p>
            <Blog1 />
          </div>
        </div>
        <div className="blog-item-container">
          <div className="blog-item-text">
            <p className="blog-subtitle-text">
              I started the trail by myself in the dark ...
            </p>
            <Blog2 />
          </div>
          <div className="blog-item">
            <div className="blog-item-visual">
              <img className="blog-image" src={sunriseZionBlog} alt="" />
              <h3 className="blog-title-text">Sunrise in Zion</h3>
            </div>
          </div>
        </div>
        <div className="blog-item-container">
          <div className="blog-item">
            <div className="blog-item-visual">
              <img className="blog-image" src={hiddenFLBlog} alt="" />
              <h3 className="blog-title-text">Hidden Florida</h3>
            </div>
          </div>
          <div className="blog-item-text">
            <p className="blog-subtitle-text">
              Springs are best seen in the summer ...
            </p>
            <Blog3 />
          </div>
        </div>
        <div className="blog-item-container">
          <div className="blog-item-text">
            <p className="blog-subtitle-text">The Road to Mount Whitney</p>
            <Blog4 />
          </div>
          <div className="blog-item">
            <div className="blog-item-visual">
              <img className="blog-image" src={highway395Blog} alt="" />
              <h3 className="blog-title-text">U.S. Route 395</h3>
            </div>
          </div>
        </div>
        <div className="blog-item-container">
          <div className="blog-item">
            <div className="blog-item-visual">
              <img className="blog-image" src={altaBlog} alt="" />
              <h3 className="blog-title-text">Alta Meadows</h3>
            </div>
          </div>
          <div className="blog-item-text">
            <p className="blog-subtitle-text">Gaining Alta-tude</p>
            <Blog5 />
          </div>
        </div> */
}
