function cal() {

    do {
        a = +prompt("Enter a number please?", 0);
    } while (!isFinite(a));

    let oper = prompt("Enter the operator");


    do {

        b = +prompt("Enter a number please?", 0);

    } while (!isFinite(b));


    switch (oper) {

        case "+":
            return a + b;

        case "-":
            return a - b;

        case "*":
            return a * b;

        case "/":
            return a / b;

        default:
            return null;
    }

}

let value = cal();

console.log(value);

let array = [];

for (value of array) {

    if (!array.includes(value))
        array.push(value);
}
console.log(array);

