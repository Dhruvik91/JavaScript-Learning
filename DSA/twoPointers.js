/* This is Two-Pointers method */

/* It is used to find the given tar value by adding the values from array. */

/* But it works only on sorted array */

/* As it is using the while loop, and it is moving to the target, either left side or right side.

So, the time complexity of it will be the O(log n). Or if we sort the unsorted array first, then 
  
the time complexity of it wil be the O(n logn), as the sort function will be use the one for loop.
*/


function twoPointers(arr, target) {

    let start = 0;
    let end = arr.length;

    while (start < end) {

        if (arr[start] + arr[end] == target) {  // if the value found, it will return true;
            return true;
        }
        if (arr[start] + arr[end] < target) { // if the target is on right side, we shift start to it
            start++;
        } else {                              // if the target is on left side, we shift end to it
            end--;
        }
    }
    return false;
}

const array = [1, 2, 3, 5, 7, 8];
const tar = 6;

twoPointers(array, tar);