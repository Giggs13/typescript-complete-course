namespace lesson6 {

    interface NamedPerson {
        name: string,
        age?: number,

        [propName: string]: any,

        greet(lastName: string): void
    }

    function greet(person: NamedPerson) {
        console.log("Hello, " + person.name);
    }

    function changeName(person: NamedPerson) {
        person.name = "Anonymous";
    }

    let person2: NamedPerson = {
        name: "Andrej",
        age: 32,
        greet(lastName: string): void {
            console.log(`Hi, I'm ${lastName}`);
        }
    };

    // greet2({name: "Andrej", anyField: 99});
    changeName(person2);
    greet(person2);
    person2.greet("Vasya");

    class Person implements NamedPerson {
        name: string = 'Any';

        greet(lastName: string): void {
            console.log(`Hello, my name is ${lastName}`);
        }
    }

    const myPerson = new Person();
    myPerson.name = 'Anna';
    greet(myPerson);
    myPerson.greet("Anything");

    // Function Types
    interface DoubleValueFunc {
        (number1: number, number2: number): number
    }

    let myDoubleFunction: DoubleValueFunc;
    myDoubleFunction = (number1, number2) => {
        return number1 * number2;
    };

    console.log(myDoubleFunction(2, 3));

    // Interface Inheritance
    interface AgedPerson extends NamedPerson {
        age: number;
    }

    const oldPerson: AgedPerson = {
        age: 27,
        name: 'Old man',
        greet(lastName) {
            console.log(`I'm an old man ${lastName}`);
        }
    };

    console.log(oldPerson);
    oldPerson.greet('Andrej');
}