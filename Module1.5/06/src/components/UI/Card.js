import React from "react";


export default function Card({ children }){

    return (
        <div className="p-4 shadow-lg rounded-lg ">
            { children }

        </div>
    )
}