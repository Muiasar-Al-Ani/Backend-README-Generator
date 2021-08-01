// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What's your Projects name?",
  },
  {
    type: "input",
    name: "description",
    massage:
      "Please provide a short description explaining the what, why, and how of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Please enter the installation instructions for your Project:",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide instructions and examples for use:",
  },
  {
    type: "input",
    name: "credits",
    message: "Does this Project has Contributors?",
  },
  {
    type: "input",
    name: "contribution",
    message: "Please enter your Project contribution guidelines:",
  },
  {
    type: "checkbox",
    message: "Licensing Options",
    name: "license",
    choices: [
      "MIT Licence",
      "Apache Licence",
      "GLP Licence",
      "Affero GPL",
      "Artistic License 2.0",
      "BSD 3-Clause License",
      "BSD 2-Clause license",
      "Eclipse Public License v1.0",
      "GPL v3",
      "LGPL v2.1",
      "LGPL v3",
      "Mozilla Public License v2.0",
      "Public Domain (Unlicense)",
    ],
  },
  {
    type: "input",
    name: "tests",
    message: "Please enter test instructions:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, generateMarkdown({ ...data }), err => {
  err ? console.error(err) : console.log("Your Markdown file has been generated successfully!")
  });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
