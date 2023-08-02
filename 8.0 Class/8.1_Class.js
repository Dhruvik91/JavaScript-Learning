/* the basic class syntax */ /* here class in javascript seen as the function*/

/*  class Myclass {

    constructor(name) {        // here is the constructor that is used to make the objects.
        this.name = name;
    }

    sayHi() {                  // here is the method 

        alert(this.name);
    }
}

let user = new Myclass("john");   // in this way we can make objects 

user.sayHi();

user = new Myclass("dhruvik");

user.sayHi();  */
 




/* in this method we are using class expression */

/* let User = class Myclass {      //  here is the class expression method 

    // Note:- the name of the method is only seen in the class but can't outside it 

    hello() {

        alert("Hello");
    }
}

new User().hello();       
 */


/* here is the code with getter and setter method */

class User {


    constructor(name) {
        this.name = name;
    }

    get name() {                  // here we are getting the value
        return this._name;
    }

    set name(value) {             // here we are setting the value 

        if (value.length < 4) {
            alert("Name is too short.");
            return;
        }
        this._name = value;
    }

}

let user = new User("John");
alert(user.name); // John

user = new User("");

