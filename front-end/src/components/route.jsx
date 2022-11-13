import '../styles/routeStyles.css';
import route from '../assets/photos/route.png'
import dot1 from '../assets/photos/dots/dot1.png'
import dot2 from '../assets/photos/dots/dot2.png'
import dot3 from '../assets/photos/dots/dot3.png'


const Route = () => {
    return (
        <div className="route-container">
          <h1 className="route-header">
              Route and Timeline
          </h1>
          <div className="route-info-boxes">
            <div className="info-box">11,500 miles</div>
            <div className="info-box">174 days</div>
            <div className="info-box">19 states</div>
          </div>
          <div className="cities-list">
              Jacksonville • Pensacola • Memphis • Wichita • Denver • Salt Lake City • Boise • Hood River • Cannon Beach • Seattle • Portland • Crescent City • Napa Valley • San Fransisco • 
              Santa Cruz • Big Sur • Santa Barbara • Los Angeles • San Diego • Mammoth Lakes • Tahoe • Salt Lake City • Jackson Hole • Zion • Las Vegas • Flagstaff • Sedona • 
              Durango • Santa Fe • Amarillo • Dallas 
          </div>
          <div className="map-container">
            <div className="map-image">
              <img src={route} alt=""/>
            </div>
            <div className="map-elements">
                <div className="map-keys">
                  <img src={dot2} alt=""/>
                  <p className="map-text">Initial route from Jax Beach to Cannon Beach <br/> Ten days from coast to coast </p>
                </div>
                <div className="map-keys">
                  <img src={dot1} alt=""/>
                  <p className="map-text">Main backbone of the route <br/> The time spent in one place varied from one night to four weeks</p>
                </div>
                <div className="map-keys">
                  <img src={dot3} alt=""/>
                  <p className="map-text">Weekend trips and noteable pit-stops<br/> Mt. Rainer • Lake Tahoe • Tetons • Zion</p>
                </div>
            </div>
          </div>
        </div>
    )
}

export default Route;