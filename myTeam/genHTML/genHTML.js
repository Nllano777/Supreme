// create Manager card
const generateManager = function (manager) {
    return `

    <div class="container">
    <div class="row justify-content-center" id="team-cards">
       <!-- Manager eCard -->
       <div class="col-4 mt-4">
       <div class="card h-100">
           <div class="card-header">
               <h3>${manager.getName()}</h3>
               <h4><span class="material-symbols-outlined">
                       badge
                   </span>${manager.getRole()}</h4>
           </div>
           <div class="card-body">
               <p class="id">ID: ${manager.getID()} </p>
               <p class="email">Email: <a href="${manager.getEmail()}">${manager.getEmail()}</a></p>
               <p class="officeNum">Office Number: ${manager.getOfficeNum()}</p>
           </div>
       </div>
   </div>
    `
}


// create Engineer card
const generateEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
            <h3>${engineer.getName()}</h3>
            <h4><span class="material-symbols-outlined">
                    productivity
                </span> ${engineer.getRole()} </h4>
        </div>
        <div class="card-body">
            <p class="id">ID: ${engineer.getID()}</p>
            <p class="email">Email: <a href="${engineer.getEmail()}:"> ${engineer.getEmail()}</a></p>
            <p class="github">Github: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></p>
        </div>
    </div>
</div>
    `
}

// create Intern card 
const generateIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
    <div class="card h-100">
    <div class="card-header">
        <h3>${intern.getName()}</h3>
        <h4> <span class="material-symbols-outlined">
                matter
            </span> ${intern.getRole()} </h4>
    </div>

    <div class="card-body">
        <p class="id">ID: ${intern.getID()}</p>
        <p class="email">Email:<a href="${intern.getEmail()}"> ${intern.getEmail()}</a></p>
        <p class="school">School:${intern.getSchool()}</p>
    </div>
</div>
</div>
`
}


// // generate html page 
const generateHTML = cardInfo => {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <link rel="stylesheet" href="style.css">
    </head>

<body>
    <header>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">Team Tracker</h1>
                </div>
            </div>
        </div>
    </header>

    <main>
        <div class="container">
            <div class="row justify-content-center" id="team-cards">

            ${employeeCards(cardInfo)} 

          
        
    </main>
</body>
</html>

`;
}

// array for cards 
const employeeCards = MyTeam => {

    let empCardsHTML = ''

    for (let i = 0; i < MyTeam.length; i++) {
        if (MyTeam[i].getRole() === "MANAGER") {
            empCardsHTML = empCardsHTML + generateManager(MyTeam[i])
        }
        if (MyTeam[i].getRole() === "ENGINEER") {
            empCardsHTML = empCardsHTML + generateEngineer(MyTeam[i])
        }
        if (MyTeam[i].getRole() === "INTERN") {
            empCardsHTML = empCardsHTML + generateIntern(MyTeam[i])
        }
    } return empCardsHTML
}

// export to index
module.exports = generateHTML; 
