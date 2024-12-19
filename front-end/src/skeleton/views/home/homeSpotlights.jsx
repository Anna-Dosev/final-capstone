import hiddenFLBlog from "../../../assets/photos/hiddenFLBlog.png";
import sunriseZionBlog from "../../../assets/photos/sunriseZionBlog.png";
import oregonCoastBlog from "../../../assets/photos/oregonCoastBlog.png";
import { useNavigate } from "react-router-dom";
import "../../../styles/homeStyles.css";

const HomeSpotlights = () => {
  const navigate = useNavigate();

  const navToBlog = () => {
    navigate("/blog");
  };
  return (
    <div className="home-blog-container">
      <h3 className="blog-container-title-text">Spotlights from the Road</h3>
      <div className="home-blog-item-container">
        <div className="home-blog-item" onClick={navToBlog}>
          <img className="home-blog-image" src={oregonCoastBlog} alt="" />
          <h3 className="blog-title-text">The Oregon Coast</h3>
        </div>
        <div className="home-blog-item" onClick={navToBlog}>
          <img className="home-blog-image" src={sunriseZionBlog} alt="" />
          <h3 className="blog-title-text">Sunrise at Zion</h3>
        </div>
        <div className="home-blog-item" onClick={navToBlog}>
          <img className="home-blog-image" src={hiddenFLBlog} alt="" />
          <h3 className="blog-title-text">Hidden Florida</h3>
        </div>
      </div>
    </div>
  );
};

export default HomeSpotlights;
