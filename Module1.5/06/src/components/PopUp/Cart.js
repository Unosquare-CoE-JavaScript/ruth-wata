import React, {useContext} from "react";
import Modal from "./Modal";
import CartContext from "../../store/cart-context";
import CartMeals from "./CartMeals";



export default function Cart({ hideCartHandler }){

    const { totalAmount, items, removeItem, addItem } = useContext(CartContext)

    const hideHandler = () => {
        hideCartHandler()
    }


    const cartItemRemoveHandler = (id) => {
        removeItem(id)
    }

    
    const cartItemAddHandler = (item) => {
        addItem({ ...item, amount: 1 });
    };

    const showMealsInCart = items.map(item => (
        <CartMeals 
           name = { item.name }
           amount = { item.amount }
           id = { item.id }
           price = { item.price }
           key = { item.id }
           onRemove = { cartItemRemoveHandler.bind(null, item.id) }
          onAdd = { cartItemAddHandler.bind(null, item) }
        />
    ))

    return (
        <Modal>


            <section className="z-20 border-4 rounded-xl bg-white w-1/2 h-1/2 pl-4 pr-4 pt-4 pb-6 flex flex-col items-between justify-between">

                <div className="">

                   {showMealsInCart} 
                </div>
                

                <div>

                    <div className="w-full border-4 flex justify-between mb-4">
                        <h3>Total Amount</h3>
                        <span>${totalAmount.toFixed(2)}</span>
                    </div>

                    <div className="w-full border-4 flex justify-between">
                        <button onClick={ hideHandler }>Close</button>
                        { totalAmount && <button>Order</button>}
                    </div>
                </div>
                

            </section> 
        </Modal>
    )
}