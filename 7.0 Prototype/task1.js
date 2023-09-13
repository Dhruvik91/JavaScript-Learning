let animal = {
    name: "Cow",
    walk() {
        console.log("Animls can walk");
    },
    

};

let birds = {
    legs: 2,
    fly() {
        console.log("Birds can fly");
    },
    __proto__: animal
};

let fish = {
    fins: true,
    swim() {
        console.log("Fish can swim");
    },
}

console.log(birds.name);