// import path to work with paths and directories
const path = require("path");
// import fs to read and write data
const fs = require("fs");

// "import" the directory containing all the templates
const templatesDir = path.resolve(__dirname, "../src");

//====================================================

// function for rendering finished employees to the page, held in the constant "render"
const render = (employees, teamData) => {
  // create empty array to hold rendered html page data for all employees
  const html = [];

  // push employee page data to empty array
  html.push(employees
    // filter out any object that matches the role of "Manager"
    .filter(employee => employee.getRole() === "Manager")
    // creates a nested array that will return the html layout for the managers section
    .map(manager => renderManager(manager))
  );

  // push employee page data to empty array
  html.push(employees
    // filter out any object that matches the role of "Intern"
    .filter(employee => employee.getRole() === "Intern")
    // creates a nested array that will return the html layout for the interns section
    .map(intern => renderIntern(intern))
  );

  // push employee page data to empty array
  html.push(employees
    // filter out any object that matches the role of "Engineer"
    .filter(employee => employee.getRole() === "Engineer")
    // creates a nested array that will return the html layout for the engineers section
    .map(engineer => renderEngineer(engineer))
  );

  // converts the array to a string holding all the html data and returns it
  return renderMain(html.join(""), teamData);

};

//====================================================

// function for rendering individual manager card
const renderManager = manager => {
  // 'read' the manager.html template and assign it to the variable "template"
  let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
  // replace placeholders in the template with dynamic data
  template = replacePlaceholders(template, "name", manager.getName());
  template = replacePlaceholders(template, "role", manager.getRole());
  template = replacePlaceholders(template, "email", manager.getEmail());
  template = replacePlaceholders(template, "id", manager.getId());
  template = replacePlaceholders(template, "offNum", manager.getOfficeNumber());
  return template;
};

// function for rendering individual intern card
const renderIntern = intern => {
  // 'read' the intern.html template and assign it to the variable "template"
  let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
  // replace placeholders in the template with dynamic data
  template = replacePlaceholders(template, "name", intern.getName());
  template = replacePlaceholders(template, "role", intern.getRole());
  template = replacePlaceholders(template, "email", intern.getEmail());
  template = replacePlaceholders(template, "id", intern.getId());
  template = replacePlaceholders(template, "school", intern.getSchool());
  return template;
};

// function for rendering individual engineer card
const renderEngineer = engineer => {
  // 'read' the intern.html template and assign it to the variable "template"
  let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
  // replace placeholders in the template with dynamic data
  template = replacePlaceholders(template, "name", engineer.getName());
  template = replacePlaceholders(template, "role", engineer.getRole());
  template = replacePlaceholders(template, "email", engineer.getEmail());
  template = replacePlaceholders(template, "id", engineer.getId());
  template = replacePlaceholders(template, "github", engineer.getGithub());
  return template;
};

//====================================================

// function for rendering the main page layout, which will contain the employee sections
const renderMain = (html, teamData) => {
  let template = fs.readFileSync(path.resolve(templatesDir, "team.html"), "utf8");
  // replace any "teamname" placeholder values with our teamname
  template = replacePlaceholders(template, "teamname", teamData[0].getTeam());
  // replace teamcount placeholder with value of how many employees are in the team
  template = replacePlaceholders(template, "teamcount", teamData[0].getPopulation());
  // replace any "team" placeholder values with all of our teams employee data
  template = replacePlaceholders(template, "team", html);
  return template;
};

//====================================================

// function for dynamically replacing any placeholders in our templates with dynamic data
const replacePlaceholders = (template, placeholder, value) => {
  // gets the "placeholder" pattern used in the template htmls
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  // replaces the placeholder value with the user-inputted value by looking for the placeholder pattern
  return template.replace(pattern, value);
};

//====================================================

// export render function
module.exports = render 