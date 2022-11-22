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

> Bowser "Window"
> > This stores the variable declared globally within the windows object. And can be accessed with window.myVariable. a browser-hosted JS Environment has the purest global scope behaviour.


### Global This

### Globally Aware

## Chapter 5: The (Not So) Secret Lifestyle of Variables

