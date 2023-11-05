/*
============================================
; Title:  team-manager.js
; Author: Victor Soto
; Date:   5 November 2023
;===========================================
*/
// Imports the Team class from the team.js file.
const Team = require('./team.js');

// Create an array of five Team objects and assigns it
// to a variable named teams.
let teams = [
    new Team('FC Barcelona', 'Blaugrana', 22),
    new Team('Manchester United', 'Red Devils', 22),
    new Team('Real Madrid', 'Los Blancos', 22),
    new Team('Bayern Munich', 'Die Roten', 22),
    new Team('Juventus', 'Bianconeri', 22)
];

// Create a function named getTeams
// that returns the array of Team objects.
// Export the function using Node’s module system.
module.exports.getTeams = function() {
    return teams;
}

// Create a function named getTeam with a single parameter for name.
// Using JavaScript’s built-in find() function,
// return a single Team object from the teams array.
module.exports.getTeam = function(name) {
    return teams.find(function(team) {
        return team.name === name;
    });
}

// Creates a function named displayTeam with a single parameter for team.
// Returns a formatted string using the team objects properties.  
module.exports.displayTeam = function(team) {
    return 'Name: ' + team.name + '\n' + 
           'Mascot: ' + team.mascot + '\n' +
           'Player Count: ' + team.playerCount + '\n';
}