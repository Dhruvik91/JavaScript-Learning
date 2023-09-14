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

const snake = {};

const ladder = {};


for (let i = 0; i < 10; i++) {
    const head = Math.ceil(Math.random() * 99);
    let tail = Math.ceil(Math.random() * 99);

    while ((snake[tail] !== ladder[head]) || (snake[head] !== ladder[tail])) {
        tail = Math.ceil(Math.random() * 98) + 1;
        if (head < tail) {
            ladder[head] = tail;
        } else {
            snake[head] = tail;
        }
    }
}

console.table(snake);
console.table(ladder);

// function for the ladders


/* for (let i = 0; i < 10; i++) {
    const head = Math.ceil(Math.random() * 100);
    const tail = Math.ceil(Math.random() * 100);
    if ((head < tail) && (head !== 100 && tail !== 100) && (head !== tail)) {
        ladder[head] = tail;
    }
} */



let currentPosition = 0;

const player = [[], [], [], []];


function game(board) {

    let dice = 0;


    for (let i = -1; i < board.length; i++) {

        for (let j = 0; j < player.length; j++) {

            dice = Dics();

            currentPosition = currentPosition + dice;

            console.log(currentPosition);

            if (ladder[currentPosition]) {
                console.log("The players ladder position", currentPosition);
                currentPosition = ladder[currentPosition];
                console.log("The ladder of grace", currentPosition);
            }



            if (snake[currentPosition]) {
                console.log("The players snake position", currentPosition);
                currentPosition = snake[currentPosition];
                console.log("The snakes bite", currentPosition);
            }


            if (currentPosition < 101) {

                player[j].push(currentPosition);
                //   console.log(`The position of player[${j + 1}]:`, player[j]);


                if (currentPosition > 100) {

                    currentPosition = currentPosition - dice;

                    console.log("value of the board 2", currentPosition);

                }

                if (currentPosition === 100) {

                    if (player[j].includes(100)) {

                        console.table(`The player is winner ${j + 1}`, player[j]);

                        return;
                    }
                }

            }
        }
    }
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

game(board);


