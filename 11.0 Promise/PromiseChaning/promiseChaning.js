/* Promise chaining is the practise in which we chain the handler to the promise that return the next handler. 

Pretty boring right ??

Lets undertand with an example

*/

let promise = new Promise((resolve, reject) => {     // here the flow is simple, everytime the handler is called, it has the value of result of
                                                     // previous promise that had returned the value of the handler and modified it. 

    setTimeout(() => resolve(1), 1000);

}).then(
    result => result * 2
).then(
    result => result * 2);

    console.log(promise);    