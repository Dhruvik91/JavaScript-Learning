/* this is all about try and catch handling:-

- it only works for runtime errors

- it works synchronously

== this is mainly use when the json is die and the user dont know that (it is a real-time use case)*/

/* Lets try that real-life use case */

/* let json = '{"name":"John", "age": 30}'; // data from the server

let user = JSON.parse(json); // convert the text representation to JS object

// now user is an object with properties from the string
console.log( user.name ); // John
console.log( user.age );  // 30
 */

let json = "{ bad json }";

try {

  let user = JSON.parse(json); // <-- when an error occurs...
  alert( user.name ); // doesn't work

} catch (err) {
  // ...the execution jumps here
  alert( "Our apologies, the data has errors, we'll try to request it one more time." );
  alert( err.name );
  alert( err.message );
}