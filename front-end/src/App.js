import { useSelector } from 'react-redux';
import { selectUser } from './redux/features/userSlice';
import { selectIsLoggedIn } from './redux/features/isLoggedInSlice';
import navbarData from './mocks/navbarData.json';
import Header from './skeleton/sections/header';
import Main from './skeleton/sections/main';


function App() {

  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log('a', isLoggedIn)

  return (
    <div>
        <Header data={navbarData}/>
        <Main/>
    </div>
    )
}

export default App;
