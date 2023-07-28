/* Task 1:-

Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.
solution */

/* let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

alert(user.surname); */


/* Task 2:- 

 Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise. */

/* function isEmpty(obj) {
        for (let key in obj) {
            return false;
        } return true;

}
let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false */


/* Task 3:-
Write the code to sum all salaries and store in the variable sum. */

 

/* let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

  let sum = 0;
   
  for( let key in salaries) {
   
    sum += salaries[key] ;
    
  }
    alert(sum); */

/* Task 3:- 

    Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2. */

    
    function mul(obj) {

        for (let key in obj) {
          if (typeof obj[key] == 'number') {
            obj[key] *= 2;
          }
        }
      }

      
    let menu = {
        width: 200,
        height: 300,
        title: "My menu"
      };
   
      
    mul(menu);

    alert( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );
