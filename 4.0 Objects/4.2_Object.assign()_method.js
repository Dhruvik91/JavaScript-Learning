/* Copying an object variable creates one more reference to the same object.

But what if we need to duplicate an object? */


const user = {
    name: "Hari",
    surname: "Ram"
}

const clone = {};

for (key in user) {

    clone[key] = user[key]; // this just creates the copy of the object. it doesnt create the refference
}


console.table(clone);



// ------------------------------------------------------------------------------------------------------------------

/* Now the shortcut for it */
/* Use Object.assign() method */

let clone2 = Object.assign({}, user);

console.table(clone2);