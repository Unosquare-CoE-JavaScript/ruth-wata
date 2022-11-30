"use strict";

//Refactor the promise code to create an async function that will take a todo object as a parameter and add the todo to the jsonplaceholder site. Make sure you account for possible errors.
( function(){

    let todo = {
        completed: false,
        userId: 1,
        title: "Learn Promises"
    };

    const addTodo = async function(todoObj){


        try{
            const res = await fetch(
                'https://jsonplaceholder.typicode.com/todos/', {
                    method: 'POST',
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(todoObj)
                })

            const data = await res.json()
            console.log(data)
            
        }catch(err){

            console.log(err)

        }
    }
  
    addTodo(todo)

 

    
  
    console.log('Other code');

})()
