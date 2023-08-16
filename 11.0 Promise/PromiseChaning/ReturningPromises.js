/* in this part, i am going to learn about the returning promise in a handler.

A handler, used in .then(handler) may create and return a promise.

*/

let promise = new Promise((resolve, reject) => {

    setTimeout(() => resolve(1), 1000);

}).then(result => {

    return new Promise((resolve, reject) => {

        setTimeout(() => resolve(result * 2), 1000);
    });

}).then(result => {

    return new Promise((resolve, reject) => {

        setTimeout(() => resolve(result * 2), 1000);
    });

});

console.log(promise);
/* in short, we are using chaining, and in each handler, we are returning a new Promise to it. */