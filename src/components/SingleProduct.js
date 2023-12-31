import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { APIs } from "../const/APIs";

export const SingleProduct = () => {
  const { id: productId } = useParams();
  console.log("params is : ", productId);
  const [product, setProduct] = useState();

  const fetchProductById = async () => {
    await axios
      .get(APIs.Ecommerce.Products.getSingleProduct + `/${productId}`)
      .then((res) => {
        console.log("Hello");
        console.log(res);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    console.log("I am calling");
    fetchProductById();
  }, []);

  return (
    <>
      <div className="div">
        <div className="row">
          <div className="col-sm-12 col-lg-3 col-xl-3 col-md-12">
            <img
              width={400}
              height={400}
              className={""}
              src={product?.image}
              alt=""
            />
          </div>
          <div className="col-sm-12 flex align-items-center justify-content-center col-lg-8 col-xl-8 col-md-12 ">
            <h3 className={""}>{product?.title}</h3>
            <h1 className={""}>Price: Rs.${product?.price}</h1>
            <p className={"align-items-center justify"}>
              {product?.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
