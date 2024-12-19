import heroPic from "../../../assets/photos/hero.jpg";
import "../../../styles/homeStyles/heroStyles.css";

const HomeHero = () => {
  return (
    <div className="hero-container-image">
      <img className="heroPic" src={heroPic} alt="" />
      <div className="hero-text-container">
        <h1 className="title">There she codes</h1>
        <p className="tech-travel-text">tech and travel</p>
      </div>
    </div>
  );
};

export default HomeHero;
