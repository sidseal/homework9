

const inquirer = require("inquirer")
const fs = require("fs")
console.log(__dirname)
console.log(__filename)

// console.log(process.env)

require("./utils/generateMarkdown")

const questions = [
    {
        message: "hey",
        name: "Title",
        type: "input"
    }

];

function writeToFile(fileName, data) {
    //use fs to rwite the file, with the data
    let genMd= require("./utils/generateMarkdown")
    console.log(genMd(data))
    //use the generateMd util (require)
}

async function init() {
    //get user input via inquirer
    let answers= await inquirer.prompt(questions)
    //send the answers to the writeToFile
    writeToFile("filename", answers)
}

init();
