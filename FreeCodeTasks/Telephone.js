
function steamrollArray(arr) {
    const brackets = ["[", "]", ",", "\"", "}"];
    const curlyBracs = ["{"];
    const elements = JSON.stringify(JSON.parse(JSON.stringify(arr))).split("");
    const set = new Set();

    for (let i = 0; i < elements.length; i++) {

        if (!brackets.includes(elements[i])) {

            if (curlyBracs.includes(elements[i]) && !set.has({})) {
                set.add({});
                continue;
            } else if (!isNaN(elements[i]) && !set.has(elements[i])) {
                set.add(Number(elements[i]))
            } else {
                set.add((elements[i]))
            }
        }
    }

    return (Array.from(set));
}
steamrollArray([1, {}, [3, [[4]]]]);