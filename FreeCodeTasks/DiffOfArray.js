/* Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order. */

/* Input:
const arr1 = ["diorite", "andesite", "grass", "dirt", "dead shrub", "pink wool"];

const arr2 = ["diorite", "andesite", "grass", "dirt", "dead shrub"];

Output: 
answer = ["pink wool"]. */

function diffArr(arr1, arr2) {
    const difference = new Set(arr1);
    arr2.forEach((ele) =>
        difference.has(ele) ? difference.delete(ele) : difference.add(ele)
    );
    return Array.from(difference);
}

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 5, 6];

diffArr(arr1, arr2);