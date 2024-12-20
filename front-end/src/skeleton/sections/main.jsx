//the code below was suggested by perplexity in order to remove login/logout functionlity
import { Routes, Route } from "react-router-dom";
import { Home, Blog, About, Resources, Test } from "../views";
import BlogA from "../views/blogs/blogA";
const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
        <Route path="/test" element={<Test />} />
        <Route path="/blogA" element={<BlogA />} />
      </Routes>
    </main>
  );
};

export default Main;
