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

    }


}