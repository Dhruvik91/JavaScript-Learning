/* Find the gcd of 2 numbers */

/* Here there are 2 approach:

1. Brute Force
2. Eculidean Algo */

/* Here we are using no 2 approach */

/* Eculidean Approach */

/* Here the Time complexity is O(log min(a,b) base phi). Phi bcs we dont know the base dividing the number */

/* function gcd(a, b) {

    while (a > 0 && b > 0) {
        if (a > b) {
            a = a % b;
        } else {
            b = b % a;
        }
    }
    if (a == 0) {
        console.log(b);
    } else {
        console.log(a);
    }
}
 */



/* Here the basic Brute Force Approach */

function gcd(a, b) {

    for (let i = Math.min(a, b); i >= 1; i--) {
        if (a % i == 0 && b % i == 0) {
            console.log(i);
            break;
        }
    }
}

console.log(gcd(52, 10));