// Resource I used https://www.npmjs.com/package/inquirer#prompt
// prompt's variables for index.js and file system
const inquirer = require("inquirer");
var fs = require("fs");
var axios = require("axios");

// Set of questions
const questions = [{
  type: "input",
  name: "github",
  message: "What's your username on github",
  default: "tmbx9482"
},
{
  type: "list",
  name: "license",
  message: `What kind of license should your project have`,
  choices: ["MTI", "Apache", "none"]
},
{
  type: "input",
  name: "email",
  message: `What's your current email address?`,
  default: "Personal or Busniess will work, just ask!"
},
{
  type: "input",
  name: "title",
  message: `What is your project's name?`,
  default: "Unit 09 Node.js and ES6+ Homework: Good README Generator"
},
{
  type: "input",
  name: "descriptions",
  message: `Can you tell me about your project?`,
  default: "When creating an open source project on GitHub, it is important to have a quality README with information about the app--what is the app for, how to use the app, how to install it, how to report issues, and how to make contributions so that other developers are more likely to use and contribute to the success of the project. A command-line application will allow for quick and easy generation of a project README to get started quickly. This will allow a project creator to spend more time working on finishing the project and less time creating a good README."
},
// {
//   type: "input",
//   message: `What is the table of contents?`,
//   name: "tableOfContents",
//   default: [
//     " 1. Title",
//     "2. Descriptions",
//     "3. Install Instructions",
//     " 4. Usage",
//     "5. Contributing",
//     "6. Tests",
//     "7. Questions"
//   ],
// },
{
  type: "input",
  message: `Give instructions on how to install.`,
  name: "install",
  default: "You need too install requires but using NPM install which defines the dependencies for a single project"
},

{
  type: "input",
  message: `What makes a program run and allows memory to be ______?`,
  name: "usage",
  default: "The overall speed or clock speed of the computer and how fast it is capable of processing data is managed by the computer processor (CPU). A good processor is capable of executing more instructions every second, hence, increased speed."
},
{
  type: "input",
  name: "contributing",
  message: `Who's a contributor for this project?`,
  default: "Troy Berentsen"
},
{
  type: "input",
  name: "test",
  message: "what are we running",
  default: "To see if the user can type to create README file"
},
];


const tableOfContents = `
## Table of Contents

* [Title](#title)

* [Table of Contents](#TableofContents)

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)
`

inquirer.prompt(questions).then(data => {
  fs.writeFileSync("README.md", (`# ${data.title} 
  [![License: ODbL](https://img.shields.io/badge/License-ODbL-blueviolet.svg)](https://opendatacommons.org/licenses/odbl/) \n \n \n`))
  fs.appendFileSync("README.md", (`## Project Description \n \n ${data.descriptions} \n \n \n`))
  fs.appendFileSync("README.md", tableOfContents)
  fs.appendFileSync("README.md", (`## Installation \n \n ${data.install} \n \n \n`))
  fs.appendFileSync("README.md", (`## Contributing \n \n ${data.contributing} \n \n \n`))
  fs.appendFileSync("README.md", (`## Usage \n \n ${data.usage} \n \n \n`))
  fs.appendFileSync("README.md", (`## Tests \n \n ${data.test} \n \n \n`))
  fs.appendFileSync("README.md", (`## My GitHub Profile \n \n ${data.github} \n \n \n`))
  fs.appendFileSync("README.md", (`## My Email Address \n \n ${data.email} \n \n \n`))
  fs.appendFileSync("README.md", (`## Questions \n \n If you have quesitons contact me at ${data.email} \n \n \n`))
  fs.appendFileSync("README.md", (`## License \n \n ${data.license} \n`))
});