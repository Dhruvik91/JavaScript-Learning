/* Promise chaining is the practise in which we chain the handler to the promise that return the next handler. 

Pretty boring right ??

Lets undertand with an example

*/

let promise = new Promise((resolve, reject) => {

    setTimeout(() => resolve(1), 1000);

}).then(
    result => result * 2
).then(
    result => result * 2);

    console.log(promise);