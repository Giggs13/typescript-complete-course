// Exercise 1 - How was your TypeScript Class?
/*function Car(name) {
    this.name = name;
    this.acceleration = 0;

    this.honk = function () {
        console.log("Toooooooooot!");
    };

    this.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    }
}

var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);*/
class Car {
    acceleration: number;

    constructor(public name: string) {
        this.acceleration = 0;
    }

    honk(): void {
        console.log("Toooooooooot!");
    };

    accelerate(speed: number): void {
        this.acceleration = this.acceleration + speed;
    }
}

let auto = new Car("BMW");
auto.honk();
console.log(auto.acceleration);
auto.accelerate(10);
console.log(auto.acceleration);

// Exercise 2 - Two objects, based on each other ...
/*var baseObject = {
    width: 0,
    length: 0
};
var rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function () {
    return this.width * this.length;
};
console.log(rectangle.calcSize());*/
abstract class Shape {
    constructor(protected width: number = 0, protected length: number = 0) {
    }
}

class Rectangle extends Shape {
    calcSize(): number {
        return this.width * this.length;
    }
}

let rectangle: Rectangle = new Rectangle(5, 2);
console.log(rectangle);
console.log(rectangle.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
/*var person = {
    _firstName: ""
};
Object.defineProperty(person, "firstName", {
    get: function () {
        return this._firstName;
    },
    set: function (value) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    },
    enumerable: true,
    configurable: true
});
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);*/
class Human {
    _firstName: string = "";

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        } else {
            this._firstName = "";
        }
    }
}

let human: Human = new Human();

console.log(human.firstName);
human.firstName = "Ma";
console.log(human.firstName);
human.firstName = "Maximilian";
console.log(human.firstName);
