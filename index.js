const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'what is the title of your project?',
        name: 'project name',
    },
    {
        type: 'input',
        message: 'what is your GitHub username?',
        name: 'GitHub UserName',
    },

    {
        type: 'input',
        message: 'what is your email',
        name: 'email',
    },
    {
        type: 'input',
        message: 'provide a discription of your prject',
        name: 'Discription',
    },
    {
        type: 'input',
        message: 'Table of centent',
        name: 'centent',
    },
    {
        type: 'input',
        message: 'Intalation',
        name: 'Intalation',
    },

    {
        type: 'input',
        message: 'Usage',
        name: 'usage',
    },

    

    // {
    //     type: 'checkbox',
    //     message: 'What languages do you know?',
    //     name: 'languages',
    //     choices: ['HTML', 'CSS', 'JavaScript']
    // },
    {
        type: 'list',
        message: 'what license did you use',
        name: 'License',
        choices: [ 'The MIT License', 'the GPL License', 'Apache License', 'GNU License', 'N/A']
    },

    {
        type: 'input',
        message: 'contrubution',
        name: 'contrubution',
    },

    {
        type: 'input',
        message: 'test',
        name: 'test',
    },

    {
        type: 'input',
        message: 'questions',
        name: 'Questions',
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
      // Use user feedback for... whatever!!
    })
    .catch((error) => {
      if (error.isTtyError) {
console.log(error)
    } else {
      }
    });
}

// function call to initialize program
init();

// const readStrem = fs.createReadStream('./index.js', {encoding: 'utf8'});
// const writeStream = fs.createWriteStream('./README.md');
// readStrem.pipe(writeStream);

// .then((response) => {

//     console.log(response);
    
//     fs.writeFile('index.html', html(response), err => {
//         if (err) {
//             console.log(err);
//         }
//     })
// })