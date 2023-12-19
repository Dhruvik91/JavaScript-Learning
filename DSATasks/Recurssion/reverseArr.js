/* Reverse an array using recursion  */


function reverseArray(num, arr) {
    if (num == 0) {
        return [];
    }

    return [arr[num - 1], ...reverseArray(num - 1, arr)];

}

const array = [1, 2, 3, 4, 5, 6];
console.log(reverseArray(array.length, array));