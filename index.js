// node modules 
const inquirer = require('inquirer');
const { async } = require('rxjs');
const writeFile = require("./writeMeFile");
const genHTML = require('../project10/myTeam/genHTML/genHTML');
const Manager = require('../project10//myTeam/Manager');
const Engineer = require('../project10/myTeam/Engineer');
const Intern = require('../project10/myTeam/Intern');



// team array
const MyTeam = [];

teamDone = () => {
    let html = genHTML(MyTeam);
    writeFile(html);
};


// Manager Function
createManager1 = async () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "Enter your manager's name.",
            validate: manName => {
                if (manName) {
                    return true;
                } else {
                    console.log("enter your manager's name.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerID',
            message: "Enter your manager's employee ID.",
            validate: managerID => {
                if (managerID) {
                    return true;
                } else {
                    console.log("Please enter a manager's employee ID#.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "Enter a manager's email address.",
            validate: managerEmail => {
                if (managerEmail) {
                    return true;
                } else {
                    console.log("Please enter a manager's email address.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Provide your manager's office number",
            validate: officeNum => {
                if (officeNum) {
                    return true;
                } else {
                    console.log("no office number?.")
                    return false;
                }
            }
        },
    ])
        .then(Answ => {
            const newManager = new Manager(Answ.managerName, Answ.managerID, Answ.managerEmail, Answ.officeNumber)
            MyTeam.push(newManager);
            console.log(MyTeam);
            teamDone();
        });
}
// Engineer Function
createEngineer2 = async () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engName',
            message: "Enter an engineer's name.",
            validate: engName => {
                if (engName) {
                    return true;
                } else {
                    console.log("Please enter an engineer's name.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engID',
            message: "Enter an engineer's employee ID.",
            validate: engID => {
                if (engID) {
                    return true;
                } else {
                    console.log("Please enter an engineer's employee ID#.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engEmail',
            message: "Enter an engineer's email address.",
            validate: engEmail => {
                if (engEmail) {
                    return true;
                } else {
                    console.log("Please enter an engineer's email address.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engHub',
            message: "Enter an engineer's GitHub user ID.",
            validate: engHub => {
                if (engHub) {
                    return true;
                } else {
                    console.log("Please enter an engineer's GitHub user ID.")
                    return false;
                }
            }
        },
    ])
        .then(engAnswers => {
            const newEngineer = new Engineer(engAnswers.engName, engAnswers.engID, engAnswers.engEmail, engAnswers.engHub);
            MyTeam.push(newEngineer);
            console.log(MyTeam);
            teamDone();
        });
};
// Intern Function
createIntern3 = async () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'intName',
            message: "Enter an intern's name.",
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log("Please enter an intern's name.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'intID',
            message: "Enter an intern's employee ID.",
            validate: internID => {
                if (internID) {
                    return true;
                } else {
                    console.log("Please enter an intern's employee ID#.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'intEmail',
            message: "Enter an intern's email address.",
            validate: internEmail => {
                if (internEmail) {
                    return true;
                } else {
                    console.log("Please enter an intern's email address.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'School',
            message: "Enter your intern's school.",
            validate: internSchool => {
                if (internSchool) {
                    return true;
                } else {
                    console.log("Please enter your intern's school.")
                    return false;
                }
            }
        },
    ])
        .then((intAnswers) => {
            const newIntern = new Intern(intAnswers.intName, intAnswers.intID, intAnswers.intEmail, intAnswers.School)
            MyTeam.push(newIntern);
            console.log(MyTeam);
            teamDone();
        });
};


createTeam = async () => {

    await createManager1();

    await createEngineer2();

    await createIntern3();
}
createTeam();
