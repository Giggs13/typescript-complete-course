/*
Exercise 1.
Create a generic Map (an Object like an Array, but instead with Key-Value Pairs). The key will always be a string.

Let's keep it simple and only add the following methods to the Map:

setItem(key: string, item: T) // should create a new key-value pair
getItem(key: string) // should retrieve the value of the provided key
clear() // should remove all key-value pairs
printMap() // should output key-value pairs

The map should be usable like shown below:

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();*/

class CustomArray<T> {

    pair: { [key: string]: T } = {};

    setItem(key: string, item: T): void {
        this.pair[key] = item;
    }

    getItem(key: string): T {
        return this.pair[key];
    }

    clear(): void {
        this.pair = {};
    }

    printMap() {
        Object.getOwnPropertyNames(this.pair)
            .forEach(key => {
                console.log(`${key}: ${this.pair[key]}`);
            });
    }
}

const numberMap = new CustomArray<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
console.log(numberMap.getItem('bananas'));
numberMap.clear();
numberMap.printMap();
console.log('--------------------');

const stringMap = new CustomArray<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();