"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var lesson8;
(function (lesson8) {
    function logged(constructorFn) {
        console.log("----------------------");
        console.log(constructorFn.toString());
    }
    function loggedMore(constructorFn) {
        console.log("++++++++++++++++++++++");
        console.log(constructorFn.toString());
    }
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person = __decorate([
            logged
        ], Person);
        return Person;
    }());
    // Factory
    function logging(value) {
        return value ? logged : loggedMore;
    }
    var Car = /** @class */ (function () {
        function Car() {
        }
        Car = __decorate([
            logging(false)
        ], Car);
        return Car;
    }());
    // Advanced
    function printable(constructorFn) {
        constructorFn.prototype.print = function () {
            console.log(this);
        };
    }
    var Plant = /** @class */ (function () {
        function Plant() {
            this.name = "Green Plant";
        }
        Plant = __decorate([
            logging(false),
            printable
        ], Plant);
        return Plant;
    }());
    var plant = new Plant();
    plant.print();
    // Method Decorator
    // Property Decorator
    function editable(value) {
        return function (target, propName, descriptor) {
            descriptor.writable = value;
        };
    }
    function overwritable(value) {
        return function (target, propName) {
            return {
                writable: value
            };
        };
    }
    var Project = /** @class */ (function () {
        function Project(projectName) {
            this.projectName = projectName;
        }
        Project.prototype.calcBudget = function () {
            console.log(10000);
        };
        __decorate([
            overwritable(true)
        ], Project.prototype, "projectName", void 0);
        __decorate([
            editable(true)
        ], Project.prototype, "calcBudget", null);
        return Project;
    }());
    var project = new Project('Super Project');
    project.calcBudget();
    project.calcBudget = function () {
        console.log(20000);
    };
    project.calcBudget();
    console.log(project);
    // Parameter Decorator
    function printInfo(target, methodName, paramIndex) {
        console.log("target: " + target);
        console.log("methodName: " + methodName);
        console.log("paramIndex: " + paramIndex);
    }
    var Course = /** @class */ (function () {
        function Course(name) {
            this.name = name;
        }
        Course.prototype.printStudentNumbers = function (mode, printAll) {
            if (printAll) {
                console.log(777);
            }
            else {
                console.log(55);
            }
        };
        __decorate([
            __param(1, printInfo)
        ], Course.prototype, "printStudentNumbers", null);
        return Course;
    }());
    var course = new Course("Super Course");
    course.printStudentNumbers("anything", true);
    course.printStudentNumbers("anything", false);
})(lesson8 || (lesson8 = {}));
