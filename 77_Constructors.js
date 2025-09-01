
class railwayForm {
    // constructor
    constructor(name, train_number, address) {
        console.log(`Constructor called for ${name} with train number ${train_number}`);
        this.name = name;
        this.train_number = train_number;
        this.address = address;
    }

    // class methods
    preview(){
        alert(`${this.name}, your form details: \n train number: ${this.train_number} \n address: ${this.address}`);
    }

    submit() {
        alert(`${this.name}, Your Form is submitted with train number ${this.train_number}`)
    }

    cancel() {
        alert(`${this.name}, Your Form is cancelled with train number ${this.train_number}`)
        this.train_number = 0;
    }
}

let harryForm = new railwayForm("harry", 123, "1243 random building, ABC");
harryForm.preview();
harryForm.submit();
harryForm.cancel();

