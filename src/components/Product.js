import React from "react";
import { Link } from "react-router-dom";
// export default function Product({
//   image,
//   title,
//   price,
//   description,
//   category,
// }) {
//   return (
//     <div>
//       <div className="col-sm-12 pt-4 pb-4 col-md-6 col-lg-3">
//         <div className="card" style={{ width: "18rem" }}>
//           <img className="card-img-top" src={image} alt="Card image cap" />
//           <div className="card-body">
//             <h5 className="card-title">{title}</h5>
//             <p className="card-text">Price {price}</p>
//             {/* <Link to={`/products/${p.id}`} className="btn btn-dark">Visit Product</Link> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// Assuming you have a product object with properties like id, title, price, and image
const Product = ({ id, title, price, image }) => {
  // console.log("id is : ", id);
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Price: {price}</p>
          <Link to={`/products/${id}`} className="btn btn-dark">
            Visit Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
