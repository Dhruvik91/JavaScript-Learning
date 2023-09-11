/* Tip:-9 To avoid tampering with your objects, 
you can seal them with Object.seal and 
freeze them with Object.freeze(). */


const person1 = {
    name: "Dhruvik Gondaliya",
    clg: "LDRP",
    Placement: false,
    happyWithLife: false
}

Object.seal(person1);

person1.address = "gondal"; // this can't be add as the object is sealed
console.table(person1);

person1.name = "Yash Gondaliya"; // here we can modify the object values
console.table(person1);


const person2 = {
    name: "Meet Gondaliya",
    clg: "RKU",
    Placement: false,
    happyWithLife: false
}

 Object.freeze(person2);

 person2.name = "Meet";
 console.table(person2); // here we cant see the modified name as it cant modify the values


/* The difference between Object.freeze() and Object.seal() 

is that Object.seal() allows you to modify the entries 

while Object.freeze() does not. 

This makes Object.freeze() stronger. */