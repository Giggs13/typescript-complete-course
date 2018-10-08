"use strict";
console.log("-----------------   LET & CONST   -----------------");
var variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);
var MAX_LEVEL = 100;
console.log(MAX_LEVEL);
// MAX_LEVEL = 7;
// Block scope
function reset() {
    // console.log(variable);
    var variable = null;
    console.log(variable);
}
console.log("++++++++++++++");
reset();
console.log(variable);
console.log("++++++++++++++");
console.log("-----------------   ARROW FUNCTIONS   -----------------");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 3));
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(10, 3));
var greet = function () { return "Hello!"; };
console.log(greet());
var greetFriend = function (friendName) {
    console.log("Hello, " + friendName);
};
greetFriend("Maks");
console.log("-----------------   DEFAULT PARAMETERS   -----------------");
var countDown = function (start, end) {
    if (start === void 0) { start = 1; }
    if (end === void 0) { end = start + 100; }
    console.log("Ready!", start, end);
    while (start > 0) {
        start--;
    }
    console.log("Done!", start, end);
};
countDown(7);
countDown();
console.log("-----------------   REST & SPREAD OPERATORS   -----------------");
var numbers = [1, 10, 99, -5];
console.log(Math.max(1, 10, 77, -5));
console.log(Math.max.apply(Math, numbers));
function makeArray1(arg1, arg2) {
    return [arg1, arg2];
}
console.log(makeArray1(1, 2));
function makeArray2() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray2(3, 4, 5, 6, 7));
// console.log(makeArray2([3, 4, 5, 6, 7]));
console.log("-----------------   DISTRUCTURING   -----------------");
var myHobbies = ["Cookies", "Sports"];
var hobby1 = myHobbies[0];
var hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
var myHobby1 = myHobbies[0], myHobby2 = myHobbies[1];
console.log(myHobby1, myHobby2);
var myUserData = {
    myUserName: "Andrej",
    myUserAge: 32
};
var someName = myUserData.myUserName, myUserAge = myUserData.myUserAge;
console.log(someName, myUserAge);
console.log("-----------------   TEMPLATE LITERALS   -----------------");
var userName = "Andrej";
var greeting = "Hello!\nI'm " + userName + ".";
console.log(greeting);
