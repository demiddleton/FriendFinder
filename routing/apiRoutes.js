// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
// =============================================================

var friends = require("app\data\friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    //Create a function to find the total difference
    var totalDifference = 0;

    //Grab new friend answers from the online survey
    //Compare survey results to scores in the friends array and calculate the total difference (absolute values)


    app.post("/api/friends", function (req, res) {

        //Create code to display the best match

    });
};

