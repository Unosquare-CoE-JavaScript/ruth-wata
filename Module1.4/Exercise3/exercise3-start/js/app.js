"use strict";

//First, add the setTimeout code as shown in the intro to this exercise. Then modify the code by creating a promise so that the code can run asynchronously.

const massiveProcess = function(num){
        return new Promise((res, rej) =>{
            if(num === NaN){
                rej('Please enter a number') // handles the reject
            }
            let result = 0; 
            setTimeout(function() {  // using setTimeout allows the timing to be handled by the environment 
                for (let i = num ** 7; i >= 0; i--) {        
                    result += Math.atan(i) * Math.tan(i);
                };
                res(result)  // handles the resolve
            }, 0);
            
    })
}
massiveProcess(10)
    .then(amt => {
        console.log("The number is: " + amt);
    })
    .catch(err => console.error(err))






//More processing later on
console.log(5 * 5 + 100);
