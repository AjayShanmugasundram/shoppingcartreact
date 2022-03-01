import React from "react";
import Product from "./Product";

export default function Card(props) {
  const { product1,AddToCart,removetoCart ,common} = props;
  return (
    <div>
  
      <div className="row mt-5">
        {product1.map((i) => (
          <Product key={i.id} producttocomp={i} AddToCart={AddToCart} common={common} removetoCart={removetoCart}></Product>
        ))}
      </div>
    </div>
  );
}
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/AjayShanmugasundram/empty.git
// git push -u origin main