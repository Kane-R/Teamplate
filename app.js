const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
​
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
​
const render = require("./lib/htmlRenderer");
​
​
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
inquirer.prompt([
    
    // Confirm: Intro & simple opt-in or out. If out, then exit, dissconnect
    {
        type:"confirm",
        name:"Create team profiles?",
        message:"This is a team profile generator (Teamplate). It will create a HTML file containing the details of team member. Run this app for each member. Would you like to procede"
    },

    {
        type:"list",
        name:"role",
        message:"What is the ROLE of the team member profile you'd like to create?",
        choices:["Manager","Engineer","Intern"]
    },

    // Profile 1 Name
    {
        type:"input",
        name:"profile1-name",
        message:"Please enter profile1 name"
    },

    // Profile 1 Title
    {
        type:"input",
        name:"profile1-title",
        message:"Please enter profile1 title"
    },

    // Profile 1 Email      
    {CGBTFGKJLLKJLKJLJ
        type:"input",
        name:"profile1-email",
        message:"Please enter profile1 email"
    },
    
    klkkF
    {
        type:"checkbox",
        name:"kanesCheckbox",
        message:"This is a checkbox",
        choices:["checkbox 1","checkbox 2","checkbox  3","checkbox  4"]
    }]


​
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
​
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
​
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
​
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
