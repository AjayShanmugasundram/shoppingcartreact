import React from "react";

export default function Product(props) {
  const { producttocomp,AddToCart ,removetoCart,common} = props;

  return (
      <div className="col-md-3 text-center">
        <div className="card">
          <img
            src={producttocomp.img.Image}
            className="card-img-top"
            alt=""
          ></img>
          <div className="card-body">
            <h5 className="card-title"> {producttocomp.Name}</h5>
            <p className="card-text">
              <strike>{producttocomp.Price1}</strike>{" "}
              <span>{producttocomp.Pricerange}</span>
              <span>{producttocomp.Price2}</span>
            </p>
            <button className="btn btn-primary" disabled={common <= 0}onClick={removetoCart}>{producttocomp.Button1}</button>
            {" "}
          
            <span style={{marginLeft:"1em",marginRight:"1em"}}>{common}</span>
            
            {" "}
            <button className="btn btn-primary"  onClick={AddToCart}>{producttocomp.Button}</button>
            {/* <span>{this.state.intialvalue}</span> */}
          </div>
        </div>
        <br />
      </div>
    
  );
}
