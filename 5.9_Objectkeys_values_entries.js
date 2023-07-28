// Task 1 :- Sum of the properties

let sum = 0;

function sumSalaries() {
 
     for ( let val of Object.values(salaries)) {

        sum += val;
     }

    return sum;

} 



let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  alert( sumSalaries(salaries) ); 

  // Task 2:- Count Properties 
  // Write a function count(obj) that returns the number of properties in the object:


  function count(obj) {
          
     return Object.keys(obj).length;
  }


  let user = {
    name: 'John',
    age: 30
  };
  
  alert( count(user) );