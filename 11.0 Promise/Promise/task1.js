/* Delay with a promise
The built-in function setTimeout uses callbacks. Create a promise-based alternative. */



function delay(ms) {
    return new Promise(resolve => {
        setTimeout( () => {
              resolve();
        }, ms);
    })
}

delay(3000).then(() => console.log("Hello"));