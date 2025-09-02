
class ComplexNumber{

    constructor(real_part, imaginary_part){
        this._real_part = real_part;
        this._imaginary_part = imaginary_part;
        this.i = Math.sqrt(-1);
    }

    create_complex_number(){
        return this.real_part + this.i * this.imaginary_part;
    }

    add_complex_number(num1, num2){
        return num1._real_part + num2._real_part + this.i * (num1._imaginary_part + num2._imaginary_part);
    }

    set real_part(real_part){
        this._real_part = real_part;
    }

    set imaginary_part(real_part){
        this._imaginary_part = real_part;
    }

    get real_part(){
        return this._real_part;
    }

    get imaginary_part(){
        return this._imaginary_part;
    }
}

class Human{
    constructor() {

    }
}

class Student extends Human{
    constructor() {
        super();
    }
}

