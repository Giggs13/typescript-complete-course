"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { _PI, calculateCircumference } from "./math/circle";
var Circle = __importStar(require("./math/circle"));
// import { calculateRectangle } from "./math/rectangle";
var rectangle_1 = __importDefault(require("./math/rectangle"));
console.log(Circle._PI);
console.log(Circle.calculateCircumference(10));
console.log(rectangle_1.default(10, 2));
