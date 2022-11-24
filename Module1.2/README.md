# YDKJSY Scope & Closure

## Chapter 1: What's the Scope?

### Compiled vs. Interpretation
Compilation and Interpretation are the steps taken for your code to turn into a list of instructions that the computer can understand. Compilation involves the source code being transformed all at once, whilst Interpretation the source code is transformed line by line; each line being executed before the processing the next. JS is portrayed as being a compiled language. Understanding the relationship between compilation and execution is key to fully grasping scope. In a classic compiler theory, on a higher basis, a program is processed by a compiler in three basic steps:

1. Tokenizing/Lexing: this breaks up characters into meaningful chunks - tokens. For example with var b = 10; this would be broken up into var, b, =, 10 and;
2. Parsing: this takes a stream of tokens(array) and turns them into a tree of nested elements, which represents the grammatical structure of the program. This is referred to as Abstract Syntax Tree(AST)
3. Code Generation: takes an AST and turns it into executable code. Into machine instructions that the computer can understand.

### Required: Two Phases
An important observation that can be made about the processing of a JS program is that it occurs in 2 phases: parsing/compilation, then execution. Three program characteristics show this:

*Syntax Errors from the start*
<pre>

    <code>
        const message = 'hello';

        console.log(message)

        message = $'Howdy' 
        // SyntaxError: unexpected token

    </code>
</pre>



*Early Errors*
<pre>

    <code>
        console.log('summer')

        theWeather('winter', 'spring') 
        // Uncaught SyntaxError: Duplicate parameter name 
        // not allowed in this context

        function theWeather(season, season){
            "use strict"
        }

    </code>
</pre>

#### Hoisting

In all the examples above we can see the errors showing before the next line of code. In the last example, we can see that the season = 'winter' throws the error. This season variable belongs to the declaration on the next line, let season = 'spring'. The only way the JS engine could know, at the line where the error is thrown, that the next statement would declare a block-scoped variable of the same name is if the code was already processed, and had already set up all the scope and their variable associations. 

*example of hoisting*
<pre>

    <code>
        function theWeather(season, season){
            const season = 'winter'
            {
                season = 'summer' //errors seen here
                let season = 'spring'
                console.log(season)
            }
        }

        theWeather();
        // ReferenceError: Cannot access 'season' before
        // initialisation


    </code>
</pre>

### Lexical Scope
It is controlled by the placement of functions, blocks, and variable declarations, concerning one another. When a variable is placed inside a function the compiler handles the declaration as it is parsing the function, it associates that declaration with the function's scope. let and const variables - which are block scoped are associated with the nearest enclosing {...} block, rather than its enclosing function(var). A reference (target or source role) for the variable must be resolved as coming from one of the lexically available scopes - otherwise, the variable will be seen as being undeclared. If it isn't found then the outer/enclosing scope is searched. This process continues until the matching variable is found or the global scope is reached. 

Compilation doesn't reserve memory for scopes and variables because the program isn't executed yet. Scopes aren't created until runtime.


## Chapter 2: Illustrating Lexical Scope

### Marbles, Buckets, and Bubbles... Oh My!
This is a metaphor that helps with the visualisation of scope, to help us truly grasp the concept. You can imagine a pile of marble, each marble has a colour. You then go through the process of arranging those marbles in their respective coloured buckets. Red marbles in red bucket and so on... Each marble represents a variable, and the buckets are our scopes (functions and blocks). The key takeaways from this metaphor are:

> Variables are declared in specific scopes (coloured marbles)
> Any reference that appears in the scope where it was declared, or appears in any deeper nested scopes will be labelled a marble of the same colour. Unless an intervening scope "shadows" the variable declaration.
> The determination of coloured buckets and the marbles(variables) they contain happens during compilation. Which is for variable "lookups" during code execution.

### Nested Scope
Scopes can be lexically nested to any arbitrary depth as the program defines. Each scope automatically has its identifiers registered at the start of the scope being executed - hoisting. If the identifier came from a function declaration, it is initialised to its associated function reference. If the identifier came from var then it has a default initialisation of undefined so that it can be used. Other if the identifier came from const/let then it remains uninitialised and cannot be used until its full declaration-and-initialisation is executed. 

#### Undefined Mess
If the variable is a source, an unresolved identifier lookup is considered an undeclared (unknown, missing) variable, which results in a ReferenceError. If the variable is a target and the code is running in strict mode, the variable is also considered undeclared and throws the same error. However, if the strict mode is turned off, an accidental global variable will be created to fulfil that target assignment. This can cause many issues in the future and thus it's advised to use strict mode which will throw the necessary error.


The error "Reference Error: XYZ is not defined" and undefined seem similar but in JS they are quite different. This error can be translated as the variable being undeclared. Whilst the latter is a variable that has been declared but has been assigned no value, it defaults to undefined.

##Chapter 3: The Scope Chain

### Shadowing
A single scope cannot have two or more variables with the same name. Such an instance will result in an error and would be assumed as just one. You can nest scopes to maintain two or more variables of the same name.

*example of shadowing*

<pre>

    <code>
        var season = 'Winter'

        function findWeather(season){
            season = season.tLowerCase()
            console.log(season)
        }

        findWeather('Spring')
        // spring

        findWeather(season)
        // winter

        console.log(season)
        // Winter

    </code>
</pre>

In the above example, we can see that season = season.toLowerCase()  shadows the global variable var season = 'Winter'. So, the parameter I shadowing the shadowed global variable. A good thing to note is that any other usage of season inside the function will correspond to that parameter variable, and never the global season variable. It's lexically impossible to reference the global season anywhere inside of the findWeather(...) function or any nested scopes. Unless you reference it directly using the window.season - window here is seen as representing the global object when using an environment such as the browser. This may be something else depending on the environment being used. This method will only work with var or functions, other variables don't make mirrored global object properties. Additionally, variables that exist in any other scope besides the global scope are completely inaccessible from a scope where they've been shadowed.

The usage of shadowing isn't encouraged much and the method to access global variables that have been shadowed is strongly discouraged.

### Function Name Scope
*example of different forms of functions*
<pre>

    <code>
        //  function declaration
        function whatIsTheWeather(){
            // ...
        }

        // anonymous function expression
        const whatIsTheWeather = function() {
            // ...
        }

        // named function expression
        const whatIsTheWeather = function getWeather() {
            // ...
        }


    </code>
</pre>

The function declaration(the first function) will create an identifier in the enclosing scope (from the example above, the global scope).


### Arrow Functions

ES6 syntax created a new form of function expression.

*example of arrow function*

<pre>

    <code>
        // arrow function
        const whatIsTheWeather = () =>{
             //...
        }

    </code>
</pre>

These functions are lexically anonymous. They have the same lexical scope as normal functions do 



### Backing Out
When we create a new function, a new scope is created. This new scope provides a place for it to hold its variables. We can then nest functions inside each other, thereby nesting scopes. This creates a natural hierarchy referred to as the scope chain. The scope chain controls variable access, supporting either direction (upwards or outwards). 

## Chapter 4: Around the Global Scope

### Why Global Scope?
A program is likely to be composed of multiple JS files. There are 3 main ways that these files get stitched together. Directly using ES modules, using a bundler, and lastly whether a bundler is used or ES modules files are loaded in the browser individually. The latter requires the global scope, as it allows these individual files to cooperate.

### Where Exactly is this Global Scope?
Different environments handle the global scope differently.

#### Bowser "Window"
This stores the variable declared globally within the windows object. And can be accessed with window.myVariable. a browser-hosted JS Environment has the purest global scope behaviour.


* DOM Globals: a DOM element with an id attribute automatically creates a global variable that references it. It is advised against its usage.

* What's in the (Window) Name: window represents a global object. Storing properties that have a specific name of 'name' in it, stores them as a pre-defined getter/setter, insisting on its value being a string value. Other variable names do not behave like this.

* Web Workers: they are web platform extensions on top of browser-JS behaviour, which allows a JS file to run a completely separate thread (operating system-wise)from the thread that is running the main JS program. They are completely separate programs They do not have access to the DOM. Some web APIs are made available to them - navigator. Instead of using window.to reference it, you can self. var and functions also create mirrored props on the global object.

#### Developer Tools Console/REPL
These are optimised to be convenient and useful to developers but they are not suitable environments to determine or verify explicit and nuanced behaviours of an actual JS program context. Some differences in behaviour can be:

* Behaviour of the global scope
* Hoisting
* Block-scoping declarators when used in the outermost scope.

#### ES Modules
Anything declared on the out-most scope doesn't reside in the global scope as expected. Instead, they are module-wide or "module-global". This module-wide doesn't reference an object and cannot be treated as such. It is a descendant of the global scope. From this, we can see that ESM encourages the minimisation of reliance on the global scope.


#### Node
Node treats every file as a module (ES module or CommonJS module). Its effect is the same as The ESM - that the top-level is never actually the global scope. There are several defined "globals" such as required, these are not actual globals but instead are interjected into the scope of every module. You can define an actual variable using the "global" keyword, much like the "windows", it references the real global scope.

## Chapter 5: The (Not So) Secret Lifestyle of Variables

### Hoisting 
Hoisting is the process which makes variables visible from the beginning so they can be safely used. 

* For function declarations can be hoisted, their name identifiers are registered at the top of its scope, and it is auto-initialised to that function's reference. They can thus be called throughout the entire scope. Function expressions cannot be hoisted. When declaring a function expression with var, they hold a default initialisation of undefined. Doing so will result in an undefined error or "XYZ is not a function".

* Variables declared with var can be hoisted - they hold a default value of undefined. 

*example of different ways to hoist*

<pre>

    <code>
       

    </code>
</pre>

### Unintialised Variables (aka TDZ)
It stands for Temporal Dead Zone. It is a time window where a variable exists but is still uninitialised, and therefore cannot be accessed. var variables also technically have TDZ, but it's zero in length and thus unobservable to our programs! Only let and const have observable TDZ.

Variables declared with let/const do hoist. They however do not automatically initialise at the beginning of the scope


## Chapter 6: Limiting Scope Exposure

### Least Exposure
"The Principle of Least Privilege"(POLP) and its variation "Least Exposure"(POLE) are fundamental disciplines, that are typically applied to software security. POLE advises defaulting to exposing the bare minimum necessary, keeping everything as private as possible, rather than using the global scope. This prevents things such as:

* Naming Collisions
* Unexpected Behaviour
* Unintended Dependency

### Hiding in Plain (Function) Scope
We can use techniques such as memoisation to encapsulate any variable and function to a local namespace. There is removing the variables from the local scope. We can go even further by setting the function to a variable (function expression) and using an Immediately Invoked Function Expression (IIFE). This defines a function that is later immediately invoked.

*example of memoisation *

<pre>

    <code>
        var factorial = (function hideTheCache() {
        var cache = {};
        function factorial(x) {
            if(x < 2) return1;
            if(!(x in cache)) {
                cache[x] = x * factorial(x - 1);
            }
            return cache[x];
        }
        returnfactorial;
        })();

    </code>
</pre>

*example of unnamed IIFE* 

<pre>

    <code>
        // outer scope

        (function() {
            // inner hidden scope
        })();

        // more outer scope


    </code>
</pre>

IIFE should not be used in cases where the code you need to wrap a scope around has return, this, break, or continue.

### Scoping with Blocks
We can declare variables within nested blocks. Using the {...} will act as a block, but not necessarily as a scope. This only becomes a scope if necessary. For example, object literals, and classes are not considered blocks.

*example of a block with let *
<pre>

    <code>
       {
            // not necessarily a scope (yet)

            // ..

            // now we know the block needs to be a scope
            let thisIsNowAScope = true;
            
            for(let i = 0; i < 5 ; i++) {
                // this is also a scope, activated each
                // iteration
                if(i % 2 == 0) {
                    // this is just a block, not a scope
                    console.log(i);
                }
            }
        }

    </code>
</pre>

It is advised to use these scoping blocks to follow POLE, always define the smallest block for each variable.

Here the author gives his opinion about using var for variables declared at the top of the function that the function will need for the return result and let for block-scope and also using the {...} block. He highlights by doing so you let the reader know that the var variable is function scoped and by using let you communicate that the variable is block-scoped. 

### What's the Catch?
try and catch blocks behave a bit differently. Var variables declared inside these blocks can be accessed, because they're attached to the outer function/global scope. However, from ES2019, catch blocks can now have an optional declaration. If the declaration is omitted the catch block is no longer a scope, it's still a block, though.

## Chapter 7: Using Closures

### See the closure
Closures are the behaviour of functions and only functions, objects cannot have closure. For it to be observed a function must be invoked - specifically in a different branch of the scope chain from where it was originally defined. It is associated with an instance of a function. 

It is not a snapshot but rather a live link, that preserves access to the full variable itself. This allows the closed variable to be updated and reassigned if needed. By closing over a variable we can keep using that variable (read and write) as long as that function reference exists in the program, and from anywhere we want to invoke that function. Closure is purely variable-oriented. A definition can be found below:

> " Closure is observed when a function uses variable(s) from outer scope(s) even while running in a scope where those variable(s) wouldn't be accessible "

Closure must be:
* Must be a function involved
* Must reference at least one variable from an outer scope
* Must be invoked in a different branch of the scope chain from the variable(s)

### The Closure Lifecycle and Garbage Collection(GC)
When you have many functions closed over a single variable it is good practice to discard that final function when not needed anymore and as such the variable is gone. This helps to improve efficiency and performance in programs.  


Additionally, when variables in outer functions are present but never closed over we can note that in some browser environments these variables are simply GC-ed and are not kept alive. Some browsers can behave differently however and still preserve them until the final function is discarded. A good practice, especially when the variable holds a large data is to set that variable to null. Seen below:

*example of resetting unused live variables*
<pre>

    <code>
       function manageStudentGrades(studentRecords) {
            var grades = studentRecords.map(getGrade);

            // unset `studentRecords` to prevent unwanted
            // memory retention in the closure
            studentRecords = null;

            return addGrade;
            // ..
        }


    </code>
</pre>


## Chapter 8: The Module Pattern

### Encapsulation and Least Exposure(POLE)
Encapsulation is the grouping of information(data) and their behaviour(functions). Encapsulation can be seen in all aspects of programs, from file organisation to code organisation. This grouping system allows us to separate things in private and public, essentially limiting access to certain parts, or allowing access to the whole program.

### What is a Module?
Modules are collections of data and functions. These collections must be divided into private details and publicly accessible details. So if a collection contains only functions and no data, then that isn't a module. And likewise, if a collection contains data and methods, but they all can be accessible from the outside - that is also not a module.

* Classic Module 

*example of modules*
<pre>

    <code>
       function defineStudent() {
            var records = [
                { id:14, name:"Kyle", grade:86},
                { id:73, name:"Suzy", grade:87},
                { id:112, name:"Frank", grade:75},
                { id:6, name:"Sarah", grade:91}
            ];
            var publicAPI={
                getName
            };
            returnpublicAPI;
            
            // ************************
            function getName(studentID) { 
                var student = records.find(
                    student => student.id == studentID
                    );
                    returnstudent.name;
                }
            }
            
        var fullTime = defineStudent();
        fullTime.getName(73);           // Suzy


    </code>
</pre>


* Node CommonJS Modules
These are file-based: one module per file. 

*example of node module*
<pre>

    <code>
       module.exports.getName = getName;

        // ************************

        var records = [
            { id:14, name:"Kyle", grade:86},
            { id:73, name:"Suzy", grade:87},
            { id:112, name:"Frank", grade:75},
            { id:6, name:"Sarah", grade:91}
        ];

        function getName(studentID) {
            var student = records.find(
                student => student.id == studentID
                );
                return student.name;
        }


    </code>
</pre>

* Modern ES Modules (ESM)
This shares several similarities with CommonJS. It is file-based, and module instances are singletons, everything is private by default. These files are however assumed to be in strict mode, this cannot be turned off. 

*example of ESM*
<pre>

    <code>
       var records = [ 
        { id:14, name:"Kyle", grade:86},
        { id:73, name:"Suzy", grade:87},
        { id:112, name:"Frank", grade:75},
        { id:6, name:"Sarah", grade:91}
        ];

        export default function getName(studentID) {
            var student = records.find(
                student => student.id == studentID
                );
            returnstudent.name;
        }

    </code>
</pre>

## Appendix A: Exploring Further

### Parameter Scope
The parameter of functions also has its scope. But its usage is not advised since it can cause unnecessary behaviours in the value a variable holds.

### Anonymous vs. Named Functions

* Explicit or Inferred Names?
Here the author gives his opinion about the importance of explicitly giving a function its own. He argues that by doing this you reduce the 
of confusion when debugging and you only see "anonymous" next to errors. 

* Who am I!? 
Without a lexical name identifier, the function lacks a way to refer to itself. This is important for things like recursion and event handling.

* Names as Descriptors
Leaving off names makes it harder for the reader to know what your function does, and what its purpose is.







