var MAINAPP = (function(nsp) {
    "use strict";

    let url = 'https://jsonplaceholder.typicode.com/';

    /*
    The following promise code is inside a module pattern. Change the promise code so that it uses async await instead. You will want to use an IIFE for this. Make sure to catch any errors.
    */


    (async function(){

        try{
            const res = await fetch(url + 'posts/')
            const data = await res.json()
            nsp.posts = data

        }catch(err){
            console.log(err)
        }
        

    })()
    console.log(nsp)
    return nsp;



})(MAINAPP || {});


