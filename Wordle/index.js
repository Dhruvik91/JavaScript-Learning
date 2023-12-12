const prompt = require('prompt-sync')({ sigint: true });
const { correctWord, verifyIndicsOfLetters,
    verifyWord } = require("./setup.js");

async function game() {

    try {
        let attempt = 5;
        const userAddedWords = [];
        console.log(`You have ${attempts} to guess the correct word`);

        while (attempt > 0) {

            const userWord = prompt(`Please Enter ${correctWord.length} Letter Word: `).toUpperCase();

            if (userWord.length !== 5) {
                console.log(`Please Enter ${correctWord.length} Letter Word!!`);
                continue;
            }

            const verifiedWord = await verifyWord(userWord);

            if (verifiedWord == 0) {
                console.log("The Word Doesnt Exist!!!");
                continue;
            }

            const positionOfLetters = verifyIndicsOfLetters(verifiedWord);
            userAddedWords.push(verifiedWord);

            if (userWord == correctWord) {
                console.log("Congrats!!! That was the correct word ");
                return;
            }

            console.log("The Input Word is:", userAddedWords[userAddedWords.length - 1]);
            console.log("The Positions Of Letters are:", positionOfLetters);
            attempt--;
            console.log(`The attempts remaining are:`, attempt);

            if (attempt === 0) {
                console.log("You lose");
                console.log("The correct word was: ", correctWord);
            }
        }
    } catch (error) {
        console.log(error);
    }
}


game();