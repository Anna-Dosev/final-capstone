import '../styles/blogStyles.css';

const BlogItems = () => {
    return (
    <div className="blog-container">
      <div className="blog-item">
        <div className="blog-item-pic"> 
          insert image
        </div>
        <div className="blog-item-text"> 
          <h2>Blog Title</h2>
          <p>preview text</p>
        </div>
      </div>
      <div className="blog-item">
        <div className="blog-item-pic"> 
          insert image
        </div>
        <div className="blog-item-text">
          <h2>Blog Title</h2> 
          <p>preview text</p>
        </div>
      </div>
    </div>
    )
}

export default BlogItems;