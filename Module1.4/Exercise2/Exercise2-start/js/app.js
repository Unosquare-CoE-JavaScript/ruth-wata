var MAINAPP = (function(nsp) {
    "use strict";



    /*
    This IIFE is the start of an application. The first thing we want to do is download all the posts, comments and todos so that we can work with them. Add the code in order to do that. Also, make sure that you add the posts, comments and todos to the MAINAPP variable so they are accessible outside this function (e.g. nsp.posts = posts & return nsp). Because the code is asynchronous, you will need to consider the best way to do that.
    */

    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => {
            nsp.todos = data
        })
        .catch(err => console.log(err))
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => nsp.posts = data)
        .catch(err => console.log(err))
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => nsp.comments = data)
        .catch(err => console.log(err))
        
    console.log(nsp)
    return nsp;
})(MAINAPP || {});