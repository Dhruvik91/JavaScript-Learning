/* The comma operator allows us to evaluate several expressions, dividing them with a comma ,.

Each of them is evaluated but only the result of the last one is returned. */

let a = (1 + 3, 6 + 1);

console.log(a); // 7  // here the left side will get thrown away and we will get the result of the right side