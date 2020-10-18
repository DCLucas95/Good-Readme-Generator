
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
        let file = "## Program Name: " + data.Name + "\n--------\n";

        file = file + "# Description: " + "\n" + data.Description + "\n--------\n";

        file = file + "# How to Run: " + "\n" + data.UsingRepo + "\n--------\n";

        file = file + "# Dependencies: " + "\n" + data.Dependencies + "\n--------\n";

        file = file + "# How to Contribute: " + "\n" + data.ContributeRepo + "\n--------\n";

        file = file + "# Tests: " + "\n" + data.Tests + "\n--------\n";

        file = file + "# Github: " + "\n" + "https://github.com/" + data.GithubName + "\n--------\n";

        file = file + "# Contact Me with Questions: " + "\n" + data.email + "\n--------\n";

        file = file + "# Licence: " + "\n" + data.Licence + "\n--------\n";

        fs.writeFileSync(fileName, file)
    }

    catch (err) {
        console.log(err)
    }
}

// function call to initialize program
init();