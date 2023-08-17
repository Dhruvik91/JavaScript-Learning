/* The let is block-scoped variable. 

which means they are limited in scope to the block, statement, or expression where they are defined.

Tu samja, nai tu nai samja

Let's take an exmaple:-
*/

function example() {

    let x = 10;
    
    if (true) {
      let x = 20; // This creates a new 'x' within this block
      console.log(x); // Outputs 20
    }
    console.log(x); // Outputs 10
  }