//1. myFunctionTest implemented as described
function myFunctionTest(exprected, get) {
    if (exprected == get()) return 'TEST SUCCEEDED';
    else return 'TEST FAILED. Expected ' + exprected + ' found ' + get();
}

// 2. Define a function max() that takes two numbers as arguments and returns the largest of them. Use the
// if-then-else construct available in Javascript.
function max(num1, num2) {
    if(num1>num2)
        return num1;
    else
        return num2;
}

// 3. Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
function maxOfThree(num1, num2, num3) {
    let max=num1;
    if(max<num2)
        max=num2;
    if(max<num3)
        max=num3;

    return max;
}

// 4. Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if
// it is a vowel, false otherwise.
function isVowel(character){
    if(character === ('A' || 'E' || 'I' || 'O' || 'U').toLowerCase())
        return true;
    else
        return false;
}


// 5. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the
// numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4])
// should return 24.
    function sum(numberArray) {
    let total=0;
        for(let i=0; i<numberArray.length; i++){
             total = total + numberArray[i];
        }
        return total;
    }

    function multiply(numberArray) {
    let total=1;
        for(let i=0; i<numberArray.length; i++){
            total = total * numberArray[i];
        }
        return total;
    }

// 6. Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar")
// should return the string "ratset gaj".
function reverse(string){
    let reverseString="";
    for(let i=string.length-1; i>=0; i--){
        reverseString = reverseString + string[i];
    }
    return reverseString;
}


// 7. Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
function findLongestWord(words){
    let longestWord;
    for(let i=0; i<words.length-1; i++){
        if(words[i].length > words[i+1].length)
            longestWord = words[i];
        else
            longestWord = words[i+1];
    }
    return longestWord;
}


// 8. Write a function filterLongWords() that takes an array of words and an integer i and returns the array
// of words that are longer than i.
function filterLongWords(words, i){
    for(let n=0; n<words.length; n++){
        if(words[n].length<=i){
            words.splice(n,1);
        }
    }
    return words;
}

// 9. Modify the jsfiddle on the map/filter/reduce slide as follows:
// a) multiply each element by 10;
// b) return array with all elements equal to 3;
// c) return the product of all elements;

//9a. using map to change all element of an array
function  multiplyBy10(a) {

    return a.map(function (elem, i, array) {
        return elem * 10;
    });

}

// 9b. using filter to filter through an array
function allElemsEqualTo3(a) {
    return a.filter(function (elem, i, array) {
        return elem === 3;
    });
}

// 9c. using reduce to add all element of an array
function productOfAllElements(a) {
    return a.reduce(function (prevValue, elem, i, array) {
        return prevValue * elem;
    });
}

//testing all the function above
console.log("Expected output of max(80,40) is 80 and  " + myFunctionTest(80, function () {
    return max(80, 40);
}));

console.log("Expected output of maxOfThree(40,60,20) is 60 and  " + myFunctionTest(60, function () {
    return maxOfThree(40, 60, 20);
}));

console.log("Expected output of isVowel(a) is true and  " + myFunctionTest(true, function () {
    return isVowel('a');
}));

console.log("Expected output of sum([2,4,3,5]) is 14 and  " + myFunctionTest(14, function () {
    return sum([2, 4, 3, 5]);
}));

console.log("Expected output of multiply([2,4,3,5]) is 120 and  " + myFunctionTest(120, function () {
    return multiply([2, 4, 3, 5]);
}));

console.log("Expected output of reverse('jag testar') is ratset gaj and  " + myFunctionTest("ratset gaj", function () {
    return reverse("jag testar");
}));

console.log("Expected output of findLongestWord(['cow','bird', 'as', 'elephant']) is 8 and  " + myFunctionTest("elephant", function () {
    return findLongestWord(['cow', 'bird', 'as', 'elephant']);
}));

console.log("Expected output of filterLongWords(['cow','bird', 'as', 'elephant'], 3) is bird,elephant and  " + myFunctionTest(['bird','elephant'], function () {
    return filterLongWords(['cow','bird', 'as', 'elephant'], 3).toString();
}));

console.log("Expected output of map([1,3,5,3,3]) is 10,30,50,30,30 and  " + myFunctionTest([10, 30, 50, 30, 30], function () {
    return multiplyBy10([1, 3, 5, 3, 3]).toString();
}));

console.log("Expected output of filter([1,3,5,3,3]) is 3,3,3 and  " + myFunctionTest([3, 3, 3], function () {
    return allElemsEqualTo3([1, 3, 5, 3, 3]).toString();
}));

console.log("Expected output of reduce([1,3,2,3]) is and 18 " + myFunctionTest(18, function () {
    return productOfAllElements([1, 3, 2, 3]);
}));