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
    let file = "##Program Name: " + data.Name + "\n";

    file = file + "Github: " + data.GithubName + "\n";

    file = file + "Contact Me: " + data.email + "\n";

    file = file + "##Description: " + "\n" + data.Description + "\n";

    file = file + "##Licence: " + "\n" + data.Licence + "\n";

    file = file + "Dependencies: " + "\n" + data.Depencies + "\n";

    fs.writeFileSync(fileName, file)
}

// function call to initialize program
init();
