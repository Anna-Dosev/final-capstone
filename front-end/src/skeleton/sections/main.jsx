import { Routes, Route } from 'react-router-dom';
import { Home, Blog, Quiz, Routetimeline, Resources, LogOut, LogIn } from '../views';

const Main = ( {isLoggedIn} ) => {
  
  if(isLoggedIn) {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/routetimeline" element={<Routetimeline />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </main>
  );
  } else if (!isLoggedIn) {
    return (
      <main>
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/resources" element={<LogIn />} />
          <Route path="/routetimeline" element={<LogIn />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </main>
    )
  }
};

export default Main;