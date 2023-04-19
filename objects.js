// function printName(person: { first: string, last: string }): void {
//     console.log(`${person.first} ${person.last}`);
// }
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 12873321,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
};
var earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);
var myPoint = { x: 1, y: 3, z: 9 };
var user = {
    id: 12837,
    username: "catgurl"
};
console.log(user);
user.id;
var happyFace = {
    radius: 4,
    color: "yellow"
};
var christy = {
    numLives: 7,
    breed: "Husky",
    age: 9
};
