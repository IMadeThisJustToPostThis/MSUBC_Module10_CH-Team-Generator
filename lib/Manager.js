// import parent
const Employee = require("./Employee");

// make child manager object
class Manager extends Employee {
    // constructor to initialize the object instance
    constructor(name, id, email, offNum) {
        // set inhertied values to constructor parameters
        super(name, id, email);
        // set new github value to constructor parameter 'github'
        this.offNum = offNum;
        // set role value to static "manager"
        this.role = "Manager";
    }

    // getter methods
    getRole() {
        return this.role;
    }

    getOfficeNumber() {
        return this.offNum;
    }

}

// export object
module.exports = Manager;