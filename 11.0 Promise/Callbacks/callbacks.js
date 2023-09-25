/* Callbacks:- They are function which are used to make the async code.

In the below code, i m going to learn about the callbacks. how it works ?   


*/

function register(callback) {

  setTimeout(() => {
    console.log("Register Done")
    callback();
  }, 1000)
};

function signup(callback) {

  setTimeout(() => {
    console.log("SignUp Done")
    callback();
  }, 2000)
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

register(() => {
  signup(() => {
    signin(() => {
      gotData()
    })
  })

}
);


console.log("some another things");

