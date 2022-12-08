import React, { useState, useRef } from "react";

export default function ItemBtn({ setIncreaseBasket, setFindTotal, onAddToCart  }){
    const [count , setCount] = useState(0)
    const amountInputRef = useRef()

    const onClickHandler = (e) => {
        e.preventDefault()
        const enteredAmount = +(amountInputRef.current.value)
        console.log(enteredAmount)
        if(!enteredAmount || enteredAmount > 5 || enteredAmount < 1){
            return;
        }

        onAddToCart(enteredAmount)
    }
    return (
        <div className="flex flex-col items-center gap-4">

            <form onSubmit={onClickHandler}>


                <label className="flex gap-2">Amount

                <input type='number' ref={amountInputRef} className='w-8 ' defaultValue='0'/>

                </label>
                <button type="submit"  className='flex gap-2 pl-4 pr-6 pt-2 pb-2  text-white bg-yellow-900 rounded-3xl hover:scale-110 hover:bg-amber-800'>+ Add</button>
            </form>
            
        </div>
    )
}