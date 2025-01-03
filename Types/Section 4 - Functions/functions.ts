// function square(num: number): number {
//     return num * num;
// }

// function greet(person: string) {
//     return `Hi there, ${person}!`;
// }

const doSomething = (person: string, age: number, isFunny: boolean) => {};

square(3);
greet("Tonya Harding");
doSomething("ChickenFace", 76, false);

function greet(person: string = "stranger"): string {
    return `Hi there, ${person}!`;
}

function square(num: number): number {
    return num * num;
}

const add = (x: number, y: number): number => {
    return x + y;
};

const colors = ["red", "orange", "yellow"];
colors.map(color => {
    return color.toUpperCase();
});

function printTwice(msg: string): void {
    console.log(msg);
    console.log(msg);
}

function makeError(msg: string): never {
    throw new Error(msg);
}

function gameLoop(): never {
    while (true) {
        console.log("GAME LOOP RUNNING!");
    }
}
