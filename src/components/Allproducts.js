import Product from "./Product";
import React, { useEffect } from "react";
import { APIs } from "../const/APIs";
import axios from "axios";
import { useExamContext } from "../context/FinalExamContext";
const getAllProducts = APIs.Ecommerce.Products.getAllProducts;
const getSingleProduct = APIs.Ecommerce.Products.getSingleProduct;

const Allproducts = () => {
  const { products, setProducts } = useExamContext();
  const fetchAllProducts = async function () {
    await axios
      .get(getAllProducts)
      .then((res) => {
        setProducts(res.data);
        console.log("Response is : ", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchAllProducts();
  }, []);
  return (
    <>
      <h1 className="text-center">All Products</h1>
      <div className="container">
        {" "}
        <div className="row">
          {products.map((p) => {
            return (
              <Product
                key={p.id}
                id={p.id}
                image={p.image}
                title={p.title}
                price={p.price}
                description={p.description}
                category={p.category}
              />
            );
          })}
        </div>
      </div>
      )
    </>
  );
};

export { Allproducts };
