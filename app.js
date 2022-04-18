const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generatePage = require('./src/generate-site.js');
const fs = require("fs");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "dist")
const distPath = path.join(OUTPUT_DIR, "profiles.html");
const teamProfiles = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter your name (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter your employee ID (Required)',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter your employee ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address (Required)',
            validate: email => {
                if(email) {
                    return true;
                } else {
                    console.log('Please enter your email address');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter your office number (Required)',
            validate: officeNumber => {
                if(officeNumber) {
                    return true;
                } else {
                    console.log('Please enter your office number');
                    return false;
                }
            }
        },
    ]).then(responses => {
        console.log(responses);
        const manager = new Manager(responses.name, responses.employeeId, responses.email, responses.officeNumber);
        teamProfiles.push(manager);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Select which option to continue with:',
            choices: ['add new engineer', 'add new intern', 'finish adding team members']
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case "add new engineer":
                    promptEngineer();
                    break;
                case "add new intern":
                    promptIntern();
                    break;
                default:
                    addTeam();       
            }
        });
}