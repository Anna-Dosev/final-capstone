import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Home, Blog, Quiz, RouteTimeline, Resources, LogOut, LogIn } from '../views';

const Main = ( {setIsLoggedIn} ) => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/routeTimeline" element={<RouteTimeline />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </main>
  );
};

export default Main;