// function square(num: number): number {
//     return num * num;
// }
// function greet(person: string) {
//     return `Hi there, ${person}!`;
// }
var doSomething = function (person, age, isFunny) { };
square(3);
greet("Tonya Harding");
doSomething("ChickenFace", 76, false);
function greet(person) {
    if (person === void 0) { person = "stranger"; }
    return "Hi there, ".concat(person, "!");
}
function square(num) {
    return num * num;
}
var add = function (x, y) {
    return x + y;
};
var colors = ["red", "orange", "yellow"];
colors.map(function (color) {
    return color.toUpperCase();
});
function printTwice(msg) {
    console.log(msg);
    console.log(msg);
}
function makeError(msg) {
    throw new Error(msg);
}
function gameLoop() {
    while (true) {
        console.log("GAME LOOP RUNNING!");
    }
}
