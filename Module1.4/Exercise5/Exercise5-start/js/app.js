//Create a function that will retrieve the posts from the jsonplaceholder site (https://jsonplaceholder.typicode.com/posts). Set up the function so you can pass in the userID and the function will assign only the posts for that user to a variable. The data should be stored in an array.


var user1Posts = []
const findPosts = async function(userID){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
    const data = await res.json()
    
    let posts = data.filter(obj => Object.values(obj).includes(userID))

    return posts
}


findPosts(1)
    .then(data => user1Posts[0] = data)


console.log(user1Posts)