function generateMarkdown(data) {
  const LicLink = `[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})`

  return `
 ${LicLink}
 
# ${data.title}
This README.md generator is a command line application that will take some inputs from the user and create a README.md file for the repo
of the user's choice. This app can be initialized on your command line by using the following command:

\`\`\`node index.js\`\`\`

# Description:
\`\`\`${data.description}\`\`\`


# Table of Contents:
*[Licence](#License)

*[Installation](#Installation)

*[Tests](#tests)

*[Usage](#usage)

*[Contribution](#contribution)

*[Questions](#questions)

# License:
This program is licensed under the ${data.license} license.

# Installation:
To install dependencies, run the following command;

\`\`\`${data.installation}\`\`\`

# Tests:
To run tests, run the following command;

\`\`\`${data.testing}\`\`\`

# Usage:

\`\`\`${data.usage}\`\`\`

# Contribution:

\`\`\`${data.contribution}\`\`\`

# Questions:

For any questions, contact ${data.username} on GitHub.

`;
}

module.exports = generateMarkdown;
