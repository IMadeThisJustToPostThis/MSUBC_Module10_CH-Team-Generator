// import parent
const Employee = require("./Employee");

// make child engineer object
class Engineer extends Employee {
    // constructor to initialize the object instance
    constructor(name, id, email, github) {
        // set inhertied values to constructor parameters
        super(name, id, email);
        // set new github value to constructor parameter 'github'
        this.github = github;
        // set role value to static "engineer"
        this.role = "Engineer";
    }

    // getter methods
    getRole() {
        return this.role;
    }

    getGithub() {
        return this.github;
    }

}

// export object
module.exports = Engineer;