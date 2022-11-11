import heroPic from '../../assets/photos/hero.jpg';
import SavedItems from '../../components/savedItems.jsx'
import { useSelector } from 'react-redux';
import { selectParks } from '../../redux/features/parksSlice';
import '../../styles/resourcesStyles.css'

const Resources = () => {

  const _parks = useSelector(selectParks);

  const parks = _parks && _parks.map((park, index) => {
    return <li key={index}>{park}</li>;
  });

    return (
      <div>
        <div className="rec-welcome-container-image">
          <img className="rec-heroPic" src={heroPic}/>
            <div className="rec-siteName-container">
              <h1 className="rec-siteName">Adventure Awaits</h1>
            </div>
        </div>
        <div className="np-container">
          <div className="np-search-save-container">
            <div className="np-search-container">
              <div className="np-search-text">Search National Parks</div>
              {/* <p className="np-inst-text">some sample text/instructions about the API search</p> */}
              <input className="np-search"type="text"/>
            </div>
            <SavedItems />
          </div>
          <div className="np-item-container">
            <div className="np-item">
              <img className="np-image" src='' alt="api generated img"/>
            </div>
            <div className="y-wrap">
              <ul>{parks}</ul>
            </div>
            {/* <div className="np-text-container">
              <p className="np-title-text">
                  Horseshoe Canyon (sample) 
              </p>
              <p className="blog-content-text">Horseshoe Canyon contains some of the most significant rock art in North America. The Great Gallery, the best known panel in Horseshoe Canyon, includes well-preserved, life-sized figures with intricate designs. 
              Other impressive sights include spring wildflowers, sheer sandstone walls and mature cottonwood groves along the intermittent stream in the canyon bottom. Horseshoe Canyon was added to Canyonlands National Park in 1971.
              </p>
              <button className="np-save-button" >
                Save
              </button>
            </div> */}
          </div>
        </div>
      </div>
    );
  };
  
  export default Resources;