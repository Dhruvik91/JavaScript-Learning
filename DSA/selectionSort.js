/* SELECTION SORT */

/* In this sorting algo, we are taking the first value and check for the smallest value from the array */

/* If the value found, swap it with the first value and go for second  */

/* Time Complexity will be O(n^2) */


function swap(a, b, array) {
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) min = j;     // this will check for the smallest value 
        }
        swap(i, min, arr);
    }
    return arr;
}

const arra = [4, 5, 7, 3, 6, 2, 1];

selectionSort(arra);