// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//const { title } = require('process');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
//const questions = [];
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is a description of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your projects description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'table of contents',
            message: 'Enter your projects table of contents? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter what your projects table of contents!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What is your project installed with? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter what your project is installed with!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How is your project used? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter how your project is used!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'license',
            message: 'What is your project license? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project license!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Who contributed to this project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter who contributed to this project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What tests have been done? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your tests!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'questions',
            message: 'GitHib user name and email address? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your questions!');
                    return false;
                }
            }
        }
    ])
}






// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}
const writeToFile = data => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', data, err => {
            if (err) {
                reject (err);
                return;
            }
            resolve({
                ok: true,
                message: console.log('Go to the "dist" folder to see your README!')
            });
        })
    })
}


// TODO: Create a function to initialize app
//function init() {}
const init = () => {
    return inquirer.prompt(questions);
}

// Function call to initialize app
//init();
init()
.then(userInput => {
    return generateMarkdown(userInput);
})
.then(readmeInfo => {
    return writeToFile(readmeInfo);
})
.catch(err => {
    console.log(err);
})