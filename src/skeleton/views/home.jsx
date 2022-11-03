import Route from '../../components/route'
import Login from '../../components/login'
import PhotoGallery from '../../components/gallery'
import introPic from '../../assets/photos/intro.jpg'
import heroPic from '../../assets/photos/hero.jpg'
import '../../styles/homeStyles.css';

const Home = () => {
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
              <p className="intro-text">My name is Anna, and I am a roadtrip extraordinaire and aspiring fullstack web developer.
                  I spent the last 8 months driving across the United States while working remotely.
                  To add to the fun, I was also enrolled in a web development course and created this site as my final capstone project. 
              </p>
              <p className="intro-text">(SAMPLE TEXT) Hi there! My name is Anna, and I am a roadtrip extraordinaire as well as an aspiring web developer.
                  Throughout this past year, my best friend and I spent six months driving across the United States while working remotely.
              </p>
              <h3 className="signup-text">Sign up for access to exclusive content.</h3>
            </div>
            <div className="about-container-login">
              <Login />
            </div>
          </div>
        <Route />
        <PhotoGallery />
        <div className="home-blog-container">
          <div className="home-blog-item">
            <img className="home-blog-image" src="" alt=""/>
            <h3 className="blog-title-text">All Around the Oregon Coast</h3>
          </div>
          <div className="home-blog-item">
            <img className="home-blog-image" src="" alt=""/>
            <h3 className="blog-title-text">Sunrise Zion</h3>
          </div>
          <div className="home-blog-item">
            <img className="home-blog-image" src="" alt=""/>
            <h3 className="blog-title-text">Hidden Florida</h3>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;