//Banned words
describe("banned words", function () {
    it("The function accepts an array of strings that\n" +
        "specifies a list of banned words. The function returns the string after removing all the\n" +
        "banned words. ",
        function () {
            assert.equal("This house is nice!", "This house is not nice!".filter("not"));
        });
});

//Bubble sort algorithm
describe("bubble sort algorithm", function () {
    it("takes array of numbers, and returns sorted list",
        function () {
            assert.equal([-2, 0, 1, 3, 4, 6].toString(), [6, 4, 0, 3, -2, 1].bubbleSort());
        });
});

//To check an object called Teacher derived from the Person class, and check the implemention of a
// method called teach which receives a string called subject, and returns
describe("To check an object called Teacher derived from the Person class, and check the implemention " +
    "of a method called teach which receives a string called subject, and returns --->" +
    "using function constructor", function () {
    it("takes a teacher name derived from Person class, and implement a method teach which receives " +
        "subject and returns teacher teaches which subject",
        function () {
            assert.equal("Michael Zijlstra is now teaching WAP", teacher.teach(" WAP"));
        });
});

describe("To check an object called Teacher derived from the Person class, and check the implemention " +
    "of a method called teach which receives a string called subject, and returns --->" +
    "using object prototype approach", function () {
    it("takes a teacher name derived from Person class, and implement a method teach which receives " +
        "subject and returns teacher teaches which subject",
        function () {
            assert.equal("Michael Zijlstra is now teaching WAP", teach.course("WAP"));
        });
});

//For student

describe("To check student learned which course", function () {
    it(" Will take a student name and age and later learn method will take subject and will return" +
        " saying which student learned what course",
        function () {
            assert.equal("Navin just learned WAP", student.learn("WAP"));
        });
});