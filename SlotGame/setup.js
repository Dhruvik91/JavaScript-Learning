/* here is the task of the slot game */
const _ = require("lodash");


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to create reel 
function createReel(n, ...probabilities) {

    const arrayOfProbabilities = [...probabilities];
    if (arrayOfProbabilities.reduce((sum, acc) => (sum + acc), 0) > 100) {
        return "Enter correct probabilities";
    }

    const totalSizeOfReel = n;
    const requiredReel = new Array();

    for (let probability of probabilities) {

        const numberOfElementFromProbabilities = Math.floor((probability * totalSizeOfReel) / 100);

        for (let i = 0; i < numberOfElementFromProbabilities; i++) {

            if (probabilities[0] == probability) {
                let element = getRandomIntInclusive(1, 5);
                requiredReel.push(element);
            }
            if (probabilities[1] == probability) {
                let element = getRandomIntInclusive(6, 8);
                requiredReel.push(element);
            }
            if (probabilities[2] == probability) {
                let element = getRandomIntInclusive(9, 10);
                requiredReel.push(element);
            }
        }
    }
    return requiredReel;
}

// Function to make reel of required size and shuffled elements
function getReel(n) {

    const reelofElements = createReel(10, 40, 50, 10);
    const shuffledElements = _.shuffle(reelofElements);
    const randomNo = Math.floor(Math.random() * shuffledElements.length);
    const noOfElementsInReel = n;
    const slicingCondition = shuffledElements.length - n;
    const getSlicesOfReels = shuffledElements.slice(randomNo, randomNo + noOfElementsInReel);
    const sizeOfReel = getSlicesOfReels.length;

    if (randomNo < slicingCondition + 1) {
        return getSlicesOfReels;
    }

    else if (randomNo > slicingCondition) {
        if (sizeOfReel < n) {
            const difference = n - sizeOfReel;
            const remainingElementsOfReel = shuffledElements.slice(0, difference);
            const finalReel = [...getSlicesOfReels, ...remainingElementsOfReel];
            return finalReel;
        }
    }
}

// Function to make a window of reels 
function windowOfReels(j, n) {

    const window = new Array();

    for (let i = 0; i < n; i++) {
        let reels = getReel(j);
        window.push(reels)
    }

    const transposedWindow = new Array()

    for (let i = 0; i < j; i++) {
        transposedWindow.push([])
        for (let k = 0; k < n; k++) {
            transposedWindow[i][k] = window[k][i];
        }
    }
    return transposedWindow;
}

//Function to get predefined patterns 
function getPatterns() {

    const storedPatterns = [
        ["00", "01", "02", "03", "04"],
        ["10", "11", "12", "13", "14"],
        ["20", "21", "22", "23", "24"],
        ["00", "11", "22", "13", "04"],
        ["20", "11", "02", "13", "24"],
        ["00", "01", "12", "03", "04"],
        ["20", "21", "12", "23", "24"],
        ["00", "11", "02", "13", "04"],
        ["10", "01", "12", "03", "14"],
        ["20", "01", "02", "03", "24"],
        ["00", "11", "02", "13", "04"],
    ];
    return storedPatterns;
}

// Function to roll the reels and get matching elements position
function roll() {

    const window = windowOfReels(3, 5);
    const map = new Map();

    for (let i = 0; i < window.length; i++) {

        for (let k = 0; k < window[i].length; k++) {
            let element = window[i][k];

            if (!map.has(element)) {
                map.set(element, [`${i}${k}`])
            }
            else if (map.has(element)) {
                map.get(element).push(`${i}${k}`);
            }
        }
    }
    return map;
}

//Function to match the patterns 
function matchPattern() {

    const mapElements = roll();
    const sameElementPositions = Array.from(mapElements.values());
    const patterns = getPatterns();
    const uncheckedPatterns = sameElementPositions.filter(item => item.length > 2);
    const map = new Map();

    for (let i = 0; i < patterns.length; i++) {
        let count = 0;
        for (let j = 0; j < patterns[i].length; j++) {

            for (let k = 0; k < uncheckedPatterns.length; k++) {

                for (let l = 0; l < uncheckedPatterns[k].length; l++) {

                    if (patterns[i][j] == uncheckedPatterns[k][l]) {
                        count++;
                    }
                }
            }
        }
        if (count > 2) {
            map.set(i, { pattern: patterns[i], count: count });
        }
    }
    return Array.from(map.values());
}

//Function to count money won in the roll
function countMoney() {
    const matchedPatterns = matchPattern();
    if (matchedPatterns.length === 0) {
        return ("Oops!!");
    } else {
        console.log(matchedPatterns);
        const countScore = matchedPatterns.reduce((acc, item) => acc + item.count, 0);
        const money = countScore * 4;
        return money;
    }
}

module.exports = {
    countMoney
};
