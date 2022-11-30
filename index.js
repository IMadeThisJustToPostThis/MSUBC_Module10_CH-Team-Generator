// import objects
const Team = require("./lib/Team.js");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");
// import page renderer
const render = require("./lib/renderPage.js");
// import libraries
const inquirer = require("inquirer"); // inquirer so we can ask the user command-line prompts
const path = require("path"); // path so we can resolve the paths the app has to work with
const fs = require("fs"); // fs so we can write the data
// initialize empty array and string to hold team data
const teamData = [];
const team = [];

//function that handles user responses to prompts and generates a team based off those prompts
function createTeam() {

    // paths for the directory where the final output should be placed, as well as assigning a placeholder file name
    const outputDir = path.resolve(__dirname, "dist");
    let outputPath = path.join(outputDir, "output.html");

    // prompt for team name
    const initTeam = function () {
        inquirer
            // prompt asks for team name
            .prompt([
                {
                    type: "input",
                    message: "What is the name of the team?: ",
                    name: "name"
                }
            ])
            // if error isn't detected, create team object and assign to teamData array,
            // then, re-assign placeholder file name
            // then, move onto selectRole() function
            .then(initTeamObj => {
                const team = new Team(initTeamObj.name);
                outputPath = path.join(outputDir, team.getTeam() + ".html");
                team.setPopulation(1);
                teamData.push(team);
                selectRole();
            })
            .catch((err) => {
                console.error(err);
            })
    }

    // prompt for manager
    const createManager = function () {
        inquirer
            // prompt asks for managers information
            .prompt([
                {
                    type: "input",
                    message: "What is the managers name?: ",
                    name: "name"
                },
                {
                    type: "input",
                    message: "What is the managers employee ID?: ",
                    name: "id"
                },
                {
                    type: "input",
                    message: "What is the managers email address?: ",
                    name: "email"
                },
                {
                    type: "input",
                    message: "Whats is the managers office number?: ",
                    name: "offNum"
                },
            ])
            // if error isn't detected, create new manager object with user-inputted data and push that object into the team array
            // then, move onto moreMembers() function
            .then(initManOb => {
                const manager = new Manager(initManOb.name, initManOb.id, initManOb.email, initManOb.offNum);
                team.push(manager);
                moreMembers();
            })
            .catch((err) => {
                console.error(err);
            })
    }

    // prompt for intern
    const createIntern = function () {
        inquirer
            // prompt asks for interns information
            .prompt([
                {
                    type: "input",
                    message: "What is the interns name?: ",
                    name: "name"
                },
                {
                    type: "input",
                    message: "What is the interns employee ID?: ",
                    name: "id"
                },
                {
                    type: "input",
                    message: "What is the interns email adresss?: ",
                    name: "email"
                },
                {
                    type: "input",
                    message: "What school does the intern go to?: ",
                    name: "school"
                },
            ])
            // if error isn't detected, create new intern object with user-inputted data and push that object into the team array
            // then, move onto moreMembers() function
            .then(initIntOb => {
                const intern = new Intern(initIntOb.name, initIntOb.id, initIntOb.email, initIntOb.school);
                team.push(intern);
                moreMembers();
            })
            .catch((err) => {
                console.error(err);
            })
    }

    // prompt for engineer
    const createEngineer = function () {
        inquirer
            // prompt asks for engineers information
            .prompt([
                {
                    type: "input",
                    message: "What is the engineers name?: ",
                    name: "name"
                },
                {
                    type: "input",
                    message: "What is the engineers employee ID?: ",
                    name: "id"
                },
                {
                    type: "input",
                    message: "What is the engineers email adress?: ",
                    name: "email"
                },
                {
                    type: "input",
                    message: "What is the engineers github username?: ",
                    name: "github"
                },
            ])
            // if error isn't detected, create new engineer object with user-inputted data and push that object into the team array
            // then, move onto moreMembers() function
            .then(initEngOb => {
                const engineer = new Engineer(initEngOb.name, initEngOb.id, initEngOb.email, initEngOb.github);
                team.push(engineer);
                moreMembers();
            })
            .catch((err) => {
                console.error(err);
            })
    }

    // render page function
    const renderPage = function () {
        // check if output directory already exists
        // if it doesn't exist, create the directory
        if (!fs.existsSync(outputDir)) { fs.mkdirSync(outputDir) };
        // creates a new file with our output-path and filename, passing the users inputted data into the
        // page renderer as an argument, which is then passed into the "data" argument field for "writeFileSync"
        fs.writeFileSync(outputPath, render(team, teamData));
        // essentially, we create 2 arrays containing our objects, pass that onto the imported render function from /lib/renderPage,
        // which then utilizes the getter methods of each object as well as our template .html files to generate a string of custom html
        // that then gets written to a new file with the .html extension, creating our custom generated html page
    }

    // prompt to select the role of each employee
    const selectRole = function () {
        inquirer
            // prompt presents a multiple choice question asking what role has been assigned to the next employee
            .prompt([
                {
                    type: "list",
                    message: "What is the employees project role?: ",
                    choices: ["Manager", "Intern", "Engineer"],
                    name: "role"
                },
            ])
            // if error isn't detected, move onto one of 3 functions, whichever correlates to the inputted role
            .then(roleLogic => {
                switch (roleLogic.role) {
                    case "Manager":
                        createManager();
                        break;
                    case "Intern":
                        createIntern();
                        break;
                    case "Engineer":
                        createEngineer();
                        break;
                }
            })
            .catch((err) => {
                console.error(err);
            })
    }

    // prompt to decide whether to include more members
    const moreMembers = function () {
        inquirer
            // prompt asks whether the team has more employees to add to the page
            .prompt([
                {
                    type: "list",
                    message: "Are there any more employees to add to the team?",
                    name: "continue",
                    choices: ["Yes", "No"]
                },
            ])
            // if error isn't detected and there are more employees to add, revert to the selectRole() function
            // otherwise (still assuming no error is detected), render the page
            .then(continueLogic => {
                if (continueLogic.continue == "Yes") {
                    teamData[0].setPopulation(teamData[0].getPopulation() + 1);
                    selectRole();
                } else {
                    renderPage();
                }
            })
            .catch((err) => {
                console.error(err);
            })
    }

    // call the initialize team function, which sets off the chain of inquiries
    initTeam();

}

// call the create team function, which sets off the entire program
createTeam();