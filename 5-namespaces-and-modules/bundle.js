var MyMath;
(function (MyMath) {
    MyMath.PI = 3.14;
    var Circle;
    (function (Circle) {
        function calculateCircumference(diameter) {
            return diameter * MyMath.PI;
        }
        Circle.calculateCircumference = calculateCircumference;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
// tsc app.ts --outFile bundle.js
/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />
var CircleMath = MyMath.Circle;
var PI = 3.14 * 2;
console.log(CircleMath.calculateCircumference(7));
console.log(MyMath.calculateRectangle(2, 5));
console.log(MyMath.PI);
console.log(PI);
