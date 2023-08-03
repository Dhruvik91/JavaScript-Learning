/* throw operator is useful when we want to generates an error

The syntax is:- throw <error object>

That error object can be anything like primitive or user defined*/

let json = '{ "age": 30 }'; // here the data has age

try {

  let user = JSON.parse(json); // <-- no errors

  if (!user.name) {     // here we want name, so at this time we need to use throw to throw an error
    throw new SyntaxError("Incomplete data: no name"); // (*)
  }

  console.log( user.name );

} catch (err) {
  console.log( "JSON Error: " + err.message ); // JSON Error: Incomplete data: no name
}