var movieTitle = "Amadeus";
movieTitle = "Arrival";
// movieTitle = 9;
movieTitle.toUpperCase();
var numCatLives = 9;
numCatLives += 1;
// numCatLives = "zero";
var gameOver = false;
gameOver = true;
// gameOver = "true";
null;
undefined;
var nothing = null;
var foo = undefined;
// Type Inference
var tvShow = "Olive Kitteridge";
tvShow = "The Other Two";
// tvShow = false;
var isFunny = false;
isFunny = true;
// isFunny = "asd";
// the any type
// let thing: any = "hello";
// thing = 1;
// thing = false;
// thing();
// thing.toUpperCase();
var movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
var foundMovie;
for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
    var movie = movies_1[_i];
    if (movie === "Amadeus") {
        foundMovie = "Amadeus";
    }
}
