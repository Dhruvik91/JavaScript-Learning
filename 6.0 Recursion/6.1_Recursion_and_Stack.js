/* Task 1:-
 Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n. */

 /* function sumTo(n) {
   
   if ( n === 0)            // Always remember the recursion function needs the ending term.
   return 0;

   else {
    let sum = n;

    let add = sum + sumTo(n-1);

    return add;
 }
 }
 console.log(sumTo(10)); */



 /* Task 2:- 

 Write a function that calculate the factorial of the given number
 */
 

 /*
 function fact(n) {

    if ( n === 0) 

   return 1;

   else {
    let sum = n;

    let pro = sum * fact(n-1);

    return pro;
 }
 }

 console.log(fact(4)); */



/* Task 3:-

 Write a function fib(n) that returns the n-th Fibonacci number. */


 /* function fib(n) {

    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
console.log(pre);

 fib(3); */



/*  Task 4:-

 Write a function printList(list) that outputs list items one-by-one. */
 
 
 function printList(list) {

    alert(list.value); // output the current item

    if (list.next) {
      printList(list.next); // do the same for the rest of the list
    }

 }
 let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

  printList(list);