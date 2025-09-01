
class Animal {

    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    run() {
        console.log(`${this.name} is running`);
    }

    shout() {
        console.log(`${this.name} is shouting`);
    }
}

class Monkey extends Animal {

    eatBanana() {
        console.log(`${this.name} is eating Banana`);
    }

    hide() {
        console.log(`${this.name} is hiding.`)
    }
}

let ani = new Animal("Brugo", "White and Brown");
let mok = new Monkey("moku", "Orange")

ani.shout()
mok.eatBanana()
mok.hide()
// ani.hide() // this will throw an error
