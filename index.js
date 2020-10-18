
const fs = require("fs");
const questions = require("./readmequestions");
const { prompt } = require('enquirer');

// function to initialize program
const init = async () => {
    const response = await prompt(questions)
    console.log(response)

    //write answers to a file
    writeToFile("./GeneratedReadme.md", response)
};

// function to write README file
const writeToFile = (fileName, data) => {

    try {
        let file = "# Program Name: " + data.Name + "\n";

        file = file + "## Table of Contents:" + "<ul>" + "\n" + "<li>Description</li>" + "\n" + "<li>How to Run</li>" + "\n" + "<li>Dependencies</li>" + "\n" + "<li>How to Contribute</li>" + "\n" + "<li>Tests</li>" + "\n" + "<li>Github</li>" + "\n" + "<li>Contact Me</li>" + "\n" + "<li>Licence</li>" + "</ul>" + "\n" + "\n";

        file = file + "## Description: " + "\n" + "<p>" + data.Description + "</p>" + "\n" + "\n";

        file = file + "## How to Run: " + "\n" + "<p>" + data.UsingRepo + "</p>" + "\n" + "\n";

        file = file + "## Dependencies: " + "\n" + "<p>" + data.Dependencies + "</p>" + "\n" + "\n";

        file = file + "## How to Contribute: " + "\n" + "<p>" + data.ContributeRepo + "</p>" + "\n" + "\n";

        file = file + "## Tests: " + "\n" + "<p>" + data.Tests + "</p>" + "\n" + "\n";

        file = file + "## Github: " + "\n" + "<p> https://github.com/" + data.GithubName + "</p>" + "\n" + "\n";

        file = file + "## Contact Me with Questions: " + "\n" + "<p>" + data.email + "</p>" + "\n" + "\n";

        file = file + "## Licence: " + "\n" + "<p>" + data.Licence + "</p>" + "\n";

        fs.writeFileSync(fileName, file)
    }

    catch (err) {
        console.log(err)
    }
}

// function call to initialize program
init();