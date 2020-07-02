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
            assert.equal("[-2, 0, 1, 3, 4, 6]", [6, 4, 0, 3, -2, 1].bubbleSort());
        });
});
