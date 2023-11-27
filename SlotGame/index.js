const { countMoney } = require('./setup.js');
const prompt = require('prompt-sync')({ sigint: true });

let totalMoney = 10000;

//Function to check balance
function checkBalance() {
  if (totalMoney <= 0) {
    return ("Unsufiicient Balance!!!, You have only:", totalMoney);
  } else {
    return totalMoney;
  }
}

//Function to check condition of the money added at different places
function checkConditionFor(money) {
  if (money <= 0 || isNaN(money)) {
    return true;
  }
}

//Function to add money to the wallet
function addMoney() {
  const requiredMoney = +prompt("How much money do you want?");

  if (checkConditionFor(requiredMoney)) {
    console.log("Please enter correct amount!!!")
  } else {
    totalMoney = totalMoney + requiredMoney;
    return totalMoney;
  }
}

//Function to play the game 
function Game(bet) {

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

        // const bet = +prompt("How much bet you want to add?");
       /*  if () {
          console.log(("Add correct amount of bet"));
          return;
        } */

        if (checkConditionFor(totalMoney) || bet > totalMoney || checkConditionFor(bet)) {
          console.log("You dont have enough money!!!");
          console.log('\n');
          const usersAnswer = prompt("Do you want to add money??", "Yes or No");

          if (usersAnswer == "yes" || usersAnswer == "Yes") {
            addMoney();
          } else {
            break;
          }
        }

        const moneyInThisRoll = countMoney();
        if (isNaN(moneyInThisRoll)) {
          console.log("sorry, you missed this roll winning");
          totalMoney = totalMoney - bet;
        } else {
          console.log("These are the winning patterns!! Congrats");
          totalMoney = totalMoney + moneyInThisRoll - bet;
          console.log("The amount of bet is:", bet);
          console.log("The money you won in this roll is:", moneyInThisRoll);
        }
      } break;

      case 2: console.log(checkBalance());
        break;

      case 3: addMoney();
        break;

      default: console.log("Please enter the correct choice!!!");
        break;
    }
  }
}

Game(20);

