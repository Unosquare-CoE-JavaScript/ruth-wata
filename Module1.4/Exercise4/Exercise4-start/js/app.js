var MAINAPP = (function(nsp) {
    "use strict";

    let url = 'https://jsonplaceholder.typicode.com/';

    /*
    Change this code so that it uses Promise.all to respond once all of the promises have returned. Provide a notification to the console when the promises have completed.
    */
    const posts = 
        fetch(url + 'posts/')
            .then(response1 => response1.json())
            .catch(err => console.log(`Problem retrieving posts: ${err}`));
    

    const comments = 
        fetch(url + 'comments/')
            .then(response2 => response2.json())
            .catch(err => console.log(`Problem retrieving comments: ${err}`));
    

    const todos =
        fetch(url + 'todos/')
            .then(response3 => response3.json())
            .catch(err => console.log(`Problem retrieving todos: ${err}`));
  

    Promise.all([todos, posts, comments])
        .then(data => console.log(data))
        .catch(err => console.error(err))

    

    //public
    return nsp;
})(MAINAPP || {});