import React from "react";


export default function FoodDes({ name, desciption, price }){
    return (

        <li className="flex flex-col gap-2">
            <h5 className="text-lg">{name}</h5>
            <span>{desciption}</span>
            <span className="text-amber-300 text-lg">${price}</span>
        
        </li>
    )

}