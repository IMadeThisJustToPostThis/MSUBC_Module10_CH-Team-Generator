// import parent
const Employee = require("./Employee");

// make child intern object
class Intern extends Employee {
    // constructor to initialize the object instance
    constructor(name, id, email, school) {
        // set inhertied values to constructor parameters
        super(name, id, email);
        // set new github value to constructor parameter 'github'
        this.school = school;
        // set role value to static "intern"
        this.role = "Intern";
    }

    // getter methods
    getRole() {
        return this.role;
    }

    getSchool() {
        return this.school;
    }

}

// export object
module.exports = Intern;