namespace lesson7 {
    // Simple Generic
    function echo(data: any) {
        return data;
    }

    console.log(echo('Andrej'));
    console.log(echo(32).length);
    console.log(echo({firstName: 'Andrej', age: 32}));

    // Better Generic
    function betterEcho<T>(data: T): T {
        return data;
    }

    console.log(betterEcho('Andrej'));
    console.log(betterEcho<number>(32));
    console.log(betterEcho({firstName: 'Andrej', age: 32}));

    // Built-in Generics
    const testResults: Array<number> = [1, 2];
    testResults.push(3);
    // testResults.push('4');
    console.log(testResults);

    //Arrays
    function printAll<T>(...args: T[]) {
        args.forEach((element: T) => console.log(element));
    }

    printAll<string>("Apple", "Banana");

    // Generic Types
    const echo2: <T>(data: T) => T = betterEcho;
    console.log(echo2<string>("Something"));

    // Generic Class
    class SimpleMath<T extends number | string, S extends number | string> {

        constructor(private readonly baseValue: S, private readonly multipleValue: T) {
            this.baseValue = baseValue;
            this.multipleValue = multipleValue;
        }

        calculate(): number {
            return +this.baseValue * +this.multipleValue;
        }
    }

    const simpleMath = new SimpleMath<number, string>('10', 20);
    console.log(simpleMath.calculate());
}