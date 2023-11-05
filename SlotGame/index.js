const { matchPattern } = require('./setup.js');
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
    return (totalMoney);
}

//-------------------------------------------------------------------------------------

function Game(bet) {

  if (bet > totalMoney) {
    console.log(("Add correct amount of bet"));
    return;
  }

  console.log(("Please enter your choice:"));
  console.log("1. Roll");
  console.log("2. Check Balance");
  console.log("3. Add Balance");
  console.log("4. Exit");

  while (true) {

    let choice = +prompt('What is your choice?');
    if (choice == 4) break;

    switch (choice) {

      case 1: {
        console.log("These are the winning patterns!! Congrats");
        const moneyInThisRoll = countMoney();
        totalMoney = totalMoney + moneyInThisRoll - bet;
        console.log("THe amount of bet is:", bet);
        console.log("The money you won in this roll is:", moneyInThisRoll);
      }break;

      case 2: console.log(checkBalance());
        break;

      case 3: {
        const requiredMoney = +prompt("How much you want?");
        totalMoney = totalMoney + requiredMoney;
      }break;

      default: console.log("Please enter the correct choice!!!");
        break;
    }
  }
}

Game(50);

