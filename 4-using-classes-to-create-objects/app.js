"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("-----------------   CLASSES   -----------------");
var Gender;
(function (Gender) {
    Gender[Gender["MAIL"] = 0] = "MAIL";
    Gender[Gender["FEMAIL"] = 1] = "FEMAIL";
})(Gender || (Gender = {}));
var Person = /** @class */ (function () {
    function Person(name, country) {
        this.country = country;
        this.age = 32;
        this.gender = Gender.MAIL;
        this.profession = "developer";
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setGender = function (gender) {
        if (gender === void 0) { gender = 0; }
        this.gender = gender;
    };
    return Person;
}());
var person = new Person("Andrej", "UA");
console.log(person);
person.printAge();
console.log("-----------------   INHERITANCE   -----------------");
var Kira = /** @class */ (function (_super) {
    __extends(Kira, _super);
    function Kira(country) {
        var _this = _super.call(this, "Kira", country) || this;
        _this.country = country;
        // this.age = 26;
        _this.profession = "housekeeper";
        _this.gender = Gender.FEMAIL;
        return _this;
    }
    return Kira;
}(Person));
var kira = new Kira("GB");
console.log(kira);
console.log("-----------------   GETTERS & SETTERS   -----------------");
var Plant = /** @class */ (function () {
    function Plant(species) {
        if (species === void 0) { species = "default species"; }
        this._species = species;
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "bad default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "species";
console.log(plant.species);
console.log("-----------------   STATIC PROPERTIES & METHODS   -----------------");
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(3));
console.log("-----------------   ABSTRACT CLASSES   -----------------");
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default project name";
        this.budget = 0;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeProjectName = function (projectName) {
        this.projectName = projectName.toUpperCase();
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeProjectName("Super IT Project");
console.log(newProject);
console.log("-----------------   PRIVATE CONSTRUCTORS   -----------------");
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne("Singleton");
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
// let wrong = new OnlyOne("Prototype");
var right = OnlyOne.getInstance();
console.log(right);
console.log(right.name);
// right.name = "Something else";
