/* Write a function to print the number into its digit */

/* Approachs here:

1. By doing the simple logic of converting them to string and make them split.
2. By using the recusion on the number.
*/
const digit = 7859;

function countDigit(digit) {

    let lastDigit = 0;
    const result = [];
    while (digit > 0) {
        lastDigit = digit % 10;
        digit = Math.floor(digit / 10);
        result.push(lastDigit);
    }
    return result;
}

console.log(countDigit(digit));