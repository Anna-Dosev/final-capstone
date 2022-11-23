import heroPic from '../../assets/photos/hero.jpg';
import ecola from '../../assets/photos/ecola.png';
import SavedItems from '../../components/savedItems.jsx'
import StateList from '../../components/stateList.jsx'
import { useState } from 'react';
import '../../styles/resourcesStyles.css'

const {REACT_APP_KEY} = process.env

const Resources = () => {
  const [parks, setParks] = useState();
  const [q, setQ] = useState('');
  const [parkInfo, setParkInfo] = useState();
  const [sc, setSc] = useState();


  const handleQ = (e) => setQ(e.target.value);
  const handleState = (e) => setSc(e.target.value);


  const getParks = async () => {
    const apiUrl = `https://jonahtaylor-national-park-service-v1.p.rapidapi.com/parks?limit=10&q=${q}&stateCode=${sc}`
    const response = await fetch(apiUrl, {
        params: {limit: '10'},
        method: 'GET',
        headers: {
          'X-Api-Key': REACT_APP_KEY,
          'X-RapidAPI-Key': '5a61fdea5cmsh897482afa700670p1c35bajsnf5b82c3a86de',
          'X-RapidAPI-Host': 'jonahtaylor-national-park-service-v1.p.rapidapi.com'
        }
    });
    const data = await response.json();

    setParks(data.data.map((park, index) => {
        return (
          <div className="result-item"> 
            <img className="result-item-img" src={park.images[0].url}></img>
            <div className="result-item-info"> 
              <p onClick={() => setParkInfo(park)} className="result-text">{park.name}</p>
            </div>
          </div>
        )
      })
    );
    console.log(data.data);
  
  };

  const handleClick1 = () => {
    (getParks())
  }


    return (
      <div>
        <div className="rec-welcome-container-image">
          <img className="rec-heroPic" src={heroPic}/>
            <div className="rec-siteName-container">
              <h1 className="rec-siteName">Adventure Awaits</h1>
            </div>
        </div>
        <div className="blog-item-container-2">
          <div className="blog-item-2">
              <img className="blog-image-2" src={ecola} alt=""/>
            </div>
            <div className="blog-item-text">
              <p className="blog-subtitle-text">
                <b>Featured:</b> Ecola State Park
              </p>
              <p className="blog-content-text">Wrapping around Tillamook Head, between Seaside and Cannon Beach, Ecola State Park stretches along 9 miles of coastline and offers outstanding sightseeing and recreation opportunities combined with a storied past.  
                Though the scenic and hiking opportunities may be the main allure, the diversity of outdoor recreation including picnicking, tidepooling, surfing and wildlife observation make Ecola State park a destination year round.
                <br></br><br></br>
                Sightseeing opportunities begin the moment you enter the park.  The entrance road meanders through a lush Sitka spruce forest, eventually opening up to a grassy bluff offering breathtaking views of the Pacific Ocean.  
                You may recognize the viewpoint south, a scene from many published photographs.  Sea stacks punctuate the long sweep of shoreline south, backed by the town of Cannon Beach and ridge of coastal mountains above. 
                <br></br><br></br>
                <a target="_blank" href="https://stateparks.oregon.gov/index.cfm?do=park.profile&parkId=136">Learn more!</a>
              </p>
            </div>
          </div>
        <div className="np-container">
          <div className="np-search-save-container">
            <div className="np-search-container">
              <div className="np-input-searchbtn">
                <form name="search">
                  <input className="np-search" type="text" name="np-search" onChange={handleQ}/>
                  <StateList handleState={handleState}/>
                </form>
                <button className="np-submit-button" type="submit" onClick={getParks}>
                  Search
                </button>
              </div>
              <p className="np-inst-text">Find parks and places registered through the U.S. National Parks System,
              and save them for future reference. <br></br><br></br>Happy exploring!</p>
            </div>
            <SavedItems />
          </div>
          <div className="results-container">
            <div className="result-info-container">
              {parkInfo && <>
              <div className="np-search-text">{parkInfo.fullName}</div>
              <p className="np-inst-text">insert subtitle text about park</p>
              <p className="np-inst-text">{parkInfo.description}</p>
              <button className="np-submit-button">Save</button>
              </>}
            </div>
            <div className="result-item-container">
              {parks}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Resources;
