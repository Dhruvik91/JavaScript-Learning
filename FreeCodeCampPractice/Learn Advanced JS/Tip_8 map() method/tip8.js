/* The map() method is a higher-order array method. It allows you to transform elements of an array into new values, 
creating a new array with the same length as the original but with modified elements.
It is very common to use map() for showing items coming from an API or the ones you created yourself */

const number = [1, 2, 3, 4, 5];

const squareOfNumbers = number.map(num => num * num);

console.log(squareOfNumbers);


const fruits = ["Apple", "Banana", "Orange"];

const itemList = document.querySelector("#item-list");

const ilList = fruits.map((name) => {
    const Li = document.createElement("li");
    Li.textContent = name;
    Li.style.color = "Red";
    return Li;
});

ilList.forEach((Li) => {
    itemList.appendChild(Li);
});