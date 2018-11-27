"use strict";
var lesson7;
(function (lesson7) {
    // Simple Generic
    function echo(data) {
        return data;
    }
    console.log(echo('Andrej'));
    console.log(echo(32).length);
    console.log(echo({ firstName: 'Andrej', age: 32 }));
    // Better Generic
    function betterEcho(data) {
        return data;
    }
    console.log(betterEcho('Andrej'));
    console.log(betterEcho(32));
    console.log(betterEcho({ firstName: 'Andrej', age: 32 }));
    // Built-in Generics
    var testResults = [1, 2];
    testResults.push(3);
    // testResults.push('4');
    console.log(testResults);
    //Arrays
    function printAll() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.forEach(function (element) { return console.log(element); });
    }
    printAll("Apple", "Banana");
    // Generic Types
    var echo2 = betterEcho;
    console.log(echo2("Something"));
    // Generic Class
    var SimpleMath = /** @class */ (function () {
        function SimpleMath(baseValue, multipleValue) {
            this.baseValue = baseValue;
            this.multipleValue = multipleValue;
            this.baseValue = baseValue;
            this.multipleValue = multipleValue;
        }
        SimpleMath.prototype.calculate = function () {
            return +this.baseValue * +this.multipleValue;
        };
        return SimpleMath;
    }());
    var simpleMath = new SimpleMath('10', 20);
    console.log(simpleMath.calculate());
})(lesson7 || (lesson7 = {}));
