import pnw1 from '../assets/photos/pnw/pnw1.png'
import pnw3 from '../assets/photos/pnw/pnw3.png'
import pnw4 from '../assets/photos/pnw/pnw4.jpg'
import pnw5 from '../assets/photos/pnw/pnw5.png'
import cal1 from '../assets/photos/cal/cal1.png'
import cal2 from '../assets/photos/cal/cal2.png'
import cal3 from '../assets/photos/cal/cal3.png'
import cal5 from '../assets/photos/cal/cal5.png'
import utah1 from '../assets/photos/utah/utah1.png'
import utah2 from '../assets/photos/utah/utah2.png'
import utah3 from '../assets/photos/utah/utah3.png'
import utah4 from '../assets/photos/utah/utah4.png'
import sw1 from '../assets/photos/sw/sw1.png'
import sw2 from '../assets/photos/sw/sw2.png'
import sw3 from '../assets/photos/sw/sw3.png'
import sw4 from '../assets/photos/sw/sw4.png'
import '../styles/galleryStyles.css';

const Gallery = () => {
    return (
        <div>
          <h1 className="route-header">Photo Gallery</h1>
          <p className="gallery-subtitle">THE PACIFIC NORTHWEST</p>
          <div className="photos">
            <div className="pnw-photos">
                <img className="photo" src={pnw1} alt=""/>
                <img className="photo" src={pnw3} alt=""/>
                <img className="photo" src={pnw4} alt=""/>
                <img className="photo" src={pnw5} alt=""/>
            </div>
            <p className="gallery-subtitle">CALIFORNIA</p>
            <div className="pnw-photos">
                <img className="photo" src={cal1} alt=""/>
                <img className="photo" src={cal3} alt=""/>
                <img className="photo" src={cal2} alt=""/>
                <img className="photo" src={cal5} alt=""/>
            </div>
            <p className="gallery-subtitle">UTAH + WYOMING</p>
            <div className="pnw-photos">
                <img className="photo" src={utah1} alt=""/>
                <img className="photo" src={utah2} alt=""/>
                <img className="photo" src={utah3} alt=""/>
                <img className="photo" src={utah4} alt=""/>
            </div> 
            <p className="gallery-subtitle">SOUTHWESTERN U.S.A.</p>
            <div className="pnw-photos">
                <img className="photo" src={sw1} alt=""/>
                <img className="photo" src={sw2} alt=""/>
                <img className="photo" src={sw3} alt=""/>
                <img className="photo" src={sw4} alt=""/>
            </div> 
          </div>
        </div>
    )
}

export default Gallery;