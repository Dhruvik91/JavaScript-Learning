/* here is the task of the slot game */

 
const _ = require("lodash");

function getReel(n) {

    const reelofElements = [0, 3, 1, 0, 0, 3, 4, 2, 1, 0, 2, 1, 0, 0];
    const shuffledElements = _.shuffle(reelofElements);
    let randomNo = Math.floor(Math.random() * shuffledElements.length);
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

//---------------------------------------------------------------------------------------

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

//---------------------------------------------------------------------------------------

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

//--------------------------------------------------------------------------

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
    return Array.from(map.values());
}

//---------------------------------------------------------------------------

function matchPattern() {

    const sameElementPositions = roll();
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

//----------------------------------------------------------------------------

module.exports = {
    matchPattern,
  };
