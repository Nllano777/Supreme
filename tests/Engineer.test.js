// using Engineer constructor 
const Engineer = require('../myTeam/Engineer');

//  Engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('');
    expect(engineer.github);
});

//Calling getGithub()
test('Test for Github', () => {
    const engineer = new Engineer('');
    expect(engineer.getGithub())
});

// Calling getRole() 
test('Test for Engineer Role', () => {
    const engineer = new Engineer('');
    expect(engineer.getRole()).toEqual("ENGINEER");
});