namespace lesson8 {

    function logged(constructorFn: Function): void {
        console.log("----------------------");
        console.log(constructorFn.toString());
    }

    function loggedMore(constructorFn: Function): void {
        console.log("++++++++++++++++++++++");
        console.log(constructorFn.toString());
    }

    @logged
    class Person {
    }

    // Factory
    function logging(value: boolean): Function {
        return value ? logged : loggedMore;
    }

    @logging(false)
    class Car {

    }

    // Advanced
    function printable(constructorFn: Function): void {
        constructorFn.prototype.print = function () {
            console.log(this);
        }
    }

    @logging(false)
    @printable
    class Plant {
        name = "Green Plant";
    }

    const plant = new Plant();
    (plant as any).print();

    // Method Decorator
    // Property Decorator
    function editable(value: boolean) {
        return function (target: any, propName: string, descriptor: PropertyDescriptor) {
            descriptor.writable = value;
        }
    }

    function overwritable(value: boolean) {
        return function (target: any, propName: string): any {
            return {
                writable: value
            };
        }
    }

    class Project {
        @overwritable(true)
        projectName: string;

        constructor(projectName: string) {
            this.projectName = projectName;
        }

        @editable(true)
        calcBudget(): void {
            console.log(10000);
        }
    }

    const project = new Project('Super Project');
    project.calcBudget();
    project.calcBudget = function () {
        console.log(20000);
    };
    project.calcBudget();
    console.log(project);

    // Parameter Decorator
    function printInfo(target: any, methodName: string, paramIndex: number) {
        console.log(`target: ${target}`);
        console.log(`methodName: ${methodName}`);
        console.log(`paramIndex: ${paramIndex}`);
    }

    class Course {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        printStudentNumbers(mode: string, @printInfo printAll: boolean) {
            if (printAll) {
                console.log(777);
            } else {
                console.log(55);
            }
        }
    }

    const course = new Course("Super Course");
    course.printStudentNumbers("anything", true);
    course.printStudentNumbers("anything", false);
}