require("dotenv").config();
var axios = require("axios");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var writeLog = require("./writeToLog");


var LiriBot = function () {
    const divider = "\n===============================================\n";
    this.searchConcert = function (name) {
        let app_id = "codingbootcamp";
        let artist = name.split(" ").join("+");
        axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=" + app_id)
            .then(function (response) {
                let data = response.data;
                data.forEach(function (concert) {
                    let output = [
                        "Name of the venue: " + concert.venue.name,
                        "Venue location: " + concert.venue.city + " " + concert.venue.country,
                        "Date of the Event: " + moment(concert.datetime).format("MM/DD/YYYY")
                    ].join("\n\n");
                    console.log(output + divider);
                    writeLog(output + divider);
                });
            })
            .catch(function (error) {
                console.log(JSON.stringify(error));
            });
    }
    this.searchMovie = function (name) {
        let api_key = "trilogy";
        axios.get("http://www.omdbapi.com/?apikey=" + api_key + "&t=" + name)
            .then(function (response) {
                let data = response.data;
                let output = [
                    "Title of the movie: " + data.Title,
                    "Year the movie came out: " + data.Year,
                    "IMDB Rating: " + data.imdbRating,
                    "Rotten Tomatoes Rating of the movie: " + data.Ratings[1].Value,
                    "Country where the movie was produced: " + data.Country,
                    "Language of the movie: " + data.Language,
                    "Plot of the movie: " + data.Plot,
                    "Actors in the movie: " + data.Actors
                ].join("\n\n");
                console.log(output);
                writeLog(output + divider);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    this.searchSong = function (name) {
        spotify
            .search({ type: 'track', query: '"' + name + '"', limit: 1 })
            .then(function (response) {
                let data = response.tracks.items[0];
                let output = [
                    "Artist: " + data.artists.map(a => a.name).join(","),
                    "The song's name: " + data.name,
                    "A preview link: " + data.external_urls.spotify,
                    "Album: " + data.album.name
                ].join("\n\n");
                console.log(output);
                writeLog(output + divider);
            })
            .catch(function (err) {
                console.log(err);
            });
    }
}

module.exports = LiriBot;