import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./components/pages/home/home";
import About from "./components/pages/about/about";
import Blog from "./components/pages/blog/blog";
import Contact from "./components/pages/contact/contact";
import Faqs from "./components/pages/faqs/faqs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faqs" element={<Faqs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
