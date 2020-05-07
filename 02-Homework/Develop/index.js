const inquirer = require("inquirer")
const fs = require("fs")
const util = require("util")
require("./utils/generateMarkdown")

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
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
];

function writeToFile(fileName, data) {
    //use fs to rwite the file, with the data
    
    let genMd = require("./utils/generateMarkdown")
    // console.log(genMd(data))
    //use the generateMd util (require)
}

async function init() {
    //get user input via inquirer
    let answers = await inquirer.prompt(questions)
    //send the answers to the writeToFile
    writeToFile("README.md", answers,function(err){
        if (err) {
            return console.log(err);
          }
        
          console.log("commitLogged");
    })
}

init();
