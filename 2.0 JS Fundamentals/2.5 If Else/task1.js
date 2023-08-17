/* Rewrite this if using the conditional operator '?':

let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
} */

let result = (a + b < 4) ? alert("Below") : alert("Over");