//                                Variables and Packages
// brings in hidden api keys
require("dotenv").config();

//  load functions 
var functions = require('./assets/functions.js');
var userInput = (process.argv[2]);


// * `my-tweets`

if(userInput === "my-tweets") {
	functions.twitter();
	// functions.createLog();
}



// * `spotify-this-song`

 
// spotify.search({ type: 'track', query: 'The Sign' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
 
// console.log(data); 
// });

// * `movie-this`

// * `do-what-it-says`




