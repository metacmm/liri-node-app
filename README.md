# liri-node-app

### Introduction

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

### Overview

This app contains three main modules, liri, liribot and writeLog.

* Liri is accept user input, parse command argument.

* Liribot is to call appropriate search API according to user search options, and print the output on screen.

* WriteToLog is to append every command and output to log files.

#### Diagram
![`Image of diagram`]
(./LiriBot_Diagram.png)

### Instruction

1. `node liri.js concert-this [artist/band name here]`

    * This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

        * Name of the venue

        * Venue location

        * Date of the Event (use moment to format this as "MM/DD/YYYY")

2. `node liri.js spotify-this-song [song name here]`

    * This will show the following information about the song in your terminal/bash window

     * Artist(s)

     * The song's name

     * A preview link of the song from Spotify

     * The album that the song is from

    * If no song is provided then program will default to "The Sign" by Ace of Base.

    * It will utilize the [node-spotify-api](https://www.npmjs.com/package/node-spotify-api) package in order to retrieve song information from the Spotify API.

3. `node liri.js movie-this [movie name here]`

    * This will search OMDB API for a movie name and output the following information to your terminal/bash window:

        * Title of the movie.

        * Year the movie came out.

        * IMDB Rating of the movie.

        * Rotten Tomatoes Rating of the movie.

        * Country where the movie was produced.

        * Language of the movie.

        * Plot of the movie.

        * Actors in the movie.

   * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody'.

4. `node liri.js do-what-it-says`

    * LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.




