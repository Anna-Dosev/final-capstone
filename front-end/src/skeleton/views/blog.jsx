import heroPic from '../../assets/photos/hero.jpg'
import Blog1 from '../../components/blog-content/blog1'
import Blog2 from '../../components/blog-content/blog2'
import Blog3 from '../../components/blog-content/blog3'
import Blog4 from '../../components/blog-content/blog4'
import Blog5 from '../../components/blog-content/blog5'
import hiddenFLBlog from '../../assets/photos/hiddenFLBlog.png'
import sunriseZionBlog from '../../assets/photos/sunriseZionBlog.png'
import oregonCoastBlog from '../../assets/photos/oregonCoastBlog.png'
import highway395Blog from '../../assets/photos/highway395Blog.png'
import altaBlog from '../../assets/photos/altaBlog.png'
import '../../styles/blogStyles.css';

const Blog = () => {
    return (
      <div>
        <div className="blog-welcome-container-image">
          <img className="blog-heroPic" src={heroPic} alt=""/>
            <div className="blog-siteName-container">
              <h1 className="blog-siteName">words from the road</h1>
            </div>
        </div>
        <div className="blog-container">
          <div className="blog-item-container">
            <div className="blog-item">
              <div className="blog-item-visual">
                <img className="blog-image" src={oregonCoastBlog} alt=""/>
                <h3 className="blog-title-text">The Oregon Coast</h3>
              </div>
            </div>
            <div className="blog-item-text">
              <p className="blog-subtitle-text">
                Graced with sunny days ... 
              </p>
              <Blog1/>
            </div>
          </div>
          <div className="blog-item-container">
            <div className="blog-item-text">
              <p className="blog-subtitle-text">
                I started the trail by myself in the dark ... 
              </p>
              <Blog2/>
            </div>
            <div className="blog-item">
              <div className="blog-item-visual">
                <img className="blog-image" src={sunriseZionBlog} alt=""/>
                <h3 className="blog-title-text">Sunrise in Zion</h3>
              </div>
            </div>
          </div>
          <div className="blog-item-container">
            <div className="blog-item">
              <div className="blog-item-visual">
                <img className="blog-image" src={hiddenFLBlog} alt=""/>
                <h3 className="blog-title-text">Hidden Florida</h3>
              </div>
            </div>
            <div className="blog-item-text">
              <p className="blog-subtitle-text">
                Springs are best seen in the summer ...   
              </p>
              <Blog3/>
            </div>
          </div>
          <div className="blog-item-container">
            <div className="blog-item-text">
              <p className="blog-subtitle-text">
              The Road to Mount Whitney  
              </p>
              <Blog4/>
            </div>
            <div className="blog-item">
              <div className="blog-item-visual">
                <img className="blog-image" src={highway395Blog} alt=""/>
                <h3 className="blog-title-text">U.S. Route 395</h3>
              </div>
            </div>
          </div>
          <div className="blog-item-container">
            <div className="blog-item">
              <div className="blog-item-visual">
                <img className="blog-image" src={altaBlog} alt=""/>
                <h3 className="blog-title-text">Alta Meadows</h3>
              </div>
            </div>
            <div className="blog-item-text">
              <p className="blog-subtitle-text">
                Gaining Alta-tude  
              </p>
              <Blog5/>
            </div>
          </div>
        </div>
      </div>
      )  
    };
  
  export default Blog;