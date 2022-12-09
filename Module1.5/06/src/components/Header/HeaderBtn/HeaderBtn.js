import React, {useContext, useState} from "react";
import CartIcon from "../CartIcon/CartIcon";
import AuthContext from "../../../store/cart-context";
// import TotalBox from "../../PopUp/TotalBox";

export default function HeaderBtn({ showCartHandler }){

    const { items } = useContext(AuthContext)
    const [checkout, setCheckout] = useState(false)

    const totalAmount = items.length && items.map(item => item.amount).reduce((a,b) => a + b)

    console.log(totalAmount)

    const checkoutHandler = () => {
        showCartHandler()
    }
    return(
        <>
            <div className="flex gap-2 pl-14 pr-14 pt-2 pb-2 h-full text-white bg-yellow-900 rounded-3xl hover:cursor-pointer hover:bg-red-900" onClick={ checkoutHandler }>

                    <CartIcon/>

                    <span className="flex items-center">Your Cart</span>

                    <span className="bg-amber-700 pl-2 pr-2 rounded-3xl flex items-center justify-center">{ items.length ? totalAmount : 0}</span>
                </div>
            
            {/* {checkout && <TotalBox/>} */}
        
        </>
           
            
        
 
    )


}