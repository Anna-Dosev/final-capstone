import { Routes, Route } from 'react-router-dom';
import { Home, Blog, Quiz, Resources, LogOut, LogIn } from '../views';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </main>
  );
};

export default Main;