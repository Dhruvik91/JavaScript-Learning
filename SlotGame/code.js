/* here is the task of the slot game */


function reelWindow(m, n) {


    let window = [];

    for (let i = 0; i < m; i++) {
        let reels = [];

        for (let j = 0; j < n; j++) {
            let elementsOfReels = Math.floor(Math.random() * 9 + 1);

            console.log(elementsOfReels);
            reels.push(elementsOfReels);

        }
        window.push(reels);
    }

console.log(window);

}

reelWindow(3,3);