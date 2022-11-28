# Functional Programming
Breaking problems into smaller chunks(functions), then composing those functions together using things such as functors. It allows us to create a solution separately, for iterating arrays, waiting for objects until later and extracting the name. And once these solutions are created we can easily compose them together and can reuse them.

## pure functions
A function is a set of input and output. The input is called the domain, and output is the range.

* Total 
For every input, there is a corresponding output.

* deterministic
Always receive the same output given an input. 

* no observable side effects
If you can observe any side effects then it isn't a function.

Functions are:
* Reliable
* Portable
* Reusable
* Testable
* Composable 
* Properties/Contract


## Currying
When a function doesn't take all of its arguments at once, instead it wants you to give it the first argument and then the process returns another function, which now you're supposed to pass in a second argument, which in turn will return a new function, which you are supposed to call with the third argument, and so on until all the arguments have been provided then the function at the end of the chain will be the one that returns the value that you want. It is a chain of functions. Its usage in applications is that your functions can pass through your application and gradually accept the arguments that it needs.

*example of currying *
<pre>

    <code>
        var _ = require('ramda')
        function calculate(){
            return _.reduce((a, b) => a + b, 0)
        }

        const calculate2 = _.curry(calculate())

        console.log(calculate2([1,2,3,4])) // 10



        function curry(f) { // This is what currying does.
        return a => // waits for the first argument
                b => // waits for the second arguement
                    f(a,b) // return function with both arguments
        }

        // usage
        function sum(a, b) {
        return a + b;
        }

        let curriedSum = _.curry(sum);

        alert( curriedSum(1,2) ); // 3



    </code>
</pre>


## composition
Function composition returns a new function.  These functions are nested amongst each other to then produce a result. These functions are connected in a chain. 

Though dot chaining is the same as composition, the compose keyword can be used to unroll the nested functions. You can get the compose keyword from ramda. The functions are then said to be running from right to left.

The advantages of function composition are that it enables the usability of functionalities, and it makes it easier for developers to adapt code or add more functionality. 

*example of function composition*

<pre>

    <code>
        // composition

        const changeStr = (str) => {
        return str.toLowerCase()
            .split('')
            .filter(el => 'aeiou'.includes(el))
            .map(l => l.charCodeAt())
            .join('')
        }


        console.log(changeStr('some over the rainbow'))

        // with compose keyword

        const changeStr2 = _.compose(
        
        _.join(''),
        _.map(l => l.charCodeAt()),
        _.filter(el => 'aeiou'.includes(el)),
        _.split(' '),
        _.toLower()
        )

        console.log(changeStr('some over the rainbow'))
    </code>
</pre>




## functors
When programming in a functional environment, using containers to abstract out data and values is an incredibly powerful tool. These containers keep our values safe as we pass in functionality. This value can be taken out in urgency. Functors are containers that make usage of the map method. They are containers that hold an object that is mapped over.
Other objects that are often implemented as functors are promises. 


<pre>

    <code>
        const Box = x =>  // functor
            ({
            map: f => Box(f(x)),
            fold: f => f(x),
            toString: () => `Box(${x})`
            })

        const moneyToFloat_ = str => // norma implemmentation
        parseFloat(str.replace(/\$/, ''))

        const moneyToFloat = str =>  
            Box(str)
                .map(l => l.replace(/\$/, ''))
                .fold(l => parseFloat(l))
            
    </code>
</pre>


## monads 
