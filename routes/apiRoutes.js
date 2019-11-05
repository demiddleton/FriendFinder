// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
// =============================================================

var friends = require("../app/data/friends");

module.exports = function (app) {
   // Total list of friend entries
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	
	app.post('/api/friends', function(req, res) {

		// Capture the user input object
		var userInput = req.body;
		// console.log('userInput = ' + JSON.stringify(userInput));

		var userScores = userInput.scores;
		

		// Compute best friend match
		var matchName = '';
		var matchImage = '';
		var maxDifference = 40; // Make the initial value the max difference aloud

		// Examine all existing friends in the list
		for (var i = 0; i < friends.length; i++) {
			// console.log('friend = ' + JSON.stringify(friends[i]));

			// Compute differenes for each question
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friends[i].scores[j] - responses[j]);
			}
			// console.log('diff = ' + diff);

			// If lowest difference, record the friend match
			if (diff < maxDifference) {
				// console.log('Closest match found = ' + diff);
				// console.log('Friend name = ' + friends[i].name);
				// console.log('Friend image = ' + friends[i].photo);

				maxDifference = diff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
			}
		}

		// Add new user
		friends.push(userInput);

		// Send appropriate response
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
};