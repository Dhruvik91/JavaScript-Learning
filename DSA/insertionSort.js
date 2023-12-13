/* INSERTION SORT */

/* It takes the element and check backwards for the element smaller than it.*/

/* It will check backwards until it get the smaller element than it.*/

/* Time Complexity is O(n^2) */


const arr = [3, 7, 2, 4, 1, 5, 8];


function insertionSort(array) {

    for (let i = 1; i < array.length; i++) {
        let curr = array[i];
        for (var j = i - 1; j >= 0 && array[j] > curr; j--) {
          array[j + 1] = array[j];
        }
        array[j + 1] = curr;
      }
      return array;
}

console.log(insertionSort(arr));