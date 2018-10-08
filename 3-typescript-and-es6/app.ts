console.log("-----------------   LET & CONST   -----------------");
let variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);

const MAX_LEVEL = 100;
console.log(MAX_LEVEL);
// MAX_LEVEL = 7;

// Block scope
function reset() {
    // console.log(variable);
    let variable = null;
    console.log(variable);
}

console.log("++++++++++++++");
reset();
console.log(variable);
console.log("++++++++++++++");

console.log("-----------------   ARROW FUNCTIONS   -----------------");
const addNumbers = function (number1: number, number2: number): number {
    return number1 + number2;
};
console.log(addNumbers(10, 3));

const multiplyNumbers = (number1: number, number2: number): number => number1 * number2;
console.log(multiplyNumbers(10, 3));

const greet = () => "Hello!";
console.log(greet());

const greetFriend = (friendName: string): void => {
    console.log(`Hello, ${ friendName }`);
};
greetFriend("Maks");

console.log("-----------------   DEFAULT PARAMETERS   -----------------");
const countDown = (start: number = 1, end: number = start + 100): void => {
    console.log("Ready!", start, end);
    while (start > 0) {
        start--;
    }
    console.log("Done!", start, end);
};
countDown(7);
countDown();

console.log("-----------------   REST & SPREAD OPERATORS   -----------------");
let numbers = [1, 10, 99, -5];
console.log(Math.max(1, 10, 77, -5));
console.log(Math.max(...numbers));

function makeArray1(arg1: number, arg2: number): number[] {
    return [arg1, arg2];
}

console.log(makeArray1(1, 2));

function makeArray2(...args: number[]): number[] {
    return args;
}

console.log(makeArray2(3, 4, 5, 6, 7));
// console.log(makeArray2([3, 4, 5, 6, 7]));

console.log("-----------------   DISTRUCTURING   -----------------");
let myHobbies = ["Cookies", "Sports"];
let hobby1 = myHobbies[0];
let hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
let [myHobby1, myHobby2] = myHobbies;
console.log(myHobby1, myHobby2);

let myUserData = {
    myUserName: "Andrej",
    myUserAge: 32
};
let {myUserName: someName, myUserAge} = myUserData;
console.log(someName, myUserAge);

console.log("-----------------   TEMPLATE LITERALS   -----------------");
let userName = "Andrej";
let greeting = `Hello!
I'm ${ userName }.`;
console.log(greeting);
