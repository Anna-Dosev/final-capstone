import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/features/userSlice';
import navbarData from './mocks/navbarData.json';
import Header from './skeleton/sections/header';
import Main from './skeleton/sections/main';


function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const user = useSelector(selectUser);
  const isLoggedIn = !!user.email
  console.log('a', isLoggedIn)

  return (
    <div>
        <Header isLoggedIn={isLoggedIn} data={navbarData}/>
        <Main />
    </div>
    )

  // if (!isLoggedIn) {
  // return (
  //   <div>
  //     <Header data={navbarData} setIsLoggedIn={setIsLoggedIn}/>
  //     <Main setIsLoggedIn={setIsLoggedIn}/>
  //   </div>
  // );
  // } else {
  //   return (
  //     <div>
  //     <Header data={navbarData} setIsLoggedIn={setIsLoggedIn}/>
  //     <Main setIsLoggedIn={setIsLoggedIn}/>
  //   </div>
  //   )
  // }
}

export default App;
