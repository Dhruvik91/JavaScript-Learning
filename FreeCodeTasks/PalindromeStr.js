/* Palindrome Checker

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, 

ignoring punctuation, case, and spacing. */


function palindrome(str) {
    let alphabetArray = [];
    const numericArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
        alphabetArray.push(String.fromCharCode(i));
    }

    const strElems = str.toLowerCase().split("");
    const elemsWithoutPuncation = [];


    for (let i = 0; i < strElems.length; i++) {

        if (alphabetArray.includes(strElems[i]) || numericArray.includes(strElems[i])) {
            elemsWithoutPuncation.push(strElems[i]);
        }
    }

    const reversedStr = JSON.parse(JSON.stringify(elemsWithoutPuncation)).reverse().join("");
    console.log(elemsWithoutPuncation.join("") === reversedStr);

}

palindrome('nope');