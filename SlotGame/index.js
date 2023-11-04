const { matchPattern } = require('./utils.js');
const prompt = require('prompt-sync')({ sigint: true });

let totalMoney = 10000;

function countMoney() {
  const matchedPatterns = matchPattern();
  console.log(matchedPatterns);
  const countScore = matchedPatterns.reduce((acc, item) => acc + item.count, 0);
  const money = countScore * 2;
  return money;
}

//-------------------------------------------------------------------------------------

function checkBalance() {

  if (totalMoney < 0) {
    return ("Unsucifient Balance!!!");
  }
  else {
    return (totalMoney);
  }
}

//-------------------------------------------------------------------------------------

function Game(bet) {

  console.log("Please enter your choice:");
  console.log("1. Roll");
  console.log("2. Check Balance");
  console.log("3. Add Balance");
  console.log("4. Exit");

  while (true) {

    let choice = +prompt('What is the number?');
    if (choice == 4) break;

    switch (choice) {

      case 1: {
        totalMoney = totalMoney + countMoney() - bet;
        console.log(totalMoney);
      }
        break;

      case 2: console.log(checkBalance());
        break;
    }
  }
}

Game(50000);

