// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: (value)=>{if (value){return true} else {return 'Error: Must not be left blank.'}}
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: (value)=>{if (value){return true} else {return 'Error: Must not be left blank.'}}
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: (value)=>{if (value){return true} else {return 'Error: Must not be left blank.'}}
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.',
        validate: (value)=>{if (value){return true} else {return 'Error: Must not be left blank.'}}
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username.',
        validate: (value)=>{if (value){return true} else {return 'Error: Must not be left blank.'}}
    },
    
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GPL', 'Apache', 'GNU General Public', 'Mozilla-Public', 'None']
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who all has contributed to this project?',
        validate: (value)=>{if (value){return true} else {return 'Error: Must not be left blank.'}}
    },
    
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log('Uh Oh');
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            writeToFile(response.title, response);
        })
        .catch((error) => {
            console.log(error);
        })
}

// Function call to initialize app
init();
