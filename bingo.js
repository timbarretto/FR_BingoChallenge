"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import Game and Boards classes
var game_1 = require("./game");
// Sample game inputs
var inputs = [
    7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18,
    20, 8, 19, 3, 26, 1,
];
new game_1.Game(inputs).play();
