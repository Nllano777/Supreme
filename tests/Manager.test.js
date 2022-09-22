// using Manager constructor 
const Manager = require('../myTeam/Manager');

//  Manager object  
test('creates an Manager object', () => {
    const manager = new Manager('');
    expect(manager.officeNumber);
});

// Calling getOfficeNum 
test('gets OfficeNumber', () => {
    const manager = new Manager('');
    expect(manager.getOfficeNum());
})

// Calling getRole()
test('gets role of employee', () => {
    const manager = new Manager('');
    expect(manager.getRole()).toEqual("MANAGER");
}); 