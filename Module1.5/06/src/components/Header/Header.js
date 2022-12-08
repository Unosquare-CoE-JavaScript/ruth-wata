import React from "react";
import HeaderBtn from "./HeaderBtn/HeaderBtn";


export default function Header({ showCartHandler }){

    return (
        <header className="h-20 w-full flex justify-between p-4 pr-20 pl-20 bg-orange-900">
            <h2 className="text-white text-2xl">ReactMeals</h2>

            <HeaderBtn 
            showCartHandler= {showCartHandler}
           
            />
        </header>
    )

}