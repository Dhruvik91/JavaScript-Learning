/* Callbacks:- They are function which are used to make the async code.

In the below code, i m going to learn about the callbacks. how it works ?   


*/

function register() {

  setTimeout(() => {
    console.log("Register Done")
  
  },1000)
};

function signup() {
  console.log("signup Done")
}

function signin() {
  console.log("signIn Done")
}

function gotData() {
  console.log("user data Done")
}

register();
signup();
signin()
gotData();

console.log("some another things");

