const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "what is the title of your project?",
    name: "Title",
  },
  {
    type: "input",
    message: "What is your GitHub UserName?",
    name: "GitHub",
  },

  {
    type: "input",
    message: "What is your email",
    name: "Email",
  },
  {
    type: "input",
    message: "provide a description of your project",
    name: "Description",
  },
  {
    type: "input",
    message: "Table of content ",
    name: "Content ",
  },
  {
    type: "input",
    message: "Installation",
    name: "Installation",
  },

  {
    type: "input",
    message: "Usage",
    name: "Usage",
  },

  {
    type: "list",
    message: "What license did you use",
    name: "License",
    choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
    ],
  },

  {
    type: "input",
    message: "Contribution",
    name: "Contribution",
  },

  {
    type: "input",
    message: "Test",
    name: "Test",
  },

  {
    type: "input",
    message: "Questions",
    name: "Questions",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers);
      // Use user feedback for... whatever!!
      writeToFile("Gnerated-README.md", generateMarkdown(answers));
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log(error);
      }
    });
}

// function call to initialize program
init();
