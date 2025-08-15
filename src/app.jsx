import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/home/home";
import About from "./components/pages/about/about";
import Blog from "./components/pages/blog/blog";
import Contact from "./components/pages/contact/contact";
import Faqs from "./components/pages/faqs/faqs";
import LogIn from "./components/pages/login/login";
import Register from "./components/pages/register/register";
import ShopNow from "./components/userAction/shopNow/shopNow";
import Cart from "./components/userAction/cart/cart";
import CheckOut from "./components/pages/checkout/checkout";

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
        <Route path="register" element={<Register />} />
        <Route path="cart" element={<Cart />} />
        <Route path="shopNow" element={<ShopNow />} />
        <Route path="checkout" element={<CheckOut />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
