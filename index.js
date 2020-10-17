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
    let file = "## Program Name: " + data.Name + "\n========\n";

    file = file + "# Description: " + "\n" + data.Description + "\n--------\n";

    file = file + "# Github: " + "\n" + "https://github.com/" + data.GithubName + "\n--------\n";

    file = file + "# Contact Me: " + "\n" + data.email + "\n--------\n";

    file = file + "# Licence: " + "\n" + data.Licence + "\n--------\n";

    file = file + "# Dependencies: " + "\n" + data.Depencies + "\n--------\n";

    fs.writeFileSync(fileName, file)
}

// function call to initialize program
init();
