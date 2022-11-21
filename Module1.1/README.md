# JS YDKJSY

## Chapter 1: What is Js

Commonly mistaken for having a connection with Java, JavaScript is independent of Java. However, the language was designed initially to appeal to the Java audience - offering a lighter alternative.


The language itself is steered by a committee of technical engineers from a broad range of companies  (made of 50 -100 different people) that meet regularly to assess and vote on new changes that need to be implemented and the direction that the language will go.

They have a 4 stage process for the addition of a new feature. This process is can take anywhere from 6 months to years before a new feature is added to the language.

JS is run using environments, these could be Node or the web. However, the only environment that dictates the usage of JS is the web. You can notice some differences between the JS used within the scope of the web and the JS defined in the specification.

*An example of this is...*

<pre>

    <code>
        setTimeout()
        fetch()
        console.log() 
        alert()
        document.querySelector()

    </code>
</pre>

These functions or objects look like JS but aren't defined in the specification. So how are we able to use them? We can access these APIs because of the environment that JS is running in. So by this definition, these functions and objects must play by the JS rules.


### Paradigm:

Typically paradigm categories include procedural, object-oriented and functional. It is good to note that some languages tend to tip towards one, JS however is multi-paradigm. Meaning you can write all 3.

JS is backwards-compatible meaning you can safely assume whatever code you write now will not suddenly stop working in the future. There cannot be any future changes that can cause your code to be redundant or invalid. Because of any decisions for additions or permanent. HTML and CSS are forward-compatible. Meaning that if you dug up old HTML and ran them, they most likely would not work entirely.


### Transpilers
With this all said, because JS is not backwards-compatible, there's a chance of a gap in code deemed valid JS. Meaning running a program that uses a new feature in an older engine, the program would likely crash or send multiple errors. As a solution transpilers and pollyfillers are used. An example of one is Babel, which converts from newer JS to an older equivalent.


<pre>

    <code>
        // newer ES6 syntax
        if(...){
            const i = 1
            console.log(i)
        }else{
            const i = 5
            console.log(i)
        }

        // transpiled
        var x$0, x$1
        if(...){
            x$0 = 1
            console.log(x$0)
        }else {
            x$1 = 5
            console.log(x$1)
        }

    </code>

</pre>

The first if block uses newer ES6 syntax which is not supported by some browsers and the bottom transpiles that using Babbel and using var to declare the variables - this is supported by older browsers.

Even though it would be much easier to just declare the variables using the older syntax, it is strongly recommended for developers to always use the latest versions of JS. This ensures their code is clean. Tools like Babbel should be used to produce forwards-compatible versions of the code - that can be run on the oldest-supported JS engine environments.

### Strict mode

Though some are hesitant when using strict mode as they see it more as a restriction or limitation to what you can code. It should be seen more as a helpful guide for the correct way to do things, this guide essentially helps you to write better code by avoiding slip-ups. To turn on strict mode you can add this to your code


<pre>

    <code>
       // only whitespace and comments are allowed
        // before the use-strict pragma
        "use strict";
        // the rest of the file runs in strict mode
    </code>
</pre>

Additionally, this could be added per function block, so you turn on strict mode solely for that function or more commonly - added globally, so you turn on strict mode for your entire program.


## Surveying JS

It's good to note that Although we have an entire program, each JS file is its standalone program. This file cooperates with other files to perform the functions of your overall application. This is important to know especially when it comes to error handling - one might fail, causing the program to still operate but partially.


### Values

Values are data. They come in two forms: primitive and object.
They can be embedded in programs literally.


<pre>
    <code>
        // values - literal example

        greeting('My name is Ruth.')
    </code>
</pre>

*Other examples of primitive values include:*

<pre>
    <code>
        String
        Number
        Boolean
        undefined
        Symbol
        BigInt

    </code>
</pre>

*Examples of objects values are:*
<pre>
    <code>
        Arrays
        Objects
    </code>
</pre>


<pre>
    <code>
        nums = [1, 2, 3]

        person = {
            first: 'Ruth',
            last: 'Wata',
            age: 26,
            likes: ['music', 'good food']
        }
    </code>
</pre>

### Functions

At its base, a function is a set of instructions that we give to a computer. They are a special type of object value type. They can be declared in two ways: as a function declaration or as a function expression. The former appears as a statement by itself.

<pre>
    <code>
        // function declaration
        function greetingsFromMe(name){
            console.log(`Greetings ${name}`)
        }

        // function expression
        const greetingsFromMe = (name) => {
            console.log(`Greetings ${name}`)
        }

    </code>
</pre>


And it is important to note function declarations can be hoisted whilst the latter, function expression cannot. This is because named variables can be hoisted. In a function expression, the variable name is hoisted but the actual function is a value that is assigned later.

### How We Organise in JS

There are two key patterns used for the organisation of code (data and behaviour) and are used broadly across the JS ecosystem: classes and modules

#### Classes
When we think of classes, terms such as 'object-oriented', 'class-oriented' and classes come to mind. Classes are data structures that include properties and behaviours that work on that property. Instantiations of classes allow you to access the concrete value that can later be used in your program.


<pre>
    <code>
        class Cars {
            constructor(name){
                this.name = name;

            }

            turnAC() {
                console.log(`AC on for ${this.name}`)
            }
        }

        const cleo = new Cars('Cleo')

    </code>
</pre>

#### Class Inheritance

Class Inheritance allows you to share properties and methods without having to rewrite them. It is a mechanism for deleting redundant code - code that repeats itself.

*example of class inheritance*

As you can see to create a class inheritance you have to first create the mother class that you want all the children classes to extend from. When creating the child class, you use the extended keys and super(...) keyword. The super(...) keyword allows you to select which properties you want to take from the mother class and use within the child or subclass.

### Modules

Modules can be seen as having the same goal of grouping together data and behaviour in logical units.

#### Classic Modules
Classic modules are functions. They are an outer function (running at least once) and return an instance of the module, with one or more functions exposed that can operate on the module's instance's internal ( hidden) data.

*example of classic modules*
<pre>
    <code>
        functionPublication(title,author,pubDate) {
            var publicAPI ={
                print() {
                    console.log(`Title:${title} By:${author}${pubDate}`);
                }
            };
            returnpublicAPI;
        }

        functionBook(bookDetails) {
            var pub = Publication(
                bookDetails.title,
                bookDetails.author,
                bookDetails.publishedOn
                );
            var publicAPI ={
                print() {
                    pub.print();
                    console.log(`Publisher:${bookDetails.publisher} ISBN:${bookDetails.ISBN}`);
                }
            };
            returnpublicAPI;
        }

    </code>
</pre>

#### ES Modules
These are similar in functionality to the classic modules. The implementation approach does differ.



## Chapter 3: Digging to the Roots of JS

### Iteration
An iterator provides a standardized approach to how data are consumed. It allows you to handle the data one at a time instead of all at once. These typically include loops that iterate over iterables such as arrays, strings, maps, sets, and others. This creates cleaner and easier-to-understand code.

So an iterable is a data structure or value that can be iterated over.


<pre>
    <code>
        // Example of for loop

        var arr = [1,2,3,4]

        for(let i of arr){
            console.log(i)
        }

        // 1
        // 2
        // 3
        // 4
    </code>
</pre>

### Closure
Closures are found throughout JS. So much so that they can be considered fundamental to the language like variables or functions or loops. The closure allows for the preservation of variables, observing any updates to a variable over time. it essentially keeps variables alive. Though closures can be seen throughout JS, it becomes most important when working with asynchronous code - for example callbacks.
Its importance, however, can be noticed most in a function that returns a callback. A definition can be  found below:

> *"Closure is when a function remembers and continues to access variables from outside its scope, even when the function is executed in a different scope"*


Some characteristics of closure include: 
- It's part of the nature of a function
- Only functions can get closure
- The function must be executed in a different scope than where it originates from for closure to be observed.

*example of closure using a memoisation exercise.*
<pre>
    <code>
        const memoisedClosureTimes10 = (m) => {
            let cache = {}

            if(n in cache){
                return cache(n)
            }else{
                let result = times10(n)
                cache[n] = result
                return result
            }
        }

        const tenTimes10 = memoisedClosureTimes10()

        console.log(tenTimes10(10))
    </code>
</pre>


*example of async code*

<pre>
    <code>
        async function images() {
        const res = await fetch(...)
        const data = await res.json
        // ...do something 
        }
    </code>
</pre>

### *this* keyword

The *this* keyword means different things depending on the context that it is used. When used inside a function, *this* exposes the function's execution context. Which refers to an actual object whose properties are available to a function while it executes. The value of *this* always changes depending on how the function is called. This is the biggest advocate for using *this*. It allows you to have the ability to reuse functions with data from different objects.

*example when using this*

<pre>
    <code>
        const person = {
            name: 'Bob',
            aga:20,
            speaks() {...}

        }

        function personSaysHi(){
            return `Hi ${this.name}, nice to meet you`
        }

        console.log(person.personSaysHi())
    </code>
</pre>

### Prototypes

A prototype is characteristic of an object. More frankly it can be described as a way to link two objects together. And can chain these objects together (prototype chain).

## Chapter 4: The Bigger Picture

### Scope and Closure
The scope has a tremendous impact on how programs behave. They can be nested inside each other, creating accessibility for variables at the same level. Variables that are nested deeper or in lower/inner function scopes aren't accessible and are hidden. This is lexical scoping. The lexical scope has two characteristics:

1. *hoisting* - this is the process in which the interpreter appears to move the declaration of variables and functions at the beginning, allowing for the safe usage of these variables. Only variables declared with *var* can be hoisted.
2. var-declared variables are function scoped whether they appear inside a block or not.

 ## Type & Coercion
Arguably one of the most important pillars of JS, no program is anything useful if it doesn't leverage JS's value types, as well as the conversion(coercion) of values between types.


 










 
