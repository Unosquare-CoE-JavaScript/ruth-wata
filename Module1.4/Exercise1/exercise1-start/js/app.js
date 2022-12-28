

var MAINAPP = MAINAPP || {};


(function(nsp) {
    "use strict";

    let starwarsURL = "https://simpsons-api-app.herokuapp.com/api/",
        // apiKey = "?api_key=ENTER YOUR API KEY AFTER THE EQUAL SIGN",
        
        field = document.querySelector('#word'),
        btn = document.querySelector('#submitBtn'),
        results = document.querySelector('#results'),
        image = document.querySelector('#image'),
        title = document.querySelector('#title'),
        word,
        scrabbleVal = 0;



    const getValue = function(word) {
        //code this function so it will query the wordnik site. Send a word that is entered in the field. Retrieve the scrabble score from the site. Extract the score from the response and then display it in the results span tag.

        fetch(starwarsURL+ word)
            .then(data => data.json())
            .then(data => {
                
                title.innerHTML = data.name
                image.src = data.image
                console.log(title, image)

            })
            .catch(err => console.log(err))
    };

    btn.addEventListener('click', function(e) {
        word = field.value.toLowerCase()
   
        getValue(word);
    });

    nsp.scrabbleVal = scrabbleVal;
})(MAINAPP);



