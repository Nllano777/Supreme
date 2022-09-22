
// using Employee constructor 
const Employee = require('../myTeam/Employee');

//  Employee object 
test('creates an employee object', () => {
    const employee = new Employee('');

    expect(employee.name)
    expect(employee.id)
    expect(employee.email)
});

//  Calling getName() 
test('Test for Employee Name', () => {
    const employee = new Employee('');
    expect(employee.getName())
});

// calling getId() 
test('Test for Employee ID', () => {
    const employee = new Employee('');
    expect(employee.getID())
});

// calling getEmail()
test('Test for Employee Email', () => {
    const employee = new Employee('');
    expect(employee.getEmail())
});

// calling getRole()
test('Test for Employee Role', () => {
    const employee = new Employee('');
    expect(employee.getRole()).toEqual("EMPLOYEE");
}); 