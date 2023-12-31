/* Task requriments:-
Requirements to be satisfied
- Board Setup: Design a 10x10 grid-based game board with start and end points for snakes and ladders.
- Dice: Implement a virtual six-sided dice for random number generation (1 to 6).
- Snakes and Ladders: Define specific positions for snakes and ladders, enabling automatic sliding or climbing.
- Winning Condition: Declare the first player reaching the last square as the winner. */


/* this is the dice */
function Dics() {
    return Math.floor(Math.random() * 6 + 1);
} // 4,6 // 5

// function for the snakes

const snakeNLadder = {};

let checkCondition = 0;


for (let i = 0; i < 10; i++) {

    const head = Math.ceil(Math.random() * 99);

    const tail = Math.ceil(Math.random() * 99);

    checkCondition = (head !== tail);

    if (checkCondition) {
        snakeNLadder[head] = tail;
    }
}


// console.table(snake);
console.table(snakeNLadder);

// function for the ladders


/* for (let i = 0; i < 10; i++) {
    const head = Math.ceil(Math.random() * 100);
    const tail = Math.ceil(Math.random() * 100);
    if ((head < tail) && (head !== 100 && tail !== 100) && (head !== tail)) {
        ladder[head] = tail;
    }
} */


const player = [[], [], [], []];


function game() {
    let dice = 0;
    let winner = null;

    while (!winner) {

        for (let j = 0; j < player.length; j++) {

            if (winner !== null) break; // If a winner is found, exit the loop.

            let currentPosition = player[j].length ? player[j][player[j].length - 1] : 0;
            dice = Dics();
            currentPosition = currentPosition + dice;

            if (snakeNLadder[currentPosition]) {
                console.log("The players ladder position", currentPosition);
                currentPosition = snakeNLadder[currentPosition];
                console.log("The ladder of grace", currentPosition);
            }

            if (currentPosition <= 100) {
                player[j].push(currentPosition);
                

                if (currentPosition === 100) {
                    if (player[j].lastIndexOf(100)) {
                        winner = j + 1;
                    }
                }
            }
        }
    }

    console.table(`The player ${winner} is the winner.`, player[winner - 1]);
}





/* this is the board  */
const board = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
    71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
    81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
    91, 92, 93, 94, 95, 96, 97, 98, 99, 100
];

game();


