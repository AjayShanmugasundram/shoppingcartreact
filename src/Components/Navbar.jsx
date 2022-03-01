function Navbar(props){
  // const {Checkout,AddToCart}=props
    return(
        <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container ps-5">
          <div className="navbar-brand" href="#">
           Start Bootstrap
          </div>
          <div
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            
            <span className="navbar-toggler-icon"></span>s
          </div>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="nav-link active" aria-current="page" href="#">
                  Home
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" href="#">
                  About
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" href="#">
                  Shop
                </div>
              </li>
            </ul>
            <div className="pe-5">
            <div className="btn btn-outline-dark " onClick={props.Checkout}>🛒 Cart <span >{props.common}</span></div>
            </div>
          </div>
        </div>
      </nav>
    )
}
export default Navbar