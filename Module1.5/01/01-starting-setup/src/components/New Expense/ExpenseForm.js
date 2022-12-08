import React, { useState } from "react";
import './ExpenseForm.css'

export default function ExpenseForm({ setExpenseData }){
    const [enteredData, setEnteredData] = useState({
        enteredTitle: '',
        enteredAmount:'',
        enteredDate: ''
    })

    const [showAddExpensesForm, setShowAddExpensesForm] = useState(false)


    const titleChangeHandler = (e) => {
      setEnteredData(prevState => (
        {
            ...prevState,
            enteredTitle: e.target.value
         }
        ))
    }

    const amountChangeHandler = (e) => {
        setEnteredData(prevState => (
            {
                ...prevState,
                enteredAmount: e.target.value
            }
        ) )
      }
  

      const dateChangeHandler = (e) => {
        setEnteredData(prevState => (
            {
                ...prevState,
                enteredDate: e.target.value
            }
        ) )
      }

      const submitHandler = (e) =>{
        e.preventDefault()

        setExpenseData(prevState => [...prevState, {
            title: enteredData.enteredTitle,
            amount: +enteredData.enteredAmount,
            date: new Date(enteredData.enteredDate)
        }])


        setEnteredData({
            enteredTitle: '',
            enteredAmount:'',
            enteredDate: ''
        })
      }
  
      const handleAddExpenseClick = () =>{
        setShowAddExpensesForm(true)
      }

      const handleCancelAddExpenseClick = () => {
        setShowAddExpensesForm(false)
        setEnteredData({
            enteredTitle: '',
            enteredAmount:'',
            enteredDate: ''
        })
      }



    return (
        <>

            {

                showAddExpensesForm ?
                <>
                <form onSubmit= { submitHandler }>
                    <div className="'new-expense__controls">

                        <div className="new-expense__control">
                            <label>Title</label>
                            <input type='text' value={ enteredData.enteredTitle } onChange={ titleChangeHandler } required/>
                        </div>

                        <div className="new-expense__control">
                            <label>Amount</label>
                            <input type='number' min='0.01' step='0.02' value={ enteredData.enteredAmount} onChange={ amountChangeHandler } required/>
                        </div>

                        <div className="new-expense__control">
                            <label>Date</label>
                            <input type='date' min='2019-01-01' max='2022-12-31' value={ enteredData.enteredDate } onChange={ dateChangeHandler} required/>
                        </div>

                        <div className="new-expense__actions">
                            <button type='submit' onClick={ 
                                enteredData.enteredAmount && 
                                enteredData.enteredDate && 
                                enteredData.enteredTitle && 
                                handleCancelAddExpenseClick
                                }>submit</button>
                        </div>

                        <div className="new-expense__actions">
                            <button type='button' onClick={ handleCancelAddExpenseClick }>Cancel</button>
                        </div>
                    </div>
                    
                 </form>
                 
                 
                 </>

            : 
                <div className="new-expense__actions">
                    <button type='button' onClick={ handleAddExpenseClick }>Add New Expense</button>
                </div>
            }
            


        
    </>
    )
}