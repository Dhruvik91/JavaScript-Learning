/* here is the task of the slot game */
const _ = require("lodash");


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to create reel 
function createReel(n) {

    const probabilities = {
        50: { min: 1, max: 5 },
        40: { min: 6, max: 8 },
        10: { min: 9, max: 10 }
    };
    const requiredReel = new Array();

    for (let [element, pattern] of Object.entries(probabilities)) {

        const numberOfElement = Math.floor(element * n) / 100;

        for (let i = 0; i < numberOfElement; i++) {
            let element = getRandomIntInclusive(pattern.min, pattern.max);
            requiredReel.push(element);
        }
    }
    return requiredReel;
}

// Function to make reel of required size and shuffled elements
function getReel(n) {

    const reelofElements = createReel(20);
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

    const mapOfUncheckedElements = roll();
    const sameElementPositions = Array.from(mapOfUncheckedElements.values());
    const patterns = getPatterns();
    const uncheckedPatterns = sameElementPositions.filter(item => item.length > 2);
    const map = new Map();

    for (let i = 0; i < patterns.length; i++) {

        for (let k = 0; k < uncheckedPatterns.length; k++) {
            let count = 0;
            for (let j = 0; j < patterns[i].length; j++) {

                for (let l = 0; l < uncheckedPatterns[k].length; l++) {

                    if (patterns[i][j] == uncheckedPatterns[k][l]) {
                        count++;
                    }
                }
            }
            if (count > 2) {
                map.set(i, { patternNo: i, pattern: patterns[i], count: count, patternChecked: uncheckedPatterns[k], });
            }
        }

    }
    const matchedPatternsData = Array.from(map.values());
    const winningElements = new Array();

    for (let [element, pattern] of mapOfUncheckedElements.entries()) {
        matchedPatternsData.forEach((item) => {
            if (item.patternChecked == pattern) {
                winningElements.push(element);
            }
        })
    }
    console.log(winningElements);
    return matchedPatternsData;
}

//Function to count money won in the roll
function countMoney() {
    const matchedPatterns = matchPattern();
    if (matchedPatterns.length === 0) {
        return ("Oops!!");
    } else {
        console.log(matchedPatterns);
        const countScore = matchedPatterns.reduce((acc, item) => acc + item.count, 0);
        const money = countScore * 5;
        return money;
    }
}

module.exports = {
    countMoney
};
