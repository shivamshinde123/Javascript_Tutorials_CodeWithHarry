

const sayHello = (name) => {
    console.log(`Hello ${name}`)
}

sayHello("Shivam");

const x = {
    name: "Shivam",
    role: 'Full Stack Developer',
    exp: 30,
    show: function () {
        let new_this = this
        console.log(`The name is ${this.name}.\nThe role is ${this.role}`) // we can use the function and this keyword in the object and it refers to the js object x here.
        setTimeout(function () {
            console.log(`The name is ${new_this.name}.\nThe role is ${new_this.role}`) // here this refers to the window object, so we won't be able to access the name, role, and exp. so, instead we are using new_this which refers to the x object this.
        }, 2000)
    }
}

console.log(x.name, x.exp)
x.show()