import '../styles/galleryStyles.css';
import gallery1 from '../assets/photos/gallery1.png'
import gallery2 from '../assets/photos/gallery2.png'
import gallery3 from '../assets/photos/gallery3.png'
import gallery4 from '../assets/photos/gallery4.png'
import gallery5 from '../assets/photos/gallery5.png'

const PhotoGallery = () => {
    return (
      <div className="gallery-body">
        <div className="slider">
          <div className="slides">
            <input type="radio" name="radio-btn" id="radio1"/>
            <input type="radio" name="radio-btn" id="radio2"/>
            <input type="radio" name="radio-btn" id="radio3"/>
            <input type="radio" name="radio-btn" id="radio4"/>
            <input type="radio" name="radio-btn" id="radio5"/>
            <div className="slide first">
              <img src={gallery1} alt=""/>
            </div>
            <div className="slide">
              <img src={gallery2} alt=""/>
            </div>
            <div className="slide">
              <img src={gallery3} alt=""/>
            </div>
            <div className="slide">
              <img src={gallery4} alt=""/>
            </div>
            <div className="slide">
              <img src={gallery5} alt=""/>
            </div>
            <div className="nav-auto">
              <div className="auto-btn1"></div>
              <div className="auto-btn2"></div>
              <div className="auto-btn3"></div>
              <div className="auto-btn4"></div>
              <div className="auto-btn5"></div>
            </div>
          </div>
          <div className="nav-manual">
            <label htmlFor="radio1" className="manual-btn"></label>
            <label htmlFor="radio2" className="manual-btn"></label>
            <label htmlFor="radio3" className="manual-btn"></label>
            <label htmlFor="radio4" className="manual-btn"></label>
            <label htmlFor="radio5" className="manual-btn"></label>
          </div>
        </div>
      </div>






        // <div className="gallery-pics-container">
        //   <div className="gallery-pics">
        //     <img className="gallery-pic" src={gallery1} alt=""/>
        //   </div>
        //   <div className="gallery-pics">
        //     <img className="gallery-pic" src={gallery2} alt=""/>
        //   </div>
        //   <div className="gallery-pics">
        //     <img className="gallery-pic" src={gallery3} alt=""/>
        //   </div>
        //   <div className="gallery-pics">
        //     <img className="gallery-pic" src={gallery4} alt=""/>
        //   </div>
        //   <div className="gallery-pics">
        //     <img className="gallery-pic" src={gallery5} alt=""/>
        //   </div>
        // </div>
    )
}

    export default PhotoGallery