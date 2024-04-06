//Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// inquier setup
inquirer
  .prompt([
    {
      type: "input",
      message: "Enter project title",
      name: "title",
    },
    {
      type: "input",
      message: "Enter project description",
      name: "description",
    },
    {
      type: "input",
      message: "Enter installation steps",
      name: "installation",
    },
    {
      type: "input",
      message: "Enter usage instructions",
      name: "usage",
    },
    {
      type: "list",
      message: "Choose a license for your project:",
      name: "license",
      choices: ["MIT License", "GNU General Public License v3.0", "Apache License 2.0", "None"],
    },
    {
      type: "input",
      message: "Enter recommended contributions",
      name: "contributing",
    },
    {
      type: "input",
      message: "Enter project tests",
      name: "tests",
    },
    {
      type: "input",
      message: "Enter contact information",
      name: "contact",
    },

    // create markdown file and log results
  ])
  .then((response) => {
    const readmeContent = generateMarkdown(response);
    fs.writeFile("readMe.md", readmeContent, (err) => {
      if (err) {
        console.error("error generating file: ", err);
      } else {
        console.log("Saved File");
      }
    });
  });
