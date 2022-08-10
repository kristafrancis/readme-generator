// TODO: Include packages needed for this application
const { writeFile, copyFile } = require('./dist/generate-site.js');
const inquirer = require('inquirer');
//const generatePage = require('')
const fs = require('fs');
//const { title } = require('process');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [];
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?:',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username:',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please provide a link to your GitHub repo so users know where to find more of your work');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please provide an email address so user know how to contact you');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
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
            name: 'installation',
            message: 'What should be installed to run your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter what should be installed to run your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What does the user need to know about using the repo? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter what the user needs to know about using the repo!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What does the user need to know about contributing to the repo? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter what the user needs to know about contributing to the repo!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What command should be run to run tests? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter what command should be run to run tests!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmLicenses',
            message: 'Would you like to include a license?',
            default: false
        },
        {
            type: 'list',
            name: 'licenses',
            message: 'What license would you like to include?',
            choices: ['MIT', 'GPL', 'CC--0'],
            when: ({ confirmLicenses }) => {
                if (confirmLicenses) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        
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