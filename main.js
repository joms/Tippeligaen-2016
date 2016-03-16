var http = require('http');
var fs = require('fs');

var schedule = require('./schedule');
var utils = require('./utils');
var google = require('./google');
var teams = require('./teams');

// Define the base URL where we find our data
var baseUrl = '/trends/fetchComponent?cid=TIMESERIES_GRAPH_0&export=3&q=';

// Go through all matches in all weeks and check if we have the data files
// Download the data file if we don't have the data
var matches = Array();
schedule.forEach(function(round){
    round.forEach(function(match){
        try {
            fs.statSync('matches/' + match.home.name + " vs " + match.away.name);
            console.log("File for "+ match.home.name + " vs " + match.away.name +" exists, don\'t do anything");
        } catch(e) {
            console.log(match.home.name +" vs "+ match.away.name +" does not exist, gotta catch them all");
            matches.push(match);
        }
    });
});
if (matches.length > 0) {
    getData(matches);
}

/**
 * Download data for a set of matches
 *
 * To get around Google's rate limiting, include the NID cookie you get when you
 * log in. Dunno if you'll be banned for scraping data. Not my problem.
 *
 * Used a recursive function to get some control over how often the requests are sent
 * @param matches
 */
function getData(matches) {
    // Check if the folder actually exists
    if (!fs.existsSync('matches')){
        // If not, create it
        fs.mkdirSync('matches');
    }

    console.log(matches.length +" matches left");
    var match = matches.pop();

    var matchName = match.home.name +' vs '+ match.away.name;
    var url = baseUrl + match.home.id +','+ match.away.id;
    var destination = 'matches/'+ matchName;
    var file = fs.createWriteStream(destination);

    var request = http.get({
        host: 'www.google.com',
        path: url,
        headers: {
            'Cookie': 'NID=',
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.116 Safari/537.36'
        }
    }, function(response){
        // Did it succeed?
        if (response.statusCode == 200) {

            // Save the response to file
            response.pipe(file);

            // Close the file on success
            file.on('finish', function() {
                file.close();
            });
            console.log("Successfully saved match data for "+ matchName);

        } else {
            // Something went terribly wrong
            console.error(response.statusCode + ": " + response.statusMessage);
            console.error(url);
            console.error(matchName);
            console.error("Failed on getting match for "+ matchName);
            file.close();
            request.abort();
            fs.unlinkSync(destination);
        }

        // Add a timeout in case of whatevs
        request.setTimeout(12000, function () {
            console.error("Request timed out");
            request.abort();
            fs.unlinkSync(destination);
        });


        response.on('end',function(){
            if(matches.length){
                // Add a delay to try to avoid the rate limiting
                setTimeout(function() {
                    getData(matches);
                }, 5000);
            }
        });
    });
}

/**
 * Go through each match in each week and check who's the most
 * popular team. Rank them thereafter.
 */
schedule.forEach(function(round, roundId){
    console.log("Going through matches for round "+ (roundId+1));

    round.forEach(function(match, matchId) {
        var filePath = 'matches/' + match.home.name + " vs " + match.away.name;

        try {
            // Read the match data
            fs.statSync(filePath);
            var detailsText = fs.readFileSync(filePath).toString();
            var details = eval(detailsText);

            // Define arrays for storing data
            var homeData = Array();
            var awayData = Array();

            // Go through the data and save it
            details.table.rows.forEach(function(that){
                homeData.push(that.c[1].v);
                awayData.push(that.c[2].v);
            });

            // Calculate and save score
            var homeScore = Math.floor(avgArr(homeData));
            var awayScore = Math.floor(avgArr(awayData));


            // Calculate match score
            if (homeScore == awayScore) {
                // Tie
                teams[match.home.name].score += 1;
                teams[match.away.name].score += 1;
            } else {
                if (homeScore > awayScore) {
                    // Home Victory
                    teams[match.home.name].score += 3;
                } else {
                    // Away Victory
                    teams[match.away.name].score += 3;
                }
            }

        } catch(e) {
            console.error("Uh oh! File for matchup "+ match.home.name +" vs "+ match.away.name +" does not exist!");
        }
    });
});

/**
 * Return the average value in an indexed array with numbers
 * @param arr
 * @returns {number}
 */
function avgArr(arr)
{
    var sum = arr.reduce(function(a, b) { return a + b; });
    var avg = sum / arr.length;

    return avg;
}

/**
 * Sort the results and print them out in a fashionable manner
 */

// Convert object into array and sort by score
var sortable = [];
for (var team in teams) {
    sortable.push([team, teams[team]])
    sortable.sort(function (a, b) {
        return a[1].score - b[1].score
    })
    sortable.reverse();
}

// Print out a usable result
sortable.forEach(function(team, index){
    console.log((index+1) +" - "+ team[1].name +" ("+ team[1].score +")");
});