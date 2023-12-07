/* Find the Symmetric Difference */

function sym(arg1, ...args) {

    let set = new Set();
    let noOfArr = [arg1, ...args];

    for (let item of noOfArr) {

        let newSet = new Set(item);

        newSet.forEach(element => {
            set.has(element) ? set.delete(element) : set.add(element);
        })
    }
    console.log(Array.from(set.values()));
}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);