/* Tip 2: Use Template Interpolation to Render Strings Instead of the Assignment Operator */


/* The template interpolation syntax is cleaner and more readable than the regular concatenation with plus (+).

With template interpolation, you can conveniently embed variables in strings. */

const name = 'John Doe';
const age = 20;

const plusConcat =
  'Hi there 👋🏽 \nMy name is ' + name + ' and I am ' + age + ' years old.';

const templateLiteralConcat = `Hi there 👋🏽 \nMy name is, ${name} and I am ${age} years old.`;

console.log(templateLiteralConcat);
