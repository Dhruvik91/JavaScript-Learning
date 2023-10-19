/* here is the task of the slot game */


function getReels(n) {

    const reelsOfElements = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 1, 2, 2, 3, 4, 5, 5, 6, 6, 7];
    let randomNo = Math.floor(Math.random() * reelsOfElements.length);
    const noOfElementsInReel = n;

    if (randomNo < 18) {
        const getSlicesOfReels = reelsOfElements.slice(randomNo, randomNo + noOfElementsInReel);
        return (getSlicesOfReels);
    }

    else if (randomNo >= 18) {
        const getSlicesOfReels = reelsOfElements.slice(randomNo, randomNo + noOfElementsInReel);
        const sizeOfReel = getSlicesOfReels.length;

        if (sizeOfReel < 5) {
            const difference = 5 - sizeOfReel;
            const remainingElementsOfReel = reelsOfElements.slice(0, difference);
            const finalReel = [...getSlicesOfReels, ...remainingElementsOfReel];
            return (finalReel);
        }
    }
}

//---------------------------------------------------------------------------------------

function windowOfReels(m, n) {

    let window = new Array();

    for (let i = 0; i < m; i++) {
        let reels = getReels(n);
        window.push(reels)
    }

    let transposedWindow = JSON.parse(JSON.stringify(window));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < m; j++) {
            transposedWindow[j][i] = window[i][j];
        }
    }
    return (transposedWindow);
}

//---------------------------------------------------------------------------------------

function getPatterns() {

    const storedPatterns = {
        pattern1: ["00", "01", "02", "03", "04"],
        pattern2: ["10", "11", "12", "13", "14"],
        pattern3: ["20", "21", "22", "23", "24"],
        pattern4: ["00", "11", "22", "13", "04"],
        pattern5: ["20", "11", "02", "13", "24"],
        pattern6: ["00", "01", "12", "03", "04"],
        pattern7: ["20", "21", "12", "23", "24"],
    }
    return (storedPatterns);
}


function roll() {

    const window = windowOfReels(3, 5);
    const patterns = getPatterns();

    let map = new Map();

    for (let i = 0; i < window.length; i++) {

        for (let j = 0; j < window[i].length; j++) {
            let element = window[i][j];

            if (!map.has(element)) {
                map.set(element, [`${i}${j}`])
            }
            else if (map.has(element)) {
                map.get(element).push(`${i}${j}`);
            }
        }
    }
    console.log(map);
    console.log(window);

}

roll();
