// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
// =============================================================

var friends = require("app\data\friends.js");

module.exports = function (app) {
    // Return all friends found in friends.js as JSON
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        console.log(req.body.scores);

        // Receive input
        var input = req.body;

        // parseInt for scores
        for (var i = 0; i < input.scores.length; i++) {
            input.scores[i] = parseInt(input.scores[i]);
        }        

        // Loop through friends to calculate the score differences
        for (var i = 0; i < friends.length; i++) {
            var totalDifference = 0;
            var maxDiff = 40;
            for (var j = 0; j < friends[i].scores.length; j++) {
                var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
                totalDifference += difference;
            }

            //Create code to find Best match with the least difference
        }

        // after finding match, add user to friend array
        friends.push(user);

        // send back to browser the best friend match

    });
};