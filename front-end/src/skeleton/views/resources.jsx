import heroPic from '../../assets/photos/hero.jpg';
import SavedItems from '../../components/savedItems.jsx'
import StateList from '../../components/stateList.jsx'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectParks, fetchParks } from '../../redux/features/parksSlice';
import '../../styles/resourcesStyles.css'

const Resources = () => {
  // const dispatch = useDispatch();
  // const _parks = useSelector(selectParks);

  // useEffect(() => {
  //   dispatch(fetchParks());
  // })
  // const parks = _parks && _parks.map((park, index) => {
  //   return (
  //     <div className="result-item"> 
  //       <img src={park.images.url}></img>
  //       <div className="result-item-info"> 
  //         <p className="result-text">{park.fullName}</p>
  //       </div>
  //     </div>
  //   )
  //     <li key={index}>{park.fullName}</li>
  // });


//wasnt sure if the asyncThunk method was draininng my calls; 
//i commented out the OG code and re-wrote it as if it was a normal api call based on a click. 
//need to add a handleClick back onto the 'search' btn
  const fetchParks = async () => {
    const apiUrl = 'https://jonahtaylor-national-park-service-v1.p.rapidapi.com/parks'
    const response = await fetch(apiUrl, {
        params: {limit: 5},
        method: 'GET',
        headers: {
          'X-Api-Key': 'QMo8oekxSdeQBLy4f7uE6Xi3qdaIKbkzfiIPSKfh',
          'X-RapidAPI-Key': '5a61fdea5cmsh897482afa700670p1c35bajsnf5b82c3a86de',
          'X-RapidAPI-Host': 'jonahtaylor-national-park-service-v1.p.rapidapi.com'
        }
    });
    const data = await response.json();
    return data.data;
  };

  // const handleClick = () => {
  //   console.log(parks)
  // }

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
              {/* <p className="np-inst-text">Search and save different parks across the U.S.</p> */}
              <div className="np-input-searchbtn">
                <input className="np-search"type="text"/>
                  <StateList/>
                <button className="np-submit-button" >
                  Search
                </button>
              </div>
            </div>
            <SavedItems />
          </div>
          <div className="results-container">
            <div className="result-info-container">
              <div className="np-search-text">Insert selected Park Name - default?</div>
              <p className="np-inst-text">insert subtitle text about park</p>
              <p className="np-inst-text">insert images and other np info from api</p>
              <button className="np-submit-button">Save</button>
            </div>
            <div className="result-item-container">
              {/* <ul>{parks}</ul> */}
              <div className="result-item"> 
                <img src={heroPic}></img>
                <div className="result-item-info"> 
                  <p className="result-text">Park title</p>
                </div>
              </div>
              <div className="result-item"> 
                <img src={heroPic}></img>
                <div className="result-item-info"> 
                  <p className="result-text">Park title</p>
                </div>
              </div>
              <div className="result-item"> 
                <img src={heroPic}></img>
                <div className="result-item-info"> 
                  <p className="result-text">Park title</p>
                </div>
              </div>
              <div className="result-item"> 
                <img src={heroPic}></img>
                <div className="result-item-info"> 
                  <p className="result-text">Park title</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Resources;
