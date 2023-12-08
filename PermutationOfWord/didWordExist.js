/* Find the wrd exist in the dictionary  */

const axios = require("axios");

const arr = ['a', 't', 'E'];

// async function to verify given word is in dictionary or not 
async function verifyWord(wrd) {

    try {
        const BASE_URL = `https://api.dictionaryapi.dev`;
        const response = await axios.get(`${BASE_URL}/api/v2/entries/en/${wrd}`);
        const wordData = response.data;

        if (wordData[0].word == wrd) {
            return wrd;
        } else if (wordData[0].title) {
            return 0;
        }
    } catch (err) {
        console.error(err);
    }
}

//function to make dfferent words from given array of letters
function jumbleWords(words) {

    const wordsInLowerCaseAndSorted = words.join('').toLowerCase().split("").sort((a, b) => a - b);
    const outcomes = noOfOutcomes(wordsInLowerCaseAndSorted.length) + wordsInLowerCaseAndSorted.length;

    for (let i = 1; i <= outcomes; i++) {

        
    }

}


jumbleWords(arr);

//function to find the num of possible outcomes of the letters 
function noOfOutcomes(noOfwords) {
    const len = noOfwords;
    return len == 0 ? 1 : len * noOfOutcomes(noOfwords - 1)
}