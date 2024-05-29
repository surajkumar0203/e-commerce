import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import AddToCart from "./components/AddToCart";
import Contact from "./components/Contact";
import ProductContent from "./components/ProductContent";
import { createContext,useState } from "react";
import { Route, Routes } from "react-router-dom";

const Appstate = createContext();
const App = () => {
  const [data, setData] = useState([]);
  const [addCart,setAddCart] = useState(0);
 
  return (
    <>
      <Appstate.Provider value={{data,setData,addCart,setAddCart}}>
        <Header />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<ProductContent />} />
            <Route path="/addtocart" element={<AddToCart />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Appstate.Provider>
    </>
  )
}

export default App
export {Appstate}