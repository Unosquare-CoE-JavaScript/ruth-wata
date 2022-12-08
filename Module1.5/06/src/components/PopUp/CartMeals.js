import React, { useContext, useEffect } from "react";
import CartContext from "../../store/cart-context";


export default function CartMeals({ name, amount, id, price, onRemove, onAdd }){

    const cartContext = useContext(CartContext)
    // const addMealHandler = () => {
    //     cartContext.items.map(item => {
    //         if(item.name === name) {
    //             cartContext.totalAmount += item.price
    //             return item.amount += 1
    //         }
    //     })

        

    //     console.log(cartContext.items)
        
    // }

   console.log(cartContext.items)

    const removeMealHandler = () => {

    }

    return(
        <div className="border-b-2 border-gray-600 pb-4 mb-4 flex justify-between">
            <div>

              <h4>{ name }</h4>
              <span>${ price.toFixed(2) }</span>
                <span>x{ amount }</span>  
            </div>
            

            <div className="flex gap-2 items-center">

                <button className="border-2 pr-4 pl-4 rounded-xl bg-amber-100 hover:bg-amber-200 h-3/4" onClick={ onRemove }>-</button>
                <button className="border-2 pr-4 pl-4 rounded-xl bg-amber-100 hover:bg-amber-200 h-3/4" onClick={ onAdd }>+</button>
            </div>
            


        
        </div>
    )
}