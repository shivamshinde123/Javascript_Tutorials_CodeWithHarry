

// question 1
stud_marks = {
    "harry": 98,
    "rohan": 70,
    "aakash": 73
}

for (let i=0; i<Object.keys(stud_marks).length; i++){
    console.log("The student " + Object.keys(stud_marks)[i] + " got " +  stud_marks[Object.keys(stud_marks)[i]]+ " marks.")
}

// question 2
for (let student in stud_marks){
    console.log("The student " + student + " got " + obj[student] + " marks.")
}

// question 3
const corr_num = 10
while (true){
    let a = prompt("Enter a number")
    if (a == corr_num){
        console.log("The correct number found!")
        break;
    }
}


// question 4
const mean = (a,b,c,d,e) => {
    return (a+b+c+d+e)/5;
}

console.log("The mean of 1, 2, 3, 4, 5 is " + mean(1,2,3,4,5) + ".");