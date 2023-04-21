"use strict";
// const nums: number[] = [];
const nums = [];
const color = [];
const inputEl = document.querySelector("#username");
// console.dir(inputEl);
// inputEl.value = "Hacked!";
const btn = document.querySelector(".btn");
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
function identity(item) {
    return item;
}
// identity<number>(7);
// identity<string>("hello");
// identity<Cat>({});
function getRandomElement(list) {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
console.log(getRandomElement(["a", "b", "c"]));
getRandomElement([5, 6, 21, 354, 567, 234, 654]);
getRandomElement(["a", "v", "asd"]);
getRandomElement([1, 2, 3, 4]);
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
// function printDoubleLength<T extends Lengthy>(thing: T): number {
//     return thing.length * 2;
// }
function printDoubleLength(thing) {
    return thing.length * 2;
}
printDoubleLength("asdasd");
// printDoubleLength(234);
function makeEmptyArray() {
    return [];
}
const strings = makeEmptyArray();
const bools = makeEmptyArray();
// class VideoPlaylist {
//     public videos: Video[] = [];
// }
// class SongPlaylist {
//     public songs: Song[] = [];
// }
class Playlist {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
const songs = new Playlist();
const videos = new Playlist();
