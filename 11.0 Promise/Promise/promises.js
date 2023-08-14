/* a promise is an js object that links differnt functions
They are the new and easy version of callback hell.  */


function register() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Register Done")
            resolve();
        }, 1000);
    })

};

function signup() {

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Signup Done")
            resolve();
        }, 1000);
    })
};

function signin() {
    return new Promise((reject) => {
        setTimeout(() => {
            
            reject(console.log("SignIN Done"));
        }, 1000);
    })
}

function gotData() {
    console.log("user data Done")
}

/* register(() => {       // this is callback hell 
    signup(() => {
        signin(() => {
            gotData();
        })
    })
}); */

register()
.then(signup);  // here the "then" is useful for the chanining with the promise. In short, it handles the resolve from the promise.
                // and also "then" keyword execute the first function 

signin()
.catch(gotData);