/* Convert interger to Roman number */

function convertToRoman(num) {

    const strElems = String(num).split("");
    const reminderElems = [];


    for (let i = 1; i <= strElems.length; i++) {

        let reminder = num % (Math.pow(10, i));
        num = num - reminder;
        let quoitent = Math.floor(num / (Math.pow(10, i)));
        console.log(quoitent);
        reminderElems.push(reminder);
    }

    console.log(reminderElems);
}

convertToRoman(3160);