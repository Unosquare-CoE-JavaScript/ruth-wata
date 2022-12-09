import React, { useState } from 'react';

import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from '../../UI/Card';
import './Expense.css';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';
import ExpensesList from '../ExpensesList/ExpensesList';
import ExpensesChart from '../ExpensesChart/ExpensesChart';


const Expenses = ({ expenseData }) => {
    const [filteredYear, setFilteredYear] = useState('')

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }


    const INITALDATA = [
        {
          id: 'e1',
          title: 'Toilet Paper',
          amount: 94.12,
          date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
          id: 'e3',
          title: 'Car Insurance',
          amount: 294.67,
          date: new Date(2021, 2, 28),
        },
        {
          id: 'e4',
          title: 'New Desk (Wooden)',
          amount: 450,
          date: new Date(2021, 5, 12),
        },
      ]

     const showAllExpenses = [...INITALDATA, ...expenseData].map((item, i) => (
        <ExpenseItem 
            title= {item.title}
            amount={ item.amount }
            date= {new Date (item.date)}
            key= { i }
        />
        ))


    const filterExpenseByYear = [...INITALDATA, ...expenseData].filter(expense => (
        expense.date.toISOString().split('-')[0] === filteredYear
        )).map((item, i) => (
            <ExpenseItem 
                title= {item.title}
                amount={ item.amount }
                date= {new Date (item.date)}
                key= { i }
            />
        ))

        console.log(filterExpenseByYear)
  return (
    <Card className="expenses">
        <ExpensesFilter 
            setFilteredYear={ setFilteredYear }
            />
            <ExpensesChart
            expenses={ filterExpenseByYear.map(expense => expense.props) }
            />
        <ExpensesList 

            expenseData={ [...expenseData, ...INITALDATA] }
            filteredYear = { filteredYear } 
            />
     
    </Card>
  );
}

export default Expenses;