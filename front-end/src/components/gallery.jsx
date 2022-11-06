import '../styles/galleryStyles.css';
import gallery1 from '../assets/photos/gallery1.png'
import gallery2 from '../assets/photos/gallery2.png'
import gallery3 from '../assets/photos/gallery3.png'
import gallery4 from '../assets/photos/gallery4.png'
import gallery5 from '../assets/photos/gallery5.png'

const PhotoGallery = () => {
    return (
        <div className="gallery-pics-container">
          <div className="gallery-pics">
            <img className="gallery-pic" src={gallery1} alt=""/>
          </div>
          <div className="gallery-pics">
            <img className="gallery-pic" src={gallery2} alt=""/>
          </div>
          <div className="gallery-pics">
            <img className="gallery-pic" src={gallery3} alt=""/>
          </div>
          <div className="gallery-pics">
            <img className="gallery-pic" src={gallery4} alt=""/>
          </div>
          <div className="gallery-pics">
            <img className="gallery-pic" src={gallery5} alt=""/>
          </div>
        </div>
    )
}

    export default PhotoGallery