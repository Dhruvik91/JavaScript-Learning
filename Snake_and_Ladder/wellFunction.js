function Dice() {
    return Math.floor(Math.random() * 6 + 1);
}

console.group("The Dice");
console.log(Dice());
console.groupEnd();

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

function checkForWinner(player, i) {
    if (player[i][player[i].length - 1] >= 100) {
        return true;
    }
    return false;
}

function playGame() {
    let dice = 0;
    let player = [[], [], [], []];

    let getPlayerData = {};
    let showPlayerData = [];
    const snakeAndLadder = snakeLadder();

    console.group("The snake and ladder:");
    console.table(snakeAndLadder);
    console.groupEnd();

    let winner = null;

    while (!winner) {

        for (let j = 0; j < player.length; j++) {

            if (winner !== null) break;

            let currentPosition = player[j].length ? player[j][player[j].length - 1] : 0;

            let perv = player[j].length ? player[j][player[j].length - 1] : 0;

            console.log(`The current position is: ${j + 1}`, currentPosition);

            dice = Dice();

            currentPosition += dice;

            if (snakeAndLadder[currentPosition]) {
                currentPosition = snakeAndLadder[currentPosition];
            }

            if (currentPosition <= 100) {

                player[j].push(currentPosition);

                getPlayerData = {
                    playerId: j + 1,
                    previousPosition: perv,
                    dice: dice,
                    currentPosition: currentPosition,
                    winner: checkForWinner(player, j) ? "Yes" : "False",
                }

                showPlayerData.push(getPlayerData);


                if (checkForWinner(player, j)) {

                    console.group(`The winner is player ${j + 1}`);
                    console.log(player[j]);
                    console.groupEnd();
                    winner = j + 1;
                    break;
                }
            }

        }
    }
    console.table(showPlayerData);
}

playGame();
