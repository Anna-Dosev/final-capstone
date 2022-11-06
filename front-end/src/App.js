import { useState } from 'react';
import navbarData from './mocks/navbarData.json';
import Header from './skeleton/sections/header';
import Main from './skeleton/sections/main';
// import './styles/loginComponentStyles.css'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
        <Header data={navbarData}/>
        <Main setIsLoggedIn={setIsLoggedIn}/>
    </div>
    )

  // if (!isLoggedIn) {
  // return (
  //   <div>
  //     <Header data={navbarData}/>
  //     <Main setIsLoggedIn={setIsLoggedIn}/>
  //     {/* <Login setIsLoggedIn={setIsLoggedIn}/> */}
  //   </div>
  // );
  // } else {
  //   return (
  //     <div>
  //     <Header data={navbarData}/>
  //     <Main setIsLoggedIn={setIsLoggedIn}/>
  //   </div>
  //   )
  // }
}

export default App;
