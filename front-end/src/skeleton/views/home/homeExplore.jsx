import { useNavigate } from "react-router-dom";
import hiddenFLBlog from "../../../assets/photos/hiddenFLBlog.png";
import sunriseZionBlog from "../../../assets/photos/sunriseZionBlog.png";
import oregonCoastBlog from "../../../assets/photos/oregonCoastBlog.png";
import "../../../styles/homeStyles/exploreStyles.css";

const HomeExplore = () => {
  const navigate = useNavigate();

  const navToBlog = () => {
    navigate("/blog");
  };

  return (
    <div className="explore-container">
      <div className="explore-text-container">
        <h1 className="explore-title">Explore</h1>
        <p className="explore-text">
          Planning a trip? <br></br>Check out my latest guides, and take the
          first steps towards your next grand adventure. Happy travels!
        </p>
      </div>
      <div className="explore-item-container">
        <div className="explore-item" onClick={navToBlog}>
          <img className="explore-image" src={oregonCoastBlog} alt="" />
          <h3 className="explore-item-text">The Oregon Coast</h3>
        </div>
        <div className="explore-item" onClick={navToBlog}>
          <img className="explore-image" src={sunriseZionBlog} alt="" />
          <h3 className="explore-item-text">Sunrise at Zion</h3>
        </div>
        <div className="explore-item" onClick={navToBlog}>
          <img className="explore-image" src={hiddenFLBlog} alt="" />
          <h3 className="explore-item-text">Hidden Florida</h3>
        </div>
      </div>
    </div>
  );
};

export default HomeExplore;
