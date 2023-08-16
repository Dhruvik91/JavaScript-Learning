/* A newbie hmm, righ. i am also a newbie in the js

Then what type of problem i may face while using promise chaning?

 Let's check it out.
*/

let promise = new Promise((resolve, reject) => {

    setTimeout(() => resolve(1), 1000);

});

promise.then(result => result * 2);

promise.then(result => result * 2);

promise.then(result => result * 2);

/* okay now i get it, what was my problem,

here, every promise will give me the same result "2",

It is not chaining as All .then on the same promise get the same result 
– the result of that promise. So in the code above all alert show the same: 2.

*/