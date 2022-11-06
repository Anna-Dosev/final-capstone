import Route from '../../components/route';
import PhotoGallery from '../../components/gallery';
import heroPic from '../../assets/photos/hero.jpg'
import '../../styles/routeStyles.css';

const RouteTimeline = () => {
    return (
        <div>
          <div className="blog-welcome-container-image">
            <img className="blog-heroPic" src={heroPic}/>
              <div className="blog-siteName-container">
                <h1 className="blog-siteName">My Route and Timeline</h1>
              </div>
          </div>
          <Route />
          <PhotoGallery />
       </div>
    );
  };
  
  export default RouteTimeline;