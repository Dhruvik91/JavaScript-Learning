/* here is the task of the slot game */


function getReels(n) {

    const reelsOfElements = [0, 3, 1, 0, , 0, 3, 4, 2, 1, 0, 2, 1, 0, 0];
    let randomNo = Math.floor(Math.random() * reelsOfElements.length);
    const noOfElementsInReel = n;
    const slicingCondition = reelsOfElements.length - n;

    if (randomNo < slicingCondition + 1) {
        const getSlicesOfReels = reelsOfElements.slice(randomNo, randomNo + noOfElementsInReel);
        return (getSlicesOfReels);
    }

    else if (randomNo > slicingCondition) {
        const getSlicesOfReels = reelsOfElements.slice(randomNo, randomNo + noOfElementsInReel);
        const sizeOfReel = getSlicesOfReels.length;

        if (sizeOfReel < n) {
            const difference = n - sizeOfReel;
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

    let transposedWindow = new Array()

    for (let i = 0; i < n; i++) {
        transposedWindow.push([])
        for (let j = 0; j < m; j++) {
            transposedWindow[i][j] = window[j][i];
        }
    }
    return (transposedWindow);
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
        ["00", "11", "02", "13", "04"],

    ];

    return (storedPatterns);
}

//--------------------------------------------------------------------------

function roll() {

    const window = windowOfReels(5, 3);
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
    return Array.from(map.values());
}

//---------------------------------------------------------------------------

function matchPattern() {

    const rolledData = roll();
    const patterns = getPatterns();

    // console.log(rolledData);
    // console.log(patterns);

    const filteredArray = rolledData.filter(item => item.length > 2);

    // console.log(filteredArray);
    const newArray = patterns.filter(item => Object.values(item.pattern1));

    console.log(newArray);

}

matchPattern()