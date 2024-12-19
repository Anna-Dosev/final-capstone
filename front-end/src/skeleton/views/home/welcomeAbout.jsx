import introPic2 from "../../../assets/photos/intro2.png";
import logo from "../../../assets/photos/logo.png";
import "../../../styles/homeStyles/welcomeAboutStyles.css";

const WelcomeAbout = () => {
  return (
    <div className="welcome-container">
      <div className="intro-pic-container">
        <img className="introPic" src={introPic2} alt="" />
      </div>
      <div className="about-container-text">
        <h1 className="welcome-title">Welcome!</h1>
        <p className="intro-text">
          Hi, I'm Anna, an adventure enthusiast based in Salt Lake City.
          Throughout the years working remotely as a QA Engineer, I've gained a
          keen interest in web development and visual storytelling.
          <br></br>
          <br></br>
          Originally created as a capstone project for a full-stack web
          development course, <i>There She Codes</i> combines my travel
          highlights with new development skills acquired, showcasing how
          creativity and technology enhance our travel experiences.
          <br></br>
          <br></br>
          Built with React, Node, JSX, HTML and CSS
          <br></br>
          Deployed via Railway (eventually)
        </p>
      </div>
      <div className="logo-container">
        <img className="logo" src={logo} alt="" />
      </div>
    </div>
  );
};

export default WelcomeAbout;
