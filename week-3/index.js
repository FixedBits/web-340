/*
============================================
; Title:  index.js
; Author: Victor Soto
; Date:   5 November 2023  
;===========================================
*/
// Import the TeamManager module from the team-manager.js.
const TeamManager = require('./team-manager.js');

// Gets an array of team objects from the team-manager.js file.
let teams = TeamManager.getTeams();

// Displays the contents of the teams array.
console.log('-- DISPLAYING TEAMS --');
for (let team of teams) {
    console.log(TeamManager.displayTeam(team));
}

// Creates a variable named barcelona and calls the getTeam() function. 
const barcelona = TeamManager.getTeam('FC Barcelona');

// Creates a variable named manchester and calls the getTeam() function.
const manchester = TeamManager.getTeam('Manchester United')

// Displays the contents of the barcelona variable 
console.log('-- DISPLAYING A SINGLE TEAM --');
console.log(TeamManager.displayTeam(barcelona));

// Displays the contents of the manchester variable.
console.log('-- DISPLAYING A SINGLE TEAM --');
console.log(TeamManager.displayTeam(manchester));