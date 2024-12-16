import heroPic from '../../assets/photos/hero.jpg'
import Blog1 from '../../components/blog-content/blog1'
import Blog2 from '../../components/blog-content/blog2'
import Blog3 from '../../components/blog-content/blog3'
import Blog4 from '../../components/blog-content/blog4'
import Blog5 from '../../components/blog-content/blog5'
import hiddenFLBlog from '../../assets/photos/hiddenFLBlog.png'
import sunriseZionBlog from '../../assets/photos/sunriseZionBlog.png'
import oregonCoastBlog from '../../assets/photos/oregonCoastBlog.png'
// import route395Blog from '../../assets/photos/rote395Blog.png's
import '../../styles/blogStyles.css';

const Test = () => {
    return (
      <div>
        <div className="blog-welcome-container-image">
          <img className="blog-heroPic" src={heroPic} alt=""/>
            <div className="blog-siteName-container">
              <h1 className="blog-siteName">this is a test page</h1>
            </div>
        </div>
      </div>
      )  
    };
  
  export default Test;