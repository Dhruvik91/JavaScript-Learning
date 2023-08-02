class Animal {

    constructor(name) {
        this.name = name;    // here the this = Animal 
    }

    walk() {
        console.log(Animal.capitalLetter(this.name) + " can walk ");  
    }

    static capitalLetter(name) {                        /*  here in the static method, we need to write 
                                                          the name of the class with the method we created*/
        return name[0].toUpperCase() + name.slice(1);
    }

}

let ani = Animal.capitalLetter("rabbit"); // this will give me the output of the static method only
console.log(ani);  // Rabbit
 
let ann = new Animal("tiger");           // this will give me the output of the walk method
(ann.walk());

console.log(ann.capitalLetter("lion")); // this will throw an error, as we cant use the static method like this 

/* Note:- The static methods are only callable in class only. They cant be called outside the class*/