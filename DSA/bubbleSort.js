/* BUBBLE SORT */

/* It is the most stable and most common sorting algo */

/* It will take two values and compare then with each other. */

/* If the value on the right is smaller than left one, it will get swap */

/* The Time Complexity will be O(n^2) */

/* It will continue working until all the values of an array got sort */


function bubbleSort(arr) {

    let i = arr.length;

    while (i > 0) {

        for (let j = 0; j < i - 1; j++) {

            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
        i--;
    }
    return arr;
}

const array = [3, 5, 2, 7, 1, 4];

bubbleSort(array);