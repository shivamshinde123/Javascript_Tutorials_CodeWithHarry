
class Employee {

    constructor(name) {
        this.name = name;
        console.log(`Employee ${this.name}'s constructor ran`);
    }

    login(){
        console.log("Employee has logged in ")
    }

    logout(){
        console.log("Employee has logged out ")
    }

    request_leaves(num_of_leaves) {
        console.log(`Employee has requested ${num_of_leaves} leaves - Auto Approved`)
    }
}

class Programmer extends Employee {

    // if there is no constructor in the child class, then constructor is created automatically. Find it below:
    // constructor(...args) {
    //     super(...args);
    // }

    // creating a child class constructor
    constructor(name) {
        super(name);  // must call master class constructor and should be invoked before using this keyword
        this.name = name;
        console.log(`Programmer ${this.name}'s constructor ran`);
    }

    request_coffee(x) {
        console.log(`Employee has requested ${x} coffees`)
    }

    request_leaves(num_of_leaves) {
        super.request_leaves(num_of_leaves);
        console.log("One extra leave is granted.")
    }

}

let e = new Programmer("shivam")
e.login()
e.logout()
e.request_leaves(3)