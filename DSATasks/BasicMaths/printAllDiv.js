/* Print all Divisors */

/* In this problem also, there 2 approachs:

1. Brute Force
2. Optimal Appr.

*/

function findAllDiv(num) {

    const divisors = [];
    //---- Brute Force Logic---//

    /* for (let i = 1; i <= num; i++) {

        if (num % i == 0) {
            divisors.push(i);
        }
    } */

    //-----Optimal Approach -----//

    for (let i = 1; i * i <= num; i++) {

        if (num % i == 0) {
            if ((num / i) == i) {
                divisors.push(i);
                break;
            }
            divisors.push((num / i), i);
        }
    }
    return divisors;
}

const num = 36;

console.log(findAllDiv(num));