import Data from "./Data";
function Checkout(props) {
  const { Checkout } = props;
  return (
    <div>
      {Checkout ? (
        <div>
          <div>
            
              <div className="container">
                <h4>
                  Cart
                  <span className="price" style={{ color: "black" }}>
                    <i className="fa fa-shopping-cart"></i>
                    <b>5</b>
                  </span>
                </h4>
                <p>
                  {Data.product[0].Name} <span className="price">{Data.product[0].Price2}</span>
                </p>
                <p>
                {Data.product[1].Name} <span className="price">{Data.product[1].Price2}</span>
                </p>
                <p>
                {Data.product[2].Name} <span className="price">{Data.product[2].Price2}</span>
                </p>
                <p>
                {Data.product[3].Name} <span className="price">{Data.product[3].Price2}</span>
                </p>
                <p>
                {Data.product[4].Name} <span className="price">{Data.product[4].Price2}</span>
                </p>
                <hr></hr>
                <p>
                  Total{" "}
                  <span className="price" style={{ color: "black" }}>
                    <b>$188</b>
                  </span>
                </p>
              </div>
           
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
export default Checkout;
