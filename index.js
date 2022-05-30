// TODO: Include packages needed for this application
const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'email',
        message: 'Email:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Github username:'
    },
    {
        type: 'input',
        name: 'title',
        message: 'Project title:'
    },
    //project description
    {
        type: 'input',
        name: 'description',
        message: 'Project description:'
    },
    //installation
    {
        type: 'input',
        name: 'installation',
        message: 'What command to install node packages?',
        default: 'npm i'
    },
    //test command
    {
        type: 'input',
        name: 'test',
        mesasge: 'Test command:',
        default: 'npm test'
    },
    //usage
    {
        type: 'input',
        name: 'usage',
        message: 'Usage info:'
    },
    //contribution information
    {
        type: 'input',
        name: 'contributing',
        message: 'Contribution info:'
    },
    //project license
    {
        type: 'list',
        name: 'license',
        message: 'License type:',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generating README...');
        writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
    });
}

// Function call to initialize app
init();
