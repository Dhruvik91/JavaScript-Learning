// const { verifyWord } = require('./didWordExist');
const prompt = require('prompt-sync')({ sigint: true });

async function verifyWord(wrd) {

    try {
        const BASE_URL = `https://api.dictionaryapi.dev`;
        const response = await fetch(`${BASE_URL}/api/v2/entries/en/${wrd}`);
        const wordData = await response.json();

        if (wordData[0]?.word) {
            return wrd;
        } else if (wordData?.title) {
            return 0;
        }
    } catch (err) {
        console.error(err);
    }
};

const letters = ["a", "b", "c", "d", "e"];

async function jumbleGame(letters) {

    console.log("The letters for the jumble game are:", letters);
    console.log("What do you want to do? ");
    console.log("1. Play");
    console.log("2. To check the correct words entered");
    console.log("3. Exit");

    const existedWords = [];
    while (true) {

        let choice = +prompt("Enter your choice: ");
        if (choice == 3) { break; }

        switch (choice) {

            case 1: {

                console.log("Type \"3\" to exit from game");
                while (true) {

                    const userWord = prompt("Please enter the word made from the above letters: ");
                    if (userWord == 3) {
                        break;
                    }
                    const userWordLetters = userWord.split("");

                    if (existedWords.includes(userWord)) {
                        console.log(`The word ${userWord} is already exist!!!`);
                    }
                    else {

                        if (!userWordLetters.every(item => letters.includes(item))) {
                            console.log("The entered word has other letters in it!!!");
                            continue;
                        }
                        
                        const verifiedWord = await verifyWord(userWord);
                        
                        if (verifiedWord == 0) {
                            console.log(`The word ${userWord} is not exist!!!`)
                        } 
                        
                        console.log("Yes, you are right");
                        existedWords.push(verifiedWord);

                    }
                }
            } break;

            case 2: console.log(existedWords); break;

            default: console.log("Please enter the correct choice!!!");
                break;
        }
    }
}

jumbleGame(letters);
