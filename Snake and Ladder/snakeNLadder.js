/* Task requriments:-
Requirements to be satisfied
- Board Setup: Design a 10x10 grid-based game board with start and end points for snakes and ladders.
- Dice: Implement a virtual six-sided dice for random number generation (1 to 6).
- Snakes and Ladders: Define specific positions for snakes and ladders, enabling automatic sliding or climbing.
- Winning Condition: Declare the first player reaching the last square as the winner. */

function Dics() {
    return Math.ceil(Math.random() * 6);
}



function game() {
    let player = [];

    let currentPosition = 0;

    while (currentPosition!== 100) {
        let dic = Dics();

        currentPosition = currentPosition + dic;

        player.push(currentPosition);

        if (player.includes(100)) {
            console.log("you win");
        }
    }
    console.log("hello");

}

game();

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
