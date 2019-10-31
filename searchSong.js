require("dotenv").config();
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);
var searchSong = function(name){
    spotify
    .search({type:'track', query: '"' + name + '"', limit: 1})
    .then(function(response){
        let artists = response.tracks.items[0].artists.map(a => a.name);
        console.log("Artist: " + artists.join(","));
        console.log("The song's name: " + response.tracks.items[0].name);
        console.log("A preview link: " + response.tracks.items[0].external_urls.spotify);
        console.log("Album: " + response.tracks.items[0].album.name);
    })
    .catch(function(err){
        console.log(err);
    });
}

module.exports = searchSong;