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
  if (totalMoney <= 0) {
    return ("Unsufiicient Balance!!!");
  } else {
    return totalMoney;
  }
}

//-------------------------------------------------------------------------------------

function addMoney() {
  const requiredMoney = +prompt("How much you want?");
  totalMoney = totalMoney + requiredMoney;
  return totalMoney;
}

//-------------------------------------------------------------------------------------

function Game() {

  const bet = +prompt("How much bet you want to add?");

  if (bet > totalMoney || bet <= 0) {
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
        if (totalMoney < bet || totalMoney <= 0) {
          console.log("You dont have enough money!!!");
          console.log('\n');
          console.log("Do you want to add money??");
          addMoney();
        }
        console.log("These are the winning patterns!! Congrats");
        const moneyInThisRoll = countMoney();
        totalMoney = totalMoney + moneyInThisRoll - bet;
        console.log("The amount of bet is:", bet);
        console.log("The money you won in this roll is:", moneyInThisRoll);
      } break;

      case 2: console.log(checkBalance());
        break;

      case 3: {
        (addMoney());
      } break;

      default: console.log("Please enter the correct choice!!!");
        break;
    }
  }
}

Game();

