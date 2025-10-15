import { useNavigate } from "react-router-dom";
import hiddenFLBlog from "../../../assets/photos/hiddenFLBlog.png";
import colchuckBlog from "../../../assets/photos/pnw/pnw13.png";
import castleBlog from "../../../assets/photos/utah/castle2.png";
import oregonCoastBlog from "../../../assets/photos/oregonCoastBlog.png";
import "../../../styles/homeStyles/exploreStyles.css";

const HomeExplore = () => {
  const navigate = useNavigate();

  const navToBlog = () => {
    navigate("/blog");
  };
  const navToBlogA = () => {
    navigate("/blogA");
  };
  const navToBlogB = () => {
    navigate("/blogB");
  };

  const navToBlogC = () => {
    navigate("/blogC");
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
        <div className="explore-item" onClick={navToBlogA}>
          <img className="explore-image" src={oregonCoastBlog} alt="" />
          <h3 className="explore-item-text">The Oregon Coast</h3>
        </div>
        <div className="explore-item" onClick={navToBlogC}>
          <img className="explore-image" src={castleBlog} alt="" />
          <h3 className="explore-item-text">Devil's Castle</h3>
        </div>
        <div className="explore-item" onClick={navToBlogB}>
          <img className="explore-image" src={colchuckBlog} alt="" />
          <h3 className="explore-item-text">Lake Colchuck</h3>
        </div>
      </div>
    </div>
  );
};

export default HomeExplore;
