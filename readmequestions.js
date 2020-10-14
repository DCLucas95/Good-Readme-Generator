// array of questions for user
const questions = [
    {
        type: "input",
        name: "Name",
        message: "What is the name of this program?"
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
        name: "Description",
        message: "Please write a short description of your project?"
    },

    {
        type: "list",
        name: "Licence",
        message: "What kind of licence should your project have?",
        choices: ["MIT", "APACHE 2.0", "BSD 3"]
    },

    {
        type: "input",
        name: "Dependencies",
        message: "What command should be run to install dependencies?"
    },

    {
        type: "input",
        name: "Tests",
        message: "What command should be run to run tests?"
    },

    {
        type: "input",
        name: "UsingRepo",
        message: "What does the user need to know about using the repo?"
    },

    {
        type: "input",
        name: "ContributeRepo",
        message: "What does the user need to know about contributing to the repo?"
    }
];

module.exports = questions