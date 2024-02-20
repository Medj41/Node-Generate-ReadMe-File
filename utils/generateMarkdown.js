// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.title}
## Discription
${data.Discription}
## Email
${data.email}
## GitHub
${data.GitHub}
## Table of Contents
${data.centent}
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
 