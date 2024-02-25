// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
![badge](https://img.shields.io/badge/license-${data.License}-brightgreen)
## Discription
[Description](#Description)
${data.Description}
## Email
[Email](#Email)
${data.Email}
## GitHub
${data.GitHub}
## Table of Contents
${data.Content}
- [Description](#Description)
- [Email](#Email)
- [GitHub](#GitHub)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)
## Installation 
${data.Installation}
## Usage 
${data.Usage}
## License 
${data.License}
## Contribution 
${data.Contribution}
## Tests 
${data.Test}
## Questions
${data.Questions}
`;
}

module.exports = generateMarkdown;
 