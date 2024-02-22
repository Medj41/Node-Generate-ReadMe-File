// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
![badge](https://img.shields.io/badge/license-${data.License}-brightgreen)
## Discription
[Discription](#Discription)
${data.Discription}
## Email
[Email](#Email)
${data.email}
## GitHub
${data.GitHub}
## Table of Contents
${data.centent}
[Discription](#Discription)
[Email](#Email)
[GitHub](#GitHub)
[Installation](#Installation)
[Usage](#Usage)
[License](#License)
[Contributing](#Contributing)
[Tests](#Tests)
[Questions](#Questions)
## Installation 
${data.Intalation}
## Usage 
${data.usage}
## License 
${data.License}
## Contributing 
${data.contrubution}
## Tests 
${data.test}
## Questions
${data.Questions}
`;
}

module.exports = generateMarkdown;
 