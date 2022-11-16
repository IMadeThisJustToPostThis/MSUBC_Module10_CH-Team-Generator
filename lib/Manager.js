const Employee = require("./Employee");

class Manager extends Employee {

    constructor(name, id, email, offNum) {
        super(name, id, email);
        this.offNum = offNum;
        this.role = "Manager";
    }

    getRole(){
        return this.role;
    }

    getOfficeNumber(){
        return this.offNum;
    }

}

module.exports = Manager;