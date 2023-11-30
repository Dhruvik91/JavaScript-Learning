/* Sum primes  */


function sumPrimes(num) {

    let allPrimes = [];

    for (let i = 2; i <= num; i++) {

        if (getPrimeNo(i)) {
            allPrimes.push(i);
        }
    }
    return (allPrimes.filter(item => item <= num).reduce((sum, curr) => sum + curr, 0));
}

function getPrimeNo(number) {

    let isPrime = true;
    if (number <= 1) {
        return 1;
    }
    else if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
        return isPrime;
    }
}

console.log(sumPrimes(977));