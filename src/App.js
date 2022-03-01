
import Footer from "./Components/Footer";
import Title from "./Components/Title";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Data from "./Components/Data";
import Checkout from "./Components/Checkout";
import { useState } from "react";


function App() {
  const { product } = Data;
  const [Checkout1,setCheckout1]=useState(false)
const [common,setCommon]=useState(0)
  
  const handleCheckout = () => {
    setCheckout1(!Checkout1);
  };
 
  const addToCart=()=>{
setCommon(common+1)
console.log()}

const removetoCart=()=>{
  setCommon(common-1)
  
}



  return (
    <div>
      
      <Checkout Checkout={Checkout1}></Checkout>
      <Navbar  Checkout={handleCheckout} common={common}></Navbar>
      <Title></Title>
      <Card product1={product} common={common} AddToCart={addToCart} removetoCart={removetoCart}></Card>
      <Footer></Footer>
    </div>
  );
}

export default App;
