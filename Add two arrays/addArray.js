/* Create a function that takes two arrays and inserts the second array in the middle of the first array.
Examples
insert([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) gives output [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

insert([15,150], [45, 75, 35]) gives output [15, 45, 75, 35, 150]

insert([[1, 2], [5, 6]], [[3, 4]]) gives output [[1, 2], [3, 4], [5, 6]]
Notes
The first array always has two elements.
Use the spread syntax to solve this challenge.
arr1's min is greater than arr2's min.
arr1's max is less than arr2's max.

canNest([1, 2, 3, 4], [0, 6]) ➞ true

canNest([3, 1], [4, 0]) ➞ true

canNest([9, 9, 8], [8, 9]) ➞ false

canNest([1, 2, 3, 4], [2, 3]) ➞ false */


function addArray(arr1, arr2) { // args is the name for the array


  let arr = [];
 
  if ( (Math.min(...arr1) > Math.min(...arr2) ) && ( Math.max(...arr1) < Math.max(...arr2) ) ) {
                   
            arr1.splice(1,0, arr2);
            console.log("hj");
            return arr1;
}
console.log("d");
}
alert(addArray([3, 1], [4, 0]));


/** */