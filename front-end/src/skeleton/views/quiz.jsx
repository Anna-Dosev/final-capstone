import '../../styles/quizStyles.css';
import heroPic from '../../assets/photos/hero.jpg'

const Quiz = () => {
    return (
        <div className="welcome-container-image">
            <img className="heroPic" src={heroPic}/>
            <div className="siteName-container">
              <h1 className="siteName">Plan your adventure</h1>
            </div>
        </div>
    );
  };
  
  export default Quiz;

  // Removed from data file
  // {
  //   "className": "navs__secondary",
  //   "href": "/quiz",
  //   "id": 3,
  //   "onLoggedIn": true,
  //   "onLoggedOut": true,
  //   "text": "Quiz"
  // },