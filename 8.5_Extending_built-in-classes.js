/* In this code i am going to learn how to work with built-in classes.
   So, how this works? Lets look at the example.
*/


class NewArray extends Array {   // here there is no methods of class "NewArray" but the Array has by default methods
                                                                                             

}

let array = new NewArray([8,[6,1],4,7]);
console.log(array.flat());