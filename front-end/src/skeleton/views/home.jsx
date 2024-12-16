// import Register from '../../components/register'
// import introPic from '../../assets/photos/intro.jpg'
// import heroPic from '../../assets/photos/hero.jpg'
// import hiddenFLBlog from '../../assets/photos/hiddenFLBlog.png'
// import sunriseZionBlog from '../../assets/photos/sunriseZionBlog.png'
// import oregonCoastBlog from '../../assets/photos/oregonCoastBlog.png'
// import { useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from '../../redux/features/isLoggedInSlice';
// import '../../styles/homeStyles.css';

// const Home = () => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);

//   const navigate = useNavigate();
//   const navToRoute = (e) => {
//     if (isLoggedIn === 2) {
//       navigate('/routetimeline');
//     } else if (!isLoggedIn || isLoggedIn === 1) {
//       navigate('/login');
//     }
//   }
//   const navToBlog = (e) => {
//       navigate('/blog'); 
//   }
//     return (
//       <div>
//           <div className="welcome-container-image">
//             <img className="heroPic" src={heroPic} alt=""/>
//             <div className="siteName-container">
//               <h1 className="siteName">There she codes</h1>
//             </div>
//           </div>
//           <div className="about-container">
//             <div className="about-container-image">
//               <img className="introPic" src={introPic} alt=""/>
//             </div>
//             <div className="about-container-text">
//               <h1 className="welcome-text">Hi there!</h1>
//               <p className="intro-text">My name is Anna, and I am a roadtrip extraordinaire and student of all things technology. My experience as a QA Engineer has inspired me to dive deeper into the world of web development.
//               </p>
//               <p className="intro-text">There She Codes was originally created as my final capstone project for a full-stack web development course. It combines the highlights of my travels with new testing and development skills learned along the way.
//               </p>
//               <h3 className="tools-text">QA Testing • Front-End Development • Certified Scrum Master</h3>
//             </div>
//             <div className="about-container-login">
//               {/* <Register /> */}
//             </div>
//           </div>
//           <div className="home-route-container">
//             <h1 className="route-header">
//                 My Route and Timeline
//             </h1>
//             <div className="route-info-boxes">
//               <div className="info-box">11,500 miles</div>
//               <div className="info-box">174 days</div>
//               <div className="info-box">19 states</div>
//             </div>
//             <div className="cities-list">
//                 Jacksonville • Pensacola • Memphis • Wichita • Denver • Salt Lake City • Boise • Hood River • Cannon Beach • Seattle • Portland • Crescent City • Napa Valley • San Fransisco • 
//                 Santa Cruz • Big Sur • Santa Barbara • Los Angeles • San Diego • Mammoth Lakes • Tahoe • Salt Lake City • Jackson Hole • Zion • Las Vegas • Flagstaff • Sedona • 
//                 Durango • Santa Fe • Amarillo • Dallas 
//             </div>
//             <div className="details-btn-container">
//               <button className="details-button" onClick={navToRoute}>
//                 View Complete Details
//               </button>
//             </div>
//           </div>
//         <div className="home-blog-container">
//           <h3 className="blog-container-title-text">From the Blog</h3>
//           <div className="home-blog-item-container">
//             <div className="home-blog-item" onClick={navToBlog}>
//               <img className="home-blog-image" src={oregonCoastBlog} alt=""/>
//               <h3 className="blog-title-text">The Oregon Coast</h3>
//             </div>
//             <div className="home-blog-item" onClick={navToBlog}>
//               <img className="home-blog-image" src={sunriseZionBlog} alt=""/>
//               <h3 className="blog-title-text">Sunrise at Zion</h3>
//             </div>
//             <div className="home-blog-item" onClick={navToBlog}>
//               <img className="home-blog-image" src={hiddenFLBlog} alt=""/>
//               <h3 className="blog-title-text">Hidden Florida</h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default Home;


import introPic from '../../assets/photos/intro.jpg'
import heroPic from '../../assets/photos/hero.jpg'
import hiddenFLBlog from '../../assets/photos/hiddenFLBlog.png'
import sunriseZionBlog from '../../assets/photos/sunriseZionBlog.png'
import oregonCoastBlog from '../../assets/photos/oregonCoastBlog.png'
import { useNavigate } from 'react-router-dom'
import '../../styles/homeStyles.css';

const Home = () => {
  const navigate = useNavigate();

  const navToRoute = () => {
    navigate('/routetimeline');
  }

  const navToBlog = () => {
    navigate('/blog'); 
  }

  return (
    <div>
      <div className="welcome-container-image">
        <img className="heroPic" src={heroPic} alt=""/>
        <div className="siteName-container">
          <h1 className="siteName">There she codes</h1>
        </div>
      </div>
      <div className="about-container">
        <div className="about-container-image">
          <img className="introPic" src={introPic} alt=""/>
        </div>
        <div className="about-container-text">
          <h1 className="welcome-text">Hi there!</h1>
          <p className="intro-text">My name is Anna, and I am a roadtrip extraordinaire and student of all things technology. 
          My experience as a QA Engineer has inspired me to dive deeper into the world of web development in order to showcase my skills and interests.
          </p>
          <p className="intro-text">There She Codes was originally created as my final capstone project for a full-stack web development course. 
          It combines the highlights of my travels and hobbies with new testing and development skills learned along the way.
          </p>
          <p className="intro-text">This site is built with React, Node, JSX, HTML and CSS, and is deployed via Railway. 
          I also use Cypress to integrate automated testing scripts for basic functionality.
          </p>
        </div>
        <div className="about-container-resume">
          <h3 className="resume-text">FILLER TEXT</h3>
        </div>
      </div>
      <div className="home-route-container">
        <h1 className="route-header">
          Resume Highlights
        </h1>
        {/* <div className="route-info-boxes">
          <div className="info-box">11,500 miles</div>
          <div className="info-box">174 days</div>
          <div className="info-box">19 states</div>
        </div> */}

        <div className="cities-list">
         <p className="resume-text">
         • Lead QA efforts for three different platforms built by international developer teams ensuring high-quality product releases.
         <br></br><br></br>
         • Conduct manual testing on web and mobile applications, identifying and documenting software defects to enhance product stability.
         <br></br><br></br>
         • Develop and executed automated tests for web applications using Cypress, reducing manual workload and increasing testing efficiency.
         <br></br><br></br>
         • Collaborate with developer teams and product owners throughout various stages of the SDLC, ensuring thorough feature coverage and usability
         <br></br><br></br>
         • Utilize SQL/pgAdmin to validate data integrity and troubleshoot app issues
         </p>
         
        </div>

        {/* <div className="cities-list">
        <p className="intro-text">In 2022, I spent roughly 6 months traveling around the United States while working full time and learning to code. This is how I did it:
          </p>
          Jacksonville • Pensacola • Memphis • Wichita • Denver • Salt Lake City • Boise • Hood River • Cannon Beach • Seattle • Portland • Crescent City • Napa Valley • San Fransisco • 
          Santa Cruz • Big Sur • Santa Barbara • Los Angeles • San Diego • Mammoth Lakes • Tahoe • Salt Lake City • Jackson Hole • Zion • Las Vegas • Flagstaff • Sedona • 
          Durango • Santa Fe • Amarillo • Dallas 
        </div> */}
        <div className="details-btn-container">
          <button className="details-button" onClick={navToRoute}>
            Download Full Resume
          </button>
        </div>
      </div>
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

export default Home