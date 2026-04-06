import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MenuPage from "./components/MenuPage";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {

  const [cart, setCart] = useState([]);

  function addToCart(item){
    setCart([...cart, item]);
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu/:id" element={<MenuPage addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;