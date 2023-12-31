import Header from "./Header";
import { Link, Routes, useParams } from "react-router-dom";
import Footer from "./Footer";

export default function HeroSection() {
  const productId = useParams();
  return (
    <>
      <Link to={"/products"}>Products</Link>
      <Link to={`/products/${productId}`}>Single Product</Link>
    </>
  );
}
