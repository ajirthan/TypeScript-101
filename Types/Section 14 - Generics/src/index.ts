// const nums: number[] = [];
const nums: Array<number> = [];
const color: Array<string> = [];

const inputEl = document.querySelector<HTMLInputElement>("#username")!;
// console.dir(inputEl);
// inputEl.value = "Hacked!";

const btn = document.querySelector<HTMLButtonElement>(".btn")!;

function numberIdentity(item: number): number {
    return item;
}

function stringIdentity(item: string): string {
    return item;
}

function booleanIdentity(item: boolean): boolean {
    return item;
}

// function identity(item: any): any {
//     return item;
// }

interface Cat {
    name: string;
    breed: string;
}

function identity<T>(item: T): T {
    return item;
}

// identity<number>(7);
// identity<string>("hello");
// identity<Cat>({});

function getRandomElement<T>(list: T[]): T {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}

console.log(getRandomElement<string>(["a", "b", "c"]));
getRandomElement<number>([5, 6, 21, 354, 567, 234, 654]);
getRandomElement(["a", "v", "asd"]);
getRandomElement([1, 2, 3, 4]);

function merge<T extends object, U extends object>(object1: T, object2: U) {
    return {
        ...object1,
        ...object2
    };
}

// const comboObj = merge({ name: "colt" }, { pets: ["blue", "elton"] });
// console.log(merge({ name: "colt" }, 9));

// merge<{ name: string }, { pets: string[] }>({ name: "colt" }, { pets: ["blue", "elton"] });


interface Lengthy {
    length: number;
}

// function printDoubleLength<T extends Lengthy>(thing: T): number {
//     return thing.length * 2;
// }

function printDoubleLength(thing: Lengthy): number {
    return thing.length * 2;
}

printDoubleLength("asdasd");

// printDoubleLength(234);

function makeEmptyArray<T = number>(): T[] {
    return [];
}

const strings = makeEmptyArray();
const bools = makeEmptyArray<boolean>();

interface Song {
    title: string,
    artist: string
}

interface Video {
    title: string,
    creator: string,
    resolution: string
}

// class VideoPlaylist {
//     public videos: Video[] = [];
// }

// class SongPlaylist {
//     public songs: Song[] = [];
// }

class Playlist<T> {
    public queue: T[] = [];

    add(el: T) {
        this.queue.push(el);
    }
}

const songs = new Playlist<Song>();

const videos = new Playlist<Video>();
