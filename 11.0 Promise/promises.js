/* a promise is an js object that links differnt functions
They are the new and easy version of callback hell.  */


function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Register Done")
            resolve();
        }, 1000);
    })

};

function signup() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Signup Done")
            resolve();
        }, 1000);
    })
};

function signin(callback) {
    setTimeout(() => {
        console.log("SignIn Done")
        callback();
    }, 2000)
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

register();