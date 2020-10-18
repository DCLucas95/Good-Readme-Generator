// array of questions for user
const questions = [

    {
        type: "input",
        name: "Name",
        message: "What is the name of this program?"
    },

    {
        type: "input",
        name: "Description",
        message: "Please write a short description of your project?"
    },

    {
        type: "input",
        name: "GithubName",
        message: "What is your Github Username?"
    },

    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },

    {
        type: "input",
        name: "UsingRepo",
        message: "What does the user need to know about using the repo?"
    },

    {
        type: "input",
        name: "Dependencies",
        message: "What command should be run to install dependencies?"
    },

    {
        type: "input",
        name: "ContributeRepo",
        message: "What does the user need to know about contributing to the repo?"
    },

    {
        type: "input",
        name: "Tests",
        message: "What command should be run to run tests?"
    },

    {
        type: "input",
        name: "Licence",
        message: "What Licence would you like to use? eg. MIT, APACHE, OSL"
    },
];

module.exports = questions