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

console.log(windowOfReels(3,5));

