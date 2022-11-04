import Route from '../../components/route'
import Login from '../../components/login'
import PhotoGallery from '../../components/gallery'
import introPic from '../../assets/photos/intro.jpg'
import heroPic from '../../assets/photos/hero.jpg'
import hiddenFLBlog from '../../assets/photos/hiddenFLBlog.png'
import sunriseZionBlog from '../../assets/photos/sunriseZionBlog.png'
import oregonCoastBlog from '../../assets/photos/oregonCoastBlog.png'
import { useNavigate } from 'react-router-dom'
import '../../styles/homeStyles.css';

const Home = () => {
  const navigate = useNavigate();

  const navToRoute = (e) => {
    navigate('/routeTimeline');
  }

  const navToBlog = (e) => {
    navigate('/blog');
  }
    return (
      <div>
          <div className="welcome-container-image">
            <img className="heroPic" src={heroPic}/>
            <div className="siteName-container">
              <h1 className="siteName">There she codes</h1>
            </div>
          </div>
          <div className="about-container">
            <div className="about-container-image">
              <img className="introPic" src={introPic}/>
            </div>
            <div className="about-container-text">
              <h1 className="welcome-text">Hi there!</h1>
              <p className="intro-text">My name is Anna, and I am a roadtrip extraordinaire and aspiring full-stack web developer.
                  I spent the last six months driving across the United States while working remotely.
                  To add to the fun, I was also enrolled in a web development course and created this site as my final capstone project. 
              </p>
              <p className="intro-text">There She Codes combines the highlights of my travels with new skills learned along the way.
              </p>
              <h3 className="signup-text">Sign up for access to exclusive content.</h3>
            </div>
            <div className="about-container-login">
              <Login />
            </div>
          </div>
          <div className="home-route-container">
            <h1 className="route-header">
                My Route and Timeline
            </h1>
            <div className="route-info-boxes">
              <div className="info-box">11,500 miles</div>
              <div className="info-box">174 days</div>
              <div className="info-box">19 states</div>
            </div>
            <div className="cities-list">
                Jacksonville • Pensacola • Memphis • Wichita • Denver • Salt Lake City • Boise • Hood River • Cannon Beach • Seattle • Portland • Crescent City • Napa Valley • San Fransisco • 
                Santa Cruz • Big Sur • Santa Barbara • Los Angeles • San Diego • Mammoth Lakes • Tahoe • Salt Lake City • Jackson Hole • Zion • Las Vegas • Flagstaff • Sedona • 
                Durango • Santa Fe • Amarillo • Dallas 
            </div>
            <div className="details-btn-container">
              <button className="details-button" onClick={navToRoute}>
                View Complete Details
              </button>
            </div>
          </div>
        {/* <Route /> */}
        {/* <PhotoGallery /> */}
        <div className="home-blog-container">
          <h3 className="blog-container-title-text">From the Blog</h3>
          <div className="home-blog-item-container">
            <div className="home-blog-item" onClick={navToBlog}>
              <img className="home-blog-image" src={oregonCoastBlog} alt=""/>
              <h3 className="blog-title-text">The Oregon Coast</h3>
            </div>
            <div className="home-blog-item" onClick={navToBlog}>
              <img className="home-blog-image" src={sunriseZionBlog} alt=""/>
              <h3 className="blog-title-text">Sunrise at Zion</h3>
            </div>
            <div className="home-blog-item" onClick={navToBlog}>
              <img className="home-blog-image" src={hiddenFLBlog} alt=""/>
              <h3 className="blog-title-text">Hidden Florida</h3>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;