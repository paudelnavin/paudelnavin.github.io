//1. banned words
console.log("Exercise 1: solution")
String.prototype.filter = function (banned) {
    let splitted = this.split(" ");
    return splitted.filter(s => s !== banned).join(" ");
}
console.log("This house is not nice!".filter("not"));

//2. buuble sort algorithm
console.log(" \n Exercise 2: solution")
Array.prototype.bubbleSort = function (arrays) {
    let length = this.length;
    for (let i = (length - 1); i >= 0; i--) {
        for (let j = (length - i); j > 0; j--) {
            if (this[j] < this[j - 1]) {
                let tmp = this[j];
                this[j] = this[j - 1];
                this[j - 1] = tmp;
            }
        }
    }
    return this;
}
console.log([6, 4, 0, 3, -2, 1].bubbleSort());

//3. To Create an object called Teacher derived from the Person class, and implement a method called
// teach which receives a string called subject, and returns:
console.log(" \n Exercise 3: solution - using function constructor")

function Person(name) {
    this.name = name;
};
const teacher = new Person("Michael Zijlstra");
Person.prototype.teach = function (subject) {
    return this.name + " is now teaching" + subject;
}
console.log(teacher.teach(" WAP"));

// Object.Create
console.log(" \n Exercise 3: solution - using Object Prototype Aproach")

const person = function () {
    return {name: "Paul"}
};
const teach = Object.create(person());
teach.name = "Michael Zijlstra";
teach.course = function (subject) {
    return this.name + " is now teaching " + subject
};
console.log(teach.course("WAP"));

//4a. Object prototype Aproach
console.log(" \n Exercise 4a: solution - using Object Prototype Aproach")

const Persons = {
    name: "Unknown", age: 20, greeting: function () {
        return "Geeetings: my name is" + this.name + "and I am " + name.age + "years Old"
    },
    salute: function () {
        return "Good morning!, and in case I dont see you,good afternoon, good evening and good night!"
    }
}
const Student = Object.create(Persons);
Student.major = "Unknown";
Student.greeting = function () {
    return "Hey my name is " + this.name + " and I am studying " + this.major
};
Student.name = "Navin Paudel";
Student.major = "WAP";
console.log(Student.greeting());
const Professor = Object.create(Persons);
Professor.department = "Unknown";
Professor.salute = function () {
    return "Good day Good day,\n" +
        "my name is " + this.name + " and I am in the " + this.department + " department.";
}

Professor.name = "Michael Zijlstra";
Professor.department = "Computer Science";
console.log(Professor.salute());
const professor = Object.create(Professor);
const student = Object.create(Student);
console.log(professor.salute());
console.log(student.greeting());

// 4b. function Constructor Aproach
console.log(" \n Exercise 4b: solution - using function Constructor aproach")


function Perrson(name, age) {
    this.name = name;
    this.age = age;
}

Perrson.prototype.greeting = function () {
    return "Geeetings: my name is" + this.name + "and I am " + name.age + "years Old";
}
Perrson.prototype.salute = function () {
    return "Good morning!, and in case I dont see you,good afternoon, good evening and good night!";
}
const Studet = new Perrson("Navin", 30);
Studet.major = "WAP";
Studet.greeting = function () {
    return "Hey my name is " + this.name + " and I am studying " + this.major
};
console.log(Studet.greeting());
const Profesor = new Perrson("Michael Zijlstra", 40);
Profesor.department = "Computer Science";
Profesor.salute = function () {
    return "Good day Good day,\n" +
        "my name is " + this.name + " and I am in the " + this.department + " department.";
};
console.log(Profesor.salute());
const profesor = Object.create(Profesor);
const studet = Object.create(Studet);
console.log(studet.greeting());
console.log(profesor.salute());







