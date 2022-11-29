// make team object
class Team {
    // constructor to initialize the object instance
    constructor(team) {
        // set object values to constructor parameters
        this.team = team;
        this.population = 0;
    }

    // getter methods
    getTeam() {
        return this.team;
    }

    getPopulation() {
        return this.population;
    }

    // setter methods
    setPopulation(amount) {
        this.population = amount;
    }

}

// export object
module.exports = Team;