/* Variables declared with var are function-scoped or globally-scoped, 
depending on whether they are declared inside a function or outside it. 

Bhai kya kar raha hai tu, thik se samja na,

*/

function learnVar() {

    var x = 10;

    if (true) {
        var x = 20;
        console.log(x);  // Here the x = 20
    }
    console.log(x);     // same goes here, x = 20
}