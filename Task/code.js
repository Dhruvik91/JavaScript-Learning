/* Task 1
Create function that Accepts the String as a input and return the Array of Object sorted by the number of count.
Input: Abra ka dabra
Output1: Print Total input string length
Output2: [{ a: 5 }, { b: 2 }, { r: 2 }, { d: 1 }, { k: 1 }];
Time to complete this task : 30 mins */


function countNumber(s) {

    let newString = s.toLowerCase();

    let arr = [...newString];

    let map = new Map();

    for ( let value of arr ) {

        if (value !== ' ') {

            if(!map.has(value)) {

                map.set(value, {[value] : 0});
            }
            map.get(value)[value]++;
        }
    }

    console.log(Array.from(map.values()));
    

}



let a = "Abra ka dabra";

console.log(countNumber(a));