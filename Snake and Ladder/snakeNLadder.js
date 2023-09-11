/* Task requriments:-
Requirements to be satisfied
- Board Setup: Design a 10x10 grid-based game board with start and end points for snakes and ladders.
- Dice: Implement a virtual six-sided dice for random number generation (1 to 6).
- Snakes and Ladders: Define specific positions for snakes and ladders, enabling automatic sliding or climbing.
- Winning Condition: Declare the first player reaching the last square as the winner. */


/* this is the dice */
function Dics() {
    return Math.floor(Math.random() * 6 + 1);


}

// function for the snakes
function snake(cp) {
    switch (cp) {
        case 39:
            return currentPosition = 3;
        case 47:
            return currentPosition = 32;
        case 59:
            return currentPosition = 37;
        case 95:
            return currentPosition = 55;
        case 89:
            return currentPosition = 51;
        case 99:
            return currentPosition = 4;

    }
}

// function for the ladders
function ladder(cp) {
    switch (cp) {
        case 8:
            return currentPosition = 30;
        case 17:
            return currentPosition = 46;
        case 31:
            return currentPosition = 67;
        case 42:
            return currentPosition = 80;
        case 57:
            return currentPosition = 85;
        case 68:
            return currentPosition = 93;
    }
}

let currentPosition = 0;

function game(board) {

    let dice = 0;


    for (let i = -1; i < board.length; i++) {

        dice = Dics();

        currentPosition = currentPosition + dice;


        console.log("value of the board", currentPosition);
        

        const ladderPosition = [8, 17, 31, 42, 57, 68]; // array for the position of the ladders

        ladderPosition.find((value) => {

            if (currentPosition === value) {
                console.log("The ladder position")
                ladder(value);
            }
        });


        const snakePosition = [39, 47, 59, 89, 95, 99];  // array for the position of the snakes

        snakePosition.find((value) => {

            if (currentPosition === value) {
                console.log("The snake position")
                snake(value);
            }
        });

        if (currentPosition > 100) {

            currentPosition = currentPosition - dice;

            console.log("value of the board 2", currentPosition);

        } 
        else if (currentPosition === 100) {

            console.log("The player is winner");

            return currentPosition;
        }
    }
}


/* this is the board  */
let board = [
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