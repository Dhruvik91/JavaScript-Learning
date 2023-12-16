/* Here reverse the digit */

function reverseDigit(digit) {

    let sum = 0, lastDIgit = 0, count = digit.toString().length;
    while (digit > 0) {
        lastDIgit = digit % 10;
        let unitsOfNumber = lastDIgit * Math.pow(10, count);
        sum += unitsOfNumber;
        count--;
        digit = Math.floor(digit / 10);
    }
    return sum / 10;
}

const digit = 7689;

console.log(reverseDigit(digit));