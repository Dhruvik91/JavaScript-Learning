/* Tip 7: Use the trim(), trimStart(), and trimEnd() to Handle White Spaces */

const greet = '   Hello world!   ';
console.log(greet.trim());
// Hello world!

const greet2 = '   Hello world!   ';
console.log(greet2.trimStart());
// Output: 'Hello, world!   '

const text = '   Hello world!   ';
console.log(text.trimEnd());
// Output: '   Hello world!'

const input = '   ';
if (input.trim() === '') {
  console.log('The input is empty but has whitespace characters.');
} else {
  console.log('The input contains non-whitespace characters.');
}