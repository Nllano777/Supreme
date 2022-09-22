const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officenum) {
        super(name, id, email)
        this.officenum = officenum;
    }

    getOfficeNum() {
        return this.officenum;
    }

    getRole() {
        return "MANAGER";
    }
};

module.exports = Manager