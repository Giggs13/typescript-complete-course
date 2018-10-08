"use strict";
var myName = 'Andrej';
var myName_ = 'Andrej';
// myName = 22;
var myAge = 18;
var myAge_ = 18;
// myAge = '18';
var hasHobbies = true;
var hasHobbies_ = true;
// hasHobbies = 0;
// Assign types
var myRealAge; // any
myRealAge = 32;
myRealAge = '32';
var myRealAge_; // any
myRealAge_ = 32;
// myRealAge_ = '32';
// Array
var hobbies = ['Cooking', 'Sports'];
console.log(hobbies[0]);
console.log(typeof hobbies);
// hobbies = [100];
var hobbies_ = ['Cooking', 'Sports'];
var hobbies__ = ['Cooking', 'Sports'];
hobbies__ = [22, 43];
hobbies__ = true;
var hobbies___ = ['Cooking', 'Sports'];
hobbies___ = [22, 43];
// hobbies___ = true;
// Tuples
var address = ["Superstreet", 999];
//let address_: [string, number] = [999, "Superstreet"];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 110] = "Blue";
    Color[Color["Wight"] = 111] = "Wight";
})(Color || (Color = {}));
var myColor = Color.Blue;
var myColor_ = Color.Wight;
var myColor__ = 0;
console.log(myColor);
console.log(myColor_);
console.log(myColor__);
// any
var car = "BMW";
car = { brand: "BMW", series: 3 };
console.log(car);
// Functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
function sayHello() {
    console.log("Hello");
}
console.log(sayHello());
// Argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(3, 6));
// Function types
console.log("**************************");
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(3, 4));
// Objects
var userData = {
    name: "Andrej",
    age: 32
};
// userData = {};
// Complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// Union types
var myRealRealAge;
myRealRealAge = 32;
myRealRealAge = "32";
// myRealRealAge = true;
// Check types
var finalValue = 32;
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}
// Never type
function neverReturns() {
    throw new Error("An error!");
}
// Nullable types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
// canThisBeAny = 7;
