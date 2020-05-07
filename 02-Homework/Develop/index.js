const inquirer = require("inquirer")
const fs = require("fs")
const util = require("util")
const genMd = require("./utils/generateMarkdown")

const writeFileAsync = util.promisify(fs.writeFile);

function init() {
    return inquirer.prompt([
        {
            message: "What is your Github username?",
            name: "username",
            type: "input",
        },
        {
            message: "What is your project's name?",
            name: "title",
            type: "input",
        },
        {
            message: "Please write a short description of your project",
            name: "description",
            type: "input",
        },
        {
            message: "What kind of license should your project have?",
            name: "license",
            type: "list",
            choices: [
                "MIT",
                "Apache License 2.0",
                "Common Development and Distribution License",
                "None",
            ]
        },
        {
            message: "What command should be run to install dependencies?",
            name: "installation",
            type: "input",
        },
        {
            message: "What command should be run to run tests?",
            name: "testing",
            type: "input",
        },
        {
            message: "What should the user know about using the repo?",
            name: "usage",
            type: "input",
        },
        {
            message: "What should the user know about contributing to the repo?",
            name: "contribution",
            type: "input",
        },
    ])
}        

init()
.then(function(answers){
    const markD = genMd(answers);
    return(writeFileAsync("README.md", markD))
}).then(function() {
    console.log("Successfully wrote to README.md");
  })
  .catch(function(err) {
    console.log(err);
  });
