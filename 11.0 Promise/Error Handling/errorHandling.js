//const { rejects } = require("assert");


let promise = new Promise((resolve, reject) => {
    resolve("Hello");
}).then((result) => result + 1)
    .catch((err) => console.log(err));
