// node modules 
const inquirer = require('inquirer');
const writeFile = require("./writeMeFile");
const genHTML = require('../project10/genHTML/genHTML');
const Manager = require('../project10//myTeam/Manager');
const Engineer = require('../project10/myTeam/Engineer');
const Intern = require('../project10/myTeam/Intern');

// team array
const MyTeam = [];

let html = genHTML(MyTeam)

// Team Function
function createTeam() {
    // manager function
    genManager()
    function genManager() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'managername',
                message: "Enter your manager's name.",
                validate: managerName => {
                    if (managerName) {
                        return true;
                    } else {
                        console.log("enter your manager's name.")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerid',
                message: "Enter your manager's employee ID#.",
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
                name: 'manageremail',
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
                const newManager = new Manager(Answ.managerName, Answ.managerID, Answ.managerEmail, Answ.officeNum)
                MyTeam.push(newManager);
                console.log(MyTeam);
                integrateToTeam();
            });
    };
    //
    function integrateToTeam() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'integration',
                messages: 'please choose',
                choices: ['Engineer', 'Intern', 'Done']
            }]).then((empChoice) => {
                switch (empChoice.genEmployee) {
                    case "Engineer":
                        genEngineer();
                        break;
                    case "Intern":
                        genIntern();
                        break;
                    default:
                        teamDone();
                }
            });


        // Engineer Function
        function genEngineer() {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'engineername',
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
                    name: 'engineerid',
                    message: "Enter an engineer's employee ID#.",
                    validate: engineerID => {
                        if (engineerID) {
                            return true;
                        } else {
                            console.log("Please enter an engineer's employee ID#.")
                            return false;
                        }
                    }
                },

                {
                    type: 'input',
                    name: 'engineeremail',
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
                    const newEngineer = new Engineer(engAnswers.engName, engAnswers.engineerID.engAnswers.engEmail, engAnswers.engHub);
                    MyTeam.push(newEngineer);
                    console.log(MyTeam);
                    integrateToTeam();
                });
        };
    };

    // Intern function
    function genIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'internname',
                message: "Enter an intern's name.",
                validate: internnameInput => {
                    if (internnameInput) {
                        return true;
                    } else {
                        console.log("Please enter an intern's name.")
                        return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'internid',
                message: "Enter an intern's employee ID#.",
                validate: internidInput => {
                    if (internidInput) {
                        return true;
                    } else {
                        console.log("Please enter an intern's employee ID#.")
                        return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'internemail',
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
                name: 'internschool',
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
            .then(answIntern => {
                const { name, id, email, school } = answIntern;
                const newIntern = new Intern(name, id, email, school);

                MyTeam.push(newIntern);
                console.log(MyTeam);
                integrateToTeam();
            });
    };
};

function teamDone() {

    let html = genHTML(MyTeam)
    writeFile(html)
};

createTeam();
