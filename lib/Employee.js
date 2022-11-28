// make parent employee object
class Employee {
    // constructor to initialize the object instance
    constructor(name, id, email) {
        // set object values to constructor parameters
        this.name = name;
        this.id = id;
        this.email = email;
        // set role value to static "employee"
        this.role = 'employee';
    }

    // getter methods
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }

}

// export object
module.exports = Employee;