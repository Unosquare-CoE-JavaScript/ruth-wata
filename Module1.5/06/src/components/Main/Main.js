import React from "react";
import MainMessage from "./MainMessage/MainMessage";
import ItemList from "./ItemList/ItemList";
import mealImage from '../../assets/meals.jpg'



export default function Main(){
    return (

        <div className="flex flex-col justify-center  items-center gap-10 ">
            <div className="w-full h-96">
                <img src={mealImage} alt='meal image' className="w-full h-full "/>
            </div>
            
            <MainMessage />

            <ItemList/>

        </div>
        
    )

}