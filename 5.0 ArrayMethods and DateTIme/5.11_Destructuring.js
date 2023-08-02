/* Task 1:- 

Create the function topSalary(salaries) that returns the name of the top-paid person.

If salaries is empty, it should return null.
If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs. */

function topSalary(salaries) {

    let maxSalary = 0;
    let maxName = null;
  
    for(const [name, salary] of Object.entries(salaries)) {  // here in this loop it checks all the values and assign it to the variable
      if (maxSalary < salary) {
        maxSalary = salary;
        maxName = name;
      }
    }
  
    return maxName;
  
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  alert(topSalary(salaries));