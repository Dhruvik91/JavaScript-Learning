/* Sorted Union */


function uniteUnique(arr, ...arrList) {
    const mergedArr = [arr, ...arrList];
    return Array.from(new Set((mergedArr.flat(Infinity))));
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
;