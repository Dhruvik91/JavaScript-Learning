/* Simple Tasks */

function printNumber(num) {

    if (num == 0) {
        console.log("Done");
        return;
    }

    console.log(num);
    printNumber(num - 1);

}

printNumber(9);