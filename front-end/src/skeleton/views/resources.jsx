import heroPic from '../../assets/photos/hero.jpg';

const Resources = () => {
    return (
        <div className="blog-welcome-container-image">
          <img className="blog-heroPic" src={heroPic}/>
            <div className="blog-siteName-container">
              <h1 className="blog-siteName">Adventure Awaits</h1>
            </div>
        </div>
    );
  };
  
  export default Resources;