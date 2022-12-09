import React, { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import CartProvider from "./store/CartProvider";
import Cart from "./components/PopUp/Cart";


function App() {


  const [basket, setBasket] = useState(0)
  const [total, setTotal] = useState(0  )

  const [showCart, setShowCart] = useState(false)

  const showCartHandler = () =>{
    setShowCart(true)
  }


  const hideCartHandler = () => {
    setShowCart(false)
  }
  return (

    <CartProvider>
        { showCart && <Cart
          hideCartHandler= { hideCartHandler }

        />}
        <Header
        showCartHandler = { showCartHandler }
        hideCartHandler = { hideCartHandler }
        />
        <Main/>
      
    </CartProvider>
    
  );
}

export default App;
