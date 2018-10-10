console.log("-----------------   CLASSES   -----------------");

enum Gender {
    MAIL, FEMAIL
}

class Person {
    private age: number = 32;
    protected gender: Gender = Gender.MAIL;
    profession: string = "developer";
    public name: string;

    constructor(name: string, public country: string) {
        this.name = name;
    }

    printAge(): void {
        console.log(this.age);
    }

    private setGender(gender: Gender = 0): void {
        this.gender = gender;
    }
}

let person: Person = new Person("Andrej", "UA");

console.log(person);
person.printAge();

console.log("-----------------   INHERITANCE   -----------------");

class Kira extends Person {
    constructor(public country: string) {
        super("Kira", country);
        // this.age = 26;
        this.profession = "housekeeper";
        this.gender = Gender.FEMAIL;
    }
}

let kira = new Kira("GB");
console.log(kira);

console.log("-----------------   GETTERS & SETTERS   -----------------");

class Plant {
    private _species: string;

    get species(): string {
        return this._species;
    }

    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        } else {
            this._species = "bad default";
        }
    }

    constructor(species: string = "default species") {
        this._species = species;
    }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "species";
console.log(plant.species);

console.log("-----------------   STATIC PROPERTIES & METHODS   -----------------");

class Helpers {
    static PI: number = 3.14;

    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(3));

console.log("-----------------   ABSTRACT CLASSES   -----------------");

abstract class Project {
    projectName: string = "Default project name";
    budget: number = 0;

    calcBudget(): number {
        return this.budget * 2;
    }

    abstract changeProjectName(projectName: string): void;
}

class ITProject extends Project {
    changeProjectName(projectName: string): void {
        this.projectName = projectName.toUpperCase();
    }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeProjectName("Super IT Project");
console.log(newProject);

console.log("-----------------   PRIVATE CONSTRUCTORS   -----------------");

class OnlyOne {
    private static instance: OnlyOne;

    private constructor(public readonly name: string) {
    }

    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne("Singleton");
        }
        return OnlyOne.instance;
    }
}

// let wrong = new OnlyOne("Prototype");
let right = OnlyOne.getInstance();
console.log(right);
console.log(right.name);
// right.name = "Something else";



