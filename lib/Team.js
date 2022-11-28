// make team object
class Team {
    // constructor to initialize the object instance
    constructor(team) {
        // set object values to constructor parameters
        this.team = team;
    }

    // getter methods
    getTeam() {
        return this.team;
    }
}

// export object
module.exports = Team;