import React from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

export default function NewExpense({ setExpenseData }){


    return (
        <div className="new-expense">
            <ExpenseForm 
            setExpenseData = { setExpenseData }
            />
        </div>
    )
}