
class railwayForm {
    // constructor
    constructor(){}

    // class methods
    submit() {
        alert(`${this.name}, Your Form is submitted with train number ${this.train_number}`)
    }

    cancel() {
        alert(`${this.name}, Your Form is cancelled with train number ${this.train_number}`)
    }

    fill(name, train_number){
        this.name = name;
        this.train_number = train_number;
    }
}

let harryForm = new railwayForm()
harryForm.fill("harry", 123)

let rohanForm1 = new railwayForm()
let rohanForm2 = new railwayForm()
rohanForm1.fill("rohan", 123)
rohanForm2.fill("rohan", 342)

harryForm.submit()
rohanForm1.submit()
rohanForm2.submit()
rohanForm2.cancel()

