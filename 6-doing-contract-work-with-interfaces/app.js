"use strict";
var lesson6;
(function (lesson6) {
    function greet(person) {
        console.log("Hello, " + person.name);
    }
    function changeName(person) {
        person.name = "Anonymous";
    }
    var person2 = {
        name: "Andrej",
        age: 32,
        greet: function (lastName) {
            console.log("Hi, I'm " + lastName);
        }
    };
    // greet2({name: "Andrej", anyField: 99});
    changeName(person2);
    greet(person2);
    person2.greet("Vasya");
    var Person = /** @class */ (function () {
        function Person() {
            this.name = 'Any';
        }
        Person.prototype.greet = function (lastName) {
            console.log("Hello, my name is " + lastName);
        };
        return Person;
    }());
    var myPerson = new Person();
    myPerson.name = 'Anna';
    greet(myPerson);
    myPerson.greet("Anything");
    var myDoubleFunction;
    myDoubleFunction = function (number1, number2) {
        return number1 * number2;
    };
    console.log(myDoubleFunction(2, 3));
    var oldPerson = {
        age: 27,
        name: 'Old man',
        greet: function (lastName) {
            console.log("I'm an old man " + lastName);
        }
    };
    console.log(oldPerson);
    oldPerson.greet('Andrej');
})(lesson6 || (lesson6 = {}));
