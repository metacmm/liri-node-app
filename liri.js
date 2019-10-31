require("dotenv").config();
var searchSong = require("./searchSong");
var searchConcert = require("./searchConcert");
var searchMovie = require("./searchMovie");
var fs = require("fs");

let option = process.argv[2];
let searchText = process.argv.slice(3, process.argv.length - 1).join(" ");

var liriSearch = function(option, searchText){
    switch(option){
        case "concert-this":
            searchConcert(searchText);
            break;
        case "spotify-this-song":
            searchSong(searchText);
            break;
        case "movie-this":
            searchMovie(searchText);
            break;
        case "do-what-it-syas":
            searchRandom();
            break;
        default:
            console.log("Invalid command, try this:");
            break;
    }
}

var searchRandom = function(){
    fs.readFile("random.txt", "utf8", function(err, data){
        if (error){
            return console.log("Error reading random file due to " + error);
        }

        let args = data.split(",");
        liriSearch(args[0], args[1]);
    });
}

liriSearch(option, searchText);