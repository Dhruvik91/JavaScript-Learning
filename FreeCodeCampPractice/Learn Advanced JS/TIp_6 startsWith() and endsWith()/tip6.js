/* Tip 6: The startsWith() and endsWith() methods help you determine if a string begins or ends with a specific substring. 

Since they both return true or false, they are handy for various string manipulations and conditional checks. */

const message = 'Hello world';

console.log(message.startsWith('H')); // true
console.log(message.startsWith('h')); // false
console.log(message.endsWith('d')); // true
console.log(message.endsWith('D')); // false

const files = [
    'text.txt',
    'document.txt',
    'image.jpg',
    'script.js',
    'docs.txt',
];

// Get .txt files
const textFiles = files.filter((file) => file.endsWith('.txt'));
console.log(textFiles); // [ 'text.txt', 'document.txt', 'docs.txt' ]


const text = 'Welcome to freeCodeCamp';

console.log(text.startsWith('W', 0)); // true
console.log(text.startsWith('freeCodeCamp', 11)); // true
console.log(text.endsWith('f', 11)); // false

