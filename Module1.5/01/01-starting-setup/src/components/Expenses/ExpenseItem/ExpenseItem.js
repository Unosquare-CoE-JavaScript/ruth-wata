import React, { useState } from "react";
import './ExpenseItem.css'

export default function ExpenseItem({  title, amount, date }) {
    
    const month = date.toLocaleString('en-US', { month: 'long' })
    const day = date.toLocaleString('en-US', { day: '2-digit' })
    const year = date.getFullYear()

    const [titleChanged, setTitleChanged] = useState('')
    const handleClick = () => {
        setTitleChanged(prevState => prevState === title? 'updated': title)
    }

  
    return(
        <div className="expense-item">
            <div>
                <div>{ month }</div>
                <div>{ day }</div>
                <div>{ year }</div>
            </div>

            <div className="expense-item__description">
                <h2>{ titleChanged? titleChanged: title }</h2>
                <div className="expense-item__price">${ amount }</div>
            </div>
            <button onClick={ handleClick }>Change title</button>
            
        
        </div>
    )
}
