var fs = require("fs");
var writeToLog = function(text){
    fs.appendFile("log.txt", text, function(err){
        if (err){
            console.log(JSON.stringify(err));
        }
    });
}

module.exports = writeToLog;