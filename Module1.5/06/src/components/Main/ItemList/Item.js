import React, { useState, useContext, useEffect } from "react";
import FoodDes from "./FoodDes";
import ItemBtn from "./ItemBtn";
import CartContext from "../../../store/cart-context";

export default function Item({ name, description, price, id }){

    const cartContext = useContext(CartContext)

    const [findTotal, setFindTotal] = useState(false)

    const addToCartHandler = amount => {
        cartContext.addItem({
            id: id,
            name: name,
            amount: amount,
            price: price
        })

        // console.log(cartContext.items)
    }


    // useEffect(() => {
    //     if(findTotal){
    //         setTotal(prevState => prevState + price)
    //         setFindTotal(false)
    //     }
    // }, [findTotal])

    return(
        <ul className="w-full pt-4 pb-4   border-b-2 border-gray-700 flex justify-between">
            <FoodDes
                name= {name}
                desciption= { description }
                price= { price }
            />

            <ItemBtn 
          
                setFindTotal= {setFindTotal}
                onAddToCart={ addToCartHandler }
                
            />
        
        </ul>
    )


}