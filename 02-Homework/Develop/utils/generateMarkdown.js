function generateMarkdown(data) {
  const LicLink = `[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})`

  return `
### ${LicLink}

# ${data.title}
This README.md generator is a command line application that will take some inputs from the user and create a README.md file for the repo
of the user's choice. This app can be initialized on your command line by using the command:

\`\`\`${data.initialize}\`\`\`














`;
}

module.exports = generateMarkdown;
