//                                Variables
// brings in hidden api keys
require("dotenv").config();

//   require keys 
var keys = require('./keys.js');
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');

// 
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


// * `my-tweets`


var params = {screen_name: 'BizarroTest', count: 20};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
 if (!error) {
   console.log("Here's the latest: ");
				console.log("");
				tweets.forEach(function(t) {
				    console.log(t.text);
					console.log("");
				});
 }
});

// * `spotify-this-song`

 
spotify.search({ type: 'track', query: 'The Sign' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});

// * `movie-this`

// * `do-what-it-says`



// client.get(path, params, callback);