import React from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import './ExpensesList.css'

export default function ExpensesList({  expenseData, filteredYear }){


    const filterExpenseByYear = expenseData.filter(expense => (
        expense.date.toISOString().split('-')[0] === filteredYear
        )).map((item, i) => (
            <ExpenseItem 
                title= {item.title}
                amount={ item.amount }
                date= {new Date (item.date)}
                key= { i }
            />
        ))

    if( filterExpenseByYear.length === 0){
        return <h2 className="expenses-list__fallback">Found no expenses</h2>
    }

    console.log(filterExpenseByYear)
    return(
        

        <ul className="expense-list">

            {filterExpenseByYear}

        </ul>
    )
}