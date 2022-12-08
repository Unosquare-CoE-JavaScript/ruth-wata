import React, {useState, useEffect } from "react";
// import { DUMMY_MEALS } }from "../../../data/dummyMeals";
import Item from "./Item";

export default function ItemList({  }){
    const [meals, setMeals] = useState([])
    
    useEffect(() =>{

        const data = async() =>{

            try {
                const res = await fetch('https://reatmeal-88eff-default-rtdb.firebaseio.com/meals.json')
                const data = await res.json()
                setMeals(Object.values(data))
                console.log()
            } catch (err) {
                console.log(err)
            }
       
        }

         data()
    }, [])
    



    const mealList = meals.map(meal => (
        <Item
            name = {meal.name}
            description = {meal.description}
            price = {meal.price}
            key= {meal.id}
            id = {meal.id}
        />
    ))

    return(
        <section className="border-4 w-3/5 rounded-xl bg-gray-200 pr-6 pl-6">

            {mealList}

        </section>
    )

    


}