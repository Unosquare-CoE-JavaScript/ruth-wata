import React, { useState } from "react";

import ExpenseItem from "./components/Expenses/ExpenseItem/ExpenseItem";
import NewExpense from "./components/New Expense/NewExpense";
import Expenses from "./components/Expenses/Expense/Expense";


function App() {


  const [expenseData, setExpenseData] = useState([])

  

  
  return (
    <div>
      <NewExpense 
        setExpenseData = { setExpenseData }
      />

      <h2>Let's get started!</h2>

      <Expenses
        expenseData={ expenseData }
        setExpenseData= { setExpenseData }
      />
    </div>
  );
}

export default App;
