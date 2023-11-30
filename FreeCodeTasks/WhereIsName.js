/* Wherefore art thou */

/* Make a function that looks through an array of objects (first argument) 
and returns an array of all objects that have matching name and value pairs (second argument).  */

/* Each name and value pair of the source object has to be present in the object from the collection,
 if it is to be included in the returned array.
 */

/* whatIsInAName([{ first: "Romeo", last: "Montague" },
{ first: "Mercutio", last: null }, 
{ first: "Tybalt", last: "Capulet" }], 
{ last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }]. */

const data = [{ "a": 1, "b": 2, "c": 3 }]

const matchValue = { "a": 1, "b": 9999, "c": 3 };

function whatIsInAName(collection, source) {
    const keysOfSour = Object.keys(source);
    const matchedItems = new Array();

    for (let i = 0; i < collection.length; i++) {

        const keysOfSingleObjFromCollec = Object.keys(collection[i]);

        for (let j = 0; j < keysOfSingleObjFromCollec.length; j++) {
            let flag = 0

            for (let item of keysOfSour) {

                if (keysOfSour.length <= keysOfSingleObjFromCollec.length) {
                    if (collection[i][item] === source[item]) {
                        flag = 1
                    }
                    else { flag = 0; break; }
                }
            }
            if (flag)
                matchedItems.push(collection[i])
        }

    }
    const set = new Set(matchedItems);
    return (Array.from(set));
}


whatIsInAName(data, matchValue);