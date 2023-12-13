/*  QUICK SORT */

function quickSort(arr) {

    if (arr.length === 0) {
        return []

    } else {
        let pivot = arr[0];
        let lesser = [];
        let greater = [];
        let equal = [];

        for (let e of arr) {

            if (e < pivot) {
                lesser.push(e);
            } else if (e > pivot) {
                greater.push(e)
            } else {
                equal.push(e)
            }
        }
        return [...quickSort(lesser), ...equal, ...quickSort(greater)]
    }
}

const array = [8, 5, 7, 3, 9, 1, 6, 2];

console.log(quickSort(array));