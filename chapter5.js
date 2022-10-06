function add(num1, num2) {
    return num1 + num2;
} //function adds two numbers together

function add(num1, num2) {
    var sum = num1 + num2;
    return sum;
} //function adds two numbers together, but with a variable to store the sum

//to call the function, use function name and input parameters
add(1, 2);

function add(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

var result = add(1, 2);
alert(result);
//this creates the function, with a variable for the sum, and also a variable for a specific result for adding 1 and 2


function alertHello() {
    alert('Hello!');
}

alertHello(); 
//this is a function without any defined parameters or defined return


var greet = "hi there"; //this var is globally scoped as it is not confined within a function

function newFunction() {
    var hello = "hello";
} //this var is function-scoped and can only be used in the function

console.log(greet); //this will work
console.log(hello); //this will not work


let someValue = 1;

if (someValue > 0) {
    let greet = "hi there";
    console.log(greet); //this will log "hi there"
}

console.log(someValue); //this will log 1
console.log(greet); //this will cause an error

let student = {
    name: "Bob",
    grade: "A",
    GPA: 4.0
}; //created student object with name, grade, and GPA properties

console.log(student.name); //logs Bob
console.log(student.grade); //logs A
console.log(student.GPA); //logs 4.0


let students = [
    {
        name: "Bob",
        grades: [88, 90, 80, 77, 89]
    },
    {
        name: "Alice",
        grades: [100, 95, 92, 89, 97]
    },
    {
        name: "Juan",
        grades: [91, 90, 94, 86, 90]
    }
]; //created students object with name and grades, arrays within an array

//to print all student names and their grades
function printGrades(students) {
    for (let i = 0; i < students.length; i++) {
        console.log(students[i].name + ": " + students[i].grades);
    }
}
printGrades(students);

//adding a new student name and their grades
function addStudent(name, grades) {
    let student = {
        name: name,
        grades: grades
    };
    students.push(student);
}
addStudent("Biff", [71, 80, 56, 65, 60]);

//creating function to convert all student grades to letter grades and print them
function convertGrades(students) {
    for (let i = 0; i < students.length; i++) {
        let grades = students[i].grades;
        let letterGrade = "";
        for (let j = 0; j < grades.length; j++) {
            if (grades[j] >= 90) {
                letterGrade += "A ";
            } else if (grades[j] >= 80) {
                letterGrade += "B ";
            } else if (grades[j] >= 70) {
                letterGrade += "C ";
            } else if (grades[j] >= 60) {
                letterGrade += "D ";
            } else {
                letterGrade += "F ";
            }
        }
        console.log(students[i].name + ": " + letterGrade);
    }
}

convertGrades(students);

//CHALLENGES

//write function that always returns last item in array
let myArray = [1, 10, true, "butts"];
function lastItem(myArray) {
    return myArray[myArray.length -1];
}
lastItem(myArray); //returns butts

//add function to student grades program to remove Biff from the list of students using pop method
function removeStudent(students) {
    students.pop();
}
removeStudent(students);
console.log(students); //doesn't quite work yet; it's giving me empty values

//use arrow function notation to rewrite this function
function add(a, b) {
    return a + b;
}
let myFunction = (a, b) => a + b;
myFunction(1, 2); //returns 3