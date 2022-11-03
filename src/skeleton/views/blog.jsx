import BlogItems from '../../components/blogItems'
import heroPic from '../../assets/photos/hero.jpg'
import '../../styles/blogStyles.css';

const Blog = () => {
    return (
      <div className="blog-welcome-container-image">
        <img className="blog-heroPic" src={heroPic}/>
          <div className="blog-siteName-container">
            <h1 className="blog-siteName">words from the road</h1>
          </div>
        <BlogItems />
        <BlogItems />
        <BlogItems />
      </div>
      )  
    };
  
  export default Blog;