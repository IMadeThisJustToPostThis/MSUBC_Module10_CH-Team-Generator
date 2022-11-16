// imports
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// variables
const outputDir = path.resolve(__dirname, "dist");
const outputPath = path.join(outputDir, "output.html");
const render = require("./lib/renderPage.js");
const team = [];

//function that handles user responses to prompts and generates a team based off those prompts
function createTeam() {

    // prompt for manager
    const createManager = function () {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Whats is the managers name?: ",
                    name: "name"
                },
                {
                    type: "input",
                    message: "Whats is the managers employee ID?: ",
                    name: "id"
                },
                {
                    type: "input",
                    message: "Whats is the managers email address?: ",
                    name: "email"
                },
                {
                    type: "input",
                    message: "Whats is the managers office number?: ",
                    name: "offNum"
                },
            ])
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
            .prompt([
                {
                    type: "input",
                    message: "Whats is the interns name?: ",
                    name: "name"
                },
                {
                    type: "input",
                    message: "Whats is the interns employee ID?: ",
                    name: "id"
                },
                {
                    type: "input",
                    message: "Whats is the interns email adresss?: ",
                    name: "email"
                },
                {
                    type: "input",
                    message: "Whats school does the intern go to?: ",
                    name: "school"
                },
            ])
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
            .prompt([
                {
                    type: "input",
                    message: "Whats is the engineers name?: ",
                    name: "name"
                },
                {
                    type: "input",
                    message: "Whats is the engineers employee ID?: ",
                    name: "id"
                },
                {
                    type: "input",
                    message: "Whats is the engineers email adress?: ",
                    name: "email"
                },
                {
                    type: "input",
                    message: "Whats is the engineers github username?: ",
                    name: "github"
                },
            ])
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
        if (!fs.existsSync(outputDir)) { fs.mkdirSync(outputDir) };
        fs.writeFileSync(outputPath, render(team));
    }

    // prompt to select the role of each employee
    const selectRole = function () {
        inquirer
            .prompt([
                {
                    type: "list",
                    message: "What is the employees project role?: ",
                    choices: ["Manager", "Intern", "Engineer"],
                    name: "role"
                },
            ])
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
            .prompt([
                {
                    type: "list",
                    message: "Are there any more employees to add to the team?",
                    name: "continue",
                    choices: ["Yes", "No"]
                },
            ])
            .then(continueLogic => {
                if (continueLogic.continue == "Yes") {
                    selectRole();
                } else {
                    renderPage();
                }
            })
            .catch((err) => {
                console.error(err);
            })
    }

    selectRole();

}

createTeam();