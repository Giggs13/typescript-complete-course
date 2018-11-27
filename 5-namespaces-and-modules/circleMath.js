"use strict";
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
