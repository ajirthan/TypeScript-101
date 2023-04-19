let age: number | string = 21;
age = 23;
age = "24";

type Point = {
    x: number,
    y: number
}

type Loc = {
    lat: number,
    long: number
}

let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = { lat: 321.213, long: 23.334 };

function printAge(age: number | string): void {
    console.log(`You are ${age} years old`);
}

function calculatePrice(price: number | string, tax: number) {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price * tax;
}

// const nums: number[] = [1, 2, 3, 4];
// const stuff: any[] = [1, 2, 3, 4, true, "asdas", {}];

// const stuff: (number | string)[] = [1, 2, 3, "das"];
// const stuff: number[] | string[] = ["asd", "asd", 1];

const coords: (Point | Loc)[] = [];
coords.push({ lat: 321.213, long: 23.334 });
coords.push({ x: 213, y: 43 });

let zero: 0 = 0;
let mood: "Happy" | "Sad" = "Happy";

type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday"

// let Today: DayOfWeek = "weds";
