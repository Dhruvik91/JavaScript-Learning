


function smallestCommons(arr) {

    const range = getRangeOfElements(arr);
    console.log(range);

    let allPrimes = [];
    let composite = [];

    for (let i = 0; i < range.length; i++) {

        if (getPrimeNo(range[i])) {
            allPrimes.push(range[i]);

        } else {
            composite.push(range[i]);
        }
    }
    console.log(allPrimes);
    console.log(composite);

    let divisionOfSingleElems = [];
}

console.log(smallestCommons([18, 23]));



function getRangeOfElements(arr) {

    arr.sort((a, b) => a - b);

    const rangeElems = new Array();

    for (let i = arr[0]; i <= arr[1]; i++) {
        rangeElems.push(i)
    }
    return rangeElems;
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



