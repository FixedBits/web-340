/*
============================================
; Title:  team.js
; Author: Victor Soto
; Date:   5 November 2023
;===========================================
*/
// Create class named Team with properties 
// for name, mascot, and playerCount.
// Initialize the classes properties in the constructor.
class Team {
    constructor(name, mascot, playerCount) {
        this.name = name;
        this.mascot = mascot;
        this.playerCount = playerCount;
    }
}
// Export the class using Node’s module system.
module.exports = Team;