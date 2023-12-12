/* This is the setup for the game wordle */

const correctWord = "COVER";

// function will verify the user entered word, if it exist or not
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


//function to make obj 
function makeObjOf(obj, prop, item) {
    return !obj[prop] ?
        obj[prop] = [item] :
        obj[prop].push(item);
}

// function to verify the available letters in the entered word
function verifyIndicsOfLetters(userWord) {
    const checkedLettersPosition = {};

    for (let i = 0; i < userWord.length; i++) {

        if (correctWord.indexOf(userWord[i]) === userWord.indexOf(userWord[i])) {
            makeObjOf(checkedLettersPosition, "letterInPerfectPosition", userWord[i])

        } else if (correctWord.indexOf(userWord[i]) !== userWord.indexOf(userWord[i])
            && correctWord.indexOf(userWord[i]) !== -1) {
            makeObjOf(checkedLettersPosition, "letterInImperfectPosition", userWord[i])

        } else {
            makeObjOf(checkedLettersPosition, "letterNotInWord", userWord[i])
        }
    }
    return checkedLettersPosition;
}

module.exports = {
    correctWord,
    verifyIndicsOfLetters,
    verifyWord
};



