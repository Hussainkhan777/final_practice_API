import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import { Allproducts } from "./components/Allproducts";
import { SingleProduct } from "./components/SingleProduct";

export default function App() {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path={"/"} element={<HeroSection />}></Route>
        <Route path={"/products"} element={<Allproducts />}></Route>
        <Route path={"/products/:id"} element={<SingleProduct />}></Route>
      </Routes>
      {/* <Footer />
      <Allproducts /> */}
    </div>
  );
}
