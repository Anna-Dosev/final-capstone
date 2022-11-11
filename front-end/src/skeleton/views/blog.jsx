import BlogItems from '../../components/blogItems'
import heroPic from '../../assets/photos/hero.jpg'
import hiddenFLBlog from '../../assets/photos/hiddenFLBlog.png'
import sunriseZionBlog from '../../assets/photos/sunriseZionBlog.png'
import oregonCoastBlog from '../../assets/photos/oregonCoastBlog.png'
import '../../styles/blogStyles.css';

const Blog = () => {
    return (
      <div>
        <div className="blog-welcome-container-image">
          <img className="blog-heroPic" src={heroPic}/>
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
                We got lucky with sunny days ... 
              </p>
              <p className="blog-content-text">My name is Anna, and I am a roadtrip extraordinaire and aspiring full-stack web developer.
                  I spent the last six months driving across the United States while working remotely.
                  To add to the fun, I was also enrolled in a web development course and created this site as my final capstone project. 
              </p>
            </div>
          </div>
          <div className="blog-item-container">
            <div className="blog-item-text">
              <p className="blog-subtitle-text">
                I started the trail by myself in the dark ... 
              </p>
              <p className="blog-content-text">My name is Anna, and I am a roadtrip extraordinaire and aspiring full-stack web developer.
                  I spent the last six months driving across the United States while working remotely.
                  To add to the fun, I was also enrolled in a web development course and created this site as my final capstone project. 
              </p>
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
              <p className="blog-content-text">My name is Anna, and I am a roadtrip extraordinaire and aspiring full-stack web developer.
                  I spent the last six months driving across the United States while working remotely.
                  To add to the fun, I was also enrolled in a web development course and created this site as my final capstone project. 
              </p>
            </div>
          </div>
        </div>
      </div>
      )  
    };
  
  export default Blog;