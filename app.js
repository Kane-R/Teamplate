const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    
    // Confirm: Intro & simple opt-in or out. If out, then exit, dissconnect
    {
        type:"confirm",
        name:"Create README file?",
        message:"This is a README Generator (Awesome README Maker V1.0). Would you like to procede"
    },

    // Type?: At least one badge
    {
        type:"input",
        name:"Badge 1",
        message:"What is Badge 1?"
    },

    {
        type:"input",
        name:"Badge 2",
        message:"What is Badge 2?"
    },
    
    //Input: Project Title
    {
        type:"input",
        name:"users name",
        message:"what is your name?"
    },

    // Input Description
    {
        type:"input",
        name:"users name",
        message:"what is your name?"
    },

    // Table of Contents
    {
        type:"input",
        name:"users name",
        message:"what is your name?"
    },

    // Installation
    {
        type:"input",
        name:"users name",
        message:"what is your name?"
    },
    
    // Usage
    {
        type:"input",
        name:"users name",
        message:"what is your name?"
    },
    
    // License
    {
        type:"input",
        name:"users name",
        message:"what is your name?"
    },
    // Contributing
    {
        type:"input",
        name:"users name",
        message:"what is your name?"
    },
    // Tests
    {
        type:"input",
        name:"users name",
        message:"what is your name?"
    },
    // Questions
        // User GitHub profile picture
        // User GitHub email


    {
        type:"list",
        name:"kanesList",
        message:"This is a list",
        choices:["list 1","list 2","list 3","list 4"]
    },

    {
        type:"checkbox",
        name:"kanesCheckbox",
        message:"This is a checkbox",
        choices:["checkbox 1","checkbox 2","checkbox  3","checkbox  4"]
    }]

    // Title
    // Description
    // Table of Contents
    // Installation
    // Usage
    // License
    // Contributing
    // Tests
    // Questions (User github profile picture, user github email)

).then(answers =>{
    console.log(answers);
    const template = `
    

    # Badge
    [![Generic badge](https://img.shields.io/badge/<SUBJECT>-<STATUS>-<COLOR>.svg)](https://shields.io/)

    # PROJECT TITLE
        ${answers["users name"]}
    # DESCRIPTION
        ${answers ["users name"]}
    # TABLE OF CONTENTS
        ${answers.pizzaTopping}
    # ALL PIZZA TOPPINGS
        ${answers["all pizza toppings"]}
    `
    fs.writeFile("KanosPizza.md", template, err=>{
        if (err) throw err;
        console.log("Success! this README has been added to your repo");
    });
})