import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./components/pages/home/home";
import About from "./components/pages/about/about";
import Blog from "./components/pages/blog/blog";
import Contact from "./components/pages/contact/contact";
import Faqs from "./components/pages/faqs/faqs";
import LogIn from "./components/pages/login/login";
import Register from "./components/pages/register/register";
import ShopNow from "./components/userAction/shopNow/shopNow";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="logIn" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shopNow" element={<ShopNow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
