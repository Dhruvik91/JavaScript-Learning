/* In this code i am going to learn how to work with built-in classes.
   So, how this works? Lets look at the example.
*/


class NewArray extends Array {   // here there is no methods of class "NewArray" but the Array has by default methods
                                                                                             

}

let array = new NewArray([8,[6,1],4,7]); 
console.log(array.flat());   // this will work as "Array" has the defaults methods

/* let's create a new class */

class NewString extends String {

    constructor (str) {
        super();
        this.str = str;
    }
    newMethod() {                              // this is a method of the child class "NewString"
        console.log("this is new string ");
    }
}

let azs = new NewString("HELLO");
console.log(astring.toLowerCase()); // this both will work but without the construtor of the child class 
console.log(astring.newMethod());