import React from "react";

export default function DisplayDetails({ username, age }) {


    return(
            <div className='border-2 border-gray-400 rounded-sm indent-2 flex'>
                <span>{ username }</span>
                { age && <span>({ age } years old)</span>}
            </div>
        
    )
}