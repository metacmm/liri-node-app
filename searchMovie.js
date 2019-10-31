var axios = require("axios");

var searchMovie = function(name){
    let api_key = "trilogy";
    axios.get("http://www.omdbapi.com/?apikey=" + api_key + "&t=" + name)
    .then(function(response){
        console.log(response);
        console.log("Title of the movie: " + response.data.Title);
        console.log("Year the movie came out: " + response.data.Year);
        console.log("IMDB Rating: " + response.data.imdbRating);
        console.log("Rotten Tomatoes Rating of the movie: " + response.data.Ratings[1].Value);
        console.log("Country where the movie was produced: " + response.data.Country);
        console.log("Language of the movie: " + response.data.Language);
        console.log("Plot of the movie: " + response.data.Plot);
        console.log("Actors in the movie: " + response.data.Actors);
    })
    .catch(function(error){
        console.log(error);
    })
};

module.exports = searchMovie;