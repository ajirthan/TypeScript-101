// Write the Movie type alias to make the following two variables properly typed
// Make sure that "originalTitle" is optional and "title" is readonly
var dune = {
    title: "Dune",
    originalTitle: "Dune Part One",
    director: "Denis Villeneuve",
    releaseYear: 2021,
    boxOffice: {
        budget: 165000000,
        grossUS: 108327830,
        grossWorldwide: 400671789
    }
};
var cats = {
    title: "Cats",
    director: "Tom Hooper",
    releaseYear: 2019,
    boxOffice: {
        budget: 95000000,
        grossUS: 27166770,
        grossWorldwide: 73833348
    }
};
// Write a function called getProfit that accepts a single Movie object
// It should return the movie's worldwide gross minus its budget
// For example...
// getProfit(cats) => -21166652
var getProfit1 = function (movie) {
    return movie.boxOffice.grossWorldwide - movie.boxOffice.budget;
};
var getProfit2 = function (movie) {
    var _a = movie.boxOffice, grossWorldwide = _a.grossWorldwide, budget = _a.budget;
    return grossWorldwide - budget;
};
var getProfit3 = function (_a) {
    var _b = _a.boxOffice, grossWorldwide = _b.grossWorldwide, budget = _b.budget;
    return grossWorldwide - budget;
};
console.log(getProfit1(cats));
console.log(getProfit2(cats));
console.log(getProfit3(cats));
console.log(getProfit1(dune));
console.log(getProfit2(dune));
console.log(getProfit3(dune));
