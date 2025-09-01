
class Animal {
    constructor(name) {
        this._name = name;
    }

    fly() {
        console.log("Animal flying")
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }
}

class Rabbit extends Animal {
    eatCarrot(){
        console.log("Eating carrot")
    }
}

let a = new Rabbit("parrot")
a.fly()
console.log(a.name)

a.name = "Jackie"
console.log(a.name)

console.log(a instanceof Animal)
console.log(a instanceof Rabbit)  // instanceof check if it is instance of class or its inherited classes

let c = 56
console.log(c instanceof Animal)