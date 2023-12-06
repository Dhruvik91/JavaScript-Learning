/* Telephone Number Validator */


function telephoneCheck(str) {

    const map = new Map();

    map.set("1", { pattern: "...-...-....", count: 2 })
        .set("2", { pattern: "(...)...-....", count: 3 })
        .set("3", { pattern: "(...) ...-....", count: 4 })
        .set("4", { pattern: "... ... ....", count: 3 })
        .set("5", { pattern: "..........", count: 0 })
        .set("6", { pattern: "1 ... ... ....", count: 4 })
        .set("7", { pattern: "1 (...) ...-....", count: 6 })
        .set("8", { pattern: "1(...)...-....", count: 4 });


    const strElems = str.split("");
    let flag = 0;

    for (let i = 1; i <= Array.from(map.keys()).length; i++) {
        let ct = 0;
        let pat = map.get(String(i)).pattern.split('');

        for (let j = 0; j < strElems.length; j++) {
            if (pat.join('').charAt(j) == str.charAt(j)) {
                ct++;
            }
        }

        if (map.get(String(i)).count == ct) {
            flag = 1;
        }
        if (map.get(String(i)).count == null && str.length === 10) {
            flag = 1;
        }

    }

    if (flag) {
        return true;
    } else {
        return false;
    }
}
console.log(telephoneCheck("5555555555"));