/* Convert interger to Roman number */

function convertToRoman(num) {

    const map = new Map();
    map.set("1", "I")
        .set("4", "IV")
        .set("5", "V")
        .set("9", "IX")
        .set("10", "X")
        .set("40", "XL")
        .set("50", "L")
        .set("90", "XC")
        .set("100", "C")
        .set("400", "CD")
        .set("500", "D")
        .set("900", "CM")
        .set("1000", "M")

    const strElems = String(num).split("");
    const reminderElems = [];

    // This loop will give reminders
    for (let i = 1; i <= strElems.length; i++) {
        let reminder = num % (Math.pow(10, i));
        num = num - reminder;
        reminderElems.push(reminder);
    }

    reminderElems.sort((a, b) => b - a);
    const mapKeys = Array.from(map.keys()).sort((a, b) => b - a);
    let finalStr = "";

    // this loop will iterate reminder of the number
    for (let i = 0; i < reminderElems.length; i++) {

        // this loop will iterate the map keys 
        for (let j = 0; j < mapKeys.length; j++) {

            let nonZeroNumber = Math.floor(reminderElems[i] / mapKeys[j]);
            let noToAddAtLast = reminderElems[i] % mapKeys[j];

            if (nonZeroNumber > 0) {

                //this loop will add the req element from map 
                for (let k = 1; k <= nonZeroNumber; k++) {
                    finalStr += map.get(mapKeys[j]);
                }

                if (noToAddAtLast >= 10 && noToAddAtLast <= 300) {

                    let forNoOfX = 0;

                    if (noToAddAtLast >= 10 && noToAddAtLast <= 30) {
                        forNoOfX = Math.ceil(noToAddAtLast / Math.pow(10, i + 1));
                    } else {
                        forNoOfX = Math.ceil(noToAddAtLast / Math.pow(10, i + 2));
                    }

                    // this loop will add the number of 10,100,1000 (X,C,M) after first letter
                    for (let i = 1; i <= forNoOfX; i++) {
                        finalStr += map.get(mapKeys[j + 2]);
                    }
                }

                if (noToAddAtLast > 0 && noToAddAtLast < 4) {

                    // this loop will add the remaining numbers like (I,II,III)
                    for (let i = 1; i <= noToAddAtLast; i++) {
                        finalStr += map.get(mapKeys[j + 2])
                    }
                }
                break;
            }
        }

    }
    return (finalStr);
}

convertToRoman(860);


