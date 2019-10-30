var axios = require("axios");
var moment = require("moment");

var searchConcert = function(name){
    let app_id = "codingbootcamp";
    let artist = name.split(" ").join("+");
    axios.get("https://rest.bandsintown.com/artists/"+ artist + "/events?app_id=" + app_id)
    .then(function(response){
        console.log(response);
        response.data.forEach(function(concert){
            console.log("+-------------------------------------------------");
            console.log("Name of the venue: " + concert.venue.name);
            console.log("Venue location: " + concert.venue.city + " " + concert.venue.country);
            console.log("Date of the Event: " + moment(concert.datetime).format("MM/DD/YYYY"));
        })
    })
    .catch(function(error){
        console.log("error is" + error);
    });
}

searchConcert("billie eilish");