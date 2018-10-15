// tsc app.ts --outFile bundle.js
/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />

import CircleMath = MyMath.Circle;

const PI = 3.14 * 2;

console.log(CircleMath.calculateCircumference(7));
console.log(MyMath.calculateRectangle(2, 5));
console.log(MyMath.PI);
console.log(PI);