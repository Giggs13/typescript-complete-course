"use strict";
/*
Exercise 1.
Create a generic Map (an Object like an Array, but instead with Key-Value Pairs). The key will always be a string.

Let's keep it simple and only add the following methods to the Map:

setItem(key: string, item: T) // should create a new key-value pair
getItem(key: string) // should retrieve the value of the provided key
clear() // should remove all key-value pairs
printMap() // should output key-value pairs

The map should be usable like shown below:

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();*/
var CustomArray = /** @class */ (function () {
    function CustomArray() {
        this.pair = {};
    }
    CustomArray.prototype.setItem = function (key, item) {
        this.pair[key] = item;
    };
    CustomArray.prototype.getItem = function (key) {
        return this.pair[key];
    };
    CustomArray.prototype.clear = function () {
        this.pair = {};
    };
    CustomArray.prototype.printMap = function () {
        var _this = this;
        Object.getOwnPropertyNames(this.pair)
            .forEach(function (key) {
            console.log(key + ": " + _this.pair[key]);
        });
    };
    return CustomArray;
}());
var numberMap = new CustomArray();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
console.log(numberMap.getItem('bananas'));
numberMap.clear();
numberMap.printMap();
console.log('--------------------');
var stringMap = new CustomArray();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
