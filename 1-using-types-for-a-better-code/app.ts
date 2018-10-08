let myName = 'Andrej';
let myName_: string = 'Andrej';
// myName = 22;
let myAge = 18;
let myAge_: number = 18;
// myAge = '18';
let hasHobbies = true;
let hasHobbies_: boolean = true;
// hasHobbies = 0;

// Assign types
let myRealAge; // any
myRealAge = 32;
myRealAge = '32';

let myRealAge_: number; // any
myRealAge_ = 32;
// myRealAge_ = '32';

// Array
let hobbies = ['Cooking', 'Sports'];
console.log(hobbies[0]);
console.log(typeof hobbies);
// hobbies = [100];
let hobbies_: string[] = ['Cooking', 'Sports'];
let hobbies__: any = ['Cooking', 'Sports'];
hobbies__ = [22, 43];
hobbies__ = true;
let hobbies___: any[] = ['Cooking', 'Sports'];
hobbies___ = [22, 43];
// hobbies___ = true;

// Tuples
let address: [string, number] = ["Superstreet", 999];
//let address_: [string, number] = [999, "Superstreet"];

// Enum
enum Color {
    Red,
    Blue = 110,
    Wight
}

let myColor: Color = Color.Blue;
let myColor_: Color = Color.Wight;
let myColor__: Color = 0;
console.log(myColor);
console.log(myColor_);
console.log(myColor__);

// any
let car: any = "BMW";
car = {brand: "BMW", series: 3};
console.log(car);

// Functions
function returnMyName(): string {
    return myName;
}

console.log(returnMyName());

function sayHello(): void {
    console.log("Hello");
}

console.log(sayHello());

// Argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}

console.log(multiply(3, 6));

// Function types
console.log("**************************");
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(3, 4));

// Objects
let userData: { name: string, age: number } = {
    name: "Andrej",
    age: 32
};
// userData = {};

// Complex object
let complex: { data: number[], output: (all: boolean) => number[] } = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
};

// Type alias
type Complex = { data: number[], output: (all: boolean) => number[] };

let complex2: Complex = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
};

// Union types
let myRealRealAge: number | string;
myRealRealAge = 32;
myRealRealAge = "32";
// myRealRealAge = true;

// Check types
let finalValue = 32;
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}

// Never type
function neverReturns(): never {
    throw new Error("An error!");
}

// Nullable types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny: null = null;
// canThisBeAny = 7;