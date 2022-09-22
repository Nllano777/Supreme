// using Intern constructor 
const Intern = require('../myTeam/Intern');

//  Intern object  
test('creates an Manager object', () => {
    const intern = new Intern('');
    expect(intern.school);
});

// Calling getOfficeNum 
test('gets OfficeNumber', () => {
    const intern = new Intern('');
    expect(intern.getSchool());
})

// Calling getRole()
test('gets role of employee', () => {
    const intern = new Intern('');
    expect(intern.getRole()).toEqual("INTERN");
}); 