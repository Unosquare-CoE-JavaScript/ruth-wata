var MAINAPP = (function (nsp) {
  "use strict";

  let url = "https://jsonplaceholder.typicode.com/";

  /*
    Change this code to use async await. Make sure to use promise.all so that we await all three pieces of data without awaiting each individually which would take much longer.

    Which pattern do you prefer for this application? promises or async await?
    */

  (async function () {
    try {
      const p1 = await fetch(
        "https://jsonplaceholder.typicode.com/" + "posts/"
      );
      const p2 = await fetch(
        "https://jsonplaceholder.typicode.com/" + "comments/"
      );
      const p3 = await fetch(
        "https://jsonplaceholder.typicode.com/" + "todos/"
      );

      const results = await Promise.all([p1, p2, p3]);

      nsp.posts = await results[0].json();
      nsp.comments = await results[1].json();
      nsp.todos = await results[2].json();
    } catch (err) {
      console.log(err);
    }
  })();

  console.log(nsp);

  //public
  return nsp;
})(MAINAPP || {});
