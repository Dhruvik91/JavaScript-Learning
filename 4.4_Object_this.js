/* Task 1:-
Create an object calculator with three methods: */


let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    read() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );

  /* 1.
  
   Object Method: When "this" is used inside an object method, it refers to the object itself.
   It allows you to access other properties and methods of the same object

   Example:-

   const myObject = {
   name: 'John',
   sayHello: function() {
    console.log('Hello, ' + this.name + '!');
  }
};

myObject.sayHello(); // Output: Hello, John!
. 

   2. 
   
   Constructor Function: 
   
   When "this" is used within a constructor function, it refers to the newly created instance of the object. 
   It allows you to set instance-specific properties and methods. 
   
   For example: 

   function Person(name) {
  this.name = name;
}

const john = new Person('John');
console.log(john.name); // Output: John


3.

Explicit Binding: 

The "this" keyword can also be explicitly bound to a specific object using methods like "call", "apply", or "bind".

For Example :-

function greet() {
  console.log('Hello, ' + this.name + '!');
}

const person = {
  name: 'John'
};

greet.call(person); // Output: Hello, John!

*/