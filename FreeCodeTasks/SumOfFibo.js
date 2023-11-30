/* Sum All Odd Fibonacci Numbers */

/* sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5. */


function sumFibs(num) {

    let startPoint = 1;
    let endPoint = 1;
    let sum;
    const fiboSeries = new Array();

    for (let i = 1; i <= num; i++) {

        fiboSeries.push(startPoint)
        sum = startPoint + endPoint;
        startPoint = endPoint;
        endPoint = sum;

    }
    return fiboSeries.filter(item => item % 2 !== 0 && item <= num).reduce((sum, curr) => sum + curr, 0);
}


console.log(sumFibs(10))