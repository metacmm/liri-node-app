require("dotenv").config();
var fs = require("fs");
var LiriBot = require("./liribot");
var liriBot = new LiriBot();
var writeLog = require("./writeToLog");

let option = process.argv[2];
let searchText = process.argv.slice(3, process.argv.length).join(" ");

let helpText = [
    `node liri.js concert-this [artist/band name]`,
    `node liri.js spotify-this-song [song name]`,
    `node liri.js movie-this [movie name]`,
    `node liri.js do-what-it-says`
].join('\n');
let commandDivider = "\n----------------------------------------------\n";
let defaultSong = "The Sign";
let defaultMovie = "Mr. Nobody";

var liriSearch = function (option, searchText) {
    switch (option.toLowerCase()) {
        case "concert-this":
            liriBot.searchConcert(searchText);
            break;
        case "spotify-this-song":
            if (searchText === "") {
                liriBot.searchSong(defaultSong);
            } else {
                liriBot.searchSong(searchText);
            }
            break;
        case "movie-this":
            if (searchText === "") {
                liriBot.searchMovie(defaultMovie);
            } else {
                liriBot.searchMovie(searchText);
            }
            break;
        case "do-what-it-says":
            searchRandom();
            break;
        case "help":
            console.log(helpText + commandDivider);
            writeLog(helpText + commandDivider);
            break;
        default:
            let defaultText = "command not found, usage:\n" + helpText + commandDivider;
            console.log(defaultText);
            writeLog(defaultText);
            break;
    }
}

var searchRandom = function () {
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            return console.log("Error reading random file due to " + error);
        }

        let args = data.split(",");
        liriSearch(args[0], args[1]);
    });
}

writeLog("\n\n" + process.argv.join(" ") + commandDivider);
liriSearch(option, searchText);