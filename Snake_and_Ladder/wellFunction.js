
// This is the Dice for the game

function Dice() {
    return Math.floor(Math.random() * 6 + 1);
}


console.group("The Dice");
console.log(Dice());
console.groupEnd();

// -----------------------------------------------------------------------------------------------


// This is the snake and ladder for the board

function snakeLadder() {
    const snakeAndLadder = {};

    let checkCondition = 0;

    for (let i = 0; i < 10; i++) {

        const head = Math.ceil(Math.random() * 99);

        const tail = Math.ceil(Math.random() * 99);

        checkCondition = (head !== tail);

        if (checkCondition) {
            snakeAndLadder[head] = tail;
        }
    }
    return snakeAndLadder;
}

// -------------------------------------------------------------------------------------------------------------------


// This gives the winner of the game

function checkForWinner(player) {
    if (player[player[i].length - 1] === 100) {

        return true;
    }
    return false;
}


// -------------------------------------------------------------------------------------------------------------------


function playGame() {

    let dice = 0;
    let player = [[], [], [], []];
    const snakeAndLadder = snakeLadder();

    console.group("The snake and ladder:");
    console.table(snakeAndLadder);
    console.groupEnd();


    let winner = null;


    while (!winner) {

        for (let j = 0; j < player.length; j++) {

            if (winner !== null) break; // If a winner is found, exit the loop.

            let currentPosition = player[j].length ? player[j][player[j].length - 1] : 0;

            dice = Dice();

            currentPosition = currentPosition + dice;

            if (snakeAndLadder[currentPosition]) {
                // console.log("The players ladder position", currentPosition);
                currentPosition = snakeAndLadder[currentPosition];
                // console.log("The ladder of grace", currentPosition);
            }

            if (currentPosition <= 100) {
                player[j].push(currentPosition);


                if (checkForWinner(player[j])) {

                    console.group(`The winner is player ${j + 1}`);
                    console.log(player[j]);
                    console.groupEnd();
                    winner = j + 1;
                    break;
                }
            }
        }
    }
}

playGame();