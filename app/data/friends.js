// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
// =============================================================
var friends = [
    {
        name: "Flava Fav",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy0cHrZ1UWXk04c7EC55FdhQtv5Ni8dWkv8ifQ2bWO22ZYvkUt_w",
        scores: [5, 1, 3, 1, 4, 5, 5, 5, 2, 5]
    },
    {
        name: "Superman",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_gHug7zrwsiDmtI9wcA4yqPn6pV1hoYk4Yxr7OG9sG-KN7_MXQ",
        scores: [1, 5, 4, 4, 5, 2, 5, 5, 5, 3]
    },
    {
        name: "Denzel Washington"
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC6C0sp7tSizST6kl4aZ4MKanzEwHyEBdKRA_gbcNySTM0lcU",
        scores: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
    }
];

module.exports = friends;