//                            FUNCTIONS

module.exports = {
//     Twitter function that will bring in recent tweets

    twitter: function(myInput) {
            var Twitter = require('twitter');
            var keys = require('../keys.js');
            var client = new Twitter(keys.twitter);
            var userName = "BizarroTest";

            if(myInput != undefined) {
                userName = myInput;
            }

                var params = {screen_name: userName, count: 20};
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

    },

    spotify: function(myInput) {
            var Spotify = require('node-spotify-api');
            var keys = require('../keys.js');
            var spotify = new Spotify(keys.spotify);
            
    }

    var getMeSpotify = function(songName) {
      if (songName === undefined) {
        songName = "What's my age again";
      }
      spotify.search(
        {
          type: "track",
          query: songName
        },
        function(err, data) {
          if (err) {
            console.log("Error occurred: " + err);
            return;
          }
          var songs = data.tracks.items;
          for (var i = 0; i < songs.length; i++) {
            console.log(i);
            console.log("artist(s): " + songs[i].artists.map(getArtistNames));
            console.log("song name: " + songs[i].name);
            console.log("preview song: " + songs[i].preview_url);
            console.log("album: " + songs[i].album.name);
            console.log("-----------------------------------");
          }
        }
      );
    };


}